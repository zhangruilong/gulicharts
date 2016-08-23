Ext.onReady(function() {
	var Feedbackclassify = "客户反馈意见";
	var Feedbacktitle = "当前位置:业务管理》" + Feedbackclassify;
	var Feedbackaction = "FeedbackAction.do";
	var Feedbackfields = ['feedbackid'
	        			    ,'feedbackdetail' 
	        			    ,'feedbackcustomer' 
	        			    ,'feedbacktime' 
	        			    ,'feedbackstate' 
	        			      ];// 全部字段
	var Feedbackkeycolumn = [ 'feedbackid' ];// 主键
	var Feedbackstore = dataStore(Feedbackfields, basePath + Feedbackaction + "?method=selQuery");// 定义Feedbackstore
	var FeedbackdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'FeedbackdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户反馈id',
				id : 'Feedbackfeedbackid',
				name : 'feedbackid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '内容',
				id : 'Feedbackfeedbackdetail',
				name : 'feedbackdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户id',
				id : 'Feedbackfeedbackcustomer',
				name : 'feedbackcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '反馈时间',
				id : 'Feedbackfeedbacktime',
				name : 'feedbacktime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '反馈状态',
				id : 'Feedbackfeedbackstate',
				name : 'feedbackstate',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Feedbackbbar = pagesizebar(Feedbackstore);//定义分页
	var Feedbackgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Feedbacktitle,
		store : Feedbackstore,
		bbar : Feedbackbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
	    plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	    },
		columns : [{xtype: 'rownumberer',width:36}, 
		{// 改
			header : '客户反馈id',
			dataIndex : 'feedbackid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '内容',
			dataIndex : 'feedbackdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '客户id',
			dataIndex : 'feedbackcustomer',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '反馈时间',
			dataIndex : 'feedbacktime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '反馈状态',
			dataIndex : 'feedbackstate',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					FeedbackdataForm.form.reset();
					Ext.getCmp("Feedbackfeedbackid").setEditable (true);
					createTextWindow(basePath + Feedbackaction + "?method=insAll", "新增", FeedbackdataForm, Feedbackstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Feedbackgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Feedbackaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Feedbackgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					FeedbackdataForm.form.reset();
					Ext.getCmp("Feedbackfeedbackid").setEditable (false);
					createTextWindow(basePath + Feedbackaction + "?method=updAll", "修改", FeedbackdataForm, Feedbackstore);
					FeedbackdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
	            text: '操作',
	            menu: {
	                xtype: 'menu',
	                items: {
	                    xtype: 'buttongroup',
	                    columns: 3,
	                    items: [{
	                    	text : "删除",
	        				iconCls : 'delete',
	        				handler : function() {
	        					var selections = Feedbackgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Feedbackaction + "?method=delAll",selections,Feedbackstore,Feedbackkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Feedbackaction + "?method=impAll","导入",Feedbackstore);
	        				}
	                    },{
	                    	text : "后台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Feedbackaction + "?method=expAll"; 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "前台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					commonExp(Feedbackgrid);
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Feedbackgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Feedbackkeycolumn.length;i++){
	        						fid += selections[0].data[Feedbackkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Feedbackclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Feedbackfeedbackid").setEditable (true);
    							createQueryWindow("筛选", FeedbackdataForm, Feedbackstore);
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryFeedbackaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryFeedbackaction").getValue()) {
								Feedbackstore.load();
							} else {
								Feedbackstore.load({
									params : {
										query : Ext.getCmp("queryFeedbackaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Feedbackgrid.region = 'center';
	Feedbackstore.on("beforeload",function(){ 
		Feedbackstore.baseParams = {
				query : Ext.getCmp("queryFeedbackaction").getValue()
		}; 
	});
	Feedbackstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Feedbackgrid ]
	});
})
