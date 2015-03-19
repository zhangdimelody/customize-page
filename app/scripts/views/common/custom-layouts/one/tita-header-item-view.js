define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.ItemView.extend({
		template: jst['common/custom-layouts/one/tita-header-item']
		,initialize: function(options) {
			this.model = new Talent.Model(options.data);
			this.listenTo(this.model,"change",this.render);
		}
		,ui:{
			// item: '.ui-item'
		}
		,events:function(){
			var events = {};
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
		,onRender: function() {
		}
		,onShow: function() {
		}
		,onClose:function(){
		}
		,highlightUI:function(borderData){
			switch(borderData.triggerName){
				case "tenantInfo":
					this.$el.find("._tt_header a.logo,._tt_header span.brand,li.logout_tthn")[borderData.flag+'Class']("show_border");
					break;
				case "userSetting":
					this.$el.find("li.logout_tthn a.namewrap_tthn")[borderData.flag+'Class']("show_border");
					break;
			}
			if((borderData.flag=="add")&&(borderData.triggerName=="userSetting")){
				this.$el.find("li.logout_tthn .namewrap_tthn").click();
			}else{
				this.$el.find("ul.menu_ltthn").hide();
			}
		}
		,update:function(newData){
			this.model.set(newData);
		}
	});
});
