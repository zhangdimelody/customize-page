define('SidebarView',['talent'],function(Talent){
	return Talent.Layout.extend({
		template :  jst['common/custom-layouts/common/sidebar']
		,initialize: function(options) {
			var self = this;
			
			this.viewnames = [];
			this.model = new Talent.Model();
			
			// 把数据融合到options.sidebarRegionsOptions里
			_.map(options.data,function(value,name){
				if(_.has(options.sidebarRegionsOptions,name)){
					var dataType = options.sidebarRegionsOptions[name].initOptions.dataType;
					options.sidebarRegionsOptions[name].initOptions[dataType.toLowerCase()] = new Talent[dataType](value);
				}else{
					var dataType = options.data[name].options.initOptions.dataType;
					options.data[name].options.initOptions[dataType.toLowerCase()] = new Talent[dataType](options.data[name].data);
					options.sidebarRegionsOptions[name] = options.data[name].options;
				}
			});

			_.map(options.sidebarRegionsOptions,function(val,key){
				if((!_.has(options.data, key)&&(key!="popDialog"))){
					delete options.sidebarRegionsOptions[key];
				}
			});

			this.regionOptions = options.sidebarRegionsOptions;
			this.createView();
			
		}
		,ui:{
			'saveSetInfo': 'span.save_set_info'
			,'hoverItem' : '.hover_item'
		}
		,events:function(){
			var events = {};
			events['click ' + this.ui.saveSetInfo] = 'saveSetInfo';
			// 方法内始终需要用到this,故这种方法不可行
			// events['mouseenter ' + this.ui.hoverItem] = 'enterHandler';
			// events['mouseleave ' + this.ui.hoverItem] = 'leaveHandler';
			return events;
		}
		,onRender: function() {

		}
		,setHeight:function(){
			this.$el.find("#second_step").css("height" , window.innerHeight);
		}
		,onShow: function() {
			var self = this;
			$.when.apply(this, this.defers).done(function() {
				self.regionShowView();

				jscolor.dir = self.getJscolorImageUrl();
				jscolor.init();
				
				self.$el.on('mouseenter', ".hover_item", function(){
					self.triggerHoverEvent(this, true);
				});
				self.$el.on('mouseleave', ".hover_item", function(){
					self.triggerHoverEvent(this, false);
				});
				self.$el.on("click",".arrow_down",function(e){
					var node = $(e.currentTarget);
					node.removeClass("rotateX rotateY");
					if(node.hasClass("hide_list")){
						node.addClass("rotateX");
						node.removeClass("hide_list").parent().next().slideDown();	
					}else{
						node.addClass("rotateY");
						node.addClass("hide_list").parent().next().slideUp();	
					}
				});
				_.each(self.viewnames,function(item){
					self.listenTo(self[item+'View'],'pop',function(obj){
						self.popDialogView.showContent(obj);
					});
				});
				self.setHeight();
				
			});
		}
		,getJscolorImageUrl: function() {
			var staticServer = BSGlobal.staticPath;
			return staticServer + "/images/customizePage/";
		}
		,createView:function(){
			var self = this;
			var viewOption = {};
			this.defers = [];

			_.each(this.regionOptions,function(value,key){
				var filePath = [];
				var def = new $.Deferred;
				self.viewnames.push(key);
				self.defers.push(def);
				filePath.push(value.path);
				// 添加region
				self.addRegion(key,"."+key+"_region");

				// 开始create view

				// 如果有 itemView参数 则引入文件
				if(value.initOptions.itemView != undefined){
					filePath.push(value.initOptions.itemView);
				}
				if(value.initOptions.popContentView != undefined){
					filePath.push(value.initOptions.popContentView);	
				}
				
				require(filePath,function(ViewName,ItemView,PopContentView){
					value.initOptions.itemView = ItemView;
					value.initOptions.popContentView = PopContentView;
					self[key+'View'] = new ViewName(value.initOptions);

					if(key == "customize"){
						self.listenTo(self.customizeView,'customHtml',function(layoutOptions){
							self.trigger("customHtml",layoutOptions);
						});
					}
					
					
					def.resolve();
					// 绑定监听事件
					_.map(value.events,function(name,target){
						var listenTarget = self[key+'View'];
						listenTarget = listenTarget[target];
						self.listenTo(listenTarget , name ,function(data){
							// 将sidebar自己的 model 重新 set 相应值
							self.model.set(key,this[key+'View'][target].toJSON());
						});
					});
				});
				// 结束create view
			});
		}
		,regionShowView:function(){
			var self = this;
			_.each(this.viewnames,function(item){
				var itemWrap = "<div name="+item+" class='"+item+"_region hover_item'></div>";
				self.$el.find(".self_defined").append(itemWrap);
				self[item].show(self[item+'View']);
			});
			// this.model.set()数据
			var data = {};
			_.each(this.regionOptions,function(value,key){
				var dataType = (_.has(value.initOptions,'collection'))?'collection':'model';
				data[key] = self[key+'View'][dataType].toJSON();
			});
			self.model.set(data);
		}
		// 保存操作
		,saveSetInfo:function(e){
			var self = this;
			var type = $(e.currentTarget).attr("type");
			var modelData = this.model.toJSON();
			
			this.trigger("saveConfigData",modelData);
			// switch(type){
			// 	case "two":
			// 		var data = {};
					
			// 		var i = 1;
			// 		_.each(modelData.nav,function(item){
			// 			item.order = i;
			// 			i++;
			// 		});
			// 		data.menu = JSON.parse(JSON.stringify(modelData.nav).replace(/name/g,"text"));
			// 		var preference = {};
			// 		preference.style = modelData.style;

			// 		preference.upload = modelData.upload;
			// 		data.preference = preference;
			// 		data.ProductID = "f816d041-1f65-4967-9eb8-2ec3057ebf76";

			// 		this.pageModel.setCustomizationData(data).done(function(resp) {
			// 			console.log('保存租户定制数据成功：',resp);
			// 		});
			// 		break;
			// 	default:
			// 		break;
			// }
			

			// localStorage.setItem("sidebar"+$(e.currentTarget).attr("type") ,JSON.stringify(this.model));
			this.$el.find(".save_success").show();
			setTimeout(function(){
				self.$el.find(".save_success").hide();
			},1000);
		}
		// hover 操作控制灰色边框
		,triggerHoverEvent:function(node, flag){
			var data = {
						"flag" : flag
						,"triggerName" : $(node).attr('name')
					}
			this.trigger('hover', data);
		}
		,onClose:function(){
		}
	});
});