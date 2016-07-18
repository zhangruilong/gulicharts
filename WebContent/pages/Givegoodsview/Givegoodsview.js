Ext.onReady(function() {
	var Givegoodsviewclassify = "买赠商品";
	var Givegoodsviewtitle = "当前位置:业务管理》" + Givegoodsviewclassify;
	var Givegoodsviewaction = "GivegoodsviewAction.do";
	var Givegoodsviewfields = ['givegoodsid'
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
	        			    ,'companycode' 
	        			    ,'username' 
	        			    ,'companyphone' 
	        			    ,'companyshop' 
	        			    ,'companyaddress' 
	        			    ,'companycity' 
	        			    ,'companydetail' 
	        			    ,'loginname' 
	        			    ,'companystatue' 
	        			    ,'citycode' 
	        			    ,'cityname' 
	        			    ,'cityparent' 
	        			    ,'citydetail' 
	        			    ,'citystatue' 
	        			      ];// 全部字段
	var Givegoodsviewkeycolumn = [ 'givegoodsid' ];// 主键
	var Givegoodsviewstore = dataStore(Givegoodsviewfields, basePath + Givegoodsviewaction + "?method=selQuery");// 定义Givegoodsviewstore
	var GivegoodsviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'GivegoodsviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'textfield',
			id : 'Givegoodsviewgivegoodsid',
			name : 'givegoodsid',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodscompany',
				id : 'Givegoodsviewgivegoodscompany',
				name : 'givegoodscompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodscode',
				id : 'Givegoodsviewgivegoodscode',
				name : 'givegoodscode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsname',
				id : 'Givegoodsviewgivegoodsname',
				name : 'givegoodsname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsdetail',
				id : 'Givegoodsviewgivegoodsdetail',
				name : 'givegoodsdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsunits',
				id : 'Givegoodsviewgivegoodsunits',
				name : 'givegoodsunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsunit',
				id : 'Givegoodsviewgivegoodsunit',
				name : 'givegoodsunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsprice',
				id : 'Givegoodsviewgivegoodsprice',
				name : 'givegoodsprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsnum',
				id : 'Givegoodsviewgivegoodsnum',
				name : 'givegoodsnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsclass',
				id : 'Givegoodsviewgivegoodsclass',
				name : 'givegoodsclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsimage',
				id : 'Givegoodsviewgivegoodsimage',
				name : 'givegoodsimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsstatue',
				id : 'Givegoodsviewgivegoodsstatue',
				name : 'givegoodsstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'createtime',
				id : 'Givegoodsviewcreatetime',
				name : 'createtime',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'creator',
				id : 'Givegoodsviewcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsseq',
				id : 'Givegoodsviewgivegoodsseq',
				name : 'givegoodsseq',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'givegoodsscope',
				id : 'Givegoodsviewgivegoodsscope',
				name : 'givegoodsscope',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companycode',
				id : 'Givegoodsviewcompanycode',
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
				id : 'Givegoodsviewusername',
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
				id : 'Givegoodsviewcompanyphone',
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
				id : 'Givegoodsviewcompanyshop',
				name : 'companyshop',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companyaddress',
				id : 'Givegoodsviewcompanyaddress',
				name : 'companyaddress',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companycity',
				id : 'Givegoodsviewcompanycity',
				name : 'companycity',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companydetail',
				id : 'Givegoodsviewcompanydetail',
				name : 'companydetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'loginname',
				id : 'Givegoodsviewloginname',
				name : 'loginname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companystatue',
				id : 'Givegoodsviewcompanystatue',
				name : 'companystatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'citycode',
				id : 'Givegoodsviewcitycode',
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
				id : 'Givegoodsviewcityname',
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
				id : 'Givegoodsviewcityparent',
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
				id : 'Givegoodsviewcitydetail',
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
				id : 'Givegoodsviewcitystatue',
				name : 'citystatue',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Givegoodsviewbbar = pagesizebar(Givegoodsviewstore);//定义分页
	var Givegoodsviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Givegoodsviewtitle,
		store : Givegoodsviewstore,
		bbar : Givegoodsviewbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'givegoodsid',
			dataIndex : 'givegoodsid',
			hidden : true
		}
		, {
			header : 'givegoodscompany',
			dataIndex : 'givegoodscompany',
			sortable : true
		}
		, {
			header : 'givegoodscode',
			dataIndex : 'givegoodscode',
			sortable : true
		}
		, {
			header : 'givegoodsname',
			dataIndex : 'givegoodsname',
			sortable : true
		}
		, {
			header : 'givegoodsdetail',
			dataIndex : 'givegoodsdetail',
			sortable : true
		}
		, {
			header : 'givegoodsunits',
			dataIndex : 'givegoodsunits',
			sortable : true
		}
		, {
			header : 'givegoodsunit',
			dataIndex : 'givegoodsunit',
			sortable : true
		}
		, {
			header : 'givegoodsprice',
			dataIndex : 'givegoodsprice',
			sortable : true
		}
		, {
			header : 'givegoodsnum',
			dataIndex : 'givegoodsnum',
			sortable : true
		}
		, {
			header : 'givegoodsclass',
			dataIndex : 'givegoodsclass',
			sortable : true
		}
		, {
			header : 'givegoodsimage',
			dataIndex : 'givegoodsimage',
			sortable : true
		}
		, {
			header : 'givegoodsstatue',
			dataIndex : 'givegoodsstatue',
			sortable : true
		}
		, {
			header : 'createtime',
			dataIndex : 'createtime',
			sortable : true
		}
		, {
			header : 'creator',
			dataIndex : 'creator',
			sortable : true
		}
		, {
			header : 'givegoodsseq',
			dataIndex : 'givegoodsseq',
			sortable : true
		}
		, {
			header : 'givegoodsscope',
			dataIndex : 'givegoodsscope',
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
			header : 'companyaddress',
			dataIndex : 'companyaddress',
			sortable : true
		}
		, {
			header : 'companycity',
			dataIndex : 'companycity',
			sortable : true
		}
		, {
			header : 'companydetail',
			dataIndex : 'companydetail',
			sortable : true
		}
		, {
			header : 'loginname',
			dataIndex : 'loginname',
			sortable : true
		}
		, {
			header : 'companystatue',
			dataIndex : 'companystatue',
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
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Givegoodsviewaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Givegoodsviewgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Givegoodsviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Givegoodsviewkeycolumn.length;i++){
						fid += selections[0].data[Givegoodsviewkeycolumn[i]] + ","
					}
					commonAttach(fid, Givegoodsviewclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryGivegoodsviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryGivegoodsviewaction").getValue()) {
								Givegoodsviewstore.load();
							} else {
								Givegoodsviewstore.load({
									params : {
										query : Ext.getCmp("queryGivegoodsviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Givegoodsviewgrid.region = 'center';
	Givegoodsviewstore.on("beforeload",function(){ 
		Givegoodsviewstore.baseParams = {
				query : Ext.getCmp("queryGivegoodsviewaction").getValue()
		}; 
	});
	Givegoodsviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Givegoodsviewgrid ]
	});
})
