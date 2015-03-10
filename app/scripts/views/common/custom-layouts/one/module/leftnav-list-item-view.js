define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.ItemView.extend({
		template : _.template('<a href="javascript:;" class="<%-className %>"> <strong></strong> <span><%-name %></span> </a>')
		,tagName : 'li'
		,initialize:function(){
			
		}
	});
});
