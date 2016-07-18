Ext.onReady(function() {
	var Collectclassify = "收藏";
	var Collecttitle = "当前位置:业务管理》" + Collectclassify;
	var Collectaction = "CollectAction.do";
	var Collectfields = ['collectid'
	        			    ,'collectgoods' 
	        			    ,'collectcustomer' 
	        			    ,'collectdetail' 
	        			    ,'createtime' 
	        			      ];// 全部字段
	var Collectkeycolumn = [ 'collectid' ];// 主键
	var Collectstore = dataStore(Collectfields, basePath + Collectaction + "?method=selQuery");// 定义Collectstore
	var CollectdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CollectdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '收藏ID',
				id : 'Collectcollectid',
				name : 'collectid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品ID',
				id : 'Collectcollectgoods',
				name : 'collectgoods',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户ID',
				id : 'Collectcollectcustomer',
				name : 'collectcustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Collectcollectdetail',
				name : 'collectdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Collectcreatetime',
				name : 'createtime',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Collectbbar = pagesizebar(Collectstore);//定义分页
	var Collectgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Collecttitle,
		store : Collectstore,
		bbar : Collectbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : '收藏ID',
			dataIndex : 'collectid',
			sortable : true
		}
		, {
			header : '商品ID',
			dataIndex : 'collectgoods',
			sortable : true
		}
		, {
			header : '客户ID',
			dataIndex : 'collectcustomer',
			sortable : true
		}
		, {
			header : '描述',
			dataIndex : 'collectdetail',
			sortable : true
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CollectdataForm.form.reset();
					Ext.getCmp("Collectcollectid").setEditable (true);
					createTextWindow(basePath + Collectaction + "?method=insAll", "新增", CollectdataForm, Collectstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Collectgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					Ext.getCmp("Collectcollectid").setEditable (false);
					createTextWindow(basePath + Collectaction + "?method=updAll", "修改", CollectdataForm, Collectstore);
					CollectdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Collectgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Collectaction + "?method=delAll",selections,Collectstore,Collectkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Collectaction + "?method=impAll","导入",Collectstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Collectaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Collectgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Collectgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Collectkeycolumn.length;i++){
						fid += selections[0].data[Collectkeycolumn[i]] + ","
					}
					commonAttach(fid, Collectclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryCollectaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCollectaction").getValue()) {
								Collectstore.load();
							} else {
								Collectstore.load({
									params : {
										query : Ext.getCmp("queryCollectaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Collectgrid.region = 'center';
	Collectstore.on("beforeload",function(){ 
		Collectstore.baseParams = {
				query : Ext.getCmp("queryCollectaction").getValue()
		}; 
	});
	Collectstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Collectgrid ]
	});
})
