define('UploadItem',['talent'],function(Talent){
					return Talent.ItemView.extend({
								// template : jst["common/custom-layouts/one/toolbar/upload-item"]
								initialize: function(options) {
									this.template = jst["common/custom-layouts/"+options.templateType+"/toolbar/upload-item"]
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
									this.uploadInfo = options.uploadInfoMap;
									// this.callbackName = options.callbackName;
									if(options.callbackName != undefined){
										var name = options.uploadInfoMap[options.callbackName]
										name = name.substr(name.indexOf('.')+1);
									}else{
										name = "callback";
									}
									window[name] = this.callbackFunc;
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
									uploadData["uploadResp"] = this.$el.find(".company_logo").val();
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
									
									if(this.uploadInfo != undefined){
										var uploadHtml = "";
										_.map(this.uploadInfo,function(value, key){
											uploadHtml = uploadHtml + '<input type="hidden" name="'+key+'" value="'+value+'">'
										})
										this.$el.find('.upload_info_wrap').html(uploadHtml);
									}
								}
								,onClose:function(){
								}
								,callbackFunc:function(resp){
									var elementMap = ".company_logo";
										
									// _.each(resp,function(value,key){
									// 	if(value!=""){
									// 		$($(elementMap)[key]).val(value);
									// 	}
									// });
						
									$(elementMap).val(JSON.stringify(resp)).change();
									// $($(elementMap)[0]).change();
								}
								,temp:function(){

								}
							});
		});