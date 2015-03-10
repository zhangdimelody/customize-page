define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.ItemView.extend({
		template: jst['common/custom-layouts/two/tms-upload-item']
		,initialize: function() {
			this.listenTo(this.model,"change",this.render);
		}
		,ui:{
			
		}
		,events:function(){
			var events = {};
			return events;
		}
		,onRender: function() {
		}
		,onShow: function() {
		}
		,onClose:function(){
		}
	});
});
