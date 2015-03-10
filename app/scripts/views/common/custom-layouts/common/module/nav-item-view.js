define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	
	return Talent.CompositeView.extend({
		initialize: function(options) {
			this.template = options.template;
		}
		,itemViewContainer : ".nav_wrap"
		,ui:{
			"icoArr" : "a.ico_arr"
			// item: '.ui-item'
		}
		,events:function(){
			var events = {};
			events['click ' + this.ui.icoArr] = 'clickIcoArr';
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
		,clickIcoArr:function(e){
			this.$el.find(e.currentTarget).parent().next().show();
		}
		,onRender: function() {
		}
		,onShow: function() {
		}
		,onClose:function(){
		}
	});
});
