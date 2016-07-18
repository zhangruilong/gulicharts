Ext.onReady(function() {
	var Timegoodsclassify = "促销品";
	var Timegoodstitle = "当前位置:业务管理》" + Timegoodsclassify;
	var Timegoodsaction = "TimegoodsAction.do";
	var Timegoodsfields = ['timegoodsid'
	        			    ,'timegoodscompany' 
	        			    ,'timegoodscode' 
	        			    ,'timegoodsname' 
	        			    ,'timegoodsdetail' 
	        			    ,'timegoodsunits' 
	        			    ,'timegoodsunit' 
	        			    ,'timegoodsprice' 
	        			    ,'timegoodsorgprice' 
	        			    ,'timegoodsnum' 
	        			    ,'timegoodsclass' 
	        			    ,'timegoodsimage' 
	        			    ,'timegoodsstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'allnum' 
	        			    ,'surplusnum' 
	        			    ,'timegoodsseq' 
	        			    ,'timegoodsscope' 
	        			      ];// 全部字段
	var Timegoodskeycolumn = [ 'timegoodsid' ];// 主键
	var Timegoodsstore = dataStore(Timegoodsfields, basePath + Timegoodsaction + "?method=selQuery");// 定义Timegoodsstore
	var TimegoodsdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'TimegoodsdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'textfield',
			id : 'Timegoodstimegoodsid',
			name : 'timegoodsid',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '经销商ID',
				id : 'Timegoodstimegoodscompany',
				name : 'timegoodscompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Timegoodstimegoodscode',
				name : 'timegoodscode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Timegoodstimegoodsname',
				name : 'timegoodsname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Timegoodstimegoodsdetail',
				name : 'timegoodsdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '规格',
				id : 'Timegoodstimegoodsunits',
				name : 'timegoodsunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单位',
				id : 'Timegoodstimegoodsunit',
				name : 'timegoodsunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '原价',
				id : 'Timegoodstimegoodsprice',
				name : 'timegoodsprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '现价',
				id : 'Timegoodstimegoodsorgprice',
				name : 'timegoodsorgprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '限量',
				id : 'Timegoodstimegoodsnum',
				name : 'timegoodsnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '小类名称',
				id : 'Timegoodstimegoodsclass',
				name : 'timegoodsclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '图片',
				id : 'Timegoodstimegoodsimage',
				name : 'timegoodsimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Timegoodstimegoodsstatue',
				name : 'timegoodsstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Timegoodscreatetime',
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
				id : 'Timegoodscreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '全部限量',
				id : 'Timegoodsallnum',
				name : 'allnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '剩余数量',
				id : 'Timegoodssurplusnum',
				name : 'surplusnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '顺序',
				id : 'Timegoodstimegoodsseq',
				name : 'timegoodsseq',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '客户范围',
				id : 'Timegoodstimegoodsscope',
				name : 'timegoodsscope',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Timegoodsbbar = pagesizebar(Timegoodsstore);//定义分页
	var Timegoodsgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Timegoodstitle,
		store : Timegoodsstore,
		bbar : Timegoodsbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : '促销品ID',
			dataIndex : 'timegoodsid',
			hidden : true
		}
		, {
			header : '经销商ID',
			dataIndex : 'timegoodscompany',
			sortable : true
		}
		, {
			header : '编码',
			dataIndex : 'timegoodscode',
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'timegoodsname',
			sortable : true
		}
		, {
			header : '描述',
			dataIndex : 'timegoodsdetail',
			sortable : true
		}
		, {
			header : '规格',
			dataIndex : 'timegoodsunits',
			sortable : true
		}
		, {
			header : '单位',
			dataIndex : 'timegoodsunit',
			sortable : true
		}
		, {
			header : '原价',
			dataIndex : 'timegoodsprice',
			sortable : true
		}
		, {
			header : '现价',
			dataIndex : 'timegoodsorgprice',
			sortable : true
		}
		, {
			header : '限量',
			dataIndex : 'timegoodsnum',
			sortable : true
		}
		, {
			header : '小类名称',
			dataIndex : 'timegoodsclass',
			sortable : true
		}
		, {
			header : '图片',
			dataIndex : 'timegoodsimage',
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'timegoodsstatue',
			sortable : true
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			sortable : true
		}
		, {
			header : '创建人',
			dataIndex : 'creator',
			sortable : true
		}
		, {
			header : '全部限量',
			dataIndex : 'allnum',
			sortable : true
		}
		, {
			header : '剩余数量',
			dataIndex : 'surplusnum',
			sortable : true
		}
		, {
			header : '顺序',
			dataIndex : 'timegoodsseq',
			sortable : true
		}
		, {
			header : '客户范围',
			dataIndex : 'timegoodsscope',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					TimegoodsdataForm.form.reset();
					createTextWindow(basePath + Timegoodsaction + "?method=insAll", "新增", TimegoodsdataForm, Timegoodsstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Timegoodsgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					createTextWindow(basePath + Timegoodsaction + "?method=updAll", "修改", TimegoodsdataForm, Timegoodsstore);
					TimegoodsdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Timegoodsgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Timegoodsaction + "?method=delAll",selections,Timegoodsstore,Timegoodskeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Timegoodsaction + "?method=impAll","导入",Timegoodsstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Timegoodsaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Timegoodsgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Timegoodsgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Timegoodskeycolumn.length;i++){
						fid += selections[0].data[Timegoodskeycolumn[i]] + ","
					}
					commonAttach(fid, Timegoodsclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryTimegoodsaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryTimegoodsaction").getValue()) {
								Timegoodsstore.load();
							} else {
								Timegoodsstore.load({
									params : {
										query : Ext.getCmp("queryTimegoodsaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Timegoodsgrid.region = 'center';
	Timegoodsstore.on("beforeload",function(){ 
		Timegoodsstore.baseParams = {
				query : Ext.getCmp("queryTimegoodsaction").getValue()
		}; 
	});
	Timegoodsstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Timegoodsgrid ]
	});
})
