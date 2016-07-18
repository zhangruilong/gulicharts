Ext.onReady(function() {
	var Addressclassify = "我的地址";
	var Addresstitle = "当前位置:业务管理》" + Addressclassify;
	var Addressaction = "AddressAction.do";
	var Addressfields = ['addressid'
	        			    ,'addresscustomer' 
	        			    ,'addressconnect' 
	        			    ,'addressphone' 
	        			    ,'addressaddress' 
	        			    ,'addressture' 
	        			      ];// 全部字段
	var Addresskeycolumn = [ 'addressid' ];// 主键
	var Addressstore = dataStore(Addressfields, basePath + Addressaction + "?method=selQuery");// 定义Addressstore
	var AddressdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'AddressdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '我的地址ID',
				id : 'Addressaddressid',
				name : 'addressid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户ID',
				id : 'Addressaddresscustomer',
				name : 'addresscustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '联系人',
				id : 'Addressaddressconnect',
				name : 'addressconnect',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Addressaddressphone',
				name : 'addressphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Addressaddressaddress',
				name : 'addressaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '是否默认(1默认,0不是默认)',
				id : 'Addressaddressture',
				name : 'addressture',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Addressbbar = pagesizebar(Addressstore);//定义分页
	var Addressgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Addresstitle,
		store : Addressstore,
		bbar : Addressbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : '我的地址ID',
			dataIndex : 'addressid',
			sortable : true
		}
		, {
			header : '客户ID',
			dataIndex : 'addresscustomer',
			sortable : true
		}
		, {
			header : '联系人',
			dataIndex : 'addressconnect',
			sortable : true
		}
		, {
			header : '手机',
			dataIndex : 'addressphone',
			sortable : true
		}
		, {
			header : '地址',
			dataIndex : 'addressaddress',
			sortable : true
		}
		, {
			header : '是否默认(1默认,0不是默认)',
			dataIndex : 'addressture',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					AddressdataForm.form.reset();
					Ext.getCmp("Addressaddressid").setEditable (true);
					createTextWindow(basePath + Addressaction + "?method=insAll", "新增", AddressdataForm, Addressstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Addressgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					Ext.getCmp("Addressaddressid").setEditable (false);
					createTextWindow(basePath + Addressaction + "?method=updAll", "修改", AddressdataForm, Addressstore);
					AddressdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Addressgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Addressaction + "?method=delAll",selections,Addressstore,Addresskeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Addressaction + "?method=impAll","导入",Addressstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Addressaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Addressgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Addressgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Addresskeycolumn.length;i++){
						fid += selections[0].data[Addresskeycolumn[i]] + ","
					}
					commonAttach(fid, Addressclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryAddressaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryAddressaction").getValue()) {
								Addressstore.load();
							} else {
								Addressstore.load({
									params : {
										query : Ext.getCmp("queryAddressaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Addressgrid.region = 'center';
	Addressstore.on("beforeload",function(){ 
		Addressstore.baseParams = {
				query : Ext.getCmp("queryAddressaction").getValue()
		}; 
	});
	Addressstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Addressgrid ]
	});
})
