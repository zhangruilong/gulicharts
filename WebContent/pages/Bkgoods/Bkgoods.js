Ext.onReady(function() {
	var Bkgoodsclassify = "预定";
	var Bkgoodstitle = "当前位置:业务管理》" + Bkgoodsclassify;
	var Bkgoodsaction = "BkgoodsAction.do";
	var Bkgoodsfields = ['bkgoodsid'
	        			    ,'bkgoodscompany' 
	        			    ,'bkgoodscode' 
	        			    ,'bkgoodsname' 
	        			    ,'bkgoodsdetail' 
	        			    ,'bkgoodsunits' 
	        			    ,'bkgoodsunit' 
	        			    ,'bkgoodsprice' 
	        			    ,'bkgoodsorgprice' 
	        			    ,'bkgoodsnum' 
	        			    ,'bkgoodsclass' 
	        			    ,'bkgoodsimage' 
	        			    ,'bkgoodsstatue' 
	        			    ,'bkcreatetime' 
	        			    ,'bkcreator' 
	        			    ,'bkgoodsseq' 
	        			    ,'bkgoodsscope' 
	        			      ];// 全部字段
	var Bkgoodskeycolumn = [ 'bkgoodsid' ];// 主键
	var Bkgoodsstore = dataStore(Bkgoodsfields, basePath + Bkgoodsaction + "?method=selQuery");// 定义Bkgoodsstore
	var BkgoodsdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'BkgoodsdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '促销品ID',
				id : 'Bkgoodsbkgoodsid',
				name : 'bkgoodsid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '经销商ID',
				id : 'Bkgoodsbkgoodscompany',
				name : 'bkgoodscompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Bkgoodsbkgoodscode',
				name : 'bkgoodscode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Bkgoodsbkgoodsname',
				name : 'bkgoodsname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Bkgoodsbkgoodsdetail',
				name : 'bkgoodsdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '规格',
				id : 'Bkgoodsbkgoodsunits',
				name : 'bkgoodsunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单位',
				id : 'Bkgoodsbkgoodsunit',
				name : 'bkgoodsunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '原价',
				id : 'Bkgoodsbkgoodsprice',
				name : 'bkgoodsprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '现价',
				id : 'Bkgoodsbkgoodsorgprice',
				name : 'bkgoodsorgprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '限量',
				id : 'Bkgoodsbkgoodsnum',
				name : 'bkgoodsnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '小类名称',
				id : 'Bkgoodsbkgoodsclass',
				name : 'bkgoodsclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '图片',
				id : 'Bkgoodsbkgoodsimage',
				name : 'bkgoodsimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Bkgoodsbkgoodsstatue',
				name : 'bkgoodsstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Bkgoodsbkcreatetime',
				name : 'bkcreatetime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Bkgoodsbkcreator',
				name : 'bkcreator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '顺序',
				id : 'Bkgoodsbkgoodsseq',
				name : 'bkgoodsseq',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户范围',
				id : 'Bkgoodsbkgoodsscope',
				name : 'bkgoodsscope',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Bkgoodsbbar = pagesizebar(Bkgoodsstore);//定义分页
	var Bkgoodsgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		forceFit: true,
		title : Bkgoodstitle,
		store : Bkgoodsstore,
		bbar : Bkgoodsbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
	    plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	    },
		columns : [{xtype: 'rownumberer',width:36}, 
		{// 改
			header : '促销品ID',
			dataIndex : 'bkgoodsid',
			sortable : true, 
			minWidth: 80,
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '经销商ID',
			dataIndex : 'bkgoodscompany',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'bkgoodscode',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'bkgoodsname',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '描述',
			dataIndex : 'bkgoodsdetail',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '规格',
			dataIndex : 'bkgoodsunits',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '单位',
			dataIndex : 'bkgoodsunit',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '原价',
			dataIndex : 'bkgoodsprice',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '现价',
			dataIndex : 'bkgoodsorgprice',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '限量',
			dataIndex : 'bkgoodsnum',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '小类名称',
			dataIndex : 'bkgoodsclass',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '图片',
			dataIndex : 'bkgoodsimage',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'bkgoodsstatue',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'bkcreatetime',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'bkcreator',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '顺序',
			dataIndex : 'bkgoodsseq',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '客户范围',
			dataIndex : 'bkgoodsscope',
			sortable : true,  
			minWidth: 80,
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					BkgoodsdataForm.form.reset();
					Ext.getCmp("Bkgoodsbkgoodsid").setEditable (true);
					createTextWindow(basePath + Bkgoodsaction + "?method=insAll", "新增", BkgoodsdataForm, Bkgoodsstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Bkgoodsgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Bkgoodsaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Bkgoodsgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					BkgoodsdataForm.form.reset();
					Ext.getCmp("Bkgoodsbkgoodsid").setEditable (false);
					createTextWindow(basePath + Bkgoodsaction + "?method=updAll", "修改", BkgoodsdataForm, Bkgoodsstore);
					BkgoodsdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Bkgoodsgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Bkgoodsaction + "?method=delAll",selections,Bkgoodsstore,Bkgoodskeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Bkgoodsaction + "?method=impAll","导入",Bkgoodsstore);
	        				}
	                    },{
	                    	text : "后台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Bkgoodsaction + "?method=expAll"; 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "前台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					commonExp(Bkgoodsgrid);
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Bkgoodsgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Bkgoodskeycolumn.length;i++){
	        						fid += selections[0].data[Bkgoodskeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Bkgoodsclassify);
	        				}
	                    }]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryBkgoodsaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryBkgoodsaction").getValue()) {
								Bkgoodsstore.load();
							} else {
								Bkgoodsstore.load({
									params : {
										query : Ext.getCmp("queryBkgoodsaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Bkgoodsgrid.region = 'center';
	Bkgoodsstore.on("beforeload",function(){ 
		Bkgoodsstore.baseParams = {
				query : Ext.getCmp("queryBkgoodsaction").getValue()
		}; 
	});
	Bkgoodsstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Bkgoodsgrid ]
	});
})
