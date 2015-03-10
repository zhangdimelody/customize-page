define(['talent'
	,'templates/common'
],function(Talent
	,jst
) {
	return Talent.ItemView.extend({
		template : _.template('<a id="<%=id %>" class="<%-className %>"  <span><%-name %></span> </a>')
		,tagName : 'li'
		,initialize:function(){

		}
	});
});
