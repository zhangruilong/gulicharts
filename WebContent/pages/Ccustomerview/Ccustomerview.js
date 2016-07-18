Ext.onReady(function() {
	var Ccustomerviewclassify = "客户";
	var Ccustomerviewtitle = "当前位置:业务管理》" + Ccustomerviewclassify;
	var Ccustomerviewaction = "CcustomerviewAction.do";
	var Ccustomerviewfields = ['ccustomerid'
	        			    ,'ccustomerdetail' 
	        			    ,'createtime' 
	        			    ,'customerid' 
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
	        			    ,'cuscreatetime' 
	        			    ,'updtime' 
	        			      ];// 全部字段
	var Ccustomerviewkeycolumn = [ 'ccustomerid' ];// 主键
	var Ccustomerviewstore = dataStore(Ccustomerviewfields, basePath + Ccustomerviewaction + "?method=selQuery");// 定义Ccustomerviewstore
	var CcustomerviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CcustomerviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'textfield',
			id : 'Ccustomerviewccustomerid',
			name : 'ccustomerid',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'ccustomerdetail',
				id : 'Ccustomerviewccustomerdetail',
				name : 'ccustomerdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'createtime',
				id : 'Ccustomerviewcreatetime',
				name : 'createtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customerid',
				id : 'Ccustomerviewcustomerid',
				name : 'customerid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customercode',
				id : 'Ccustomerviewcustomercode',
				name : 'customercode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customername',
				id : 'Ccustomerviewcustomername',
				name : 'customername',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customerphone',
				id : 'Ccustomerviewcustomerphone',
				name : 'customerphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customerpsw',
				id : 'Ccustomerviewcustomerpsw',
				name : 'customerpsw',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customershop',
				id : 'Ccustomerviewcustomershop',
				name : 'customershop',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customercity',
				id : 'Ccustomerviewcustomercity',
				name : 'customercity',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customerxian',
				id : 'Ccustomerviewcustomerxian',
				name : 'customerxian',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customeraddress',
				id : 'Ccustomerviewcustomeraddress',
				name : 'customeraddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customertype',
				id : 'Ccustomerviewcustomertype',
				name : 'customertype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customerlevel',
				id : 'Ccustomerviewcustomerlevel',
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
				id : 'Ccustomerviewopenid',
				name : 'openid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customerdetail',
				id : 'Ccustomerviewcustomerdetail',
				name : 'customerdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'customerstatue',
				id : 'Ccustomerviewcustomerstatue',
				name : 'customerstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'cuscreatetime',
				id : 'Ccustomerviewcuscreatetime',
				name : 'cuscreatetime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'updtime',
				id : 'Ccustomerviewupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Ccustomerviewbbar = pagesizebar(Ccustomerviewstore);//定义分页
	var Ccustomerviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Ccustomerviewtitle,
		store : Ccustomerviewstore,
		bbar : Ccustomerviewbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'ccustomerid',
			dataIndex : 'ccustomerid',
			hidden : true
		}
		, {
			header : 'ccustomerdetail',
			dataIndex : 'ccustomerdetail',
			sortable : true
		}
		, {
			header : 'createtime',
			dataIndex : 'createtime',
			sortable : true
		}
		, {
			header : 'customerid',
			dataIndex : 'customerid',
			sortable : true
		}
		, {
			header : 'customercode',
			dataIndex : 'customercode',
			sortable : true
		}
		, {
			header : 'customername',
			dataIndex : 'customername',
			sortable : true
		}
		, {
			header : 'customerphone',
			dataIndex : 'customerphone',
			sortable : true
		}
		, {
			header : 'customerpsw',
			dataIndex : 'customerpsw',
			sortable : true
		}
		, {
			header : 'customershop',
			dataIndex : 'customershop',
			sortable : true
		}
		, {
			header : 'customercity',
			dataIndex : 'customercity',
			sortable : true
		}
		, {
			header : 'customerxian',
			dataIndex : 'customerxian',
			sortable : true
		}
		, {
			header : 'customeraddress',
			dataIndex : 'customeraddress',
			sortable : true
		}
		, {
			header : 'customertype',
			dataIndex : 'customertype',
			sortable : true
		}
		, {
			header : 'customerlevel',
			dataIndex : 'customerlevel',
			sortable : true
		}
		, {
			header : 'openid',
			dataIndex : 'openid',
			sortable : true
		}
		, {
			header : 'customerdetail',
			dataIndex : 'customerdetail',
			sortable : true
		}
		, {
			header : 'customerstatue',
			dataIndex : 'customerstatue',
			sortable : true
		}
		, {
			header : 'cuscreatetime',
			dataIndex : 'cuscreatetime',
			sortable : true
		}
		, {
			header : 'updtime',
			dataIndex : 'updtime',
			sortable : true
		}
		],
		tbar : [{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Ccustomerviewaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Ccustomerviewgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Ccustomerviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Ccustomerviewkeycolumn.length;i++){
						fid += selections[0].data[Ccustomerviewkeycolumn[i]] + ","
					}
					commonAttach(fid, Ccustomerviewclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryCcustomerviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCcustomerviewaction").getValue()) {
								Ccustomerviewstore.load();
							} else {
								Ccustomerviewstore.load({
									params : {
										query : Ext.getCmp("queryCcustomerviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Ccustomerviewgrid.region = 'center';
	Ccustomerviewstore.on("beforeload",function(){ 
		Ccustomerviewstore.baseParams = {
				query : Ext.getCmp("queryCcustomerviewaction").getValue()
		}; 
	});
	Ccustomerviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ccustomerviewgrid ]
	});
})
