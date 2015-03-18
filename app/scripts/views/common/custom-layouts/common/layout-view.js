define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.Layout.extend({
		template: jst['common/custom-layouts/common/layout']
		,initialize:function(data){
			var self = this;
			this.data = data;
			this.viewnames = [];

			this.createView();
		}
		,onRender:function(){

		}
		,onShow:function(){
			var self = this;
			$.when.apply(this, this.defers).done(function() {
				self.regionShowView();
			});
		}
		,createView:function(){
			var self = this;
			this.defers = [];
			
			_.each(this.data.contentViews ,function(item){
				var def = new $.Deferred;
				self.defers.push(def);

				var viewName = item.name;
				self.addRegion(viewName+"Region" , "."+viewName);

				self.viewnames.push(viewName);

				require([item.path],function(View){ 
					item.options.data = self.data.initData;
					self[viewName+'View'] = new View(item.options);
					def.resolve();
				});
			});
		}
		,regionShowView:function(){
			var self = this;
			_.each(this.viewnames,function(item){
				var itemWrap = "<div name="+item+" class='"+item+" hover_item'></div>";
				self.$el.find(".layout_wrap").append(itemWrap);
				self[item+'Region'].show(self[item+'View']);
			});
		}
		,update:function(newData){
			// var headerinfo =  {
			// 	"uploadinfo" : newData.upload
			// 	,"userinfo" : newData.userinfo
			// 	,"usersetting" : newData.usersetting
			// }
			
			// this.titaHeaderView.model.set(headerinfo);
			// this.titaLeftListView.collection.reset(newData.nav);
			// this.titaHideListView.collection.reset(newData.hidenav);
		}
		,addColorStyle:function(classname,text){
			// 添加一条样式，并显示
			var style = document.createElement("style");
			var styleId = parseInt(Math.random()*10000);
			style.id = styleId;
			//这里最好给ie设置下面的属性
			/*if (isIE()) {
				style.type = "text/css";
				style.media = "screen";
			}*/
			if(_.indexOf(text,"#")!=0){
				text = "#" + text;
			}
			var styles = classname+"{ color:"+ text +"}";
			(document.getElementsByTagName('head')[0] || document.body).appendChild(style);

			if (style.styleSheet) { //for ie
				style.styleSheet.cssText = styles;
			}else{//for w3c
				style.appendChild(document.createTextNode(styles));
			}
		}
		,highlightUI: function(borderData){
			var self = this;
			
			var action = (borderData.flag)?"add":"remove";
			borderData.flag = action;

			var viewName = this.data.relationMap[borderData.triggerName] + 'View';
			this[viewName].highlightUI(borderData);
			// var obj = this.hoverShowBorderMap[data.classname];
			// _.each(obj ,function(value,key){
			// 	self[key].$el.find(value)[action+"Class"]("show_border");
			// });

			// 比对EventMap，看是否需要动作
			// _.each(this.hoverEventMap,function(value,key){
			// 	if(data.classname==key){
			// 		// 数组中第1个是showBorder 第2个是hideBorder
			// 		var flag = (data.flag) ? 0 : 1;
			// 		_.each(value[flag],function(val,ke){
			// 			_.each(val,function(v,k){
			// 				// 判断是否需要区分不同的元素 动作,如果有hoverid就加上
			// 				var element = (_.has(data,"hoverid")) ? (k+"[hoverid="+data.hoverid+"]") : k;
			// 				self[ke].$el.find(element)[v]();
			// 			});
			// 		});
			// 	}
			// });

		}
	});
});
