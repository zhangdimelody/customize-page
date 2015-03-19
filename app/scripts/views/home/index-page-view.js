define(['talent'
	,'templates/home'
	,'views/common/custom-layouts/common/show-layout'
],function(Talent
	,jst
	,ShowLayoutView
) {
	/**
	 * Inner main view class
	 * @class HomeView~MainView
	 * @extends {Backbone.View}
	 */	
	var MainView = Talent.Layout.extend(
		/** @lends HomeView~MainView.prototype */
	{
		template: jst['home/index-page']
		,className: 'home-page-container'
		,initialize: function() {
			var resp = {
				type : "tita"
				,commonData :  {
							color : [{
										id : "1"
										,name : "导航栏文字颜色"
										,selector : "ul._tt_sidenav span"
										,textcolor : "#ccc"
										,highlightTrigger : "nav_color"
										,className : "home_ttsn"
									}],
							tenantInfo : {
											tenantLogo : "http://cache.tita.com/Image/110006/f3cfa837b96d40988862a5a207193986.png"
											,tenantName : "北森"
										},
							nav : [
												{
													id : "0"
													,name : "动态"
													,className : "home_ttsn"
													,href : "#active"
													,backgroudImage : ""
												}
												,{
													id : "1"
													,name : "工作台"
													,className : "bench_ttsn"
													,href : "#plat"
													,backgroudImage : ""
												}
									],
							secondaryNav : [
												{
													id : "500"
													,name : "职业发展"
													,className : "app_500"
													,href : "#plat"
													,backgroudImage : ""
												}
												,{
													id : "400"
													,name : "绩效管理"
													,className : "app_400"
													,href : "#plat"
													,backgroudImage : ""
												}
												,{
													id : "100"
													,name : "iTalent"
													,className : "app_100"
													,href : "#plat"
													,backgroudImage : ""
												}
										]
							// 新增模块
							// ,userSetting : {
							// 		options : {
							// 					path:"ListComposite"
							// 					,initOptions:{
							// 								itemView:'ListItemOne'
							// 								,title:"右侧用户设置"
							// 								,dataType : "Collection"
							// 								,popContentView : "PopContentTreeItem"
							// 								,popTreeUrl : "/tms/custom/getfunctions"
							// 							}
							// 					,events:{
							// 								 "collection" :	"change remove reset add"
							// 							}
							// 				}
							// 		,data: [
							// 			{ 	
							// 				id : "0"
							// 				,name : "个人主页"
							// 				,className : "profile_ltthn"
							// 				,href : "#italent/home?appid=1&amp;apptype=1&amp;name=TalentProfile-record"
							// 			}
							// 			,{
							// 				id : "1"
							// 				,name : "退出登录"
							// 				,className : ""
							// 				,href : "/Account/Logout"
							// 			}
							// 		]
							// }
				}
				,contentViews : [
					{
						name:"titaHeader"
						,path: 'views/common/custom-layouts/one/tita-header-item-view'
						,options:{
						}
					}
					,{
						name:"titaLeft"
						,path: 'views/common/custom-layouts/one/module/leftnav-list-view'
						,options:{
							dataType : "nav"
						}
					}
					,{
						name:"titaHideList"
						,path: 'views/common/custom-layouts/one/module/hidenav-list-view'
						,options:{
							dataType : "secondaryNav"
						}
					}
				]
				,sidebarViews : {
					nav : {
						popTreeUrl : "/tms/custom/getfunctions"
					}
					,secondaryNav : {
						popTreeUrl : "/tms/custom/getfunctions"
					}
				}
				,relationMap: {
					"nav_color" : "titaLeft"
					,"nav" : "titaLeft"
					,"tenantInfo" : "titaHeader"
					,"secondaryNav" : "titaHideList"
					,"userSetting" : "titaHeader"
				}
			};
			this.showLayoutView = new ShowLayoutView(resp);
			// 监听保存后的数据
			this.listenTo(this.showLayoutView,"saveConfigData",function(data){
				console.log(data);
			},this);
		}
		,regions: {
			showRegion: '.show_region'
		}
		,ui:{
		}
		,events:function(){
			var events = {};
			// events['click ' + this.ui.previewArrow] = 'clickPreviewArrow';
			return events;
		}
		,onRender: function() {
		}
		,onShow:function(){
			this.showRegion.show(this.showLayoutView);
		}
		,onClose:function(){
		}
	});


	return Talent.BasePageView.extend({
		mainViewClass : MainView
		,layout: 'empty-layout'
		,pageTitle: '页面定制系统'
	});
});
