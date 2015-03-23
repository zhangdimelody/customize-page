# 页面可定制组件

## 使用说明
* 1. bower.json 中添加 "customize-page" : ""，并执行 bower update
* 2. config.js 中paths添加：

````
"customizePage": "vendor/components/customizePage/index"
````

shim中添加：

````
'customizePage': {
            deps: ['jqueryui','$.tree','jscolor']
        }
````

* 3. 文件内部使用


````
this.showLayoutView = new ShowLayoutView(resp);
            // 监听保存后的数据
this.listenTo(this.showLayoutView,"saveConfigData",function(data){
                console.log(data);
            },this);
this.showRegion.show(this.showLayoutView);

````

## 参数说明

````
var resp = {
                type : "tita"   //类型为tita
                ,commonData :  {  //侧边栏和右侧显示所公用的数据
                            color : [{
                                        id : "1"
                                        ,name : "导航栏文字颜色"
                                        ,selector : "ul._tt_sidenav span" //颜色控制的右侧导航栏选择器
                                        ,textcolor : "#ccc" //默认的导航栏文字颜色
                                        ,highlightTrigger : "nav_color" //左侧hover此模块时trigger的名称
                                        ,className : "home_ttsn"  //默认值
                                    }],
                            tenantInfo : {  //租户信息
                                            tenantLogo : "http://cache.tita.com/Image/110006/f3cfa837b96d40988862a5a207193986.png"//租户logo
                                            ,tenantName : "北森" //租户名称
                                        },
                            nav : [ //左侧侧边栏
                                                {
                                                    id : "0"
                                                    ,name : "动态"
                                                    ,className : "home_ttsn"
                                                    ,href : "#active"
                                                    ,backgroudImage : ""
                                                }
                                                ,{
                                                    id : "1"
                                                    ,name : "工作台"
                                                    ,className : "bench_ttsn"
                                                    ,href : "#plat"
                                                    ,backgroudImage : ""
                                                }
                                    ],
                            secondaryNav : [ //隐藏菜单
                                                {
                                                    id : "500"
                                                    ,name : "职业发展"
                                                    ,className : "app_500"
                                                    ,href : "#plat"
                                                    ,backgroudImage : ""
                                                }
                                                ,{
                                                    id : "400"
                                                    ,name : "绩效管理"
                                                    ,className : "app_400"
                                                    ,href : "#plat"
                                                    ,backgroudImage : ""
                                                }
                                                ,{
                                                    id : "100"
                                                    ,name : "iTalent"
                                                    ,className : "app_100"
                                                    ,href : "#plat"
                                                    ,backgroudImage : ""
                                                }
                                        ]
                }
                //右侧显示的view，用户自定义 
                ,contentViews : [
                    {
                        name:"titaHeader" //new之后的对象名称
                        ,path: 'views/home/common/tita-header-item-view' //用户项目中的文件路径，自行开发
                        ,options:{ //new时可以传入参数
                        }
                    }
                    ,{
                        name:"titaLeft"
                        ,path: 'views/home/common/leftnav-list-view'
                        ,options:{
                            dataType : "nav"
                        }
                    }
                    ,{
                        name:"titaHideList"
                        ,path: 'views/home/common/hidenav-list-view'
                        ,options:{
                            dataType : "secondaryNav"
                        }
                    }
                ]
                //左侧的配置，
                ,sidebarViews : {
                    nav : { //需要添加配置的模块名称
                        popTreeUrl : "/tms/custom/getfunctions" //添加一个popTreeUrl 弹出树的url
                    }
                    ,secondaryNav : {
                        popTreeUrl : "/tms/custom/getfunctions"
                    }
                }
                ,relationMap: {  
                //key 为左侧hover此模块时trigger的名称 
                //value 则对应右侧需要调hightLight的view名称
                    "nav_color" : "titaLeft"
                    ,"nav" : "titaLeft"
                    ,"tenantInfo" : "titaHeader"
                    ,"secondaryNav" : "titaHideList"
                    ,"userSetting" : "titaHeader"
                }
            };
````

## 文件添加
* images添加 vendor/components/customizePage/src/images/customizePage文件夹
* css添加 vendor/components/customizePage/src/css/customizePage.css 和 zTreeStyle.css

## tita参考demo：http://gitlab.beisen.co/ux/customize-page-demo