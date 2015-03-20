define('StyleComposite',['talent'],function(Talent){
	return Talent.CompositeView.extend({
		 itemViewContainer : ".style_ul_wrap"
		,template : jst['common/custom-layouts/common/toolbar/style-composite']
		,initialize:function(){
		}
		,onRender:function(){
			
		}
		,onShow:function(){
			this.$el.find("li:last-child dd").addClass("folder_end");
		}
	});
});
