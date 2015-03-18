define(['talent'
	,'templates/common'
	,'models/one-model'

	,'views/common/custom-layouts/common/toolbar/upload-item-view'
	,'views/common/custom-layouts/common/toolbar/list-composite-view'
	,'views/common/custom-layouts/common/toolbar/style-composite-view'
	,'views/common/custom-layouts/common/toolbar/style-color-item-view'
	,'views/common/custom-layouts/one/toolbar/nav-list-item-view'
	,'views/common/custom-layouts/one/toolbar/userinfo-list-item-view'
],function(Talent
	,jst
	,OneModel
){
	this.oneModel = new OneModel;
	this.oneModel.getSidebarData();
	return {
				"color": {
							path:"StyleComposite"
							,initOptions:{
										itemView : "StyleItem"
										,dataType : "Collection"
										// ,collection : new Talent.Collection(styleData)
									}
							,events:{
										 "collection" :"change"
									}
						}
				,"tenantInfo":{
							path:"UploadItem"
							,initOptions:{
										// template : jst["common/custom-layouts/one/toolbar/upload-item"]
										templateType : "one"
										,dataType : "Model"
										// ,model : new Talent.Model(uploadData)
									}
							,events:{
										 "model" :"change"
									}
						}
				,"nav":{
							path:"ListComposite"
							,initOptions:{
										itemView:"ListItemOne"
										,title:"左侧导航栏"
										,dataType : "Collection"
										,popContentView : "PopContentTreeItem"
										// ,collection:new Talent.Collection(titaLeftNavList)
									}
							,events:{
										 "collection" :"change remove reset add"
									}
						}
				,"secondaryNav":{
							path:"ListComposite"
							,initOptions:{
										itemView:"ListItemOne"
										,title:"下拉导航栏"
										,dataType : "Collection"
										,popContentView : "PopContentTreeItem"
										// ,collection:new Talent.Collection(titaHideNavList)
									}
							,events:{
										 "collection" :"change remove reset add"
									}
						}
				,"popdialog":{
								path:"PopDialogLayout"
								,initOptions:{
										}
								,events:{
										}
							}
				// ,"userinfo":{
				// 				path:"views/common/custom-layouts/common/toolbar/list-composite-view"
				// 				,initOptions:{
				// 							itemView:"views/common/custom-layouts/one/toolbar/userinfo-list-item-view"
				// 							,title:"用户信息导航栏"
				// 							,dataType : "Collection"
				// 							,popContentView : "views/common/custom-layouts/common/pop-content-tree-item-view"
				// 							// ,collection:new Talent.Collection(userInfoList)
				// 						}
				// 				,events:{
				// 							 "collection" :	"change remove reset add"
				// 						}
				// 			}
				// ,"usersetting":{
				// 				path:"views/common/custom-layouts/common/toolbar/list-composite-view"
				// 				,initOptions:{
				// 							itemView:'views/common/custom-layouts/one/toolbar/nav-list-item-view'
				// 							,title:"右侧用户设置"
				// 							,dataType : "Collection"
				// 							,popContentView : "views/common/custom-layouts/common/pop-content-tree-item-view"
				// 							// ,collection:new Talent.Collection(userSettingList)
				// 						}
				// 				,events:{
				// 							 "collection" :	"change remove reset add"
				// 						}
				// 			}
			}
})