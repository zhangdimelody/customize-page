define(['talent'], function(Talent) {
	return Talent.Collection.extend({
		initialize:function(data){
			this.reset(data);
		}
		,reset:function(data){
			var self = this;
			
			if(_.isArray(data)){
				this.length = 0;
				this.models = new Array();
 				_.each(data,function(val){
 					self.models.push(new Talent.Model(val));
 					self.length++;
 				});
 			}else if(typeof(data)=="string"){
 				this.reset(JSON.parse(data));
 			}
 			this.trigger("reset");
		}
	});
});
