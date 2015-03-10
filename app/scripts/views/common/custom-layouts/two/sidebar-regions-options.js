define(['talent'
	,'templates/common'
	// ,'models/two-model'

	,'views/common/custom-layouts/common/toolbar/style-color-item-view'
	,'views/common/custom-layouts/two/toolbar/nav-list-item-view'
	,'views/common/custom-layouts/two/toolbar/userinfo-list-item-view'
	
	,'views/common/custom-layouts/common/toolbar/list-composite-view'
	,'views/common/custom-layouts/common/toolbar/style-composite-view'
	,'views/common/custom-layouts/common/toolbar/upload-item-view'
	,"views/common/custom-layouts/common/popdialog-layout"
],function(Talent
	,jst
	// ,TwoModel
){
	// var def = $.Deferred;
	// this.twoModel = new TwoModel;
	// this.twoModel.fetch().done(function(resp){

	// this.twoModel.getData();
	return {
				nav: {
							path : "views/common/custom-layouts/common/toolbar/list-composite-view"
							,initOptions:{ 
										itemView:'views/common/custom-layouts/two/toolbar/nav-list-item-view'
										,title:"导航栏"
										,dataType : "Collection"
										,popContentView : "views/common/custom-layouts/common/pop-content-tree-item-view"
										// ,collection:new Talent.Collection(nav)
									}
							,events:{
										"collection" :"change remove reset add"
									}
						}
				,style: {
							path : "views/common/custom-layouts/common/toolbar/style-composite-view"
							,initOptions: { 
										itemView : 'views/common/custom-layouts/common/toolbar/style-color-item-view'
										,dataType : "Collection"
										// ,collection : new Talent.Collection(style) 
									}
							,events: {
										"collection" :"change"
									}
						}
				
				,upload: {
								path:"views/common/custom-layouts/common/toolbar/upload-item-view"
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
								path:"views/common/custom-layouts/common/popdialog-layout"
								,initOptions:{
											// itemView:'views/common/custom-layouts/two/toolbar/userinfo-list-item-view'
											// ,title:"用户设置"
											// ,collection:new Talent.Collection(userInfoData)
										}
								,events:{
											// "collection" :"change remove reset add"
										}
							}
				// ,"userinfo": {
				// 				path:"views/common/custom-layouts/common/toolbar/list-composite-view"
				// 				,initOptions:{
				// 							itemView:'views/common/custom-layouts/two/toolbar/userinfo-list-item-view'
				// 							,title:"用户设置"
				// 							,collection:new Talent.Collection(userInfoData)
				// 						}
				// 				,events:{
				// 							"collection" :"change remove reset add"
				// 						}
				// 			}
			};
		// def.resolve();
	// });

})