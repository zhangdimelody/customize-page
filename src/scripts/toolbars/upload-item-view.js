define('UploadItem',['talent'],function(Talent){
		return Talent.ItemView.extend({
					// template : jst["common/custom-layouts/one/toolbar/upload-item"]
					initialize: function(options) {
						this.template = jst["common/custom-layouts/"+options.templateType+"/toolbar/upload-item"]
						window['callback'] = this.callback;
						if(_.has(options,"inputEdit")){
							this.inputEdit = options.inputEdit;
						}else{
							this.inputEdit = true;
		
							if(_.has(options,"inputMaxLength")){
								this.inputMaxLength = options.inputMaxLength;
							}else{
								this.inputMaxLength = 10000000;
							}
						}
						this.uploadUrl = options.uploadUrl;
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
						var flag = inputNode.attr("flag");
						var text = inputNode.val();
						
						if(text.length > this.inputMaxLength){
							if(inputNode.parent().find('span.text_red').length == 0){
								inputNode.after('<span class="text_red">字数不能超过'+this.inputMaxLength+'</span>');
							}
						}else{
							this.model.set(flag , text);
							inputNode.parent().find('span.text_red').remove();
						}
					}
					,onRender: function() {
					}
					,onShow: function() {
						// 如果是不可编辑
						if(!this.inputEdit){
							this.$el.find("input[type=text]").addClass('disabled').attr('disabled','disabled');
						}
						this.$el.find('form[target=uploads]').attr('action',this.uploadUrl);
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