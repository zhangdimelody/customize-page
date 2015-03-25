define('StyleComposite',['talent'],function(Talent){
	return Talent.CompositeView.extend({
		 itemViewContainer : ".style_ul_wrap"
		,template : jst['common/custom-layouts/common/toolbar/style-composite']
		,initialize:function(options){
			if(_.has(options,"inputEdit")){
				this.inputEdit = options.inputEdit;
			}else{
				this.inputEdit = true;
			}
		}
		,onRender:function(){
			
		}
		,onShow:function(){
			this.$el.find("li:last-child dd").addClass("folder_end");
			// 如果是不可编辑
			if(!this.inputEdit){
				this.$el.find("input[type=text]").addClass('disabled').attr('disabled','disabled');
			}
		}
	});
});
