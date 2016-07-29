Ext.onReady(function() {
	var Empclassify = "业务员";
	var Emptitle = "当前位置:业务管理》" + Empclassify;
	var Empaction = "EmpAction.do";
	var Empfields = ['empid'
	        			    ,'empcompany' 
	        			    ,'empcode' 
	        			    ,'loginname' 
	        			    ,'password' 
	        			    ,'empdetail' 
	        			    ,'empstatue' 
	        			    ,'createtime' 
	        			    ,'updtime' 
	        			      ];// 全部字段
	var Empkeycolumn = [ 'empid' ];// 主键
	var Empstore = dataStore(Empfields, basePath + Empaction + "?method=selQuery");// 定义Empstore
	var EmpdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'EmpdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '业务员ID',
				id : 'Empempid',
				name : 'empid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '经销商ID',
				id : 'Empempcompany',
				name : 'empcompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Empempcode',
				name : 'empcode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '账号',
				id : 'Emploginname',
				name : 'loginname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '密码',
				id : 'Emppassword',
				name : 'password',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Empempdetail',
				name : 'empdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Empempstatue',
				name : 'empstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Empcreatetime',
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
				id : 'Empupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Empbbar = pagesizebar(Empstore);//定义分页
	var Empgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		forceFit: true,
		title : Emptitle,
		store : Empstore,
		bbar : Empbbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
	    plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	    },
		columns : [{xtype: 'rownumberer',width:36}, 
		{// 改
			header : '业务员ID',
			dataIndex : 'empid',
			sortable : true, 
			minWidth:100,
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '经销商ID',
			dataIndex : 'empcompany',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '编码',
			dataIndex : 'empcode',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '账号',
			dataIndex : 'loginname',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '密码',
			dataIndex : 'password',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '描述',
			dataIndex : 'empdetail',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'empstatue',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '修改时间',
			dataIndex : 'updtime',
			sortable : true,  
			minWidth:100,
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					EmpdataForm.form.reset();
					Ext.getCmp("Empempid").setEditable (true);
					createTextWindow(basePath + Empaction + "?method=insAll", "新增", EmpdataForm, Empstore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Empgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Empaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Empgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					EmpdataForm.form.reset();
					Ext.getCmp("Empempid").setEditable (false);
					createTextWindow(basePath + Empaction + "?method=updAll", "修改", EmpdataForm, Empstore);
					EmpdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
	            text: '操作',
	            menu: {
	                xtype: 'menu',
	                items: {
	                    xtype: 'buttongroup',
	                    columns: 3,
	                    items: [{
	                    	text : "删除",
	        				iconCls : 'delete',
	        				handler : function() {
	        					var selections = Empgrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Empaction + "?method=delAll",selections,Empstore,Empkeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Empaction + "?method=impAll","导入",Empstore);
	        				}
	                    },{
	                    	text : "后台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Empaction + "?method=expAll"; 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "前台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					commonExp(Empgrid);
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Empgrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Empkeycolumn.length;i++){
	        						fid += selections[0].data[Empkeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Empclassify);
	        				}
	                    }]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryEmpaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryEmpaction").getValue()) {
								Empstore.load();
							} else {
								Empstore.load({
									params : {
										query : Ext.getCmp("queryEmpaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Empgrid.region = 'center';
	Empstore.on("beforeload",function(){ 
		Empstore.baseParams = {
				query : Ext.getCmp("queryEmpaction").getValue()
		}; 
	});
	Empstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Empgrid ]
	});
})
