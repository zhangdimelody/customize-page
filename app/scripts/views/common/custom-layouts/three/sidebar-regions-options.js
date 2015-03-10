define(['talent'
	,'templates/common'
	
],function(Talent
	,jst
){
	// var def = $.Deferred;
	// this.twoModel = new TwoModel;
	// this.twoModel.fetch().done(function(resp){

	// this.twoModel.getData();
	return {
				customize: {
								path : "views/common/custom-layouts/common/toolbar/customize-layout-view"
								,initOptions: { 
											dataType : "Model"
										}
								,events: {
											"model" :"change"
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


			};
		// def.resolve();
	// });

})