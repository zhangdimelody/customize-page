define(['talent'
	,'templates/common'

],function(Talent
	,jst
){
	
	return {
				"style": {
							path:"views/common/custom-layouts/common/toolbar/style-composite-view"
							,initOptions:{
										itemView : "views/common/custom-layouts/common/toolbar/style-color-item-view"
										,dataType : "Collection"
										// ,collection : new Talent.Collection(styleData)
									}
							,events:{
										 "collection" :"change"
									}
						}
				,"upload":{
							path:"views/common/custom-layouts/common/toolbar/upload-item-view"
							,initOptions:{
										// template : jst["common/custom-layouts/one/toolbar/upload-item"]
										templateType : "four"
										,dataType : "Model"
										// ,model : new Talent.Model(uploadData)
									}
							,events:{
										 "model" :"change"
									}
						}
				,"nav":{
							path:"views/common/custom-layouts/common/toolbar/list-composite-view"
							,initOptions:{
										itemView:"views/common/custom-layouts/one/toolbar/nav-list-item-view"
										,title:"底部链接"
										,dataType : "Collection"
										,popContentView : "views/common/custom-layouts/common/pop-content-tree-item-view"
										// ,collection:new Talent.Collection(titaLeftNavList)
									}
							,events:{
										 "collection" :"change remove reset add"
									}
						}
				,"popdialog":{
								path:"views/common/custom-layouts/common/popdialog-layout"
								,initOptions:{
										}
								,events:{
										}
							}
			}
})