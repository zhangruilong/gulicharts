Ext.onReady(function() {
	var Goodsviewclassify = "goodsview";
	var Goodsviewtitle = "当前位置:业务管理》" + Goodsviewclassify;
	var Goodsviewaction = "GoodsviewAction.do";
	var Goodsviewfields = ['goodsid'
	        			    ,'goodscompany' 
	        			    ,'goodscode' 
	        			    ,'goodsname' 
	        			    ,'goodsdetail' 
	        			    ,'goodsunits' 
	        			    ,'goodsclass' 
	        			    ,'goodsimage' 
	        			    ,'goodsstatue' 
	        			    ,'createtime' 
	        			    ,'updtime' 
	        			    ,'creator' 
	        			    ,'updor' 
	        			    ,'goodsbrand' 
	        			    ,'goodstype' 
	        			    ,'goodsorder' 
	        			    ,'goodsclassid' 
	        			    ,'goodsclasscode' 
	        			    ,'goodsclassname' 
	        			    ,'goodsclassparent' 
	        			    ,'goodsclassdetail' 
	        			    ,'goodsclassstatue' 
	        			    ,'companyshop' 
	        			    ,'companycity' 
	        			    ,'companyaddress' 
	        			    ,'companydetail' 
	        			    ,'companystatue' 
	        			    ,'pricesid' 
	        			    ,'pricesclass' 
	        			    ,'priceslevel' 
	        			    ,'pricesprice' 
	        			    ,'pricesunit' 
	        			    ,'pricesprice2' 
	        			    ,'pricesunit2' 
	        			      ];// 全部字段
	var Goodsviewkeycolumn = [ 'goodsid' ];// 主键
	var Goodsviewstore = dataStore(Goodsviewfields, basePath + Goodsviewaction + "?method=selQuery");// 定义Goodsviewstore
	var GoodsviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'GoodsviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsid',
				id : 'Goodsviewgoodsid',
				name : 'goodsid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodscompany',
				id : 'Goodsviewgoodscompany',
				name : 'goodscompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodscode',
				id : 'Goodsviewgoodscode',
				name : 'goodscode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsname',
				id : 'Goodsviewgoodsname',
				name : 'goodsname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsdetail',
				id : 'Goodsviewgoodsdetail',
				name : 'goodsdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsunits',
				id : 'Goodsviewgoodsunits',
				name : 'goodsunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsclass',
				id : 'Goodsviewgoodsclass',
				name : 'goodsclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsimage',
				id : 'Goodsviewgoodsimage',
				name : 'goodsimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsstatue',
				id : 'Goodsviewgoodsstatue',
				name : 'goodsstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'createtime',
				id : 'Goodsviewcreatetime',
				name : 'createtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'updtime',
				id : 'Goodsviewupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'creator',
				id : 'Goodsviewcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'updor',
				id : 'Goodsviewupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsbrand',
				id : 'Goodsviewgoodsbrand',
				name : 'goodsbrand',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodstype',
				id : 'Goodsviewgoodstype',
				name : 'goodstype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsorder',
				id : 'Goodsviewgoodsorder',
				name : 'goodsorder',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsclassid',
				id : 'Goodsviewgoodsclassid',
				name : 'goodsclassid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsclasscode',
				id : 'Goodsviewgoodsclasscode',
				name : 'goodsclasscode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsclassname',
				id : 'Goodsviewgoodsclassname',
				name : 'goodsclassname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsclassparent',
				id : 'Goodsviewgoodsclassparent',
				name : 'goodsclassparent',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsclassdetail',
				id : 'Goodsviewgoodsclassdetail',
				name : 'goodsclassdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsclassstatue',
				id : 'Goodsviewgoodsclassstatue',
				name : 'goodsclassstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companyshop',
				id : 'Goodsviewcompanyshop',
				name : 'companyshop',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companycity',
				id : 'Goodsviewcompanycity',
				name : 'companycity',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companyaddress',
				id : 'Goodsviewcompanyaddress',
				name : 'companyaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companydetail',
				id : 'Goodsviewcompanydetail',
				name : 'companydetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companystatue',
				id : 'Goodsviewcompanystatue',
				name : 'companystatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'pricesid',
				id : 'Goodsviewpricesid',
				name : 'pricesid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'pricesclass',
				id : 'Goodsviewpricesclass',
				name : 'pricesclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'priceslevel',
				id : 'Goodsviewpriceslevel',
				name : 'priceslevel',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'pricesprice',
				id : 'Goodsviewpricesprice',
				name : 'pricesprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'pricesunit',
				id : 'Goodsviewpricesunit',
				name : 'pricesunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'pricesprice2',
				id : 'Goodsviewpricesprice2',
				name : 'pricesprice2',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'pricesunit2',
				id : 'Goodsviewpricesunit2',
				name : 'pricesunit2',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Goodsviewbbar = pagesizebar(Goodsviewstore);//定义分页
	var Goodsviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Goodsviewtitle,
		store : Goodsviewstore,
		bbar : Goodsviewbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'goodsid',
			dataIndex : 'goodsid',
			sortable : true
		}
		, {
			header : 'goodscompany',
			dataIndex : 'goodscompany',
			sortable : true
		}
		, {
			header : 'goodscode',
			dataIndex : 'goodscode',
			sortable : true
		}
		, {
			header : 'goodsname',
			dataIndex : 'goodsname',
			sortable : true
		}
		, {
			header : 'goodsdetail',
			dataIndex : 'goodsdetail',
			sortable : true
		}
		, {
			header : 'goodsunits',
			dataIndex : 'goodsunits',
			sortable : true
		}
		, {
			header : 'goodsclass',
			dataIndex : 'goodsclass',
			sortable : true
		}
		, {
			header : 'goodsimage',
			dataIndex : 'goodsimage',
			sortable : true
		}
		, {
			header : 'goodsstatue',
			dataIndex : 'goodsstatue',
			sortable : true
		}
		, {
			header : 'createtime',
			dataIndex : 'createtime',
			sortable : true
		}
		, {
			header : 'updtime',
			dataIndex : 'updtime',
			sortable : true
		}
		, {
			header : 'creator',
			dataIndex : 'creator',
			sortable : true
		}
		, {
			header : 'updor',
			dataIndex : 'updor',
			sortable : true
		}
		, {
			header : 'goodsbrand',
			dataIndex : 'goodsbrand',
			sortable : true
		}
		, {
			header : 'goodstype',
			dataIndex : 'goodstype',
			sortable : true
		}
		, {
			header : 'goodsorder',
			dataIndex : 'goodsorder',
			sortable : true
		}
		, {
			header : 'goodsclassid',
			dataIndex : 'goodsclassid',
			sortable : true
		}
		, {
			header : 'goodsclasscode',
			dataIndex : 'goodsclasscode',
			sortable : true
		}
		, {
			header : 'goodsclassname',
			dataIndex : 'goodsclassname',
			sortable : true
		}
		, {
			header : 'goodsclassparent',
			dataIndex : 'goodsclassparent',
			sortable : true
		}
		, {
			header : 'goodsclassdetail',
			dataIndex : 'goodsclassdetail',
			sortable : true
		}
		, {
			header : 'goodsclassstatue',
			dataIndex : 'goodsclassstatue',
			sortable : true
		}
		, {
			header : 'companyshop',
			dataIndex : 'companyshop',
			sortable : true
		}
		, {
			header : 'companycity',
			dataIndex : 'companycity',
			sortable : true
		}
		, {
			header : 'companyaddress',
			dataIndex : 'companyaddress',
			sortable : true
		}
		, {
			header : 'companydetail',
			dataIndex : 'companydetail',
			sortable : true
		}
		, {
			header : 'companystatue',
			dataIndex : 'companystatue',
			sortable : true
		}
		, {
			header : 'pricesid',
			dataIndex : 'pricesid',
			sortable : true
		}
		, {
			header : 'pricesclass',
			dataIndex : 'pricesclass',
			sortable : true
		}
		, {
			header : 'priceslevel',
			dataIndex : 'priceslevel',
			sortable : true
		}
		, {
			header : 'pricesprice',
			dataIndex : 'pricesprice',
			sortable : true
		}
		, {
			header : 'pricesunit',
			dataIndex : 'pricesunit',
			sortable : true
		}
		, {
			header : 'pricesprice2',
			dataIndex : 'pricesprice2',
			sortable : true
		}
		, {
			header : 'pricesunit2',
			dataIndex : 'pricesunit2',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					GoodsviewdataForm.form.reset();
					Ext.getCmp("Goodsviewgoodsid").setEditable (true);
					createTextWindow(basePath + Goodsviewaction + "?method=insAll", "新增", GoodsviewdataForm, Goodsviewstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Goodsviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					Ext.getCmp("Goodsviewgoodsid").setEditable (false);
					createTextWindow(basePath + Goodsviewaction + "?method=updAll", "修改", GoodsviewdataForm, Goodsviewstore);
					GoodsviewdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Goodsviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Goodsviewaction + "?method=delAll",selections,Goodsviewstore,Goodsviewkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Goodsviewaction + "?method=impAll","导入",Goodsviewstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Goodsviewaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Goodsviewgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Goodsviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Goodsviewkeycolumn.length;i++){
						fid += selections[0].data[Goodsviewkeycolumn[i]] + ","
					}
					commonAttach(fid, Goodsviewclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryGoodsviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryGoodsviewaction").getValue()) {
								Goodsviewstore.load();
							} else {
								Goodsviewstore.load({
									params : {
										query : Ext.getCmp("queryGoodsviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Goodsviewgrid.region = 'center';
	Goodsviewstore.on("beforeload",function(){ 
		Goodsviewstore.baseParams = {
				query : Ext.getCmp("queryGoodsviewaction").getValue()
		}; 
	});
	Goodsviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Goodsviewgrid ]
	});
})
