define(['talent'
	,'templates/common'
	,'views/common/custom-layouts/common/base-layout'
	,'models/two-model'
	,'models/data-nested-model'
	,'collections/data-nested-collection'
	,'views/common/custom-layouts/two/tms-upload-item-view'
	,'views/common/custom-layouts/common/module/nav-item-view'
	,'views/common/custom-layouts/two/module/nav-list-item-view'
	,'views/common/custom-layouts/two/module/userinfo-list-item-view'
],function(Talent
	,jst
	,BaseLayout
	,TwoModel
	,DataNestedModel
	,DataNestedCollection
	,TmsUploadView
	,ListView
	,NavItemView
	,UserinfoItemView
) {
	return BaseLayout.extend({
		template: jst['common/custom-layouts/two/layout-item']
		,initialize: function(options) {
			var self = this;
			var data =	options.data;
			this.tmsUploadView = new TmsUploadView({ model : new DataNestedModel(data.upload)});

			var navTemplate = jst['common/custom-layouts/two/module/nav-list'];
			var tmsoptions = {
				"template" : navTemplate
				,"itemView" : NavItemView
				,"collection" : new DataNestedCollection(data.nav)
			};
			this.navView = new ListView(tmsoptions);


			
			var userNavTemplate = jst['common/custom-layouts/two/module/userinfo-list'];
			var useroptions = {
				"template" : userNavTemplate
				,"itemView" : UserinfoItemView
				,"collection" :new DataNestedCollection(data.userinfo)
			};
			this.userView = new ListView(useroptions);
			
			this.hoverShowBorderMap = {
				"tmsnav_hover" : {"navView":"ul.list_nav"}
				,"upload_hover" : {"tmsUploadView":"h1.logo"}
				,"userinfo_hover" : {"userView":"ul.list_gnb"}
				,"nav_hover" :  {"navView":"ul.list_nav" }
				,"nav_color_hover" :  {"navView":"ul.list_nav" }
				,"userinfo_color_hover" :  {"userView":"ul.list_gnb"}
			};
			this.hoverEventMap = {
				"secondselect_hover" :
						[
							{"userView":{"a.ico_arr":"click"}}
							,{"userView":{".productList":"hide"}}
						]
				};
		}
		,regions:{
			'headRegion' : ".head_region"
			,'navRegion' : ".nav_region"
			,'userRegion' : ".user_region"
		}
		,ui:{
			// item:s '.ui-item'
		}
		,events:function(){
			var events = {};
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
		,onRender: function() {
		}
		,update:function(data){
			this.tmsUploadView.model.set(data.upload);
			this.navView.collection.reset(data.nav);
			this.userView.collection.reset(data.userinfo);
		}
		,onShow: function() {
			this.headRegion.show(this.tmsUploadView);
			this.navRegion.show(this.navView);
			this.userRegion.show(this.userView);
		}
		,onClose:function(){
		}
	});
});
