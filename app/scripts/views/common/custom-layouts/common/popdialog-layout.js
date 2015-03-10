define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.Layout.extend({
		template: jst['common/custom-layouts/common/popdialog-layout']
		,initialize: function() {
		}
		,ui:{
			// 'itemView': '.item_view'
			 'cancelPop' : '.pop_wrap span.cancel_btn'
			,'confirmPop' : '.pop_wrap span.confirm_btn'
		}
		,regions:{
			'contentWrap' : '.content_wrap'	
		}
		,events:function(){
			var events = {};
			events['click ' + this.ui.item] = 'eventHandler';
			events['click ' + this.ui.cancelPop] = 'cancelPop';
			events['click ' + this.ui.confirmPop] = 'confirmPop';
			return events;
		}
		,showContent:function(obj){
			this.contentWrap.show(obj.contentView);
			this.$el.find("h3 .title").html(obj.title);
			this.$el.find(".pop_wrap").show().css(obj.triggerNode.offset());
		}
		,confirmPop:function(){
			this.contentWrap.currentView.onSubmit();
		}
		,cancelPop:function(){
			this.$el.find(".pop_wrap").hide();
		}
		,onRender: function() {
		}
		,onShow: function() {
		}
		,onClose:function(){
		}
	});
});
