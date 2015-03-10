define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.ItemView.extend({
		template: jst['common/custom-layouts/two/toolbar/userinfo-list-item']
		,tagName : 'li'
		,initialize : function(){
			this.listenTo(this.model,'change',this.render);
		}
		,ui:{
			'inputChange' : 'input.self_input_c'
			,'addSelectItem' : 'a.add_select_item'
			,'deleteThis' : 'a.delete_this'
			,'chooseSelect' : 'a[type=chooseSelect]'
			,'smallDelete' : 'a.small_delete'
			,'secondSelect' : '.second_select'
		}
		,events:function(){
			var events = {};
			events['change ' + this.ui.inputChange] = 'inputChange';
			events['click ' + this.ui.addSelectItem] = 'clickAddSelectItem';
			events['click ' + this.ui.deleteThis] = 'deleteThis';
			events['click ' + this.ui.chooseSelect] = 'chooseSelect';
			events['click ' + this.ui.smallDelete] = 'clickSmallDelete';
			events['mouseenter ' + this.ui.secondSelect] = 'mouseenterItem';
			events['mouseleave ' + this.ui.secondSelect] = 'mouseleaveItem';
			return events;
		}
		,mouseenterItem:function(e){
			// e.stopPropagation();
			var hoverid = $(e.currentTarget).attr("hoverid");
			var data = {
				'flag' : true
				,'classname' : "secondselect_hover"
				,'hoverid' : hoverid
			}
			this.data = data;
			this.trigger('hover',data);
		}
		,mouseleaveItem:function(e){
			// e.stopPropagation();
			var hoverid = $(e.currentTarget).attr("hoverid");
			var data = {
				'flag' : false
				,'classname' : "secondselect_hover"
				,'hoverid' : hoverid
			}
			this.data = data;
			this.trigger('hover',data);
		}
		,clickSmallDelete:function(e){
			var deleteId = this.$el.find(e.currentTarget).attr("tid");
			var selectData = JSON.parse(this.model.toJSON().select);
			delete selectData[deleteId];
			this.model.set("select",JSON.stringify(selectData));
		}
		,chooseSelect:function(e){
			var currentNode = this.$el.find(e.currentTarget);
			currentNode.addClass("checked").siblings().removeClass("checked");
			if(currentNode.attr("id")==0){
				this.model.set("select",'');
				this.$el.find(".second_select").hide();
			}else{
				this.$el.find(".second_select").show();
			}
		}
		,deleteThis:function(e){
			this.trigger("deleteOne",e);
		}
		,inputChange:function(e){
			var inputNode = this.$el.find(e.currentTarget);
			var flag = inputNode.attr("flag");
			var text = inputNode.val();
			
			if(inputNode.attr("tid")!=undefined){
				var id = inputNode.attr("tid");
				var selectData = JSON.parse(this.model.toJSON().select);
				selectData[id][flag] = text;
				this.model.set("select",JSON.stringify(selectData));
			}else{
				this.model.set(flag , text);
			}
		}
		,clickAddSelectItem:function(e){
			var id = parseInt(Math.random()*10000);
			var data = this.model.toJSON();
			if(data.select==""){
				var obj = {};
			}else{
				var obj = JSON.parse(data.select);
			}
			obj[id] = {
				"name":""
				,"className":""
				,"href":""
			}
			this.model.set("select",JSON.stringify(obj));
		}
	});
});
