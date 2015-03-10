define(['talent'
	,'templates/common'
	,'views/common/custom-layouts/common/base-layout'
	,'models/one-model'
	,'models/data-nested-model'
	,'collections/data-nested-collection'
	,'views/common/custom-layouts/one/tita-header-item-view'
	,'views/common/custom-layouts/common/module/nav-item-view'
	,'views/common/custom-layouts/one/module/leftnav-list-item-view'
	,'views/common/custom-layouts/one/module/hidenav-list-item-view'
],function(Talent
	,jst
	,BaseLayout
	,OneModel
	,DataNestedModel
	,DataNestedCollection
	,TitaHeaderView
	,ListView
	,LeftNavItemView
	,HideNavItemView
) {
	return BaseLayout.extend({
		template: jst['common/custom-layouts/one/layout-item']
		,initialize: function() {
			var self = this;
			this.oneModel = new OneModel;
			this.oneModel.getLayoutData();

			_.each(styleData,function(item){
				self.addColorStyle(item.className , item.textcolor);
			});

			var hideNavTemplate = jst['common/custom-layouts/one/module/hidenav-list'];
			var leftNavTemplate = jst['common/custom-layouts/one/module/leftnav-list'];
			this.titaHeaderView = new TitaHeaderView({model : new DataNestedModel(headerinfo)});
			
			var optionsLeft = {
				"template" : leftNavTemplate
				,"itemView" : LeftNavItemView
				,"collection" : new DataNestedCollection(titaLeftNavList)
			};
			var optionsHide = {
				"template" : hideNavTemplate
				,"itemView" : HideNavItemView
				,"collection" : new DataNestedCollection(titaHideNavList)
			};
			this.titaLeftListView = new ListView(optionsLeft);
			this.titaHideListView = new ListView(optionsHide);

			
			this.hoverShowBorderMap = {
				"nav_color_hover" : {"titaLeftListView":"ul._tt_sidenav"}
				,"nav_hover" : {"titaLeftListView":"ul._tt_sidenav"}
				,"upload_hover" : {"titaHeaderView":"._tt_header a.logo,._tt_header span.brand,li.logout_tthn"}
				,"userinfo_hover" :  {"titaHeaderView":".userinfo_wrap"}
				,"usersetting_hover" : {"titaHeaderView":"li.logout_tthn a.namewrap_tthn"}
				,"hidenav_hover" :  {"titaHideListView":".talent_app_selector" }
			};
			this.hoverEventMap = {
				"hidenav_hover" :
						[
							{"titaHeaderView":{"span.italent_show_app":"click"}}
							,{"titaHideListView":{"a.closed":"click"}}
						]
				,"usersetting_hover" :
						[
							{"titaHeaderView":{"li.logout_tthn a.namewrap_tthn":"click"}}
							,{"titaHeaderView":{"ul.menu_ltthn":"hide"}}
						]
			};
		}
		,regions: {
			"headRegion" : ".head_region"
			,"hideNavRegion" : ".hide_nav_region"
			,"leftNavRegion" : ".left_nav_region"
		}
		,ui:{
			// item: '.ui-item'
		}
		,events:function(){
			var events = {};
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
		,update:function(newData){
			var headerinfo =  {
				"uploadinfo" : newData.upload
				,"userinfo" : newData.userinfo
				,"usersetting" : newData.usersetting
			}
			
			this.titaHeaderView.model.set(headerinfo);
			this.titaLeftListView.collection.reset(newData.nav);
			this.titaHideListView.collection.reset(newData.hidenav);
		}
		,onRender: function() {
		}
		,onShow: function() {
			this.headRegion.show(this.titaHeaderView);
			this.leftNavRegion.show(this.titaLeftListView);
			this.hideNavRegion.show(this.titaHideListView);
		}
		,onClose:function(){
		}
	});
});
