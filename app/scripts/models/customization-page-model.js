define(['talent'], function(Talent) {
	return Talent.Model.extend({
		getCustomizationData: function() {
			var self = this;
			return $.ajax({
                url: "/tms/custom/gettenantmenu"
                ,data: { productId: "F816D041-1F65-4967-9EB8-2EC3057EBF76"}
                ,dataFilter: function(data, type) {
					var obj = {
						menu:[]
						,preference:{}
					};
					try{
						var responseBody = JSON.parse(JSON.parse(decodeURIComponent(data)).menu);
						obj.ProductID = responseBody.ProductID;

						var menu = JSON.parse(responseBody.Menu);

						obj.menu = _.map(menu, function(item) {
							return self.mapMenuData(item);
						});
						obj.preference = JSON.parse(responseBody.Preference);
					}catch(e){
						// console.error('解析租户定制数据出错，后端返回数据：', data);
					}

					return JSON.stringify(obj);
                }
            });
		}
		,setCustomizationData: function(data) {
			var self = this;
			return $.ajax({
                url: "/tms/custom/savetenantmenu"
                ,type: 'post'
                ,data: ''
                ,contentType : 'application/x-www-form-urlencoded'
                ,beforeSend: function(xhr, settings) {
					var obj = {};
					try{
						obj.ProductID = data.ProductID;
						obj.Menu = _.map(data.menu, function(item) {
							return self.mapMenuData(item, true);
						});
						obj.Preference = JSON.stringify(data.preference);
						settings.data = "menu="+encodeURIComponent(JSON.stringify(obj));
						// settings.data = 'menu={"ProductID":"fff63665-bd80-46cc-8866-192c64118efe","Menu":"[{"ID":"6e98fb11-772f-4df7-abcc-48d1ec5a5270","Type":1,"Order":1,"Text":"企业设置","Url":"/TenantCenter/Staff/List","Category":1},{"ID":"0779ffac-91cf-4306-8e57-5ba0f00c0143","Type":1,"Order":5,"Text":"系统设置","Url":"/TenantCenter/UserGroup/GroupIndex","Category":1},{"ID":"c23f15be-0ab9-477a-a469-3643eb205d4d","Type":1,"Order":6,"Text":"胜任力","Url":"/Competency/EntCompetency/EntCompetencyLib","Category":1}]","Preference":"_test_test_test"}';
					}catch(e){
						// console.error('保存租户定制数据出错，前端发送数据：', data);
						return false;
					}
					return true;
                }
            });
		}
		,getFunctionsData: function() {
			var self = this;
			return $.ajax({
                url: "/tms/custom/getfunctions"
                ,data: { productId: "F816D041-1F65-4967-9EB8-2EC3057EBF76"}
                ,dataFilter: function(data, type) {
					var functions = [];
					try{
						var menu = JSON.parse( JSON.parse(data).funMenu );

						functions = _.map(menu, function(item) {
							var obj = self.mapMenuData(item);
							obj.functions = _.map(item.Functions, self.mapMenuData)
							return obj;
						});
					}catch(e){
						// console.error('获取租户可选功能列表，后端返回数据：', data);
					}
					return JSON.stringify(functions);
                }
            });
		}
		,mapMenuData: function(item, toRevert) {
			toRevert = toRevert || false;
			/**
			 * type, 表示导航项的类型：1表示系统项，不可编辑；2表示自定义项，可编辑；
			 * category, 表示导航项的种类：1表示模块，2表示功能；目前对前端没有实际意义，仅为了传递数据给后端；
			 */
			var keysMapping = {
				"id": "ID"
				,"type": "Type"
				,"order": "Order"
				,"text": "Text"
				,"url": "Url"
				,"category": "Category"
			};
			if(toRevert) {
				keysMapping = _.invert(keysMapping);
			}

			var obj = {};
			for(var x in keysMapping){
				item[keysMapping[x]] && (obj[x] = item[keysMapping[x]]);
			}

			return obj;
		}
	});
});
