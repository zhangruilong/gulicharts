Ext.onReady(function() {
	var Collectviewclassify = "收藏";
	var Collectviewtitle = "当前位置:业务管理》" + Collectviewclassify;
	var Collectviewaction = "CollectviewAction.do";
	var Collectviewfields = ['collectid'
	        			    ,'collectcustomer' 
	        			    ,'collectdetail' 
	        			    ,'collectcreatetime' 
	        			    ,'goodsid' 
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
	var Collectviewkeycolumn = [ 'collectid' ];// 主键
	var Collectviewstore = dataStore(Collectviewfields, basePath + Collectviewaction + "?method=selQuery");// 定义Collectviewstore
	var CollectviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CollectviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'textfield',
			id : 'Collectviewcollectid',
			name : 'collectid',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'collectcustomer',
				id : 'Collectviewcollectcustomer',
				name : 'collectcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'collectdetail',
				id : 'Collectviewcollectdetail',
				name : 'collectdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'collectcreatetime',
				id : 'Collectviewcollectcreatetime',
				name : 'collectcreatetime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsid',
				id : 'Collectviewgoodsid',
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
				id : 'Collectviewgoodscompany',
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
				id : 'Collectviewgoodscode',
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
				id : 'Collectviewgoodsname',
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
				id : 'Collectviewgoodsdetail',
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
				id : 'Collectviewgoodsunits',
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
				id : 'Collectviewgoodsclass',
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
				id : 'Collectviewgoodsimage',
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
				id : 'Collectviewgoodsstatue',
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
				id : 'Collectviewcreatetime',
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
				id : 'Collectviewupdtime',
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
				id : 'Collectviewcreator',
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
				id : 'Collectviewupdor',
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
				id : 'Collectviewgoodsbrand',
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
				id : 'Collectviewgoodstype',
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
				id : 'Collectviewgoodsorder',
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
				id : 'Collectviewgoodsclassid',
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
				id : 'Collectviewgoodsclasscode',
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
				id : 'Collectviewgoodsclassname',
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
				id : 'Collectviewgoodsclassparent',
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
				id : 'Collectviewgoodsclassdetail',
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
				id : 'Collectviewgoodsclassstatue',
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
				id : 'Collectviewcompanyshop',
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
				id : 'Collectviewcompanycity',
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
				id : 'Collectviewcompanyaddress',
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
				id : 'Collectviewcompanydetail',
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
				id : 'Collectviewcompanystatue',
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
				id : 'Collectviewpricesid',
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
				id : 'Collectviewpricesclass',
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
				id : 'Collectviewpriceslevel',
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
				id : 'Collectviewpricesprice',
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
				id : 'Collectviewpricesunit',
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
				id : 'Collectviewpricesprice2',
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
				id : 'Collectviewpricesunit2',
				name : 'pricesunit2',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Collectviewbbar = pagesizebar(Collectviewstore);//定义分页
	var Collectviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Collectviewtitle,
		store : Collectviewstore,
		bbar : Collectviewbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'collectid',
			dataIndex : 'collectid',
			hidden : true
		}
		, {
			header : 'collectcustomer',
			dataIndex : 'collectcustomer',
			sortable : true
		}
		, {
			header : 'collectdetail',
			dataIndex : 'collectdetail',
			sortable : true
		}
		, {
			header : 'collectcreatetime',
			dataIndex : 'collectcreatetime',
			sortable : true
		}
		, {
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
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Collectviewaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Collectviewgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Collectviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Collectviewkeycolumn.length;i++){
						fid += selections[0].data[Collectviewkeycolumn[i]] + ","
					}
					commonAttach(fid, Collectviewclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryCollectviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCollectviewaction").getValue()) {
								Collectviewstore.load();
							} else {
								Collectviewstore.load({
									params : {
										query : Ext.getCmp("queryCollectviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Collectviewgrid.region = 'center';
	Collectviewstore.on("beforeload",function(){ 
		Collectviewstore.baseParams = {
				query : Ext.getCmp("queryCollectviewaction").getValue()
		}; 
	});
	Collectviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Collectviewgrid ]
	});
})
