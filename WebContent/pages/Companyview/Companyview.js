Ext.onReady(function() {
	var Companyviewclassify = "经销商";
	var Companyviewtitle = "当前位置:业务管理》" + Companyviewclassify;
	var Companyviewaction = "CompanyviewAction.do";
	var Companyviewfields = ['companyid'
	        			    ,'companycode' 
	        			    ,'username' 
	        			    ,'companyphone' 
	        			    ,'companyshop' 
	        			    ,'companycity' 
	        			    ,'companyaddress' 
	        			    ,'companydetail' 
	        			    ,'companystatue' 
	        			    ,'loginname' 
	        			    ,'password' 
	        			    ,'createtime' 
	        			    ,'updtime' 
	        			    ,'cityid' 
	        			    ,'citycode' 
	        			    ,'cityname' 
	        			    ,'cityparent' 
	        			    ,'citydetail' 
	        			    ,'citystatue' 
	        			      ];// 全部字段
	var Companyviewkeycolumn = [ 'companyid' ];// 主键
	var Companyviewstore = dataStore(Companyviewfields, basePath + Companyviewaction + "?method=selQuery");// 定义Companyviewstore
	var CompanyviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CompanyviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companyid',
				id : 'Companyviewcompanyid',
				name : 'companyid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companycode',
				id : 'Companyviewcompanycode',
				name : 'companycode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'username',
				id : 'Companyviewusername',
				name : 'username',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companyphone',
				id : 'Companyviewcompanyphone',
				name : 'companyphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companyshop',
				id : 'Companyviewcompanyshop',
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
				id : 'Companyviewcompanycity',
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
				id : 'Companyviewcompanyaddress',
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
				id : 'Companyviewcompanydetail',
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
				id : 'Companyviewcompanystatue',
				name : 'companystatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'loginname',
				id : 'Companyviewloginname',
				name : 'loginname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'password',
				id : 'Companyviewpassword',
				name : 'password',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'createtime',
				id : 'Companyviewcreatetime',
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
				id : 'Companyviewupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'cityid',
				id : 'Companyviewcityid',
				name : 'cityid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'citycode',
				id : 'Companyviewcitycode',
				name : 'citycode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'cityname',
				id : 'Companyviewcityname',
				name : 'cityname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'cityparent',
				id : 'Companyviewcityparent',
				name : 'cityparent',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'citydetail',
				id : 'Companyviewcitydetail',
				name : 'citydetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'citystatue',
				id : 'Companyviewcitystatue',
				name : 'citystatue',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Companyviewbbar = pagesizebar(Companyviewstore);//定义分页
	var Companyviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Companyviewtitle,
		store : Companyviewstore,
		bbar : Companyviewbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'companyid',
			dataIndex : 'companyid',
			sortable : true
		}
		, {
			header : 'companycode',
			dataIndex : 'companycode',
			sortable : true
		}
		, {
			header : 'username',
			dataIndex : 'username',
			sortable : true
		}
		, {
			header : 'companyphone',
			dataIndex : 'companyphone',
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
			header : 'loginname',
			dataIndex : 'loginname',
			sortable : true
		}
		, {
			header : 'password',
			dataIndex : 'password',
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
			header : 'cityid',
			dataIndex : 'cityid',
			sortable : true
		}
		, {
			header : 'citycode',
			dataIndex : 'citycode',
			sortable : true
		}
		, {
			header : 'cityname',
			dataIndex : 'cityname',
			sortable : true
		}
		, {
			header : 'cityparent',
			dataIndex : 'cityparent',
			sortable : true
		}
		, {
			header : 'citydetail',
			dataIndex : 'citydetail',
			sortable : true
		}
		, {
			header : 'citystatue',
			dataIndex : 'citystatue',
			sortable : true
		}
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CompanyviewdataForm.form.reset();
					Ext.getCmp("Companyviewcompanyid").setEditable (true);
					createTextWindow(basePath + Companyviewaction + "?method=insAll", "新增", CompanyviewdataForm, Companyviewstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Companyviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					Ext.getCmp("Companyviewcompanyid").setEditable (false);
					createTextWindow(basePath + Companyviewaction + "?method=updAll", "修改", CompanyviewdataForm, Companyviewstore);
					CompanyviewdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Companyviewgrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Companyviewaction + "?method=delAll",selections,Companyviewstore,Companyviewkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Companyviewaction + "?method=impAll","导入",Companyviewstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Companyviewaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Companyviewgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Companyviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Companyviewkeycolumn.length;i++){
						fid += selections[0].data[Companyviewkeycolumn[i]] + ","
					}
					commonAttach(fid, Companyviewclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryCompanyviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCompanyviewaction").getValue()) {
								Companyviewstore.load();
							} else {
								Companyviewstore.load({
									params : {
										query : Ext.getCmp("queryCompanyviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Companyviewgrid.region = 'center';
	Companyviewstore.on("beforeload",function(){ 
		Companyviewstore.baseParams = {
				query : Ext.getCmp("queryCompanyviewaction").getValue()
		}; 
	});
	Companyviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Companyviewgrid ]
	});
})
