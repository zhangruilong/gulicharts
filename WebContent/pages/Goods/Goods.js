Ext.onReady(function() {
	var Goodsclassify = "商品";
	var Goodstitle = "当前位置:业务管理》" + Goodsclassify;
	var Goodsaction = "GoodsAction.do";
	var Goodsfields = ['goodsid'
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
	        			      ];// 全部字段
	var Goodskeycolumn = [ 'goodsid' ];// 主键
	var Goodsstore = dataStore(Goodsfields, basePath + Goodsaction + "?method=selQuery");// 定义Goodsstore
	var GoodsdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'GoodsdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品ID',
				id : 'Goodsgoodsid',
				name : 'goodsid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '经销商ID',
				id : 'Goodsgoodscompany',
				name : 'goodscompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Goodsgoodscode',
				name : 'goodscode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Goodsgoodsname',
				name : 'goodsname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Goodsgoodsdetail',
				name : 'goodsdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '规格',
				id : 'Goodsgoodsunits',
				name : 'goodsunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '小类ID',
				id : 'Goodsgoodsclass',
				name : 'goodsclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '图片',
				id : 'Goodsgoodsimage',
				name : 'goodsimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Goodsgoodsstatue',
				name : 'goodsstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Goodscreatetime',
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
				id : 'Goodsupdtime',
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
				id : 'Goodscreator',
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
				id : 'Goodsupdor',
				name : 'updor',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '品牌',
				id : 'Goodsgoodsbrand',
				name : 'goodsbrand',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '种类',
				id : 'Goodsgoodstype',
				name : 'goodstype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '顺序',
				id : 'Goodsgoodsorder',
				name : 'goodsorder',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Goodsbbar = pagesizebar(Goodsstore);//定义分页
	var Goodsgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Goodstitle,
		store : Goodsstore,
		bbar : Goodsbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : '商品ID',
			dataIndex : 'goodsid',
			sortable : true
		}
		, {
			header : '经销商ID',
			dataIndex : 'goodscompany',
			sortable : true
		}
		, {
			header : '编码',
			dataIndex : 'goodscode',
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'goodsname',
			sortable : true
		}
		, {
			header : '描述',
			dataIndex : 'goodsdetail',
			sortable : true
		}
		, {
			header : '规格',
			dataIndex : 'goodsunits',
			sortable : true
		}
		, {
			header : '小类ID',
			dataIndex : 'goodsclass',
			sortable : true
		}
		, {
			header : '图片',
			dataIndex : 'goodsimage',
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'goodsstatue',
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
		, {
			header : '品牌',
			dataIndex : 'goodsbrand',
			sortable : true
		}
		, {
			header : '种类',
			dataIndex : 'goodstype',
			sortable : true
		}
		, {
			header : '顺序',
			dataIndex : 'goodsorder',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					GoodsdataForm.form.reset();
					Ext.getCmp("Goodsgoodsid").setEditable (true);
					createTextWindow(basePath + Goodsaction + "?method=insAll", "新增", GoodsdataForm, Goodsstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Goodsgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					Ext.getCmp("Goodsgoodsid").setEditable (false);
					createTextWindow(basePath + Goodsaction + "?method=updAll", "修改", GoodsdataForm, Goodsstore);
					GoodsdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Goodsgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Goodsaction + "?method=delAll",selections,Goodsstore,Goodskeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Goodsaction + "?method=impAll","导入",Goodsstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Goodsaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Goodsgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Goodsgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Goodskeycolumn.length;i++){
						fid += selections[0].data[Goodskeycolumn[i]] + ","
					}
					commonAttach(fid, Goodsclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryGoodsaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryGoodsaction").getValue()) {
								Goodsstore.load();
							} else {
								Goodsstore.load({
									params : {
										query : Ext.getCmp("queryGoodsaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Goodsgrid.region = 'center';
	Goodsstore.on("beforeload",function(){ 
		Goodsstore.baseParams = {
				query : Ext.getCmp("queryGoodsaction").getValue()
		}; 
	});
	Goodsstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Goodsgrid ]
	});
})
