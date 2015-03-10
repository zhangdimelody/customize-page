define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {


	return Talent.Layout.extend({
		template: jst['common/custom-layouts/three/layout']
		,initialize: function() {
		}
		,ui:{
			// item: '.ui-item'
		}
		,regions:{
			"customRegion" : ".custom_region"
		}
		,events:function(){
			var events = {};
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
		,update:function(data){
			if(_.has(data,"customize")&&(!_.isEmpty(data.customize))){
				this.wrapView.collection.reset(data.customize.customize);

				$('.custom_wrap', $('.custom_region iframe').prop('contentWindow').document)[0].innerHTML  
				= (this.wrapView.render().$el)[0].outerHTML;
			}
		}
		// ,highlightUI:function(data){
		// }
		,showCustomize:function(layoutOptions){
			// var template = _.template(layoutOptions.customHtml.get(0).outerHTML);
			// console.log(layoutOptions);

			this.$el.find("h3.customize_title").hide();
			var tmpNode=$('<div />'); 
			tmpNode.html(layoutOptions.previewTemplate);
			tmpNode.find('script').remove(); 

			$('body', $('.custom_region iframe')
					.prop('contentWindow')
					.document
				).html( tmpNode.html() );  

			var itemNode = layoutOptions.itemNode.text('<%=name %>');
			var itemTemplate = itemNode[0].outerHTML.replace('&lt;','<').replace('&gt;','>');
			// console.log(layoutOptions.customHtml)

			var CompositeView = Talent.CompositeView.extend({
				// el : $('.custom_wrap', $('.custom_region iframe').prop('contentWindow').document)
				 itemViewContainer : ".custom_wrap"
				,initialize:function(){
				}
				,onRender:function(){
				}
				,onShow:function(){
					this.$el.find(".custom_wrap").html("");
				}
			});

			var attrs = {};
			var nodeAttr = itemNode[0].attributes;
			for (var i = 0; i < nodeAttr.length; i++) {
				var attrName = nodeAttr[i].name;
				attrs[attrName] = itemNode.attr(attrName);
			};



			this.wrapView = new CompositeView({
				template: _.template(layoutOptions.customHtml[0].outerHTML)
				,collection : new Talent.Collection(layoutOptions.listData)
				,itemView : Talent.ItemView.extend({
					template: _.template('<%=name %>') 
					, tagName : itemNode[0].tagName
					,attributes: attrs
				})
			});
			
			$('.custom_wrap', $('.custom_region iframe').prop('contentWindow').document)[0].innerHTML  
				= (this.wrapView.render().$el)[0].outerHTML;
		}
		,onRender: function() {
		}
		,onShow: function() {
		}
		,onClose:function(){
		}
	});
});
