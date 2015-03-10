define(['talent'], function(Talent) {
	return Talent.Model.extend({
		constructor:function(data){
			Talent.Model.prototype.constructor.apply(this,arguments);
			if(data){
				this.set(data);
			}
		}
 		,set:function(name,value){
 			var self = this;

 			if(typeof(name)=="object"){
 				_.each(name,function(val,na){
 					self.setItem(na,val);
 				});
 			}else{
 				this.setItem(name,value);
 			}
 		}
 		,setItem:function(name,value){
 			if(typeof(value)=="object"){
 				// 如果是model 或者 collection
 				if((value instanceof Talent.Model)||(value instanceof Talent.Collection)){
 					value = value.toJSON();
 				}
 				Talent.Model.prototype.set.apply(this, arguments);
 			}else if(typeof(value)=="string"){
 				Talent.Model.prototype.set.apply(this, arguments);
 			}
 		}
 		,get:function(name){
 			var value = Talent.Model.prototype.get.apply(this, arguments);
 			if(!((_.indexOf(value,'{'))||(_.indexOf(value,'['))) ){
 				value = JSON.parse(value);
 			}
 			return value;
 		}
	});
});
