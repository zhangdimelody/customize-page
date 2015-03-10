define(['talent'
		,'models/data-nested-model']
	, function(Talent
		,DataNestedModel) {
	return DataNestedModel.extend({
		url : "app/two/get"
		,getDefaultData:function(){
			upload = {
				beisenLogo : "http://stnew03.beisen.com/ux/tms-recruit/release/app/images/logo_italent.gif"
				,companyLogo : "http://stcms.beisen.com/Image/100102/e36846e6116d4466af9a52363b5e88c0.jpg"
			};
			nav = [
								{
									"id" : 3
									,"name" : "首页"
									,"backimage" : "http://message.jpg"
									,"href" : "#home"
								}
								,{
									"id" : 5
									,"name" : "应聘者"
									,backimage : "http://feed.jpg"
									,href : "#apply"
								}
							];
			style = [
							{"id":1,"name":"导航栏文字颜色","className":"ul.list_nav span","hoverName":"nav_color","textcolor":"fff"}
							,{"id":2,"name":"用户信息文字颜色","className":"ul.list_gnb span","hoverName":"userinfo_color","textcolor":"333"}
						];

			// userInfoData =  [
			// 					{	
			// 						"id" : 1
			// 						,"name" : "招聘"
			// 						,"className" : "basic"
			// 						,"select" :
			// 						'{'
			// 							+'"0":{"name":"平台首页","className":"basic","href":"http://tms.beisen.com"}'
			// 							+',"1":{"name":"员工前台","className":"basic","href":"http://tms.beisen.com/Beisen/TelantHome"}'
			// 						+'}'
			// 					}
			// 					,{
			// 						"id" : 2
			// 						,"name" : "zd"
			// 						,"className" : "basic" 
			// 						,"select" : 
			// 						'{'
			// 							+'"0":{"name":"修改密码","className":"basic","href":"javascript:;"}'
			// 							+',"1":{"name":"退出","className":"basic","href":"javascript:;"}'
			// 						+'}'
			// 					},
			// 					{
			// 						"id" : 3
			// 						,"name" : "消息（0）"
			// 						,"className" : "basic"
			// 						,"select" : ''
			// 					},
			// 					{
			// 						"id" : 4
			// 						,"name" : "帮助"
			// 						,"className" : "basic"
			// 						,"select" : ''
			// 					}
			// 				];
		}
		,getLocalStorageData:function(modelData){
			uploadData = modelData.upload;
			tmsNavListData = modelData.nav;
			userInfoData = modelData.userinfo;
			styleData = modelData.style;
		}
		,getData:function(){
			var modelData = JSON.parse(localStorage.getItem("sidebarTwo"));
			if(modelData!=null){
				this.getLocalStorageData(modelData);
			}else{
				this.getDefaultData();
			}
		}
	});
});
