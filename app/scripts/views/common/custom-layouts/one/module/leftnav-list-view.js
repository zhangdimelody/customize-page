define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	var ItemView = Talent.ItemView.extend({
		template : _.template('<a href="javascript:;" class="<%-className %>"> <strong></strong> <span><%-name %></span> </a>')
		,tagName : 'li'
		,initialize:function(){
			
		}
	});
	return Talent.CompositeView.extend({
		template : jst['common/custom-layouts/one/module/leftnav-list']
		,initialize: function(options) {
			this.collection = new Talent.Collection(options.data.nav);
		}
		,itemView : ItemView
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
		,highlightUI:function(borderData){
			this.$el.find("ul._tt_sidenav")[borderData.flag+'Class']("show_border");
		}
		,update:function(newData){
			this.collection.reset(newData.nav);
		}
	});
});
