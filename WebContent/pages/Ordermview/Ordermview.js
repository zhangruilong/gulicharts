Ext.onReady(function() {
	var Ordermviewclassify = "订单";
	var Ordermviewtitle = "当前位置:业务管理》" + Ordermviewclassify;
	var Ordermviewaction = "OrdermviewAction.do";
	var Ordermviewfields = ['ordermid'
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
	        			    ,'companyshop' 
	        			    ,'companyphone' 
	        			    ,'companydetail' 
	        			    ,'openid' 
	        			      ];// 全部字段
	var Ordermviewkeycolumn = [ 'ordermid' ];// 主键
	var Ordermviewstore = dataStore(Ordermviewfields, basePath + Ordermviewaction + "?method=selQuery");// 定义Ordermviewstore
	var OrdermviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'OrdermviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'textfield',
			id : 'Ordermviewordermid',
			name : 'ordermid',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermcustomer',
				id : 'Ordermviewordermcustomer',
				name : 'ordermcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermcompany',
				id : 'Ordermviewordermcompany',
				name : 'ordermcompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermcode',
				id : 'Ordermviewordermcode',
				name : 'ordermcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermnum',
				id : 'Ordermviewordermnum',
				name : 'ordermnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermmoney',
				id : 'Ordermviewordermmoney',
				name : 'ordermmoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermrightmoney',
				id : 'Ordermviewordermrightmoney',
				name : 'ordermrightmoney',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermway',
				id : 'Ordermviewordermway',
				name : 'ordermway',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermstatue',
				id : 'Ordermviewordermstatue',
				name : 'ordermstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermdetail',
				id : 'Ordermviewordermdetail',
				name : 'ordermdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermtime',
				id : 'Ordermviewordermtime',
				name : 'ordermtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermconnect',
				id : 'Ordermviewordermconnect',
				name : 'ordermconnect',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermphone',
				id : 'Ordermviewordermphone',
				name : 'ordermphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermaddress',
				id : 'Ordermviewordermaddress',
				name : 'ordermaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'updtime',
				id : 'Ordermviewupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'updor',
				id : 'Ordermviewupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ordermemp',
				id : 'Ordermviewordermemp',
				name : 'ordermemp',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companyshop',
				id : 'Ordermviewcompanyshop',
				name : 'companyshop',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companyphone',
				id : 'Ordermviewcompanyphone',
				name : 'companyphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companydetail',
				id : 'Ordermviewcompanydetail',
				name : 'companydetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'openid',
				id : 'Ordermviewopenid',
				name : 'openid',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Ordermviewbbar = pagesizebar(Ordermviewstore);//定义分页
	var Ordermviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Ordermviewtitle,
		store : Ordermviewstore,
		bbar : Ordermviewbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'ordermid',
			dataIndex : 'ordermid',
			hidden : true
		}
		, {
			header : 'ordermcustomer',
			dataIndex : 'ordermcustomer',
			sortable : true
		}
		, {
			header : 'ordermcompany',
			dataIndex : 'ordermcompany',
			sortable : true
		}
		, {
			header : 'ordermcode',
			dataIndex : 'ordermcode',
			sortable : true
		}
		, {
			header : 'ordermnum',
			dataIndex : 'ordermnum',
			sortable : true
		}
		, {
			header : 'ordermmoney',
			dataIndex : 'ordermmoney',
			sortable : true
		}
		, {
			header : 'ordermrightmoney',
			dataIndex : 'ordermrightmoney',
			sortable : true
		}
		, {
			header : 'ordermway',
			dataIndex : 'ordermway',
			sortable : true
		}
		, {
			header : 'ordermstatue',
			dataIndex : 'ordermstatue',
			sortable : true
		}
		, {
			header : 'ordermdetail',
			dataIndex : 'ordermdetail',
			sortable : true
		}
		, {
			header : 'ordermtime',
			dataIndex : 'ordermtime',
			sortable : true
		}
		, {
			header : 'ordermconnect',
			dataIndex : 'ordermconnect',
			sortable : true
		}
		, {
			header : 'ordermphone',
			dataIndex : 'ordermphone',
			sortable : true
		}
		, {
			header : 'ordermaddress',
			dataIndex : 'ordermaddress',
			sortable : true
		}
		, {
			header : 'updtime',
			dataIndex : 'updtime',
			sortable : true
		}
		, {
			header : 'updor',
			dataIndex : 'updor',
			sortable : true
		}
		, {
			header : 'ordermemp',
			dataIndex : 'ordermemp',
			sortable : true
		}
		, {
			header : 'companyshop',
			dataIndex : 'companyshop',
			sortable : true
		}
		, {
			header : 'companyphone',
			dataIndex : 'companyphone',
			sortable : true
		}
		, {
			header : 'companydetail',
			dataIndex : 'companydetail',
			sortable : true
		}
		, {
			header : 'openid',
			dataIndex : 'openid',
			sortable : true
		}
		],
		tbar : [{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Ordermviewaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Ordermviewgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Ordermviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Ordermviewkeycolumn.length;i++){
						fid += selections[0].data[Ordermviewkeycolumn[i]] + ","
					}
					commonAttach(fid, Ordermviewclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryOrdermviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryOrdermviewaction").getValue()) {
								Ordermviewstore.load();
							} else {
								Ordermviewstore.load({
									params : {
										query : Ext.getCmp("queryOrdermviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Ordermviewgrid.region = 'center';
	Ordermviewstore.on("beforeload",function(){ 
		Ordermviewstore.baseParams = {
				query : Ext.getCmp("queryOrdermviewaction").getValue()
		}; 
	});
	Ordermviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ordermviewgrid ]
	});
})
