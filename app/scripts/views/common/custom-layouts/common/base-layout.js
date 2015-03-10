define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.Layout.extend({
		// template: jst['common/layouts/base-layout'],
		addColorStyle:function(classname,text){
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
		,highlightUI: function(data){
			var self = this;
			
			var action = (data.flag)?"add":"remove";
			var obj = this.hoverShowBorderMap[data.classname];
			_.each(obj ,function(value,key){
				self[key].$el.find(value)[action+"Class"]("show_border");
			});

			// 比对EventMap，看是否需要动作
			_.each(this.hoverEventMap,function(value,key){
				if(data.classname==key){
					// 数组中第1个是showBorder 第2个是hideBorder
					var flag = (data.flag) ? 0 : 1;
					_.each(value[flag],function(val,ke){
						_.each(val,function(v,k){
							// 判断是否需要区分不同的元素 动作,如果有hoverid就加上
							var element = (_.has(data,"hoverid")) ? (k+"[hoverid="+data.hoverid+"]") : k;
							self[ke].$el.find(element)[v]();
						});
					});
				}
			});


		}
	});
});
