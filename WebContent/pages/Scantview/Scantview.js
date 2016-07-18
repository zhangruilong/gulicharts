Ext.onReady(function() {
	var Scantviewclassify = "scantview";
	var Scantviewtitle = "当前位置:业务管理》" + Scantviewclassify;
	var Scantviewaction = "ScantviewAction.do";
	var Scantviewfields = ['scantid'
	        			    ,'scantcode' 
	        			    ,'scantname' 
	        			    ,'scantdetail' 
	        			    ,'scantunits' 
	        			    ,'scantclass' 
	        			    ,'scantimage' 
	        			    ,'scantbrand' 
	        			    ,'scanttype' 
	        			    ,'scantstatue' 
	        			    ,'goodsclassid' 
	        			    ,'goodsclasscode' 
	        			    ,'goodsclassname' 
	        			    ,'goodsclassparent' 
	        			    ,'goodsclassdetail' 
	        			    ,'goodsclassstatue' 
	        			      ];// 全部字段
	var Scantviewkeycolumn = [ 'scantid' ];// 主键
	var Scantviewstore = dataStore(Scantviewfields, basePath + Scantviewaction + "?method=selQuery");// 定义Scantviewstore
	var ScantviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'ScantviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantid',
				id : 'Scantviewscantid',
				name : 'scantid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantcode',
				id : 'Scantviewscantcode',
				name : 'scantcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantname',
				id : 'Scantviewscantname',
				name : 'scantname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantdetail',
				id : 'Scantviewscantdetail',
				name : 'scantdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantunits',
				id : 'Scantviewscantunits',
				name : 'scantunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantclass',
				id : 'Scantviewscantclass',
				name : 'scantclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantimage',
				id : 'Scantviewscantimage',
				name : 'scantimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantbrand',
				id : 'Scantviewscantbrand',
				name : 'scantbrand',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scanttype',
				id : 'Scantviewscanttype',
				name : 'scanttype',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'scantstatue',
				id : 'Scantviewscantstatue',
				name : 'scantstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'goodsclassid',
				id : 'Scantviewgoodsclassid',
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
				id : 'Scantviewgoodsclasscode',
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
				id : 'Scantviewgoodsclassname',
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
				id : 'Scantviewgoodsclassparent',
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
				id : 'Scantviewgoodsclassdetail',
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
				id : 'Scantviewgoodsclassstatue',
				name : 'goodsclassstatue',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Scantviewbbar = pagesizebar(Scantviewstore);//定义分页
	var Scantviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Scantviewtitle,
		store : Scantviewstore,
		bbar : Scantviewbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'scantid',
			dataIndex : 'scantid',
			sortable : true
		}
		, {
			header : 'scantcode',
			dataIndex : 'scantcode',
			sortable : true
		}
		, {
			header : 'scantname',
			dataIndex : 'scantname',
			sortable : true
		}
		, {
			header : 'scantdetail',
			dataIndex : 'scantdetail',
			sortable : true
		}
		, {
			header : 'scantunits',
			dataIndex : 'scantunits',
			sortable : true
		}
		, {
			header : 'scantclass',
			dataIndex : 'scantclass',
			sortable : true
		}
		, {
			header : 'scantimage',
			dataIndex : 'scantimage',
			sortable : true
		}
		, {
			header : 'scantbrand',
			dataIndex : 'scantbrand',
			sortable : true
		}
		, {
			header : 'scanttype',
			dataIndex : 'scanttype',
			sortable : true
		}
		, {
			header : 'scantstatue',
			dataIndex : 'scantstatue',
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
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					ScantviewdataForm.form.reset();
					Ext.getCmp("Scantviewscantid").setEditable (true);
					createTextWindow(basePath + Scantviewaction + "?method=insAll", "新增", ScantviewdataForm, Scantviewstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Scantviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					Ext.getCmp("Scantviewscantid").setEditable (false);
					createTextWindow(basePath + Scantviewaction + "?method=updAll", "修改", ScantviewdataForm, Scantviewstore);
					ScantviewdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Scantviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Scantviewaction + "?method=delAll",selections,Scantviewstore,Scantviewkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Scantviewaction + "?method=impAll","导入",Scantviewstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Scantviewaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Scantviewgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Scantviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Scantviewkeycolumn.length;i++){
						fid += selections[0].data[Scantviewkeycolumn[i]] + ","
					}
					commonAttach(fid, Scantviewclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryScantviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryScantviewaction").getValue()) {
								Scantviewstore.load();
							} else {
								Scantviewstore.load({
									params : {
										query : Ext.getCmp("queryScantviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Scantviewgrid.region = 'center';
	Scantviewstore.on("beforeload",function(){ 
		Scantviewstore.baseParams = {
				query : Ext.getCmp("queryScantviewaction").getValue()
		}; 
	});
	Scantviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Scantviewgrid ]
	});
})
