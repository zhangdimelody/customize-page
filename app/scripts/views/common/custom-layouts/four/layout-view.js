define(['talent'
	,'templates/common'
	,'views/common/custom-layouts/common/module/nav-item-view'
	,'views/common/custom-layouts/four/module/footer-item-view'
	,'views/common/custom-layouts/four/module/images-item-view'
],function(Talent
	,jst
	,ListView
	,FooterItemView
	,ImagesView
) {
	return Talent.Layout.extend({
		template: jst['common/custom-layouts/four/layout-item']
		,initialize: function(data) {
			var data = data.data;

			var navTemplate = jst["common/custom-layouts/four/module/footer-composite"];
			var footerOptions = {
				"template" : navTemplate
				,"itemView" : FooterItemView
				,"collection" : new Talent.Collection(data.nav)
			};
			this.footerView = new ListView(footerOptions);

			this.imagesView = new ImagesView({"model" : new Talent.Model(data.upload)});
		}
		,ui:{
			// item: '.ui-item'
		}
		,regions:{
			"footer" : ".footer_region"
			,"images" : ".images_region"
		}
		,events:function(){
			var events = {};
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
		,update:function(data){
			this.footerView.collection.reset(data.nav);
			this.imagesView.model.set(data.upload);
		}
		,onRender: function() {
		}
		,onShow: function() {
			this.footer.show(this.footerView);
			this.images.show(this.imagesView);
		}
		,onClose:function(){
		}
	});
});
