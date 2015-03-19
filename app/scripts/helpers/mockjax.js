define(['talent','mockjax'],function(
	Talent
	,mockjax
){
	$.mockjax({
	    url: '/tms/custom/getfunctions',
	    dataType: 'json',
		responseTime: 1,
		responseText: {
			funMenu: [
			    {
			        "Functions": null,
			        "Type": 1,
			        "Category": 1,
			        "ID": "034722fd-78d2-47e3-ae13-4c6717bdcc00",
			        "Url": "/Recruiting/Job/List",
			        "Text": "职位",
			        "Order": 2
			    },
			    {
			        "Functions": null,
			        "Type": 1,
			        "Category": 1,
			        "ID": "fe438cf9-a5ff-4572-8cc9-ae15ed5af80d",
			        "Url": "/Recruiting/RecuritProject/List",
			        "Text": "项目",
			        "Order": 3
			    },
			    {
			        "Functions": [
			            {
			                "ID": "ddec72df-4eaa-414c-8af7-34e321efcd94",
			                "Type": 1,
			                "Order": 0,
			                "Text": "企业人才",
			                "Url": "#pools",
			                "Category": 2
			            },
			            {
			                "ID": "d614c38e-05fb-4b6a-ba80-060d23b7f2c8",
			                "Type": 1,
			                "Order": 0,
			                "Text": "录用阶段应聘者",
			                "Url": "#applicants",
			                "Category": 2
			            }
			        ],
			        "Type": 1,
			        "Category": 1,
			        "ID": "75b64c85-d13a-4dbf-802a-10faba23b47c",
			        "Url": "/Recruiting/ApplicantManage/AllApplicantList",
			        "Text": "应聘者",
			        "Order": 4
			    },
			    {
			        "Functions": null,
			        "Type": 1,
			        "Category": 1,
			        "ID": "30ba6c21-5bb8-4fac-9bea-cabe03258047",
			        "Url": "/Interview/InterviewManage/CalendarView",
			        "Text": "面试",
			        "Order": 5
			    },
			    {
			        "Functions": null,
			        "Type": 1,
			        "Category": 1,
			        "ID": "2e267e2e-3494-4957-9650-8a0ae4d81591",
			        "Url": "/Recruiting/ApplicantManage/ApplicantListByStore",
			        "Text": "人才库",
			        "Order": 6
			    },
			    {
			        "Functions": null,
			        "Type": 1,
			        "Category": 1,
			        "ID": "8b9c3b97-a107-4c99-b923-a8cc4c25eeda",
			        "Url": "/Recruiting/Onboarding",
			        "Text": "入职管理",
			        "Order": 8
			    },
			    {
			        "Functions": null,
			        "Type": 1,
			        "Category": 1,
			        "ID": "f469030e-5245-4bf7-acb5-0bca1af00331",
			        "Url": "/Recruiting/report",
			        "Text": "报表",
			        "Order": 9
			    },
			    {
			        "Functions": [
			            {
			                "ID": "dcdda515-e97e-4b1a-8185-e9792872f2d4",
			                "Type": 1,
			                "Order": 0,
			                "Text": "考场管理",
			                "Url": "#settings/examinations",
			                "Category": 2
			            },
			            {
			                "ID": "b1e61adb-18dc-490c-a3ea-3bf20812afb7",
			                "Type": 1,
			                "Order": 0,
			                "Text": "面试场地管理",
			                "Url": "#settings/interv",
			                "Category": 2
			            },
			            {
			                "ID": "51c59a64-7f1f-4492-9fd4-0b4250852918",
			                "Type": 1,
			                "Order": 0,
			                "Text": "移动端",
			                "Url": "#settings/mobile/weaccount",
			                "Category": 2
			            },
			            {
			                "ID": "43fa97c0-b143-44c2-acc4-d8dfcd3dae6d",
			                "Type": 1,
			                "Order": 0,
			                "Text": "招聘门户",
			                "Url": "/Portal/Index",
			                "Category": 2
			            }
			        ],
			        "Type": 1,
			        "Category": 1,
			        "ID": "72416ebc-3d45-4cef-ac96-d757c9943808",
			        "Url": "/Recruiting/EmailSetting/List",
			        "Text": "设置",
			        "Order": 11
			    }
			]
		}
	});




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
										,href : "#active"
									}
									,{
										id : "1"
										,name : "工作台"
										,className : "bench_ttsn"
										,href : "#plat"
									}
						],
				hidenav : [
									{
										id : "500"
										,name : "职业发展"
										,className : "app_500"
										,href : "#plat"
									}
									,{
										id : "400"
										,name : "绩效管理"
										,className : "app_400"
										,href : "#plat"
									}
									,{
										id : "100"
										,name : "iTalent"
										,className : "app_100"
										,href : "#plat"
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
