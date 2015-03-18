define(['talent'
	,'templates/common'
	,'views/common/custom-layouts/common/sidebar-view'
	// ,'models/preview-model'
	// ,'models/customization-page-model'
],function(Talent
	,jst
	,SidebarView
	// ,PreviewModel
	// ,CustomizationPageModel
) {
	return Talent.Layout.extend({
		template: jst['common/custom-layouts/common/show-layout']
		,initialize: function(data) {
			var self = this;
			
			this.type = data.type;
			this.initData = data.initData;

			window.onresize = function (){
				self.setRightWidth();
				self.sidebarView.setHeight();
			};

			this.previewList = [
						{
							"title": "tita头部",
							"className": "tita",
							"type": "one",
							"selected": "layout_selected"
						}, {
							"title": "tms头部",
							"className": "tms",
							"type": "two",
							"selected": ""
						}, {
							"title": "腾讯企业邮箱登陆页",
							"className": "qqlogin",
							"type": "four",
							"selected": ""
						}, {
							"title": "用户自定制",
							"className": "customize",
							"type": "three",
							"selected": ""
						}
					];
			// this.pageModel = new CustomizationPageModel({
			// 	productId: 'FFF63665-BD80-46CC-8866-192C64118EFE'
			// });
			
			// this.allData = new Talent.Model();
		}
		,regions: {
			leftRegion: '.left_region'
			,rightRegion: '.right_region'
		}
		,ui:{
			'previewArrow': '.right_wrap .arrow'
		}
		,events:function(){
			var events = {};
			events['click ' + this.ui.previewArrow] = 'clickPreviewArrow';
			return events;
		}
		,onRender: function() {
		}
		,clickPreviewArrow:function(){
			this.ui.previewArrow.removeClass("preview_down preview_up");			
			var operateNode = this.$el.find(".right_wrap");
			if(operateNode.hasClass("right_wrap_hide")){
				this.ui.previewArrow.addClass("preview_up");
				operateNode.removeClass("right_wrap_hide");
				this.$el.find(".right_wrap").css({'width':window.innerWidth-parseInt(this.$el.find(".left_region").css("width"))-15});
				this.setRightWidth();
			}else{
				this.ui.previewArrow.addClass("preview_down");
				operateNode.addClass("right_wrap_hide");
				this.$el.find(".right_wrap").css({'width':"100%" });
			}
		}
		,onShow:function(){
			var self = this;
			// var obj = this.options.queryObject;


			
			// this.allData.url = "app/get/alldata";
			// this.allData.fetch().done(function(resp){
				

				var current = _.findWhere(this.previewList ,{"className" : this.type});
				var name = current.type;
				require(['views/common/custom-layouts/'+name+'/layout-view'
					,'views/common/custom-layouts/'+name+'/sidebar-regions-options']
					,function(LayoutView,SidebarRegionsOptions){
					
					// switch(name){
					// 	case '1':
					// 	//不走这个逻辑
					// 		self.pageModel.getCustomizationData().done(function(backData){
					// 			console.log('获取租户定制数据成功：',backData);
					// 			var data = {};
					// 			data.nav = JSON.parse(JSON.stringify(backData.menu).replace(/text/g,"name"));
					// 			data.userinfo = resp[name].userinfo;
								
					// 			if(_.isEmpty(backData.preference)){
					// 				data.style = resp[name].style;
					// 				data.upload = resp[name].upload;
					// 			}else{
					// 				data.style = _.defaults(backData.preference.style, resp[name].style);
					// 				data.upload = _.defaults(backData.preference.upload, resp[name].upload);
					// 			}
					// 			self.createView(data,LayoutView,SidebarRegionsOptions,name);
					// 		});
					// 		break;
					// 	default:
						var data = self.initData;
						self.createView(data,LayoutView,SidebarRegionsOptions,name);
					// break;
					// };
					
				});	
			// });
			
		}
		,createView:function(data,LayoutView,SidebarRegionsOptions,name){
			this.layoutView = new LayoutView({
												"data" : data
											});
			
			this.sidebarView = new SidebarView({
												"sidebarRegionsOptions" : JSON.parse(JSON.stringify(SidebarRegionsOptions))
												,"data" : data
											});
			var sidebarModel = this.sidebarView.model;
			
			this.listenTo(sidebarModel, 'change', function(){
				this.layoutView.update(sidebarModel.toJSON());
			});

			this.listenTo(this.sidebarView,'hover',function(data){
				if("highlightUI" in this.layoutView){
					this.layoutView.highlightUI(data);
				}
			});
			this.listenTo(this.sidebarView,'customHtml',function(layoutOptions){
				this.layoutView.showCustomize(layoutOptions);
			});

			this.setRightWidth();

			this.rightRegion.show(this.layoutView);
			this.leftRegion.show(this.sidebarView);
			
			this.sidebarView.$el.find("span.save_set_info").attr("type",name);
		}
		,setRightWidth:function(){
			this.$el.find(".right_region").css({'width':window.innerWidth-parseInt(this.$el.find(".left_region").css("width"))-15});
		}
		,onClose:function(){
		}
	});
});
