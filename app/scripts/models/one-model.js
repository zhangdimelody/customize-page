define(['talent'
	,'models/data-nested-model']
, function(Talent
	,DataNestedModel) {
	return DataNestedModel.extend({
		getDefaultSidebarData:function(){
			styleData = [{
								id : 1
								,name : "导航栏文字颜色"
								,className : "ul._tt_sidenav span"
								,textcolor : "#ccc"
								,hoverName : "nav_color"
						}];
			uploadData = {
								beisenLogo : "http://cache.tita.com/Image/110006/f3cfa837b96d40988862a5a207193986.png"
								,userLogo : "http://cache.tita.com/Image/110006/11df89734f6f4f1db98fe4c5967b47ce_s.png"
								,beisenName : "北森"
								,userName : "zd"
							};
			titaLeftNavList = [
								{
									id : 0
									,name : "动态"
									,className : "home_ttsn"
									,href : "#home"
								}
								,{
									id : 1
									,name : "工作台"
									,className : "bench_ttsn"
									,href : "#bench"
								}
								,{
									id : 2
									,name : "计划"
									,className : "plan_ttsn"
									,href : "#plan"
								}
								];
			titaHideNavList = [
								{
									id : 500
									,name : "职业发展"
									,href : "#italent/app?appid=500&apptype=500&name=suhome"
									,className : "app_500"
								}
								,{
									id : 400
									,name : "绩效管理"
									,href : "http://i.tita.com#italent/app?appid=400&apptype=400&url=http://epm.tita.com&name=epmhome"
									,className : "app_400"
								}
								,{
									id : 100
									,name : "iTalent"
									,href : "http://i.tita.com#italent/home?appid=100&apptype=100&name=TelantHome"
									,className : "app_100"
								}
								];
			userInfoList = [
								{	
									id : 1
									,className: "msg_tthn"
									,title : "通知"
								}
								,{
									id : 2
									,className: "task_tthn"
									,title : "任务"
								}
								,{
									id : 3
									,className: "calendar_tthn"
									,title : "日程"
								}
								];
			userSettingList = [
								{ 	
									id : 0
									,name : "个人主页"
									,className : "profile_ltthn"
									,href : "#italent/home?appid=1&amp;apptype=1&amp;name=TalentProfile-record"
								}
								,{
									id : 1
									,name : "退出登录"
									,className : ""
									,href : "/Account/Logout"
								}
								];
		}
		,getLocalStorageSidebarData:function(modelData){
			styleData = modelData.style;
			uploadData = modelData.upload;
			titaLeftNavList = modelData.nav;
			titaHideNavList = modelData.hidenav;
			userInfoList = modelData.userinfo;
			userSettingList = modelData.usersetting;
		}
		,getDefaultLayoutData:function(){
			headerinfo =  {
						"uploadinfo" : {
										beisenLogo : "http://cache.tita.com/Image/110006/f3cfa837b96d40988862a5a207193986.png"
										,userLogo : "http://cache.tita.com/Image/110006/11df89734f6f4f1db98fe4c5967b47ce_s.png"
										,beisenName : "北森"
										,userName : "zd"
									}
						,"userinfo" : [{	
										id : 1
										,className: "msg_tthn"
										,title : "通知"
									}
									,{
										id : 2
										,className: "task_tthn"
										,title : "任务"
									}
									,{
										id : 3
										,className: "calendar_tthn"
										,title : "日程"
									}]
						,"usersetting" : [{ 	
											id : 0
											,name : "个人主页"
											,className : "profile_ltthn"
											,href : "#italent/home?appid=1&amp;apptype=1&amp;name=TalentProfile-record"
										}
										,{
											id : 1
											,name : "退出登录"
											,className : ""
											,href : "/Account/Logout"
										}]
						};
			titaLeftNavList = [
									{
										id : 0
										,name : "动态"
										,className : "home_ttsn"
										,href : "#home"
									}
									,{
										id : 1
										,name : "工作台"
										,className : "bench_ttsn"
										,href : "#bench"
									}
									,{
										id : 2
										,name : "计划"
										,className : "plan_ttsn"
										,href : "#plan"
									}
								];
			titaHideNavList = [
									{
										id : 500
										,name : "职业发展"
										,href : "#italent/app?appid=500&apptype=500&name=suhome"
										,className : "app_500"
									}
									,{
										id : 400
										,name : "绩效管理"
										,href : "http://i.tita.com#italent/app?appid=400&apptype=400&url=http://epm.tita.com&name=epmhome"
										,className : "app_400"
									}
									,{
										id : 100
										,name : "iTalent"
										,href : "http://i.tita.com#italent/home?appid=100&apptype=100&name=TelantHome"
										,className : "app_100"
									}
								];
			styleData = [{
								id : "1"
								,name : "导航栏文字颜色"
								,className : "ul._tt_sidenav span"
								,textcolor : "#ccc"
								,hoverName : "nav_color"
						}];
		}
		,getLocalStorageLayoutData:function(modelData){
			headerinfo = {
				"uploadinfo" : modelData.upload
				,"userinfo" : modelData.userinfo
				,"usersetting" : modelData.usersetting
			};
			titaLeftNavList = modelData.nav;
			titaHideNavList = modelData.hidenav;
			styleData = modelData.style;
		}
		,getSidebarData:function(){
			var modelData = JSON.parse(localStorage.getItem("sidebarOne"));
			if(modelData!=null){
				this.getLocalStorageSidebarData(modelData);
			}else{
				this.getDefaultSidebarData();
			}
		}
		,getLayoutData:function(){
			var modelData = JSON.parse(localStorage.getItem("sidebarOne"));
			
			if(modelData!=null){
				this.getLocalStorageLayoutData(modelData);
			}else{
				this.getDefaultLayoutData();
			}
		}
	});
});
