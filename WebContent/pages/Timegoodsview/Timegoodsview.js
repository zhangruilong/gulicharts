Ext.onReady(function() {
	var Timegoodsviewclassify = "秒杀商品";
	var Timegoodsviewtitle = "当前位置:业务管理》" + Timegoodsviewclassify;
	var Timegoodsviewaction = "TimegoodsviewAction.do";
	var Timegoodsviewfields = ['timegoodsid'
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
	var Timegoodsviewkeycolumn = [ 'timegoodsid' ];// 主键
	var Timegoodsviewstore = dataStore(Timegoodsviewfields, basePath + Timegoodsviewaction + "?method=selQuery");// 定义Timegoodsviewstore
	var TimegoodsviewdataForm = Ext.create('Ext.form.Panel', {// 定义新增和修改的FormPanel
		id:'TimegoodsviewdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			xtype : 'textfield',
			id : 'Timegoodsviewtimegoodsid',
			name : 'timegoodsid',
			hidden : true
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodscompany',
				id : 'Timegoodsviewtimegoodscompany',
				name : 'timegoodscompany',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodscode',
				id : 'Timegoodsviewtimegoodscode',
				name : 'timegoodscode',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsname',
				id : 'Timegoodsviewtimegoodsname',
				name : 'timegoodsname',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsdetail',
				id : 'Timegoodsviewtimegoodsdetail',
				name : 'timegoodsdetail',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsunits',
				id : 'Timegoodsviewtimegoodsunits',
				name : 'timegoodsunits',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsunit',
				id : 'Timegoodsviewtimegoodsunit',
				name : 'timegoodsunit',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsprice',
				id : 'Timegoodsviewtimegoodsprice',
				name : 'timegoodsprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsorgprice',
				id : 'Timegoodsviewtimegoodsorgprice',
				name : 'timegoodsorgprice',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsnum',
				id : 'Timegoodsviewtimegoodsnum',
				name : 'timegoodsnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsclass',
				id : 'Timegoodsviewtimegoodsclass',
				name : 'timegoodsclass',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsimage',
				id : 'Timegoodsviewtimegoodsimage',
				name : 'timegoodsimage',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsstatue',
				id : 'Timegoodsviewtimegoodsstatue',
				name : 'timegoodsstatue',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'createtime',
				id : 'Timegoodsviewcreatetime',
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
				id : 'Timegoodsviewcreator',
				name : 'creator',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'allnum',
				id : 'Timegoodsviewallnum',
				name : 'allnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'surplusnum',
				id : 'Timegoodsviewsurplusnum',
				name : 'surplusnum',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsseq',
				id : 'Timegoodsviewtimegoodsseq',
				name : 'timegoodsseq',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'timegoodsscope',
				id : 'Timegoodsviewtimegoodsscope',
				name : 'timegoodsscope',
				maxLength : 100
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'companycode',
				id : 'Timegoodsviewcompanycode',
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
				id : 'Timegoodsviewusername',
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
				id : 'Timegoodsviewcompanyphone',
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
				id : 'Timegoodsviewcompanyshop',
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
				id : 'Timegoodsviewcompanyaddress',
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
				id : 'Timegoodsviewcompanycity',
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
				id : 'Timegoodsviewcompanydetail',
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
				id : 'Timegoodsviewloginname',
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
				id : 'Timegoodsviewcompanystatue',
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
				id : 'Timegoodsviewcitycode',
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
				id : 'Timegoodsviewcityname',
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
				id : 'Timegoodsviewcityparent',
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
				id : 'Timegoodsviewcitydetail',
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
				id : 'Timegoodsviewcitystatue',
				name : 'citystatue',
				maxLength : 100
			} ]
		}
		]
	});
	
	var Timegoodsviewbbar = pagesizebar(Timegoodsviewstore);//定义分页
	var Timegoodsviewgrid =  Ext.create('Ext.grid.Panel', {
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Timegoodsviewtitle,
		store : Timegoodsviewstore,
		bbar : Timegoodsviewbbar,
	    selModel: {
	        type: 'spreadsheet',
	        checkboxSelect: true
	     },
		columns : [{// 改
			header : 'timegoodsid',
			dataIndex : 'timegoodsid',
			hidden : true
		}
		, {
			header : 'timegoodscompany',
			dataIndex : 'timegoodscompany',
			sortable : true
		}
		, {
			header : 'timegoodscode',
			dataIndex : 'timegoodscode',
			sortable : true
		}
		, {
			header : 'timegoodsname',
			dataIndex : 'timegoodsname',
			sortable : true
		}
		, {
			header : 'timegoodsdetail',
			dataIndex : 'timegoodsdetail',
			sortable : true
		}
		, {
			header : 'timegoodsunits',
			dataIndex : 'timegoodsunits',
			sortable : true
		}
		, {
			header : 'timegoodsunit',
			dataIndex : 'timegoodsunit',
			sortable : true
		}
		, {
			header : 'timegoodsprice',
			dataIndex : 'timegoodsprice',
			sortable : true
		}
		, {
			header : 'timegoodsorgprice',
			dataIndex : 'timegoodsorgprice',
			sortable : true
		}
		, {
			header : 'timegoodsnum',
			dataIndex : 'timegoodsnum',
			sortable : true
		}
		, {
			header : 'timegoodsclass',
			dataIndex : 'timegoodsclass',
			sortable : true
		}
		, {
			header : 'timegoodsimage',
			dataIndex : 'timegoodsimage',
			sortable : true
		}
		, {
			header : 'timegoodsstatue',
			dataIndex : 'timegoodsstatue',
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
			header : 'allnum',
			dataIndex : 'allnum',
			sortable : true
		}
		, {
			header : 'surplusnum',
			dataIndex : 'surplusnum',
			sortable : true
		}
		, {
			header : 'timegoodsseq',
			dataIndex : 'timegoodsseq',
			sortable : true
		}
		, {
			header : 'timegoodsscope',
			dataIndex : 'timegoodsscope',
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
							window.location.href = basePath + Timegoodsviewaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Timegoodsviewgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Timegoodsviewgrid.getSelection();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Timegoodsviewkeycolumn.length;i++){
						fid += selections[0].data[Timegoodsviewkeycolumn[i]] + ","
					}
					commonAttach(fid, Timegoodsviewclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'queryTimegoodsviewaction',
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("queryTimegoodsviewaction").getValue()) {
								Timegoodsviewstore.load();
							} else {
								Timegoodsviewstore.load({
									params : {
										query : Ext.getCmp("queryTimegoodsviewaction").getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Timegoodsviewgrid.region = 'center';
	Timegoodsviewstore.on("beforeload",function(){ 
		Timegoodsviewstore.baseParams = {
				query : Ext.getCmp("queryTimegoodsviewaction").getValue()
		}; 
	});
	Timegoodsviewstore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Timegoodsviewgrid ]
	});
})
