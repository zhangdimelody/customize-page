define('mockJax',['talent','mockjax'],function(
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



	
});
