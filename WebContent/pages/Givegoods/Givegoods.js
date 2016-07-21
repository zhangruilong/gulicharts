Ext.onReady(function() {
	var Givegoodsclassify = "买赠";
	var Givegoodstitle = "当前位置:业务管理》" + Givegoodsclassify;
	var Givegoodsaction = "GivegoodsAction.do";
	var Givegoodsfields = ['givegoodsid'
	        			    ,'givegoodscompany' 
	        			    ,'givegoodscode' 
	        			    ,'givegoodsname' 
	        			    ,'givegoodsdetail' 
	        			    ,'givegoodsunits' 
	        			    ,'givegoodsunit' 
	        			    ,'givegoodsprice' 
	        			    ,'givegoodsnum' 
	        			    ,'givegoodsclass' 
	        			    ,'givegoodsimage' 
	        			    ,'givegoodsstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'givegoodsseq' 
	        			    ,'givegoodsscope' 
	        			      ];// 全部字段
	var Givegoodskeycolumn = [ 'givegoodsid' ];// 主键
	var Givegoodsstore = dataStore(Givegoodsfields, basePath + Givegoodsaction + "?method=selQuery");// 定义Givegoodsstore
	var GivegoodsdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'GivegoodsdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '买赠ID',
				id : 'Givegoodsgivegoodsid',
				name : 'givegoodsid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '经销商ID',
				id : 'Givegoodsgivegoodscompany',
				name : 'givegoodscompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Givegoodsgivegoodscode',
				name : 'givegoodscode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Givegoodsgivegoodsname',
				name : 'givegoodsname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Givegoodsgivegoodsdetail',
				name : 'givegoodsdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '规格',
				id : 'Givegoodsgivegoodsunits',
				name : 'givegoodsunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单位',
				id : 'Givegoodsgivegoodsunit',
				name : 'givegoodsunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '售价',
				id : 'Givegoodsgivegoodsprice',
				name : 'givegoodsprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '个人限购',
				id : 'Givegoodsgivegoodsnum',
				name : 'givegoodsnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '小类',
				id : 'Givegoodsgivegoodsclass',
				name : 'givegoodsclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '图片',
				id : 'Givegoodsgivegoodsimage',
				name : 'givegoodsimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Givegoodsgivegoodsstatue',
				name : 'givegoodsstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Givegoodscreatetime',
				name : 'createtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Givegoodscreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '顺序',
				id : 'Givegoodsgivegoodsseq',
				name : 'givegoodsseq',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户范围',
				id : 'Givegoodsgivegoodsscope',
				name : 'givegoodsscope',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Givegoodsbbar = pagesizebar(Givegoodsstore);//定义分页
	var Givegoodsgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Givegoodstitle,
		store : Givegoodsstore,
		bbar : Givegoodsbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
	     plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	     },
		columns : [{// 改
			header : '买赠ID',
			dataIndex : 'givegoodsid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '经销商ID',
			dataIndex : 'givegoodscompany',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'givegoodscode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'givegoodsname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '描述',
			dataIndex : 'givegoodsdetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '规格',
			dataIndex : 'givegoodsunits',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '单位',
			dataIndex : 'givegoodsunit',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '售价',
			dataIndex : 'givegoodsprice',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '个人限购',
			dataIndex : 'givegoodsnum',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '小类',
			dataIndex : 'givegoodsclass',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '图片',
			dataIndex : 'givegoodsimage',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'givegoodsstatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建人',
			dataIndex : 'creator',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '顺序',
			dataIndex : 'givegoodsseq',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '客户范围',
			dataIndex : 'givegoodsscope',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					GivegoodsdataForm.form.reset();
					Ext.getCmp("Givegoodsgivegoodsid").setEditable (true);
					createTextWindow(basePath + Givegoodsaction + "?method=insAll", "新增", GivegoodsdataForm, Givegoodsstore);
				}
			},'-',{
				text : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Givegoodsgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Givegoodsaction + "?method=updAll",selections);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Givegoodsgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					GivegoodsdataForm.form.reset();
					Ext.getCmp("Givegoodsgivegoodsid").setEditable (false);
					createTextWindow(basePath + Givegoodsaction + "?method=updAll", "修改", GivegoodsdataForm, Givegoodsstore);
					GivegoodsdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Givegoodsgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Givegoodsaction + "?method=delAll",selections,Givegoodsstore,Givegoodskeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Givegoodsaction + "?method=impAll","导入",Givegoodsstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Givegoodsaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Givegoodsgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Givegoodsgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Givegoodskeycolumn.length;i++){
						fid += selections[0].data[Givegoodskeycolumn[i]] + ","
					}
					commonAttach(fid, Givegoodsclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryGivegoodsaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryGivegoodsaction").getValue()) {
								Givegoodsstore.load();
							} else {
								Givegoodsstore.load({
									params : {
										query : Ext.getCmp("queryGivegoodsaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Givegoodsgrid.region = 'center';
	Givegoodsstore.on("beforeload",function(){ 
		Givegoodsstore.baseParams = {
				query : Ext.getCmp("queryGivegoodsaction").getValue()
		}; 
	});
	Givegoodsstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Givegoodsgrid ]
	});
})
