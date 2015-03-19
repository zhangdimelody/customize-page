define('StyleItem',['talent'
	,'templates/common'
	,'jscolor'
	,'helpers/context'
],function(Talent
	,jst
	,jscolor
	,Context
) {
	return Talent.ItemView.extend({
		template: jst['common/custom-layouts/common/toolbar/style-color-item']
		,tagName : 'li'
		,initialize: function() {
			// jscolor.dir = Context.getStaticUrl();
		}
		,ui:{
			'jscolor' : 'input.js-color'
			,'definedItem' : '.defined_item'
			// item: '.ui-item'
		}
		,events:function(){
			var events = {};
			events['change ' + this.ui.jscolor] = 'changeJscolor';
			// events['mouseenter ' + this.ui.definedItem] = 'mouseenterItem';
			// events['mouseleave ' + this.ui.definedItem] = 'mouseleaveItem';
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
		,mouseenterItem:function(e){
			var hovername = $(e.currentTarget).find("input").attr("hovername");
			var data = {
				'flag' : true
				,'classname' : hovername
			}
			this.data = data;
			this.trigger('hover',data);
		}
		,mouseleaveItem:function(e){
			var hovername = $(e.currentTarget).find("input").attr("hovername");
			var data = {
				'flag' : false
				,'classname' : hovername
			}
			this.data = data;
			this.trigger('hover',data);
		}
		,changeJscolor:function(){
			var inputNode = this.ui.jscolor;
			var id = inputNode.attr("id");
			var classname = inputNode.attr("classname");
			var flag = inputNode.attr("flag");
			var text = inputNode.val();
			
			this.addColorStyle(classname,text);
			
			this.model.set("textcolor",text);
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
		,onRender: function() {
		}
		,onShow: function() {
			this.addColorStyle(this.model.toJSON().className
								, this.model.toJSON().textcolor);
		}
		,onClose:function(){
		}
	});
});
