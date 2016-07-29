Ext.onReady(function() {
	var Scantclassify = "标品库";
	var Scanttitle = "当前位置:业务管理》" + Scantclassify;
	var Scantaction = "ScantAction.do";
	var Scantfields = ['scantid'
	        			    ,'scantcode' 
	        			    ,'scantname' 
	        			    ,'scantdetail' 
	        			    ,'scantunits' 
	        			    ,'scantclass' 
	        			    ,'scantimage' 
	        			    ,'scantbrand' 
	        			    ,'scanttype' 
	        			    ,'scantstatue' 
	        			      ];// 全部字段
	var Scantkeycolumn = [ 'scantid' ];// 主键
	var Scantstore = dataStore(Scantfields, basePath + Scantaction + "?method=selQuery");// 定义Scantstore
	var ScantdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'ScantdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '标品ID',
				id : 'Scantscantid',
				name : 'scantid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Scantscantcode',
				name : 'scantcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Scantscantname',
				name : 'scantname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Scantscantdetail',
				name : 'scantdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '规格',
				id : 'Scantscantunits',
				name : 'scantunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '小类ID',
				id : 'Scantscantclass',
				name : 'scantclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '图片',
				id : 'Scantscantimage',
				name : 'scantimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '品牌',
				id : 'Scantscantbrand',
				name : 'scantbrand',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '种类',
				id : 'Scantscanttype',
				name : 'scanttype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Scantscantstatue',
				name : 'scantstatue',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Scantbbar = pagesizebar(Scantstore);//定义分页
	var Scantgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		forceFit: true,
		title : Scanttitle,
		store : Scantstore,
		bbar : Scantbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
	    plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	    },
		columns : [{xtype: 'rownumberer',width:36}, 
		{// 改
			header : '标品ID',
			dataIndex : 'scantid',
			sortable : true, 
			minWidth:100,
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '编码',
			dataIndex : 'scantcode',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'scantname',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '描述',
			dataIndex : 'scantdetail',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '规格',
			dataIndex : 'scantunits',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '小类ID',
			dataIndex : 'scantclass',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '图片',
			dataIndex : 'scantimage',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '品牌',
			dataIndex : 'scantbrand',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '种类',
			dataIndex : 'scanttype',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'scantstatue',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					ScantdataForm.form.reset();
					Ext.getCmp("Scantscantid").setEditable (true);
					createTextWindow(basePath + Scantaction + "?method=insAll", "新增", ScantdataForm, Scantstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Scantgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Scantaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Scantgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					ScantdataForm.form.reset();
					Ext.getCmp("Scantscantid").setEditable (false);
					createTextWindow(basePath + Scantaction + "?method=updAll", "修改", ScantdataForm, Scantstore);
					ScantdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Scantgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Scantaction + "?method=delAll",selections,Scantstore,Scantkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Scantaction + "?method=impAll","导入",Scantstore);
	        				}
	                    },{
	                    	text : "后台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Scantaction + "?method=expAll"; 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "前台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					commonExp(Scantgrid);
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Scantgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Scantkeycolumn.length;i++){
	        						fid += selections[0].data[Scantkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Scantclassify);
	        				}
	                    }]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryScantaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryScantaction").getValue()) {
								Scantstore.load();
							} else {
								Scantstore.load({
									params : {
										query : Ext.getCmp("queryScantaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Scantgrid.region = 'center';
	Scantstore.on("beforeload",function(){ 
		Scantstore.baseParams = {
				query : Ext.getCmp("queryScantaction").getValue()
		}; 
	});
	Scantstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Scantgrid ]
	});
})
