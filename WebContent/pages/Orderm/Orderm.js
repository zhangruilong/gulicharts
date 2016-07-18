Ext.onReady(function() {
	var Ordermclassify = "订单";
	var Ordermtitle = "当前位置:业务管理》" + Ordermclassify;
	var Ordermaction = "OrdermAction.do";
	var Ordermfields = ['ordermid'
	        			    ,'ordermcustomer' 
	        			    ,'ordermcompany' 
	        			    ,'ordermcode' 
	        			    ,'ordermnum' 
	        			    ,'ordermmoney' 
	        			    ,'ordermrightmoney' 
	        			    ,'ordermway' 
	        			    ,'ordermstatue' 
	        			    ,'ordermdetail' 
	        			    ,'ordermtime' 
	        			    ,'ordermconnect' 
	        			    ,'ordermphone' 
	        			    ,'ordermaddress' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'ordermemp' 
	        			      ];// 全部字段
	var Ordermkeycolumn = [ 'ordermid' ];// 主键
	var Ordermstore = dataStore(Ordermfields, basePath + Ordermaction + "?method=selQuery");// 定义Ordermstore
	var OrdermdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'OrdermdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'textfield',
			id : 'Ordermordermid',
			name : 'ordermid',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户ID',
				id : 'Ordermordermcustomer',
				name : 'ordermcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '经销商ID',
				id : 'Ordermordermcompany',
				name : 'ordermcompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Ordermordermcode',
				name : 'ordermcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '种类数',
				id : 'Ordermordermnum',
				name : 'ordermnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '下单金额',
				id : 'Ordermordermmoney',
				name : 'ordermmoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '实际金额',
				id : 'Ordermordermrightmoney',
				name : 'ordermrightmoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '支付方式',
				id : 'Ordermordermway',
				name : 'ordermway',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Ordermordermstatue',
				name : 'ordermstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Ordermordermdetail',
				name : 'ordermdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '下单时间',
				id : 'Ordermordermtime',
				name : 'ordermtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '联系人',
				id : 'Ordermordermconnect',
				name : 'ordermconnect',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Ordermordermphone',
				name : 'ordermphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Ordermordermaddress',
				name : 'ordermaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '修改时间',
				id : 'Ordermupdtime',
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
				id : 'Ordermupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '业务员ID',
				id : 'Ordermordermemp',
				name : 'ordermemp',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Ordermbbar = pagesizebar(Ordermstore);//定义分页
	var Ordermgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Ordermtitle,
		store : Ordermstore,
		bbar : Ordermbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : '订单ID',
			dataIndex : 'ordermid',
			hidden : true
		}
		, {
			header : '客户ID',
			dataIndex : 'ordermcustomer',
			sortable : true
		}
		, {
			header : '经销商ID',
			dataIndex : 'ordermcompany',
			sortable : true
		}
		, {
			header : '编码',
			dataIndex : 'ordermcode',
			sortable : true
		}
		, {
			header : '种类数',
			dataIndex : 'ordermnum',
			sortable : true
		}
		, {
			header : '下单金额',
			dataIndex : 'ordermmoney',
			sortable : true
		}
		, {
			header : '实际金额',
			dataIndex : 'ordermrightmoney',
			sortable : true
		}
		, {
			header : '支付方式',
			dataIndex : 'ordermway',
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'ordermstatue',
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'ordermdetail',
			sortable : true
		}
		, {
			header : '下单时间',
			dataIndex : 'ordermtime',
			sortable : true
		}
		, {
			header : '联系人',
			dataIndex : 'ordermconnect',
			sortable : true
		}
		, {
			header : '手机',
			dataIndex : 'ordermphone',
			sortable : true
		}
		, {
			header : '地址',
			dataIndex : 'ordermaddress',
			sortable : true
		}
		, {
			header : '修改时间',
			dataIndex : 'updtime',
			sortable : true
		}
		, {
			header : '修改人',
			dataIndex : 'updor',
			sortable : true
		}
		, {
			header : '业务员ID',
			dataIndex : 'ordermemp',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					OrdermdataForm.form.reset();
					createTextWindow(basePath + Ordermaction + "?method=insAll", "新增", OrdermdataForm, Ordermstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Ordermgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					createTextWindow(basePath + Ordermaction + "?method=updAll", "修改", OrdermdataForm, Ordermstore);
					OrdermdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Ordermgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Ordermaction + "?method=delAll",selections,Ordermstore,Ordermkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Ordermaction + "?method=impAll","导入",Ordermstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Ordermaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Ordermgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Ordermgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Ordermkeycolumn.length;i++){
						fid += selections[0].data[Ordermkeycolumn[i]] + ","
					}
					commonAttach(fid, Ordermclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryOrdermaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryOrdermaction").getValue()) {
								Ordermstore.load();
							} else {
								Ordermstore.load({
									params : {
										query : Ext.getCmp("queryOrdermaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Ordermgrid.region = 'center';
	Ordermstore.on("beforeload",function(){ 
		Ordermstore.baseParams = {
				query : Ext.getCmp("queryOrdermaction").getValue()
		}; 
	});
	Ordermstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ordermgrid ]
	});
})
