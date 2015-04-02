define('ListComposite',['talent'],function(Talent){
	
		return Talent.CompositeView.extend({
			template: jst['common/custom-layouts/common/toolbar/list-composite']
			,itemViewContainer : ".nav_list"
			,initialize: function(options) {
				this.showAddBtn = false; 
				if(options.popContentView){
					this.showAddBtn = true;
					this.popContentTreeView = new options.popContentView(options);
					this.listenTo(this.popContentTreeView,'selected',function(selectedNode){
						this.$el.find(".nav_list :last-child dd").removeClass("folder_end");
						this.collection.add(new Talent.Model(selectedNode));
						this.changeEndCss();
						// 如果是不可编辑
						if(!this.inputEdit){
							this.$el.find("input[type=text]").addClass('disabled').attr('disabled','disabled');
						}
					},this);
				}
				this.title = options.title;
				
				if(_.has(options,"inputEdit")){
					this.inputEdit = options.inputEdit;
				}else{
					this.inputEdit = true;
				}
	
				this.on("itemview:deleteOne",function(one){
					this.collection.remove(one.model);
					this.changeEndCss();
				},this);
			}
			,ui:{
				'addnav' : 'span.add_nav'
			}
			,events:function(){
				var events = {};
				events['click ' + this.ui.addnav] = 'addNav';
				events['click ' + this.ui.navRadio] = 'clickRadio';
				return events;
			}
			,addNav:function(e){
				var addBtn = $(e.currentTarget);
				
				this.trigger('pop', {
					contentView: this.popContentTreeView
					,title: this.title
					,triggerNode: addBtn
				});
			}
			,onRender: function() {
			}
			,onShow: function() {
				var self = this;
				this.$el.find("span.title").html(this.title);
				if(!(this.showAddBtn)){
					this.$el.find("span.add_icon").hide();
				}
				this.$el.find(".nav_list").sortable({ 
					stop: function() {
						var ids = new Array();
						var newData = new Array();
						var allwrap = self.$el.find("dd.sort_wrap");
	
						_.each(allwrap,function(item){
							var id = $(item).attr("id");
							var one = _.findWhere(self.collection.toJSON(),{"id":id});
							ids.push(id);
							newData.push(one);
						});
	
						self.collection.reset(newData);
						self.changeEndCss();
	        		}
	    		});
				this.changeEndCss();
				// 如果是不可编辑
				if(!this.inputEdit){
					this.$el.find("input[type=text]").addClass('disabled').attr('disabled','disabled');
				}
			}
			,changeEndCss:function(){
				this.$el.find(".nav_list :last-child dd").addClass("folder_end");
			}
			,onClose:function(){
			}
		});
	});