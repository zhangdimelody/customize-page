	var jst = (function(){
	        
	        this["JST"] = this["JST"] || {};
	
	         this["JST"]["common/custom-layouts/common/layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="layout_wrap"></div>\r\n';}return __p};
	
	          this["JST"]["common/custom-layouts/common/pop-content-tree-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<h3>common/custom-layouts/common/pop-content-tree</h3>\n<p class="lead">\n\t<strong>View: </strong>\n\t<small>\n\t\t<input style="border:none;width:80%;" \n\t\t\tonmouseover="this.select()"\n\t\t\tonmouseout="this.blur()"\n\t\t value="app\\scripts\\views\\common\\custom-layouts\\common\\pop-content-tree-item-view.js" />\n\t</small>\n</p>\n<p class="lead">\n\t<strong>Template: </strong>\n\t<small>\n\t\t<input style="border:none;width:80%;" \n\t\t\tonmouseover="this.select()"\n\t\t\tonmouseout="this.blur()"\n\t\t value="app\\templates\\common\\custom-layouts\\common\\pop-content-tree-item.html" />\n\t</small>\n</p>';}return __p};
	
	          this["JST"]["common/custom-layouts/common/popdialog-layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="pop_wrap pos_abs" style="display:none">\n    \t<h3>添加<span class="title"></span></h3>\n    \t<div class="operate_wrap content_wrap">\n    \t\t\n    \t</div>\n    \t<div class="btn_wrap clearfix">\n    \t\t<span class="confirm_btn r_border">确认</span>\n    \t\t<span class="cancel_btn">取消</span>\n    \t</div>\n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/common/show-layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="bac_black ">\n\t<div class="left_region"></div>\n\t<div class="right_wrap">\n\t\t<div class="right_region"></div>\n\t\t<div class="preview_arrow pos_abs"></div>\n\t\t<span class="arrow"></span>\n\t</div>\n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/common/sidebar"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="second_step">\r\n\t<h1 class="title_wrap">\r\n\t  <!-- <a href="#stepone"><span class="goback_icon"></span></a> -->\r\n\t  <div class="operate_btn">\r\n\t  <!-- <span class="mgright30">预览</span> -->\r\n\t  \t<span class="save_set_info">保存</span>\r\n\t  </div>\r\n\t  <div class="sava-condition-alert save_success" style="display:none;">\r\n        <img class="save-alert-ico">\r\n        <span>成功</span>\r\n      </div>\r\n\t</h1>\r\n\t<div class="self_defined sidebar_wrap">\r\n\t        \r\n\t</div>\r\n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/common/toolbar/customize-layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<dl class="block_wrap customize_wrap">\n\t<dt><span class="home_icon color_icon"></span>用户定制<span class="arrow_down"></span></dt>\n\t<textarea class="customize"></textarea>\n\t<p class="clearfix"><a href="javascript:void(0)" class="submit_btn fr">提交</a></p>\n\t<div class="list_wrap"></div>\n</dl>';}return __p};
	
	          this["JST"]["common/custom-layouts/common/toolbar/list-composite"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<!-- <div class="defined_list defined_list_alone mgtop10">\n\t<h3 class="title">导航栏</h3>\n\t<ul>\n\t\t<div class="nav_list"></div>\n\t\t<li> \n\t\t\t<div class="defined_item">\n\t\t\t<a id="add_bottom_link" class="ico_add_wrap add_nav" style="cursor:pointer;"><span class="ico_add left"></span>添加导航</a>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n</div> -->\n\n<dl class="block_wrap clearfix">\n        <dt class="">\n        \t<span class="home_icon nav_icon"></span><span class="title inline_block"></span><span class="arrow_down"></span><span class="add_icon add_nav fr"></span>\n        \t\n        </dt>\n        <div class="nav_list"></div>\n</dl>\n\n\n\n';}return __p};
	
	          this["JST"]["common/custom-layouts/common/toolbar/style-color-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '\n\n<dd class="defined_item hover_item" name=' +((__t = (highlightTrigger )) == null ? '' : __t) +' >\n\t<span class="folder_icon"></span>' +__e(name ) +'<input id="' +__e(id ) +'" class="js-color color_font fr mgright30 mgtop10" hovername="' +((__t = (highlightTrigger )) == null ? '' : __t) +'" classname="' +((__t = (selector )) == null ? '' : __t) +'" flag="textcolor" value="' +((__t = (textcolor )) == null ? '' : __t) +'" >\n</dd>\n';}return __p};
	
	          this["JST"]["common/custom-layouts/common/toolbar/style-composite"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '\n<dl class="block_wrap">\n    <dt><span class="home_icon color_icon"></span>颜色<span class="arrow_down"></span></dt>\n    <div class="style_ul_wrap"></div>\n    \n</dl>';}return __p};
	
	          this["JST"]["common/custom-layouts/four/layout-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += ' <div class="self_preview_01" id="preview_box" style="height: 719px;">\n   <div id="preview_mask"></div>\n   <div class="self_preview_wrap">\n    <div class="preview_head">\n     <div id="company_logo_container">\n      <div id="logo_img_01" un="container" class="company_logo edit_issue">\n       <div class="define_position" style="position:absolute;"> \n        <div un="masker" style="position: absolute; top: 0px; z-index: 941; overflow: hidden; height: 40px; width: 230px; cursor: default;"></div> \n        <div um="layer" un="toolbar" style="display:none;position:absolute;z-index:955;top:10px;left:10px;"> \n         <div style="cursor:default;height:172px;overflow:hidden;width:49px;z-index:956;position:absolute;"> \n          <div style="position:absolute; background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\'); height:188px; width:98px;"> \n          </div> \n          <div un="arrow" dir="up" style="cursor:pointer;height:16px;margin:0 0 0 15px;overflow:hidden;position:absolute;width:18px;"> \n           <div style="display:none;margin:0 0 0 -64px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n           </div> \n          </div> \n          <div un="arrow" dir="left" style="cursor:pointer;height:19px;margin:15px 0 0;overflow:hidden;position:absolute;width:15px;"> \n           <div style="display:none;margin:-15px 0 0 -49px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n           </div> \n          </div> \n          <div un="arrow" dir="right" style="cursor:pointer;height:19px;margin:15px 0 0 32px;overflow:hidden;position:absolute;width:16px;"> \n           <div style="display:none;margin:-15px 0 0 -81px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n           </div> \n          </div> \n          <div un="arrow" dir="down" style="cursor:pointer;height:16px;margin:33px 0 0 15px;overflow:hidden;position:absolute;width:18px;"> \n           <div style="display:none;margin:-33px 0 0 -64px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n           </div> \n          </div> \n          <div un="zoom" dir="out" title="放大" style="cursor:pointer;height:17px;margin:61px 0 0 15px;overflow:hidden;position:absolute;width:17px;"> \n           <div style="display:none;margin:-61px 0 0 -64px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n           </div> \n          </div> \n          <div un="zoom" dir="in" title="缩小" style="cursor:pointer;height:17px;margin:148px 0 0 15px;overflow:hidden;position:absolute;width:17px;"> \n           <div style="display:none;margin:-148px 0 0 -64px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n           </div> \n          </div> \n          <div un="slot" style="cursor:pointer;height:70px;margin:80px 0 0 15px;position:absolute;width:17px;"> \n          </div> \n          <div un="thumb" style="cursor: url(http://exmail.qq.com/zh_CN/htmledition/images/openedcursor.cur), default; height: 16px; margin: 43px 0px 0px 12px; overflow: hidden; position: absolute; width: 25px; top: 75px;"> \n           <div style="margin:-172px 0 0 -12px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\'); height:188px; width:98px;"> \n           </div> \n          </div> \n          <div style="background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');"> \n          </div> \n         </div> \n        </div> \n        <div un="border" style="position: absolute; margin-left: -5px; margin-top: -5px; border: 5px dotted rgb(204, 204, 204); height: 40px; width: 230px; display: none; visibility: hidden;"></div> \n       \n       </div>\n      </div>\n    \n     \n     \n     </div>\n     <p id="company_desc" class="bg_color edit_issue">让邮件飞越五湖四海 以协作凝聚您的团队</p>\n    </div>\n    <div class="company_main">\n     <div class="company_main_wrap">\n      <div id="company_img_container" class="company_pic">\n       <div id="company_img_01" un="container">\n        <div class="define_position" style="position:absolute;"> \n         <div un="masker" style="position: absolute; top: 0px; z-index: 941; overflow: hidden; height: 254px; width: 330px; cursor: default;"></div> \n         <div um="layer" un="toolbar" style="display:none;position:absolute;z-index:955;top:10px;left:10px;"> \n          <div style="cursor:default;height:172px;overflow:hidden;width:49px;z-index:956;position:absolute;"> \n           <div style="position:absolute; background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\'); height:188px; width:98px;"> \n           </div> \n           <div un="arrow" dir="up" style="cursor:pointer;height:16px;margin:0 0 0 15px;overflow:hidden;position:absolute;width:18px;"> \n            <div style="display:none;margin:0 0 0 -64px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n            </div> \n           </div> \n           <div un="arrow" dir="left" style="cursor:pointer;height:19px;margin:15px 0 0;overflow:hidden;position:absolute;width:15px;"> \n            <div style="display:none;margin:-15px 0 0 -49px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n            </div> \n           </div> \n           <div un="arrow" dir="right" style="cursor:pointer;height:19px;margin:15px 0 0 32px;overflow:hidden;position:absolute;width:16px;"> \n            <div style="display:none;margin:-15px 0 0 -81px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n            </div> \n           </div> \n           <div un="arrow" dir="down" style="cursor:pointer;height:16px;margin:33px 0 0 15px;overflow:hidden;position:absolute;width:18px;"> \n            <div style="display:none;margin:-33px 0 0 -64px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n            </div> \n           </div> \n           <div un="zoom" dir="out" title="放大" style="cursor:pointer;height:17px;margin:61px 0 0 15px;overflow:hidden;position:absolute;width:17px;"> \n            <div style="display:none;margin:-61px 0 0 -64px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n            </div> \n           </div> \n           <div un="zoom" dir="in" title="缩小" style="cursor:pointer;height:17px;margin:148px 0 0 15px;overflow:hidden;position:absolute;width:17px;"> \n            <div style="display:none;margin:-148px 0 0 -64px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');height:188px;width:98px;"> \n            </div> \n           </div> \n           <div un="slot" style="cursor:pointer;height:70px;margin:80px 0 0 15px;position:absolute;width:17px;"> \n           </div> \n           <div un="thumb" style="cursor: url(http://exmail.qq.com/zh_CN/htmledition/images/openedcursor.cur), default; height: 16px; margin: 40.7272727272727px 0px 0px 12px; overflow: hidden; position: absolute; width: 25px; top: 75px;"> \n            <div style="margin:-172px 0 0 -12px;background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\') no-repeat;*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\'); height:188px; width:98px;"> \n            </div> \n           </div> \n           <div style="background:url(\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');*background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\', sizingMethod=\'corp\', src=\'http://exmail.qq.com/zh_CN/htmledition/images/zoom_bar.png\');"> \n           </div> \n          </div> \n         </div> \n         <div un="border" style="position: absolute; margin-left: -5px; margin-top: -5px; border: 5px dotted rgb(204, 204, 204); height: 254px; width: 330px; display: none; visibility: hidden;"></div> \n  \n        </div>\n       </div>\n       <div id="company_img_02" un="container" etyle="display:none" style="display: none;"></div>\n   \n   <div class="images_region"></div>\n      </div>\n      <div class="company_loginbox bg_color border_color edit_issue">\n       <h3>登录邮箱</h3>\n       <div class="company_input_wrap">\n        <label>帐&nbsp;&nbsp;号：</label>\n        <input un="account" class="self_input" type="text" style="color:#a0a0a0" value="帐号" />\n       </div>\n       <div class="company_input_wrap">\n        <label>密&nbsp;&nbsp;码：</label>\n        <input un="pwd" class="self_input" type="text" style="color:#a0a0a0" value="密码" />\n       </div>\n       <div style="margin-top:5px;color:#000;" id="Five">\n        <input type="checkbox" />\n        <label for="ss" style="line-height:15px;">5天内自动登录</label>\n       </div>\n       <div class="login_submit">\n        <a class="login_btn_wrapper" href="javascript:;"><input class="login_btn" type="submit" value="登录" /></a>\n        <a class="self_forg" href="javascript:;">忘记密码？</a>\n       </div>\n      </div>\n     </div>\n    </div>\n    <div class="company_bottom">\n     <div class="footer_region">\n\t      <a href="http://www.tencent.com" target="_blank">关于腾讯</a> | \n\t      <a href="http://www.qq.com/contract.shtml" target="_blank">服务条款</a>\n     </div>\n     <div class="company_copyright edit_issue">\n      <span id="copyright_sign">&copy;</span>\n      <span id="company_copyright">1998 - 2012 Tencent Inc. All Rights Reserved</span>\n     </div>\n    </div>\n    <div id="EditWrap" class=""></div>\n    <div id="EditWrap2"></div>\n   </div>\n  </div>';}return __p};
	
	          this["JST"]["common/custom-layouts/four/module/footer-composite"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="company_link bg_color nav_wrap edit_issue" id="bottom_links">\r\n\t\r\n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/four/module/footer-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += ' <a href="http://www.tencent.com" target="_blank">' +((__t = (name )) == null ? '' : __t) +'</a> <em>|</em>';}return __p};
	
	          this["JST"]["common/custom-layouts/four/module/images-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '\n\n          <img unselectable="on" un="imgv" src="' +((__t = (logo )) == null ? '' : __t) +'" style="position: absolute;top: 84px;left: 0px;margin-top: 0px;margin-left: 0px; width:230px; height:40px;" /> \n\n          <img unselectable="on" un="imgv" src="' +((__t = (bigPic )) == null ? '' : __t) +'" style="position: absolute; margin-top: 0px; margin-left: 0px; height: 238px; width: 324px;" /> \n';}return __p};
	
	          this["JST"]["common/custom-layouts/four/toolbar/upload-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '    <dl class="block_wrap">\n        <dt><span class="home_icon upload_icon"></span>上传图片<span class="arrow_down"></span></dt>\n\n        \n        \n<form action="/uploader.php" method="post" enctype="multipart/form-data" target="uploads">\n     <ul class="upload_list">\n      <dd>\n          <!-- <span class="delete_icon"></span> --><span class="folder_icon"></span>企业LOGO\n          <li class="countabled inline_block pos_rel fr" hc="01" mor="showWrapBox">\n             <div class="file_upload">\n               <input type="hidden" name="sid" value="1TK7JYdX3nxI20AU,7" />\n               <input type="hidden" name="action" value="add_img" />\n               <input type="hidden" name="t" value="biz_rf_mgr" />\n               <input type="hidden" name="fileid" value="logo" />\n               <input type="file" name="companypic" />\n              \n             </div>\n             <a class="self_normalbtn right" un="uploadlogo_btn" href="javascript:;">上传</a>\n             <input class="image_input self_input_c company_logo" flag="logo" value=' +__e(logo ) +' />\n          </li>\n      </dd>\n      <dd>\n        <!-- <span class="delete_icon"></span> --><span class="folder_icon"></span>公司logo\n        <li class="countabled inline_block fr pos_rel" hc="02" mor="showWrapBox">\n            <!-- <input class="fr pro_btn mgtop10 mgbtm10" type="submit" /> -->\n           <div class="file_upload">\n            <!-- <form un="uploadLeftImg" action="/cgi-bin/bizmail_ui" method="post" target="actionFrame" enctype="multipart/form-data"> -->\n             <input type="hidden" name="callback" value="callback" /> \n             <input type="hidden" name="sid" value="1TK7JYdX3nxI20AU,7" />\n             <input type="hidden" name="action" value="add_img" />\n             <input type="hidden" name="t" value="biz_rf_mgr" />\n             <input type="hidden" name="fileid" value="bg" />\n             <input type="file" name="userpic" />\n            <!-- </form> -->\n        \n           </div>\n            <a class="self_normalbtn right" un="uploadbg_btn" href="javascript:;">上传</a>\n           <input class="image_input self_input_c user_logo" flag="bigPic" value="' +__e(bigPic ) +'"/>\n        </li>\n      </dd>\n        <!-- <input type="text" class=""/> -->\n      <dd class="folder_end"><span class="folder_icon"></span><input type="submit" class="sub_btn"/>\n      </dd>\n     </ul>\n</form>\n     \n    <iframe src="javascript:void(0)" frameborder="0" name="uploads" height="0">\n    </iframe>\n    <!-- </div> -->\n    </dl>\n\n    <div class="upload_file"></div>\n';}return __p};
	
	          this["JST"]["common/custom-layouts/one/layout-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="header-region">\n   <div class="head_region"></div>\n   <div class="hide_nav_region"></div>\n</div>\n<div class="left_nav_region"></div>\n';}return __p};
	
	          this["JST"]["common/custom-layouts/one/module/hidenav-list"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="talent_app_selector" style="display: none;"> \n     <ul> \n     \t<div class="nav_wrap"></div>\n     </ul> \n     <a href="javascript:void(0);" title="" class="closed" onclick="$(\'.talent_app_selector\').slideUp();"></a> \n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/one/module/leftnav-list"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="sidebar-region">\n   <ul class="_tt_sidenav"> \n    <div class="nav_wrap"></div>\n   </ul>\n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/one/tita-header-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="_tt_header"> \r\n  <a class="logo" href="/u/102076193/Home#home" title="返回首页"><img src="' +((__t = (((tenantInfo)).tenantLogo )) == null ? '' : __t) +'" alt="" style="width: 100px; height: 31.25px; margin-top: 3.875px;" /></a> \r\n  <a class="italent_show_app_container" href="javascript:void(0)" onclick="$(\'.talent_app_selector\').slideDown();"><span class="italent_show_app"></span></a> \r\n  <span class="brand"> ' +__e(((tenantInfo)).tenantName ) +' </span> \r\n  <ul class="_tt_headnav"> \r\n    \r\n     \r\n     <li class="logout_tthn"> <a href="javascript:void(0);" class="avatar_ltthn">\r\n      <img src="../images/avator.jpg" alt="' +__e(((tenantInfo)).userName ) +'" width="30" height="30" /> </a> <a href="javascript:void(0);"  onclick="$(\'.menu_ltthn\').show()" class="namewrap_tthn"><span class="name_tthn">zd</span><b class="caret"></b></a> \r\n         <ul class="menu_ltthn">\r\n\t\t\t<li class="profile_ltthn"><a href="#italent/home?appid=1&amp;apptype=1&amp;name=TalentProfile-record">个人主页</a></li>\r\n\t\t\t<li class="archives_ltthn"><a href="#more/archives?appid=1&amp;apptype=1">简档编辑</a></li>\r\n\t\t\t<li class="set_ltthn"><a href="/u/102076193/Setting/Avatar">个人设置</a></li>\r\n\t\t\t<li><a data-name="logout" href="/Account/Logout">退出登录</a></li>\r\n\t\t</ul>\r\n     </li> \r\n </ul> \r\n\r\n\r\n<div id="indicater_tri" class="indicater_tri indicater2_tri" isopen="0" hasdata="0" style="display: none; position: absolute; zoom: 1; z-index: 1009; left: 1697px; top: 0px;"> \r\n <a href="javascript:void(0)" class="tri"></a> \r\n <div id="indicator_v2" class="indicater indicater2" style="display: none;"> \r\n  <ul class="list_indi"></ul> \r\n</div>\r\n</div>\r\n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/one/toolbar/upload-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '\n\n\n    <dl class="block_wrap">\n        <dt><span class="home_icon upload_icon"></span>上传图片<span class="arrow_down"></span></dt>\n        \n<form action="/uploader.php" method="post" enctype="multipart/form-data" target="uploads">\n     <ul class="upload_list">\n      <dd>\n          <!-- <span class="delete_icon"></span> --><span class="folder_icon"></span>企业LOGO\n          <li class="countabled inline_block pos_rel fr" hc="01" mor="showWrapBox">\n             <div class="file_upload">\n               <input type="hidden" name="sid" value="1TK7JYdX3nxI20AU,7" />\n               <input type="hidden" name="action" value="add_img" />\n               <input type="hidden" name="t" value="biz_rf_mgr" />\n               <input type="hidden" name="fileid" value="logo" />\n               <input type="file" name="companypic" />\n              \n             </div>\n             <a class="self_normalbtn right" un="uploadlogo_btn" href="javascript:;">上传</a>\n             <input class="image_input self_input_c company_logo" type="text" flag="tenantLogo"  value=' +__e(tenantLogo ) +'  style="display:none;"/>\n          </li>\n      </dd>\n       \n        <!-- <input type="text" class=""/> -->\n      <dd><span class="folder_icon"></span><input type="submit" class="sub_btn"/></dd>\n      <dd class="folder_end">\n        <!-- <span class="delete_icon"></span> --><span class="folder_icon"></span><input class="self_input_c image_input " flag="tenantName" value=' +__e(tenantName ) +'  type="text" />\n      </dd>\n         \n     </ul>\n</form>\n     \n    <iframe src="javascript:void(0)" frameborder="0" name="uploads" height="0">\n    </iframe>\n    <!-- </div> -->\n    </dl>\n\n    <div class="upload_file"></div>';}return __p};
	
	          this["JST"]["common/custom-layouts/three/layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<h3 class="customize_title">请在左侧输入需要定制的模板页</h3>\n<div class="custom_region">\n\t<iframe class="preview_wrap" style="border: 0 none;" src="javascript:void(0)" width=100% height=600></iframe>\n</div>\n';}return __p};
	
	          this["JST"]["common/custom-layouts/two/layout-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="bs_header">\n\t<div class="head_region"></div>\n\t<div class="user_region"></div>\n\t<div class="nav_region"></div>\n</div>\n\n\n\n\n';}return __p};
	
	          this["JST"]["common/custom-layouts/two/module/nav-list"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="nav clearfix">\n\t<ul class="list_nav nav_wrap fl">\n\t\t\n\t</ul>\n\t<div class="search_global fr">\n\t\t<div class="searchAll">\n\t\t\t<div class="layer_search">\n\t\t\t\t<a href="javascript:void(0)" class="tit_lysearch"><span class="tit tit_lst2"></span></a>\n\t\t\t</div>\n\t\t\t<ul class="list_lysearch">\n\t\t\t\t<li class="lst"><a href="javascript:void(0)"><span>应聘者</span></a></li>\n\t\t\t\t<li class="lst2"><a href="javascript:void(0)"><span>职位</span></a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<input type="text" class="input_srch">\n\t\t<button type="button" class="btn_srch"></button>\n\t\t<a href="javascript:void(0)" class="lk_go" title="高级搜索"></a>\n\t</div>\n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/two/module/userinfo-list-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="list_gnb_text currentProduct clearfix" id="currentProduct">\n\t<a href="javascript:;" hoverid="' +((__t = (id )) == null ? '' : __t) +'" class='; if(select!=""){ ;__p +=__e("ico_arr" ); } ;__p += '><span>' +__e(name) +'</span></a>\n</div>\n'; if(select!=""){ ;__p += '\n\t<div class="selectlist productList" hoverid="' +((__t = (id )) == null ? '' : __t) +'">\n\t\t<ul class="sel_wrap clearfix">\n\t\t\t'; _.each(JSON.parse(select),function(one){ ;__p += '\n\t\t\t<li class="' +__e(one.className ) +'"><a href="' +__e(one.href ) +'"><span>' +__e(one.name ) +'</span></a></li>\n\t\t\t'; }) ;__p += '\n\t\t</ul>\n\t</div>\n'; } ;__p += '\n\t\n';}return __p};
	
	          this["JST"]["common/custom-layouts/two/module/userinfo-list"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="gnb">\r\n\t<ul class="list_gnb">\r\n\t\t<div class="nav_wrap"></div>\r\n\t\t\r\n\t</ul>\r\n</div>';}return __p};
	
	          this["JST"]["common/custom-layouts/two/tms-upload-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<h1 class="logo">\n\t<img src="http://stnew03.beisen.com/ux/beisen-cloud/release/app/images/logo.gif" width="89" height="30" alt="iTalent">\n\t<span class="company userLogo">\n\t\t\n\t\t<img src="' +__e( companyLogo ) +'" height="30" title="BeisenTestRecruit03">\n\t\t\n\t</span>\n</h1>\n';}return __p};
	
	          this["JST"]["common/custom-layouts/two/toolbar/upload-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '    <dl class="block_wrap">\r\n        <dt><span class="home_icon upload_icon"></span>上传图片<span class="arrow_down"></span></dt>\r\n\r\n        \r\n        \r\n<form action="/FileUpload/Upload" method="post" enctype="multipart/form-data" target="uploads">\r\n     <ul class="upload_list">\r\n      \r\n      <dd>\r\n        <!-- <span class="delete_icon"></span> --><span class="folder_icon"></span>公司logo\r\n        <li class="countabled inline_block fr pos_rel" hc="02" mor="showWrapBox">\r\n            <!-- <input class="fr pro_btn mgtop10 mgbtm10" type="submit" /> -->\r\n           <div class="file_upload">\r\n            <!-- <form un="uploadLeftImg" action="/cgi-bin/bizmail_ui" method="post" target="actionFrame" enctype="multipart/form-data"> -->\r\n    \t\t     <input type="hidden" name="domain" value="www.beisencloud.com" />\r\n              <input type="hidden" name="callback" value="parent.callback" />\r\n              <input type="hidden" name="size" value="5000" />\r\n              <input type="hidden" name="keyspace" value="BeisenCloudSystemFile" />\r\n              <input type="hidden" name="policy" value="ProtectedNoCaptcha" />\r\n              <input type="hidden" name="appName" value="beisencloud" />\r\n\r\n             <input type="file" name="userpic" />\r\n            <!-- </form> -->\r\n        \r\n           </div>\r\n            <a class="self_normalbtn right" un="uploadbg_btn" href="javascript:;">上传</a>\r\n           <input class="image_input self_input_c user_logo" type="text"  flag="companyLogo"  value="' +__e( companyLogo ) +'" style="display:none;"/>\r\n        </li>\r\n      </dd>\r\n        <!-- <input type="text" class=""/> -->\r\n      <dd class="folder_end"><span class="folder_icon"></span><input type="submit" value="提交" class="sub_btn"/>\r\n      </dd>\r\n     </ul>\r\n</form>\r\n     \r\n    <iframe src="javascript:void(0)" frameborder="0" name="uploads" height="0">\r\n    </iframe>\r\n    <!-- </div> -->\r\n    </dl>\r\n\r\n    <div class="upload_file"></div>\r\n';}return __p};
	
	          this["JST"]["common/custom-layouts/two/toolbar/userinfo-list-item"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '\n<div class="clearfix sort_wrap" id="' +((__t = (id )) == null ? '' : __t) +'">\n\t<dd>\n\t\t<span class="delete_icon"></span><span class="folder_icon"></span>\n\t\t<input  class="self_input_c" flag="name" value="' +__e(name ) +'" />\n\t\t<!-- <a class="delete_this fl"></a> -->\n\t\t<div class=" width180 text_center" style="display:none;">\n\t\t\t\n\t\t\t<p class="select_set_wrap">\n\t\t\t\t<div class="mgtop10 mgbtm10 choose_sel_wrap">\n\t\t\t\t\t<span>下拉</span>\n\t\t\t\t\t<a id="0" type="chooseSelect" class=' +((__t = ( (select=="")? "checked" : "" )) == null ? '' : __t) +'>无</a>\n\t\t\t\t\t<a id="1" type="chooseSelect" class=' +((__t = ( (select!="")? "checked" : "" )) == null ? '' : __t) +'>有</a>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="second_select"  hoverid="' +((__t = (id )) == null ? '' : __t) +'" '; if(select==""){ ;__p += ' style="display:none;" '; } ;__p += '>\n\t\t\t\t\t<a href="javascript:;" class="add_select_item">添加下拉</a>\n\t\t\t\t'; if(select!=""){ ;__p += '\n\t\t\t\t\t'; _.map(JSON.parse(select),function(item,key){ ;__p += '\n\t\t\t\t\t<div class="item_wrap clearfix mgtop10">\n\t\t\t\t\t\t<a class="small_delete fl" tid="' +((__t = (key)) == null ? '' : __t) +'"></a>\n\t\t\t\t\t\t<div class=" width136">\n\t\t\t\t\t\t\t<input tid="' +((__t = (key )) == null ? '' : __t) +'" class="self_input_c" flag="name" value="' +__e(item.name ) +'" />\n\t\t\t\t\t\t\t<input tid="' +((__t = (key )) == null ? '' : __t) +'" class="self_input_c" flag="className" value=' +__e(item.className ) +'/>\n\t\t\t\t\t\t\t<input tid="' +((__t = (key )) == null ? '' : __t) +'" class="self_input_c" flag="href" value=' +__e(item.href ) +' />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t'; }) ;__p += '\n\t\t\t\t'; } ;__p += '\n\t\t\t\t</div>\n\t\t\t</p>\n\t\t</div>\n\t\t<span class="setting_icon"></span>\n\t\t<!-- <a class="sort_this fr"></a> -->\n\t</dd>\n</div>\n\n\n';}return __p};
	
	        return this["JST"];
	      
	      })();
	define('ListItemOne',['talent'],function(Talent){
		return Talent.ItemView.extend({
				template : _.template('<dd class="sort_wrap" id="<%=id %>"><span class="delete_icon delete_this"></span>'
				+'<span class="folder_icon"></span><input type="text" value="<%-name %>"  flag="name" class="self_input_c"/></dd>')
	
				
				,tagName : 'li'
				,initialize : function(){
	
				}
				,ui:{
					'inputChange' : 'input.self_input_c'
					,'deleteThis' : 'span.delete_this'
				}
				,events:function(){
					var events = {};
					events['change ' + this.ui.inputChange] = 'inputChange';
					events['click ' + this.ui.deleteThis] = 'deleteThis';
					// events['click ' + this.ui.item] = 'eventHandler';
					return events;
				}
				,deleteThis:function(e){
					this.trigger("deleteOne",e);
				}
				,inputChange:function(e){
					var inputNode = this.$el.find(e.currentTarget);
					var flag = inputNode.attr("flag");
					var text = inputNode.val();
					
					this.model.set(flag , text);
				}
		});
	}) 
	
	define('ListComposite',['talent'],function(Talent){
	
		return Talent.CompositeView.extend({
			template: jst['common/custom-layouts/common/toolbar/list-composite']
			,itemViewContainer : ".nav_list"
			,initialize: function(options) {
				this.showAddBtn = false; 
				if(options.popContentView){
					this.showAddBtn = true;
					this.popContentTreeView = new options.popContentView({"url" : options.popTreeUrl});
					this.listenTo(this.popContentTreeView,'selected',function(selectedNode){
						this.$el.find(".nav_list :last-child dd").removeClass("folder_end");
						this.collection.add(new Talent.Model(selectedNode));
						this.changeEndCss();
						// 如果是不可编辑
						if(!this.inputEdit){
							this.$el.find("input[type=text]").addClass('disabled').attr('disabled','disabled');
						}
					},this);
				}
				this.title = options.title;
				
				if(_.has(options,"inputEdit")){
					this.inputEdit = options.inputEdit;
				}else{
					this.inputEdit = true;
				}
	
				this.on("itemview:deleteOne",function(one){
					this.collection.remove(one.model);
					this.changeEndCss();
				},this);
			}
			,ui:{
				'addnav' : 'span.add_nav'
			}
			,events:function(){
				var events = {};
				events['click ' + this.ui.addnav] = 'addNav';
				events['click ' + this.ui.navRadio] = 'clickRadio';
				return events;
			}
			,addNav:function(e){
	
				var addBtn = $(e.currentTarget);
				
				this.trigger('pop', {
					contentView: this.popContentTreeView
					,title: this.title
					,triggerNode: addBtn
				});
			}
			,onRender: function() {
			}
			,onShow: function() {
				var self = this;
				this.$el.find("span.title").html(this.title);
				if(!(this.showAddBtn)){
					this.$el.find("span.add_icon").hide();
				}
				this.$el.find(".nav_list").sortable({ 
					stop: function() {
						var ids = new Array();
						var newData = new Array();
						var allwrap = self.$el.find("dd.sort_wrap");
	
						_.each(allwrap,function(item){
							var id = $(item).attr("id");
							var one = _.findWhere(self.collection.toJSON(),{"id":id});
							ids.push(id);
							newData.push(one);
						});
	
						self.collection.reset(newData);
						self.changeEndCss();
	        		}
	    		});
				this.changeEndCss();
				// 如果是不可编辑
				if(!this.inputEdit){
					this.$el.find("input[type=text]").addClass('disabled').attr('disabled','disabled');
				}
			}
			,changeEndCss:function(){
				this.$el.find(".nav_list :last-child dd").addClass("folder_end");
			}
			,onClose:function(){
			}
		});
	});
	
	define('StyleItem',['talent'],function(Talent){
		return Talent.ItemView.extend({
			template: jst['common/custom-layouts/common/toolbar/style-color-item']
			,tagName : 'li'
			,initialize: function() {
				// jscolor.dir = Context.getStaticUrl();
			}
			,ui:{
				'jscolor' : 'input.js-color'
				,'definedItem' : '.defined_item'
				// item: '.ui-item'
			}
			,events:function(){
				var events = {};
				events['change ' + this.ui.jscolor] = 'changeJscolor';
				// events['mouseenter ' + this.ui.definedItem] = 'mouseenterItem';
				// events['mouseleave ' + this.ui.definedItem] = 'mouseleaveItem';
				// events['click ' + this.ui.item] = 'eventHandler';
				return events;
			}
			,mouseenterItem:function(e){
				var hovername = $(e.currentTarget).find("input").attr("hovername");
				var data = {
					'flag' : true
					,'classname' : hovername
				}
				this.data = data;
				this.trigger('hover',data);
			}
			,mouseleaveItem:function(e){
				var hovername = $(e.currentTarget).find("input").attr("hovername");
				var data = {
					'flag' : false
					,'classname' : hovername
				}
				this.data = data;
				this.trigger('hover',data);
			}
			,changeJscolor:function(){
				var inputNode = this.ui.jscolor;
				var id = inputNode.attr("id");
				var classname = inputNode.attr("classname");
				var flag = inputNode.attr("flag");
				var text = inputNode.val();
				
				this.addColorStyle(classname,text);
				
				this.model.set("textcolor",text);
			}
			,addColorStyle:function(classname,text){
				// 添加一条样式，并显示
				var style = document.createElement("style");
				var styleId = parseInt(Math.random()*10000);
				style.id = styleId;
				//这里最好给ie设置下面的属性
				/*if (isIE()) {
					style.type = "text/css";
					style.media = "screen";
				}*/
				if(_.indexOf(text,"#")!=0){
					text = "#" + text;
				}
				var styles = classname+"{ color:"+ text +"}";
				(document.getElementsByTagName('head')[0] || document.body).appendChild(style);
	
				if (style.styleSheet) { //for ie
					style.styleSheet.cssText = styles;
				}else{//for w3c
					style.appendChild(document.createTextNode(styles));
				}
			}
			,onRender: function() {
			}
			,onShow: function() {
				this.addColorStyle(this.model.toJSON().className
									, this.model.toJSON().textcolor);
			}
			,onClose:function(){
			}
		});
	});
	
	define('StyleComposite',['talent'],function(Talent){
		return Talent.CompositeView.extend({
			 itemViewContainer : ".style_ul_wrap"
			,template : jst['common/custom-layouts/common/toolbar/style-composite']
			,initialize:function(options){
				if(_.has(options,"inputEdit")){
					this.inputEdit = options.inputEdit;
				}else{
					this.inputEdit = true;
				}
			}
			,onRender:function(){
				
			}
			,onShow:function(){
				this.$el.find("li:last-child dd").addClass("folder_end");
				// 如果是不可编辑
				if(!this.inputEdit){
					this.$el.find("input[type=text]").addClass('disabled').attr('disabled','disabled');
				}
			}
		});
	});
	
	define('UploadItem',['talent'],function(Talent){
		return Talent.ItemView.extend({
					// template : jst["common/custom-layouts/one/toolbar/upload-item"]
					initialize: function(options) {
						this.template = jst["common/custom-layouts/"+options.templateType+"/toolbar/upload-item"]
						window['callback'] = this.callback;
						if(_.has(options,"inputEdit")){
							this.inputEdit = options.inputEdit;
						}else{
							this.inputEdit = true;
		
							if(_.has(options,"inputMaxLength")){
								this.inputMaxLength = options.inputMaxLength;
							}else{
								this.inputMaxLength = 10;
							}
						}
		
					}
					,ui:{
						'inputChange' : 'input.self_input_c'
						,'companyLogo' : 'input.company_logo'
						// ,'userLogo' : 'input.user_logo'
					}
					,events:function(){
						var events = {};
						events['change ' + this.ui.inputChange] = 'inputChange';
						events['change ' + this.ui.companyLogo] = 'uploadCallback';
						return events;
					}
					,uploadCallback:function(){
						var uploadData = {};
						var imageInputs = this.$el.find("input.image_input");
						_.each(imageInputs,function(one){
							var flag = $(one).attr("flag");
							uploadData[flag] = $(one).val();
						});
						
						this.model.set(uploadData);
					}
					,inputChange:function(e){
						var inputNode = this.$el.find(e.currentTarget);
		
						var flag = inputNode.attr("flag");
						var text = inputNode.val();
						
						if(text.length > this.inputMaxLength){
							if(inputNode.parent().find('span.text_red').length == 0){
								inputNode.after('<span class="text_red">字数不能超过'+this.inputMaxLength+'</span>');
							}
						}else{
							this.model.set(flag , text);
							inputNode.parent().find('span.text_red').remove();
						}
					}
					,onRender: function() {
					}
					,onShow: function() {
						// 如果是不可编辑
						if(!this.inputEdit){
							this.$el.find("input[type=text]").addClass('disabled').attr('disabled','disabled');
						}
					}
					,onClose:function(){
					}
					,callback:function(urls){
						var elementMap = ".image_input";
							
						// _.each(urls,function(value,key){
						// 	if(value!=""){
						// 		$($(elementMap)[key]).val(value);
						// 	}
						// });
			
						$(elementMap).val(urls.ClientUrl).change();
						// $($(elementMap)[0]).change();
					}
				});
	});
	
	define('PopContentTreeItem',['talent','mockJax'],function(Talent){
		return Talent.ItemView.extend({
				template : _.template('<ul id="popOrg" class="ztree"></ul>')
				,initialize:function(options){
					// 这是tree的setting
					this.setting = {
						data: {
							key: {
								id: "ID",
								name: "Text",
								children:"Functions",
								url:"javascript:;" //先置为不存在的属性
							},
							simpleData: {
								enable: true
							}
						}
					};
					this.url = options.url;
				}
				,onSubmit:function(){ 
					var checkedNode = $.fn.zTree.getZTreeObj("popOrg").getSelectedNodes();
					var selectedNode = {
									"id" : checkedNode[0].ID
									,"name" : checkedNode[0].Text
									,"category": checkedNode[0].Category
									,"type" : checkedNode[0].Type
									,"url" : checkedNode[0].Url
									,"className" : "plan_ttsn"
								};
					this.trigger("selected",selectedNode);
					this.$el.parent().parent().hide();
				}
				,onCancel:function(){
				}
				,onRender:function(){
				}
				,onShow:function(){
					var self = this;
					// var pageModel = new CustomizationPageModel({
					// 	productId: 'FFF63665-BD80-46CC-8866-192C64118EFE'
					// });
					var getTreeModel = new Talent.Model();
					getTreeModel.url = this.url;
					getTreeModel.fetch().done(function(resp){
						console.log(resp);
						$.fn.zTree.init(self.$el.find("#popOrg"), self.setting, resp.funMenu);
					})
				}
		});
	});
	
	define('PopDialogLayout',['talent'],function(Talent){
		return Talent.Layout.extend({
			template: jst['common/custom-layouts/common/popdialog-layout']
			,initialize: function(options) {
			}
			,ui:{
				// 'itemView': '.item_view'
				 'cancelPop' : '.pop_wrap span.cancel_btn'
				,'confirmPop' : '.pop_wrap span.confirm_btn'
			}
			,regions:{
				'contentWrap' : '.content_wrap'	
			}
			,events:function(){
				var events = {};
				events['click ' + this.ui.item] = 'eventHandler';
				events['click ' + this.ui.cancelPop] = 'cancelPop';
				events['click ' + this.ui.confirmPop] = 'confirmPop';
				return events;
			}
			,showContent:function(obj){
				this.contentWrap.show(obj.contentView);
				this.$el.find("h3 .title").html(obj.title);
				this.$el.find(".pop_wrap").show().css(obj.triggerNode.offset());
			}
			,confirmPop:function(){
				this.contentWrap.currentView.onSubmit();
			}
			,cancelPop:function(){
				this.$el.find(".pop_wrap").hide();
			}
			,onRender: function() {
			}
			,onShow: function() {
			}
			,onClose:function(){
			}
		});
	});
	
	define('SidebarOptionsOne',['talent'],function(Talent){
	
			return {
					"color": {
								path:"StyleComposite"
								,initOptions:{
											itemView : "StyleItem"
											,dataType : "Collection"
											// ,collection : new Talent.Collection(styleData)
										}
								,events:{
											 "collection" :"change"
										}
							}
					,"tenantInfo":{
								path:"UploadItem"
								,initOptions:{
											// template : jst["common/custom-layouts/one/toolbar/upload-item"]
											templateType : "one"
											,dataType : "Model"
											// ,model : new Talent.Model(uploadData)
										}
								,events:{
											 "model" :"change"
										}
							}
					,"nav":{
								path:"ListComposite"
								,initOptions:{
											itemView:"ListItemOne"
											,title:"左侧导航栏"
											,dataType : "Collection"
											,popContentView : "PopContentTreeItem"
											// ,collection:new Talent.Collection(titaLeftNavList)
										}
								,events:{
											 "collection" :"change remove reset add"
										}
							}
					,"secondaryNav":{
								path:"ListComposite"
								,initOptions:{
											itemView:"ListItemOne"
											,title:"下拉导航栏"
											,dataType : "Collection"
											,popContentView : "PopContentTreeItem"
											// ,collection:new Talent.Collection(titaHideNavList)
										}
								,events:{
											 "collection" :"change remove reset add"
										}
							}
					,"popDialog":{
									path:"PopDialogLayout"
									,initOptions:{
											}
									,events:{
											}
								}
					// ,"userinfo":{
					// 				path:"views/common/custom-layouts/common/toolbar/list-composite-view"
					// 				,initOptions:{
					// 							itemView:"views/common/custom-layouts/one/toolbar/userinfo-list-item-view"
					// 							,title:"用户信息导航栏"
					// 							,dataType : "Collection"
					// 							,popContentView : "views/common/custom-layouts/common/pop-content-tree-item-view"
					// 							// ,collection:new Talent.Collection(userInfoList)
					// 						}
					// 				,events:{
					// 							 "collection" :	"change remove reset add"
					// 						}
					// 			}
					// ,"usersetting":{
					// 				path:"views/common/custom-layouts/common/toolbar/list-composite-view"
					// 				,initOptions:{
					// 							itemView:'views/common/custom-layouts/one/toolbar/nav-list-item-view'
					// 							,title:"右侧用户设置"
					// 							,dataType : "Collection"
					// 							,popContentView : "views/common/custom-layouts/common/pop-content-tree-item-view"
					// 							// ,collection:new Talent.Collection(userSettingList)
					// 						}
					// 				,events:{
					// 							 "collection" :	"change remove reset add"
					// 						}
					// 			}
				}
	});
	
		
	
	define('SidebarView',['talent'],function(Talent){
		return Talent.Layout.extend({
			template :  jst['common/custom-layouts/common/sidebar']
			,initialize: function(options) {
				var self = this;
				
				this.viewnames = [];
				this.model = new Talent.Model();
				
				// 把数据融合到options.sidebarRegionsOptions里
				_.map(options.data,function(value,name){
					if(_.has(options.sidebarRegionsOptions,name)){
						var dataType = options.sidebarRegionsOptions[name].initOptions.dataType;
						options.sidebarRegionsOptions[name].initOptions[dataType.toLowerCase()] = new Talent[dataType](value);
					}else{
						var dataType = options.data[name].options.initOptions.dataType;
						options.data[name].options.initOptions[dataType.toLowerCase()] = new Talent[dataType](options.data[name].data);
						options.sidebarRegionsOptions[name] = options.data[name].options;
					}
				});
	
				_.map(options.sidebarRegionsOptions,function(val,key){
					if((!_.has(options.data, key)&&(key!="popDialog"))){
						delete options.sidebarRegionsOptions[key];
					}
				});
	
				this.regionOptions = options.sidebarRegionsOptions;
				this.createView();
				
			}
			,ui:{
				'saveSetInfo': 'span.save_set_info'
				,'hoverItem' : '.hover_item'
			}
			,events:function(){
				var events = {};
				events['click ' + this.ui.saveSetInfo] = 'saveSetInfo';
				// 方法内始终需要用到this,故这种方法不可行
				// events['mouseenter ' + this.ui.hoverItem] = 'enterHandler';
				// events['mouseleave ' + this.ui.hoverItem] = 'leaveHandler';
				return events;
			}
			,onRender: function() {
	
			}
			,setHeight:function(){
				this.$el.find("#second_step").css("height" , window.innerHeight);
			}
			,onShow: function() {
				var self = this;
				$.when.apply(this, this.defers).done(function() {
					self.regionShowView();
	
					jscolor.dir = self.getJscolorImageUrl();
					jscolor.init();
					
					self.$el.on('mouseenter', ".hover_item", function(){
						self.triggerHoverEvent(this, true);
					});
					self.$el.on('mouseleave', ".hover_item", function(){
						self.triggerHoverEvent(this, false);
					});
					self.$el.on("click",".arrow_down",function(e){
						var node = $(e.currentTarget);
						node.removeClass("rotateX rotateY");
						if(node.hasClass("hide_list")){
							node.addClass("rotateX");
							node.removeClass("hide_list").parent().next().slideDown();	
						}else{
							node.addClass("rotateY");
							node.addClass("hide_list").parent().next().slideUp();	
						}
					});
					_.each(self.viewnames,function(item){
						self.listenTo(self[item+'View'],'pop',function(obj){
							self.popDialogView.showContent(obj);
						});
					});
					self.setHeight();
					
				});
			}
			,getJscolorImageUrl: function() {
				var staticServer = BSGlobal.staticPath;
				return staticServer + "/images/customizePage/";
			}
			,createView:function(){
				var self = this;
				var viewOption = {};
				this.defers = [];
	
				_.each(this.regionOptions,function(value,key){
					var filePath = [];
					var def = new $.Deferred;
					self.viewnames.push(key);
					self.defers.push(def);
					filePath.push(value.path);
					// 添加region
					self.addRegion(key,"."+key+"_region");
	
					// 开始create view
	
					// 如果有 itemView参数 则引入文件
					if(value.initOptions.itemView != undefined){
						filePath.push(value.initOptions.itemView);
					}
					if(value.initOptions.popContentView != undefined){
						filePath.push(value.initOptions.popContentView);	
					}
					
					require(filePath,function(ViewName,ItemView,PopContentView){
						value.initOptions.itemView = ItemView;
						value.initOptions.popContentView = PopContentView;
						self[key+'View'] = new ViewName(value.initOptions);
	
						if(key == "customize"){
							self.listenTo(self.customizeView,'customHtml',function(layoutOptions){
								self.trigger("customHtml",layoutOptions);
							});
						}
						
						
						def.resolve();
						// 绑定监听事件
						_.map(value.events,function(name,target){
							var listenTarget = self[key+'View'];
							listenTarget = listenTarget[target];
							self.listenTo(listenTarget , name ,function(data){
								// 将sidebar自己的 model 重新 set 相应值
								self.model.set(key,this[key+'View'][target].toJSON());
							});
						});
					});
					
					// 结束create view
				});
			}
			,regionShowView:function(){
				var self = this;
				_.each(this.viewnames,function(item){
					var itemWrap = "<div name="+item+" class='"+item+"_region hover_item'></div>";
					self.$el.find(".self_defined").append(itemWrap);
					self[item].show(self[item+'View']);
				});
				// this.model.set()数据
				var data = {};
				_.each(this.regionOptions,function(value,key){
					var dataType = (_.has(value.initOptions,'collection'))?'collection':'model';
					data[key] = self[key+'View'][dataType].toJSON();
				});
				self.model.set(data);
			}
			// 保存操作
			,saveSetInfo:function(e){
				var self = this;
				var type = $(e.currentTarget).attr("type");
				var modelData = this.model.toJSON();
				
				this.trigger("saveConfigData",modelData);
				// switch(type){
				// 	case "two":
				// 		var data = {};
						
				// 		var i = 1;
				// 		_.each(modelData.nav,function(item){
				// 			item.order = i;
				// 			i++;
				// 		});
				// 		data.menu = JSON.parse(JSON.stringify(modelData.nav).replace(/name/g,"text"));
				// 		var preference = {};
				// 		preference.style = modelData.style;
	
				// 		preference.upload = modelData.upload;
				// 		data.preference = preference;
				// 		data.ProductID = "f816d041-1f65-4967-9eb8-2ec3057ebf76";
	
				// 		this.pageModel.setCustomizationData(data).done(function(resp) {
				// 			console.log('保存租户定制数据成功：',resp);
				// 		});
				// 		break;
				// 	default:
				// 		break;
				// }
				
	
				// localStorage.setItem("sidebar"+$(e.currentTarget).attr("type") ,JSON.stringify(this.model));
				this.$el.find(".save_success").show();
				setTimeout(function(){
					self.$el.find(".save_success").hide();
				},1000);
			}
			// hover 操作控制灰色边框
			,triggerHoverEvent:function(node, flag){
				var data = {
							"flag" : flag
							,"triggerName" : $(node).attr('name')
						}
				this.trigger('hover', data);
			}
			,onClose:function(){
			}
		});
	});
	
	define('LayoutView',['talent'],function(Talent){
		return Talent.Layout.extend({
			template: jst['common/custom-layouts/common/layout']
			,initialize:function(data){
				var self = this;
				this.data = data;
				this.viewnames = [];
	
				this.createView();
			}
			,onRender:function(){
	
			}
			,onShow:function(){
				var self = this;
				$.when.apply(this, this.defers).done(function() {
					self.regionShowView();
				});
			}
			,createView:function(){
				var self = this;
				this.defers = [];
				
				_.each(this.data.contentViews ,function(item){
					var def = new $.Deferred;
					self.defers.push(def);
	
					var viewName = item.name;
					self.addRegion(viewName+"Region" , "."+viewName);
	
					self.viewnames.push(viewName);
	
					require([item.path],function(View){ 
						item.options.data = self.data.commonData;
						self[viewName+'View'] = new View(item.options);
						def.resolve();
					});
				});
			}
			,regionShowView:function(){
				var self = this;
				_.each(this.viewnames,function(item){
					var itemWrap = "<div name="+item+" class='"+item+" hover_item'></div>";
					self.$el.find(".layout_wrap").append(itemWrap);
					self[item+'Region'].show(self[item+'View']);
				});
			}
			,update:function(newData){
				var self = this;
				_.each(this.viewnames,function(item){
					self[item+'View'].update(newData);
				});
			}
			,addColorStyle:function(classname,text){
				// 添加一条样式，并显示
				var style = document.createElement("style");
				var styleId = parseInt(Math.random()*10000);
				style.id = styleId;
				//这里最好给ie设置下面的属性
				/*if (isIE()) {
					style.type = "text/css";
					style.media = "screen";
				}*/
				if(_.indexOf(text,"#")!=0){
					text = "#" + text;
				}
				var styles = classname+"{ color:"+ text +"}";
				(document.getElementsByTagName('head')[0] || document.body).appendChild(style);
	
				if (style.styleSheet) { //for ie
					style.styleSheet.cssText = styles;
				}else{//for w3c
					style.appendChild(document.createTextNode(styles));
				}
			}
			,highlightUI: function(borderData){
				var self = this;
				
				var action = (borderData.flag)?"add":"remove";
				borderData.flag = action;
	
				var viewName = this.data.relationMap[borderData.triggerName] + 'View';
				// 避免relationMap里面没有对应的viewName
				if(this.data.relationMap[borderData.triggerName] != undefined){
					this[viewName].highlightUI(borderData);
				}
			}
		});
	});
	
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
	

define(['talent','SidebarView','LayoutView'],function(talent,SidebarView,LayoutView) {
	
	 
	
		var Layout = Talent.Layout.extend({
			template: jst['common/custom-layouts/common/show-layout']
			,className : "custom_outter_wrap"
			,initialize: function(data) {
				var self = this;
				
				this.type = data.type;
				this.initData = data.commonData;
				this.sidebarOptions = data.sidebarViews;
				this.layoutView = new LayoutView(data);
	
				window.onresize = function (){
					self.setRightWidth();
					self.sidebarView.setHeight();
				};
	
				this.previewList = [
							{
								"title": "tita头部",
								"className": "tita",
								"type": "One",
								"selected": "layout_selected"
							}, {
								"title": "tms头部",
								"className": "tms",
								"type": "Two",
								"selected": ""
							}, {
								"title": "腾讯企业邮箱登陆页",
								"className": "qqlogin",
								"type": "Four",
								"selected": ""
							}, {
								"title": "用户自定制",
								"className": "customize",
								"type": "Three",
								"selected": ""
							}
						];
			}
			,regions: {
				leftRegion: '.left_region'
				,rightRegion: '.right_region'
			}
			,ui:{
				'previewArrow': '.right_wrap .arrow'
			}
			,events:function(){
				var events = {};
				events['click ' + this.ui.previewArrow] = 'clickPreviewArrow';
				return events;
			}
			,onRender: function() {
			}
			,clickPreviewArrow:function(){
				this.ui.previewArrow.removeClass("preview_down preview_up");			
				var operateNode = this.$el.find(".right_wrap");
				if(operateNode.hasClass("right_wrap_hide")){
					this.ui.previewArrow.addClass("preview_up");
					operateNode.removeClass("right_wrap_hide");
					// this.$el.find(".right_wrap").css({'width':window.innerWidth-parseInt(this.$el.find(".left_region").css("width"))-15});
					this.setRightWidth();
					this.trigger('preview',false);
				}else{
					this.ui.previewArrow.addClass("preview_down");
					operateNode.addClass("right_wrap_hide");
					// this.$el.find(".right_wrap").css({'width':"100%" });
					this.trigger('preview',true);
				}
			}
			,onShow:function(){
				var self = this;
			
				var current = _.findWhere(this.previewList ,{"className" : this.type});
				var name = current.type;
				require(['SidebarOptions'+name]
					,function(SidebarRegionsOptions){
				
						var data = self.initData;
						self.createView(data,SidebarRegionsOptions,name);
				});
				
			}
			,createView:function(data,SidebarRegionsOptions,name){
				// 将用户定义的options和配好的options合并
				_.map(this.sidebarOptions,function(value,key){
					_.map(SidebarRegionsOptions,function(one , name){
						if(key == name){
							one.initOptions = JSON.parse(JSON.stringify(_.defaults(one.initOptions, value)));
						}
					});
				});
				this.sidebarView = new SidebarView({
													"sidebarRegionsOptions" : JSON.parse(JSON.stringify(SidebarRegionsOptions))
													,"data" : data
												});
				this.listenTo(this.sidebarView,"saveConfigData",function(data){
					this.trigger("saveConfigData",data);
				},this);
				var sidebarModel = this.sidebarView.model;
				
				this.listenTo(sidebarModel, 'change', function(){
					this.layoutView.update(sidebarModel.toJSON());
				});
	
				this.listenTo(this.sidebarView,'hover',function(data){
					if("highlightUI" in this.layoutView){
						this.layoutView.highlightUI(data);
					}
				});
				this.listenTo(this.sidebarView,'customHtml',function(layoutOptions){
					this.layoutView.showCustomize(layoutOptions);
				});
	
				this.setRightWidth();
	
				this.rightRegion.show(this.layoutView);
				this.leftRegion.show(this.sidebarView);
				
				this.sidebarView.$el.find("span.save_set_info").attr("type",name);
			}
			,setRightWidth:function(){
				// this.$el.find(".right_region").css({'width':window.innerWidth-parseInt(this.$el.find(".left_region").css("width"))-15});
			}
			,onClose:function(){
			}
		});
	

	return Layout;
})
