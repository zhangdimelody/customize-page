define('PopContentTreeItem',['talent'
	,'templates/common'
	,'models/customization-page-model'
],function(Talent
	,jst
	,CustomizationPageModel
) {
	return Talent.ItemView.extend({
			template : _.template('<ul id="popOrg" class="ztree"></ul>')
			,initialize:function(){
				
				// 这是tree的setting
				this.setting = {
					data: {
						key: {
							name: "text",
							children:"functions",
							url:"javascript:;" //先置为不存在的属性
						},
						simpleData: {
							enable: true
						}
					}
				};

			}
			,onSubmit:function(){ 
				var checkedNode = $.fn.zTree.getZTreeObj("popOrg").getSelectedNodes();
				var selectedNode = {
								"id" : checkedNode[0].id
								,"name" : checkedNode[0].text
								,"category": checkedNode[0].category
								,"type" : checkedNode[0].type
								,"url" : checkedNode[0].url
								,"className" : "plan_ttsn"
							};
				this.trigger("selected",selectedNode);
				this.$el.parent().parent().hide();
			}
			,onCancel:function(){
			}
			,onRender:function(){
			}
			,onShow:function(){
				var self = this;
				var pageModel = new CustomizationPageModel({
					productId: 'FFF63665-BD80-46CC-8866-192C64118EFE'
				});
				pageModel.getFunctionsData().done(function(resp){
					// console.log('获取租户可选功能列表成功：', resp);
					$.fn.zTree.init(self.$el.find("#popOrg"), self.setting, resp);
				})
			}
	});
});
