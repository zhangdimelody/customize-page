define('UploadItem',['talent'],function(Talent){
	return Talent.ItemView.extend({
		// template : jst["common/custom-layouts/one/toolbar/upload-item"]
		initialize: function(options) {
			this.template = jst["common/custom-layouts/"+options.templateType+"/toolbar/upload-item"]
			window['callback'] = this.callback;
		}
		,ui:{
			'inputChange' : 'input.self_input_c'
			,'companyLogo' : 'input.company_logo'
			// ,'userLogo' : 'input.user_logo'
		}
		,events:function(){
			var events = {};
			events['change ' + this.ui.inputChange] = 'inputChange';
			events['change ' + this.ui.companyLogo] = 'uploadCallback';
			return events;
		}
		,uploadCallback:function(){
			var uploadData = {};
			var imageInputs = this.$el.find("input.image_input");
			_.each(imageInputs,function(one){
				var flag = $(one).attr("flag");
				uploadData[flag] = $(one).val();
			});
			
			this.model.set(uploadData);
		}
		,inputChange:function(e){
			var inputNode = this.$el.find(e.currentTarget);
			// var id = inputNode.attr("id");
			var flag = inputNode.attr("flag");
			var text = inputNode.val();
			
			this.model.set(flag , text);
		}
		,onRender: function() {
		}
		,onShow: function() {
		}
		,onClose:function(){
		}
		,callback:function(urls){
			var elementMap = ".image_input";
				
			// _.each(urls,function(value,key){
			// 	if(value!=""){
			// 		$($(elementMap)[key]).val(value);
			// 	}
			// });

			$(elementMap).val(urls.ClientUrl).change();
			// $($(elementMap)[0]).change();
		}
	});
});
