define('ListItemOne',['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.ItemView.extend({
		template : _.template('<dd class="sort_wrap" id="<%=id %>"><span class="delete_icon delete_this"></span>'
		+'<span class="folder_icon"></span><input type="text" value="<%-name %>"  flag="name" class="self_input_c"/></dd>')

		
		,tagName : 'li'
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
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
		,deleteThis:function(e){
			this.trigger("deleteOne",e);
		}
		,inputChange:function(e){
			var inputNode = this.$el.find(e.currentTarget);
			var flag = inputNode.attr("flag");
			var text = inputNode.val();
			
			this.model.set(flag , text);
		}
	});
});
