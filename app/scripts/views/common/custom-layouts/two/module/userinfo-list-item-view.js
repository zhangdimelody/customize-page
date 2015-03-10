define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return 	Talent.ItemView.extend({
		template: jst['common/custom-layouts/two/module/userinfo-list-item']
		,tagName : 'li'
		,className : 'list first menuList'
		,ui : {
			'icoArr' : 'a.ico_arr'
		}
		,initialize:function(){

		}
		,events:function(){
			var events = {};
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
		}
	});
});
