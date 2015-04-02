define('SidebarOptionsTwo',['talent'
		],function(Talent
			,jst
		){
			return {
						nav: {
									path : "ListComposite"
									,initOptions:{ 
												itemView:'ListItemOne'
												,title:"导航栏"
												,dataType : "Collection"
												,popContentView : "PopContentTreeItem"
												,showDirAddBtn : true
												// ,collection:new Talent.Collection(nav)
											}
									,events:{
												"collection" :"change remove reset add"
											}
								}
						,style: {
									path : "StyleComposite"
									,initOptions: { 
												itemView : 'StyleItem'
												,dataType : "Collection"
												// ,collection : new Talent.Collection(style) 
											}
									,events: {
												"collection" :"change"
											}
								}
						
						,tenantInfo: {
										path:"UploadItem"
										,initOptions:{ 
													templateType : "two"
													,dataType : "Model"
													// ,model : new Talent.Model(upload)
												}
										,events:{
													"model" :"change"
												}
									}
						,popdialog:{
										path:"PopDialogLayout"
										,initOptions:{
													// itemView:'views/common/custom-layouts/two/toolbar/userinfo-list-item-view'
													// ,title:"用户设置"
													// ,collection:new Talent.Collection(userInfoData)
												}
										,events:{
													// "collection" :"change remove reset add"
												}
									}
					};
	});