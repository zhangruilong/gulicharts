Ext.onReady(function() {
	var Largecuspriceclassify = "大客户关系";
	var Largecuspricetitle = "当前位置:业务管理》" + Largecuspriceclassify;
	var Largecuspriceaction = "LargecuspriceAction.do";
	var Largecuspricefields = ['id'
	        			    ,'largecuspricecompany' 
	        			    ,'largecuspricecustomer' 
	        			    ,'largecuspricegoods' 
	        			    ,'largecuspriceprice' 
	        			    ,'largecuspricedetail' 
	        			    ,'largecuspricecreatetime' 
	        			    ,'largecuspricecreator' 
	        			    ,'largecuspriceprice2' 
	        			    ,'largecuspriceunit' 
	        			    ,'largecuspriceunit2' 
	        			      ];// 全部字段
	var Largecuspricekeycolumn = [ 'id' ];// 主键
	var Largecuspricestore = dataStore(Largecuspricefields, basePath + Largecuspriceaction + "?method=selQuery");// 定义Largecuspricestore
	var LargecuspricedataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'LargecuspricedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'textfield',
			id : 'Largecuspriceid',
			name : 'id',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '供应商',
				id : 'Largecuspricelargecuspricecompany',
				name : 'largecuspricecompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户',
				id : 'Largecuspricelargecuspricecustomer',
				name : 'largecuspricecustomer',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品',
				id : 'Largecuspricelargecuspricegoods',
				name : 'largecuspricegoods',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单品价',
				id : 'Largecuspricelargecuspriceprice',
				name : 'largecuspriceprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Largecuspricelargecuspricedetail',
				name : 'largecuspricedetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Largecuspricelargecuspricecreatetime',
				name : 'largecuspricecreatetime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Largecuspricelargecuspricecreator',
				name : 'largecuspricecreator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '套装价',
				id : 'Largecuspricelargecuspriceprice2',
				name : 'largecuspriceprice2',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单品价单位',
				id : 'Largecuspricelargecuspriceunit',
				name : 'largecuspriceunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '套装价单位',
				id : 'Largecuspricelargecuspriceunit2',
				name : 'largecuspriceunit2',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Largecuspricebbar = pagesizebar(Largecuspricestore);//定义分页
	var Largecuspricegrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Largecuspricetitle,
		store : Largecuspricestore,
		bbar : Largecuspricebbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'ID',
			dataIndex : 'id',
			hidden : true
		}
		, {
			header : '供应商',
			dataIndex : 'largecuspricecompany',
			sortable : true
		}
		, {
			header : '客户',
			dataIndex : 'largecuspricecustomer',
			sortable : true
		}
		, {
			header : '商品',
			dataIndex : 'largecuspricegoods',
			sortable : true
		}
		, {
			header : '单品价',
			dataIndex : 'largecuspriceprice',
			sortable : true
		}
		, {
			header : '描述',
			dataIndex : 'largecuspricedetail',
			sortable : true
		}
		, {
			header : '创建时间',
			dataIndex : 'largecuspricecreatetime',
			sortable : true
		}
		, {
			header : '创建人',
			dataIndex : 'largecuspricecreator',
			sortable : true
		}
		, {
			header : '套装价',
			dataIndex : 'largecuspriceprice2',
			sortable : true
		}
		, {
			header : '单品价单位',
			dataIndex : 'largecuspriceunit',
			sortable : true
		}
		, {
			header : '套装价单位',
			dataIndex : 'largecuspriceunit2',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					LargecuspricedataForm.form.reset();
					createTextWindow(basePath + Largecuspriceaction + "?method=insAll", "新增", LargecuspricedataForm, Largecuspricestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Largecuspricegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					createTextWindow(basePath + Largecuspriceaction + "?method=updAll", "修改", LargecuspricedataForm, Largecuspricestore);
					LargecuspricedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Largecuspricegrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Largecuspriceaction + "?method=delAll",selections,Largecuspricestore,Largecuspricekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Largecuspriceaction + "?method=impAll","导入",Largecuspricestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Largecuspriceaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Largecuspricegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Largecuspricegrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Largecuspricekeycolumn.length;i++){
						fid += selections[0].data[Largecuspricekeycolumn[i]] + ","
					}
					commonAttach(fid, Largecuspriceclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryLargecuspriceaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryLargecuspriceaction").getValue()) {
								Largecuspricestore.load();
							} else {
								Largecuspricestore.load({
									params : {
										query : Ext.getCmp("queryLargecuspriceaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Largecuspricegrid.region = 'center';
	Largecuspricestore.on("beforeload",function(){ 
		Largecuspricestore.baseParams = {
				query : Ext.getCmp("queryLargecuspriceaction").getValue()
		}; 
	});
	Largecuspricestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Largecuspricegrid ]
	});
})
