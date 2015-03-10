define(['talent','mockjax'],function(
	Talent
	,mockjax
){
	// $.mockjax({
	//     url: 'app/preview/get',
	//     dataType: 'json',
	// 	responseTime: 1,
	// 	responseText: {
	// 		previewList : [{
	// 						"title": "tita头部",
	// 						"className": "tita",
	// 						"type": "one",
	// 						"selected": "layout_selected"
	// 					}, {
	// 						"title": "tms header preivew picture",
	// 						"className": "tms",
	// 						"type": "two",
	// 						"selected": ""
	// 					}]
	// 	}
	// });




	$.mockjax({
		url: 'app/get/alldata',
		dataType: 'json',
		responseTime: 0,
		responseText: {
			previewList : [
						{
							"title": "tita头部",
							"className": "tita",
							"type": "one",
							"selected": "layout_selected"
						}, {
							"title": "tms头部",
							"className": "tms",
							"type": "two",
							"selected": ""
						}, {
							"title": "腾讯企业邮箱登陆页",
							"className": "qqlogin",
							"type": "four",
							"selected": ""
						}, {
							"title": "用户自定制",
							"className": "customize",
							"type": "three",
							"selected": ""
						}
						]
			,one : {
				style : [{
							id : "1"
							,name : "导航栏文字颜色"
							,className : "ul._tt_sidenav span"
							,textcolor : "#ccc"
							,hoverName : "nav_color"
						}],
				upload : {
									beisenLogo : "http://cache.tita.com/Image/110006/f3cfa837b96d40988862a5a207193986.png"
									,userLogo : "http://cache.tita.com/Image/110006/11df89734f6f4f1db98fe4c5967b47ce_s.png"
									,beisenName : "北森"
									,userName : "zd"
								},
				nav : [
									{
										id : "0"
										,name : "动态"
										,className : "home_ttsn"
									}
									,{
										id : "1"
										,name : "工作台"
										,className : "bench_ttsn"
									}
									],
				hidenav : [
									{
										id : "500"
										,name : "职业发展"
										,className : "app_500"
									}
									,{
										id : "400"
										,name : "绩效管理"
										,className : "app_400"
									}
									,{
										id : "100"
										,name : "iTalent"
										,className : "app_100"
									}
									],
				userinfo : [
									{	
										id : "1"
										,className: "msg_tthn"
										,name : "通知"
									}
									,{
										id : "2"
										,className: "task_tthn"
										,name : "任务"
									}
									,{
										id : "3"
										,className: "calendar_tthn"
										,name : "日程"
									}
									],
				usersetting : [
									{ 	
										id : "0"
										,name : "个人主页"
										,className : "profile_ltthn"
										,href : "#italent/home?appid=1&amp;apptype=1&amp;name=TalentProfile-record"
									}
									,{
										id : "1"
										,name : "退出登录"
										,className : ""
										,href : "/Account/Logout"
									}
								]
			}
			,two : {
				nav : [
							{
								id : "3"
								,name : "首页"
							}
							,{
								id : "5"
								,name : "应聘者"
							}
						]
				,style : [
							{"id":"1","name":"导航栏文字颜色","className":"ul.list_nav span","hoverName":"nav_color","textcolor":"fff"}
							,{"id":"2","name":"用户信息文字颜色","className":"ul.list_gnb span,ul.list_gnb a,ul.list_gnb li","hoverName":"userinfo_color","textcolor":"333"}
						]
				,upload : {
					// beisenLogo : "http://stnew03.beisen.com/ux/beisen-cloud/release/app/images/logo.gif"
					// ,
					companyLogo : "http://stcms.beisen.com/Image/100102/e36846e6116d4466af9a52363b5e88c0.jpg"
				}
				
				,userinfo :  [
								{	
									"id" : "1"
									,"name" : "招聘"
									,"className" : "basic"
									,"select" :
									'{'
										+'"0":{"name":"平台首页","className":"basic","href":"http://tms.beisen.com"}'
										+',"1":{"name":"员工前台","className":"basic","href":"http://tms.beisen.com/Beisen/TelantHome"}'
									+'}'
								}
								,{
									"id" : "2"
									,"name" : "zd"
									,"className" : "basic" 
									,"select" : 
									'{'
										+'"0":{"name":"修改密码","className":"basic","href":"javascript:;"}'
										+',"1":{"name":"退出","className":"basic","href":"javascript:;"}'
									+'}'
								},
								{
									"id" : "3"
									,"name" : "消息（0）"
									,"className" : "basic"
									,"select" : ''
								},
								{
									"id" : 4
									,"name" : "帮助"
									,"className" : "basic"
									,"select" : ''
								}
							]
			}
			,three : {
				style : [
							{"id":"1","name":"导航栏文字颜色","className":".custom_wrap .custom_item","hoverName":"nav_color","textcolor":"fff"}
						]
			}
			,four : {
				upload : {
					logo : "http://exmail.qq.com/zh_CN/htmledition/images/bizmail/login_customize/style_bg/company_logo_03.gif"
					,bigPic : "http://exmail.qq.com/zh_CN/htmledition/images/bizmail/login_customize/company_pic_04.png"
				}
				,nav : [
							{
								id : "3"
								,name : "关于腾讯"
							}
							,{
								id : "5"
								,name : "服务条款"
							}
						]
				,style : [
							{"id":"1","name":"关于腾讯","className":"p#company_desc","hoverName":"describe_color","textcolor":"eee"}
							,{"id":"2","name":"服务条款","className":"#bottom_links a,#bottom_links em","hoverName":"nav_color","textcolor":"eee"}
						]
			}
		}
	});

	
});
