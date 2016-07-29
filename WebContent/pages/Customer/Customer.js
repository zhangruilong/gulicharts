Ext.onReady(function() {
	var Customerclassify = "客户";
	var Customertitle = "当前位置:业务管理》" + Customerclassify;
	var Customeraction = "CustomerAction.do";
	var Customerfields = ['customerid'
	        			    ,'customercode' 
	        			    ,'customername' 
	        			    ,'customerphone' 
	        			    ,'customerpsw' 
	        			    ,'customershop' 
	        			    ,'customercity' 
	        			    ,'customerxian' 
	        			    ,'customeraddress' 
	        			    ,'customertype' 
	        			    ,'customerlevel' 
	        			    ,'openid' 
	        			    ,'customerdetail' 
	        			    ,'customerstatue' 
	        			    ,'createtime' 
	        			    ,'updtime' 
	        			      ];// 全部字段
	var Customerkeycolumn = [ 'customerid' ];// 主键
	var Customerstore = dataStore(Customerfields, basePath + Customeraction + "?method=selQuery");// 定义Customerstore
	var CustomerdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CustomerdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户ID',
				id : 'Customercustomerid',
				name : 'customerid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Customercustomercode',
				name : 'customercode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名(联系人名)',
				id : 'Customercustomername',
				name : 'customername',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Customercustomerphone',
				name : 'customerphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '密码',
				id : 'Customercustomerpsw',
				name : 'customerpsw',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '店铺(客户名)',
				id : 'Customercustomershop',
				name : 'customershop',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '城市',
				id : 'Customercustomercity',
				name : 'customercity',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '县',
				id : 'Customercustomerxian',
				name : 'customerxian',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '街道地址',
				id : 'Customercustomeraddress',
				name : 'customeraddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '类型',
				id : 'Customercustomertype',
				name : 'customertype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '等级',
				id : 'Customercustomerlevel',
				name : 'customerlevel',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'openid',
				id : 'Customeropenid',
				name : 'openid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Customercustomerdetail',
				name : 'customerdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Customercustomerstatue',
				name : 'customerstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Customercreatetime',
				name : 'createtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '修改时间',
				id : 'Customerupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Customerbbar = pagesizebar(Customerstore);//定义分页
	var Customergrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		forceFit: true,
		title : Customertitle,
		store : Customerstore,
		bbar : Customerbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
	    plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	    },
		columns : [{xtype: 'rownumberer',width:36}, 
		{// 改
			header : '客户ID',
			dataIndex : 'customerid',
			sortable : true, 
			minWidth:100,
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '编码',
			dataIndex : 'customercode',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '姓名(联系人名)',
			dataIndex : 'customername',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '手机',
			dataIndex : 'customerphone',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '密码',
			dataIndex : 'customerpsw',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '店铺(客户名)',
			dataIndex : 'customershop',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '城市',
			dataIndex : 'customercity',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '县',
			dataIndex : 'customerxian',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '街道地址',
			dataIndex : 'customeraddress',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '类型',
			dataIndex : 'customertype',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '等级',
			dataIndex : 'customerlevel',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : 'openid',
			dataIndex : 'openid',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '描述',
			dataIndex : 'customerdetail',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'customerstatue',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '修改时间',
			dataIndex : 'updtime',
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
					CustomerdataForm.form.reset();
					Ext.getCmp("Customercustomerid").setEditable (true);
					createTextWindow(basePath + Customeraction + "?method=insAll", "新增", CustomerdataForm, Customerstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Customergrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Customeraction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Customergrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CustomerdataForm.form.reset();
					Ext.getCmp("Customercustomerid").setEditable (false);
					createTextWindow(basePath + Customeraction + "?method=updAll", "修改", CustomerdataForm, Customerstore);
					CustomerdataForm.form.loadRecord(selections[0]);
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
	        					var selections = Customergrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Customeraction + "?method=delAll",selections,Customerstore,Customerkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Customeraction + "?method=impAll","导入",Customerstore);
	        				}
	                    },{
	                    	text : "后台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Customeraction + "?method=expAll"; 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "前台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					commonExp(Customergrid);
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Customergrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Customerkeycolumn.length;i++){
	        						fid += selections[0].data[Customerkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Customerclassify);
	        				}
	                    }]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCustomeraction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCustomeraction").getValue()) {
								Customerstore.load();
							} else {
								Customerstore.load({
									params : {
										query : Ext.getCmp("queryCustomeraction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Customergrid.region = 'center';
	Customerstore.on("beforeload",function(){ 
		Customerstore.baseParams = {
				query : Ext.getCmp("queryCustomeraction").getValue()
		}; 
	});
	Customerstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Customergrid ]
	});
})
