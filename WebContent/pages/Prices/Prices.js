Ext.onReady(function() {
	var Pricesclassify = "价格体系";
	var Pricestitle = "当前位置:业务管理》" + Pricesclassify;
	var Pricesaction = "PricesAction.do";
	var Pricesfields = ['pricesid'
	        			    ,'pricesgoods' 
	        			    ,'pricesclass' 
	        			    ,'priceslevel' 
	        			    ,'pricesprice' 
	        			    ,'pricesunit' 
	        			    ,'pricesprice2' 
	        			    ,'pricesunit2' 
	        			    ,'createtime' 
	        			    ,'updtime' 
	        			    ,'creator' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Priceskeycolumn = [ 'pricesid' ];// 主键
	var Pricesstore = dataStore(Pricesfields, basePath + Pricesaction + "?method=selQuery");// 定义Pricesstore
	var PricesdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'PricesdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '价格体系ID',
				id : 'Pricespricesid',
				name : 'pricesid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品ID',
				id : 'Pricespricesgoods',
				name : 'pricesgoods',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Pricespricesclass',
				name : 'pricesclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '等级',
				id : 'Pricespriceslevel',
				name : 'priceslevel',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单品价',
				id : 'Pricespricesprice',
				name : 'pricesprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单品单位',
				id : 'Pricespricesunit',
				name : 'pricesunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '套装价',
				id : 'Pricespricesprice2',
				name : 'pricesprice2',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '套装单位',
				id : 'Pricespricesunit2',
				name : 'pricesunit2',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Pricescreatetime',
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
				id : 'Pricesupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Pricescreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '修改人',
				id : 'Pricesupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Pricesbbar = pagesizebar(Pricesstore);//定义分页
	var Pricesgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Pricestitle,
		store : Pricesstore,
		bbar : Pricesbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : '价格体系ID',
			dataIndex : 'pricesid',
			sortable : true
		}
		, {
			header : '商品ID',
			dataIndex : 'pricesgoods',
			sortable : true
		}
		, {
			header : '分类',
			dataIndex : 'pricesclass',
			sortable : true
		}
		, {
			header : '等级',
			dataIndex : 'priceslevel',
			sortable : true
		}
		, {
			header : '单品价',
			dataIndex : 'pricesprice',
			sortable : true
		}
		, {
			header : '单品单位',
			dataIndex : 'pricesunit',
			sortable : true
		}
		, {
			header : '套装价',
			dataIndex : 'pricesprice2',
			sortable : true
		}
		, {
			header : '套装单位',
			dataIndex : 'pricesunit2',
			sortable : true
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			sortable : true
		}
		, {
			header : '修改时间',
			dataIndex : 'updtime',
			sortable : true
		}
		, {
			header : '创建人',
			dataIndex : 'creator',
			sortable : true
		}
		, {
			header : '修改人',
			dataIndex : 'updor',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					PricesdataForm.form.reset();
					Ext.getCmp("Pricespricesid").setEditable (true);
					createTextWindow(basePath + Pricesaction + "?method=insAll", "新增", PricesdataForm, Pricesstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Pricesgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					Ext.getCmp("Pricespricesid").setEditable (false);
					createTextWindow(basePath + Pricesaction + "?method=updAll", "修改", PricesdataForm, Pricesstore);
					PricesdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Pricesgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Pricesaction + "?method=delAll",selections,Pricesstore,Priceskeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Pricesaction + "?method=impAll","导入",Pricesstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Pricesaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Pricesgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Pricesgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Priceskeycolumn.length;i++){
						fid += selections[0].data[Priceskeycolumn[i]] + ","
					}
					commonAttach(fid, Pricesclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryPricesaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryPricesaction").getValue()) {
								Pricesstore.load();
							} else {
								Pricesstore.load({
									params : {
										query : Ext.getCmp("queryPricesaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Pricesgrid.region = 'center';
	Pricesstore.on("beforeload",function(){ 
		Pricesstore.baseParams = {
				query : Ext.getCmp("queryPricesaction").getValue()
		}; 
	});
	Pricesstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Pricesgrid ]
	});
})
