Ext.onReady(function() {
	var Companyclassify = "经销商";
	var Companytitle = "当前位置:业务管理》" + Companyclassify;
	var Companyaction = "CompanyAction.do";
	var Companyfields = ['companyid'
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
	        			      ];// 全部字段
	var Companykeycolumn = [ 'companyid' ];// 主键
	var Companystore = dataStore(Companyfields, basePath + Companyaction + "?method=selQuery");// 定义Companystore
	var CompanydataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'CompanydataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '经销商ID',
				id : 'Companycompanyid',
				name : 'companyid',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Companycompanycode',
				name : 'companycode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名(联系人名)',
				id : 'Companyusername',
				name : 'username',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Companycompanyphone',
				name : 'companyphone',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '店铺(供应商名)',
				id : 'Companycompanyshop',
				name : 'companyshop',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '城市和县ID',
				id : 'Companycompanycity',
				name : 'companycity',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '街道地址',
				id : 'Companycompanyaddress',
				name : 'companyaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '描述',
				id : 'Companycompanydetail',
				name : 'companydetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Companycompanystatue',
				name : 'companystatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '账号',
				id : 'Companyloginname',
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
				id : 'Companypassword',
				name : 'password',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Companycreatetime',
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
				id : 'Companyupdtime',
				name : 'updtime',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Companybbar = pagesizebar(Companystore);//定义分页
	var Companygrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Companytitle,
		store : Companystore,
		bbar : Companybbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : '经销商ID',
			dataIndex : 'companyid',
			sortable : true
		}
		, {
			header : '编码',
			dataIndex : 'companycode',
			sortable : true
		}
		, {
			header : '姓名(联系人名)',
			dataIndex : 'username',
			sortable : true
		}
		, {
			header : '手机',
			dataIndex : 'companyphone',
			sortable : true
		}
		, {
			header : '店铺(供应商名)',
			dataIndex : 'companyshop',
			sortable : true
		}
		, {
			header : '城市和县ID',
			dataIndex : 'companycity',
			sortable : true
		}
		, {
			header : '街道地址',
			dataIndex : 'companyaddress',
			sortable : true
		}
		, {
			header : '描述',
			dataIndex : 'companydetail',
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'companystatue',
			sortable : true
		}
		, {
			header : '账号',
			dataIndex : 'loginname',
			sortable : true
		}
		, {
			header : '密码',
			dataIndex : 'password',
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
		],
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CompanydataForm.form.reset();
					Ext.getCmp("Companycompanyid").setEditable (true);
					createTextWindow(basePath + Companyaction + "?method=insAll", "新增", CompanydataForm, Companystore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Companygrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					Ext.getCmp("Companycompanyid").setEditable (false);
					createTextWindow(basePath + Companyaction + "?method=updAll", "修改", CompanydataForm, Companystore);
					CompanydataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Companygrid.getSelection();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请至少选择一条数据！');
						return;
					}
					commonDelete(basePath + Companyaction + "?method=delAll",selections,Companystore,Companykeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Companyaction + "?method=impAll","导入",Companystore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Companyaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Companygrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Companygrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Companykeycolumn.length;i++){
						fid += selections[0].data[Companykeycolumn[i]] + ","
					}
					commonAttach(fid, Companyclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryCompanyaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryCompanyaction").getValue()) {
								Companystore.load();
							} else {
								Companystore.load({
									params : {
										query : Ext.getCmp("queryCompanyaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Companygrid.region = 'center';
	Companystore.on("beforeload",function(){ 
		Companystore.baseParams = {
				query : Ext.getCmp("queryCompanyaction").getValue()
		}; 
	});
	Companystore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Companygrid ]
	});
})
