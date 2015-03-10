define(['talent'
	,'templates/common'
	,'xss'
	,'views/common/custom-layouts/common/toolbar/list-composite-view'
],function(Talent
	,jst
	,xss
	,ListView
) {
	var ItemView =  Talent.ItemView.extend({
		template : _.template('<dd class="sort_wrap" id="<%=id %>"><span class="delete_icon delete_this"></span>'
			+'<span class="folder_icon"></span><input type="text" value="<%-name %>"  flag="name" class="self_input_c"/></dd>')
		,initialize : function(){

		}
		,ui:{
			'inputChange' : 'input.self_input_c'
			,'deleteThis' : 'span.delete_this'
		}
		,events:function(){
			var events = {};
			events['change ' + this.ui.inputChange] = 'inputChange';
			events['click ' + this.ui.deleteThis] = 'deleteThis';
			return events;
		}
		,deleteThis:function(e){
			this.trigger("deleteOne",e);
		}
		,inputChange:function(e){
			var inputNode = this.$el.find(e.currentTarget);
			var id = inputNode.attr("id");
			var flag = inputNode.attr("flag");
			var text = inputNode.val();
			
			this.model.set(flag , text);
		}
	});
	return Talent.Layout.extend({
		template: jst['common/custom-layouts/common/toolbar/customize-layout']
		,initialize: function() {

		}
		,ui:{
			'submitBtn': 'a.submit_btn'
		}
		,regions:{
			"listWrap": ".list_wrap"
		}
		,events:function(){
			var events = {};
			events['click ' + this.ui.submitBtn] = 'clickSubmitBtn';
			return events;
		}
		,clickSubmitBtn:function(){
			var customizeVal = this.$el.find("textarea.customize").val();
			
			var customHtml =  $($.parseHTML(customizeVal)).find(".custom_wrap").html("");
			var items = $($.parseHTML(customizeVal)).find(".custom_item");
			

			var listData = [];
			_.each(items,function(one,key){
				var itemData = {};
				itemData.name = $(one).text();
				itemData.id = key;
				listData.push(itemData);
			});


			var layoutOptions = {
				"previewTemplate" : customizeVal
				,"customHtml" : customHtml
				,"listData" : listData
				,"itemNode" : $(items[0])
			};


			this.listView = new ListView({
				'collection': new Talent.Collection(listData)
				,'itemView' : ItemView
				,'title' : '定制导航'
				,'type' : 'customize'
			});
			this.listenTo(this.listView.collection,"change remove reset add",function(){
				this.model.set("customize",this.listView.collection.toJSON());
			},this);

			this.listWrap.show(this.listView);
			this.trigger("customHtml",layoutOptions);
		}
		,onRender: function() {
		}
		,onShow: function() {
		}
		,onClose:function(){
		}
	});
});
