define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	var ItemView = Talent.ItemView.extend({
		template : _.template('<a id="<%=id %>" class="<%-className %>"  <span><%-name %></span> </a>')
		,tagName : 'li'
		,initialize:function(){

		}
	});
	return Talent.CompositeView.extend({
		template : jst['common/custom-layouts/one/module/hidenav-list']
		,initialize: function(options) {
			this.collection = new Talent.Collection(options.data[options.dataType]);
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
			this.$el.find(".talent_app_selector")[borderData.flag+'Class']("show_border");
			if(borderData.flag=="add"){
				this.$el.find(".talent_app_selector").slideDown();
			}else{
				this.$el.find("a.closed").click();
			}
		}
	});
});
