define('PopContentTreeItem',['talent','mockJax'],function(Talent){
	return Talent.ItemView.extend({
			template : _.template('<ul id="popOrg" class="ztree"></ul>')
			,initialize:function(options){
				// 这是tree的setting
				this.setting = {
					data: {
						key: {
							id: "ID",
							name: "Text",
							children:"Functions",
							url:"javascript:;" //先置为不存在的属性
						},
						simpleData: {
							enable: true
						}
					}
				};
				this.url = options.url;
			}
			,onSubmit:function(){ 
				var checkedNode = $.fn.zTree.getZTreeObj("popOrg").getSelectedNodes();
				var selectedNode = {
								"id" : checkedNode[0].ID
								,"name" : checkedNode[0].Text
								,"category": checkedNode[0].Category
								,"type" : checkedNode[0].Type
								,"url" : checkedNode[0].Url
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
				// var pageModel = new CustomizationPageModel({
				// 	productId: 'FFF63665-BD80-46CC-8866-192C64118EFE'
				// });
				var getTreeModel = new Talent.Model();
				getTreeModel.url = this.url;
				getTreeModel.fetch().done(function(resp){
					console.log(resp);
					$.fn.zTree.init(self.$el.find("#popOrg"), self.setting, resp.funMenu);
				})
			}
	});
});
