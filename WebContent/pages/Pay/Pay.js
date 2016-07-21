Ext.onReady(function() {
	var Payclassify = "在线支付记录";
	var Paytitle = "当前位置:业务管理》" + Payclassify;
	var Payaction = "PayAction.do";
	var Payfields = ['payid'
	        			    ,'payorderm' 
	        			    ,'paydetail' 
	        			    ,'paystatue' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Paykeycolumn = [ 'payid' ];// 主键
	var Paystore = dataStore(Payfields, basePath + Payaction + "?method=selQuery");// 定义Paystore
	var PaydataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'PaydataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '在线支付ID',
				id : 'Paypayid',
				name : 'payid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '订单ID',
				id : 'Paypayorderm',
				name : 'payorderm',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Paypaydetail',
				name : 'paydetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Paypaystatue',
				name : 'paystatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '修改时间',
				id : 'Payupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '修改人',
				id : 'Payupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Paybbar = pagesizebar(Paystore);//定义分页
	var Paygrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Paytitle,
		store : Paystore,
		bbar : Paybbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
	     plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	     },
		columns : [{// 改
			header : '在线支付ID',
			dataIndex : 'payid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '订单ID',
			dataIndex : 'payorderm',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '备注',
			dataIndex : 'paydetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'paystatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '修改时间',
			dataIndex : 'updtime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '修改人',
			dataIndex : 'updor',
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
					PaydataForm.form.reset();
					Ext.getCmp("Paypayid").setEditable (true);
					createTextWindow(basePath + Payaction + "?method=insAll", "新增", PaydataForm, Paystore);
				}
			},'-',{
				text : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Paygrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Payaction + "?method=updAll",selections);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Paygrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					PaydataForm.form.reset();
					Ext.getCmp("Paypayid").setEditable (false);
					createTextWindow(basePath + Payaction + "?method=updAll", "修改", PaydataForm, Paystore);
					PaydataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Paygrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Payaction + "?method=delAll",selections,Paystore,Paykeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Payaction + "?method=impAll","导入",Paystore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Payaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Paygrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Paygrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Paykeycolumn.length;i++){
						fid += selections[0].data[Paykeycolumn[i]] + ","
					}
					commonAttach(fid, Payclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryPayaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryPayaction").getValue()) {
								Paystore.load();
							} else {
								Paystore.load({
									params : {
										query : Ext.getCmp("queryPayaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Paygrid.region = 'center';
	Paystore.on("beforeload",function(){ 
		Paystore.baseParams = {
				query : Ext.getCmp("queryPayaction").getValue()
		}; 
	});
	Paystore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Paygrid ]
	});
})
