Ext.onReady(function() {
	var Orderdclassify = "订单详细";
	var Orderdtitle = "当前位置:业务管理》" + Orderdclassify;
	var Orderdaction = "OrderdAction.do";
	var Orderdfields = ['orderdid'
	        			    ,'orderdorderm' 
	        			    ,'orderdcode' 
	        			    ,'orderdtype' 
	        			    ,'orderdname' 
	        			    ,'orderddetail' 
	        			    ,'orderdunits' 
	        			    ,'orderdprice' 
	        			    ,'orderdunit' 
	        			    ,'orderdclass' 
	        			    ,'orderdnum' 
	        			    ,'orderdmoney' 
	        			    ,'orderdrightmoney' 
	        			      ];// 全部字段
	var Orderdkeycolumn = [ 'orderdid' ];// 主键
	var Orderdstore = dataStore(Orderdfields, basePath + Orderdaction + "?method=selQuery");// 定义Orderdstore
	var OrderddataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'OrderddataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '订单详细ID',
				id : 'Orderdorderdid',
				name : 'orderdid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '订单ID',
				id : 'Orderdorderdorderm',
				name : 'orderdorderm',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品编码',
				id : 'Orderdorderdcode',
				name : 'orderdcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品类型',
				id : 'Orderdorderdtype',
				name : 'orderdtype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Orderdorderdname',
				name : 'orderdname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Orderdorderddetail',
				name : 'orderddetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '规格',
				id : 'Orderdorderdunits',
				name : 'orderdunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '价格',
				id : 'Orderdorderdprice',
				name : 'orderdprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单位',
				id : 'Orderdorderdunit',
				name : 'orderdunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '小类',
				id : 'Orderdorderdclass',
				name : 'orderdclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '数量',
				id : 'Orderdorderdnum',
				name : 'orderdnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '下单金额',
				id : 'Orderdorderdmoney',
				name : 'orderdmoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '实际金额',
				id : 'Orderdorderdrightmoney',
				name : 'orderdrightmoney',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Orderdbbar = pagesizebar(Orderdstore);//定义分页
	var Orderdgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Orderdtitle,
		store : Orderdstore,
		bbar : Orderdbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
	     plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	     },
		columns : [{// 改
			header : '订单详细ID',
			dataIndex : 'orderdid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '订单ID',
			dataIndex : 'orderdorderm',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '商品编码',
			dataIndex : 'orderdcode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '商品类型',
			dataIndex : 'orderdtype',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'orderdname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '描述',
			dataIndex : 'orderddetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '规格',
			dataIndex : 'orderdunits',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '价格',
			dataIndex : 'orderdprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '单位',
			dataIndex : 'orderdunit',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '小类',
			dataIndex : 'orderdclass',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '数量',
			dataIndex : 'orderdnum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '下单金额',
			dataIndex : 'orderdmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '实际金额',
			dataIndex : 'orderdrightmoney',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					OrderddataForm.form.reset();
					Ext.getCmp("Orderdorderdid").setEditable (true);
					createTextWindow(basePath + Orderdaction + "?method=insAll", "新增", OrderddataForm, Orderdstore);
				}
			},'-',{
				text : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Orderdgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Orderdaction + "?method=updAll",selections);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Orderdgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					OrderddataForm.form.reset();
					Ext.getCmp("Orderdorderdid").setEditable (false);
					createTextWindow(basePath + Orderdaction + "?method=updAll", "修改", OrderddataForm, Orderdstore);
					OrderddataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Orderdgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Orderdaction + "?method=delAll",selections,Orderdstore,Orderdkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Orderdaction + "?method=impAll","导入",Orderdstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Orderdaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Orderdgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Orderdgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Orderdkeycolumn.length;i++){
						fid += selections[0].data[Orderdkeycolumn[i]] + ","
					}
					commonAttach(fid, Orderdclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryOrderdaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryOrderdaction").getValue()) {
								Orderdstore.load();
							} else {
								Orderdstore.load({
									params : {
										query : Ext.getCmp("queryOrderdaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Orderdgrid.region = 'center';
	Orderdstore.on("beforeload",function(){ 
		Orderdstore.baseParams = {
				query : Ext.getCmp("queryOrderdaction").getValue()
		}; 
	});
	Orderdstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Orderdgrid ]
	});
})
