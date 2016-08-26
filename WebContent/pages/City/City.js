Ext.onReady(function() {
	var Cityclassify = "城市和县及街道";
	var Citytitle = "当前位置:业务管理》" + Cityclassify;
	var Cityaction = "CityAction.do";
	var Cityfields = ['cityid'
	        			    ,'citycode' 
	        			    ,'cityname' 
	        			    ,'cityparent' 
	        			    ,'citydetail' 
	        			    ,'citystatue' 
	        			      ];// 全部字段
	var Citykeycolumn = [ 'cityid' ];// 主键
	var Citystore = dataStore(Cityfields, basePath + Cityaction + "?method=selAll");// 定义Citystore
	var CitydataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CitydataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '城市ID',
				id : 'Citycityid',
				name : 'cityid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Citycitycode',
				name : 'citycode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Citycityname',
				name : 'cityname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '父类',
				id : 'Citycityparent',
				name : 'cityparent',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Citycitydetail',
				name : 'citydetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Citycitystatue',
				name : 'citystatue',
				maxLength : 100
			} ]
		}
		]
	});
	
	//var Citybbar = pagesizebar(Citystore);//定义分页
	var Citygrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		//title : Citytitle,
		store : Citystore,
		//bbar : Citybbar,
	    selModel: {
	        type: 'checkboxmodel'
	    },
	    plugins: {
	         ptype: 'cellediting',
	         clicksToEdit: 1
	    },
		columns : [{xtype: 'rownumberer',width:50}, 
		{// 改
			header : '城市ID',
			dataIndex : 'cityid',
			sortable : true, 
			editor: {
                xtype: 'textfield',
                editable: false
            }
		}
		, {
			header : '编码',
			dataIndex : 'citycode',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '名称',
			dataIndex : 'cityname',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '父类',
			dataIndex : 'cityparent',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '描述',
			dataIndex : 'citydetail',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		, {
			header : '状态',
			dataIndex : 'citystatue',
			sortable : true,  
			editor: {
                xtype: 'textfield'
            }
		}
		],
		tbar : [{
				text : Ext.os.deviceType === 'Phone' ? null : "新增",
				iconCls : 'add',
				handler : function() {
					CitydataForm.form.reset();
					Ext.getCmp("Citycityid").setEditable (true);
					createTextWindow(basePath + Cityaction + "?method=insAll", "新增", CitydataForm, Citystore);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "保存",
				iconCls : 'ok',
				handler : function() {
					var selections = Citygrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonSave(basePath + Cityaction + "?method=updAll",selections);
				}
			},'-',{
				text : Ext.os.deviceType === 'Phone' ? null : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Citygrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					CitydataForm.form.reset();
					Ext.getCmp("Citycityid").setEditable (false);
					createTextWindow(basePath + Cityaction + "?method=updAll", "修改", CitydataForm, Citystore);
					CitydataForm.form.loadRecord(selections[0]);
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
	        					var selections = Citygrid.getSelection();
	        					if (Ext.isEmpty(selections)) {
	        						Ext.Msg.alert('提示', '请至少选择一条数据！');
	        						return;
	        					}
	        					commonDelete(basePath + Cityaction + "?method=delAll",selections,Citystore,Citykeycolumn);
	        				}
	                    },{
	                    	text : "导入",
	        				iconCls : 'imp',
	        				handler : function() {
	        					commonImp(basePath + Cityaction + "?method=impAll","导入",Citystore);
	        				}
	                    },{
	                    	text : "后台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
	        						if (btn == 'yes') {
	        							window.location.href = basePath + Cityaction + "?method=expAll"; 
	        						}
	        					});
	        				}
	                    },{
	                    	text : "前台导出",
	        				iconCls : 'exp',
	        				handler : function() {
	        					commonExp(Citygrid);
	        				}
	                    },{
	                    	text : "附件",
	        				iconCls : 'attach',
	        				handler : function() {
	        					var selections = Citygrid.getSelection();
	        					if (selections.length != 1) {
	        						Ext.Msg.alert('提示', '请选择一条数据！', function() {
	        						});
	        						return;
	        					}
	        					var fid = '';
	        					for (var i=0;i<Citykeycolumn.length;i++){
	        						fid += selections[0].data[Citykeycolumn[i]] + ","
	        					}
	        					commonAttach(fid, Cityclassify);
	        				}
	                    },{
	        				text : "筛选",
    						iconCls : 'select',
    						handler : function() {
    							Ext.getCmp("Citycityid").setEditable (true);
    							createQueryWindow("筛选", CitydataForm, Citystore);
    						}
    					}]
	                }
	            }
			},'->',{
				xtype : 'textfield',
				id : 'queryCityaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCityaction").getValue()) {
								Citystore.load();
							} else {
								Citystore.load({
									params : {
										query : Ext.getCmp("queryCityaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Citygrid.region = 'center';
	Citystore.on("beforeload",function(){ 
		Citystore.baseParams = {
				query : Ext.getCmp("queryCityaction").getValue()
		}; 
	});
	Citystore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Citygrid ]
	});
})
