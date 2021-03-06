require.config({
	paths: {
		"backbone": "vendor/components/backbone/index"
		,"$": "vendor/components/jquery/index"
		,"json": "vendor/components/json/index"
		,"marionette": "vendor/components/marionette/index"
		,"_": "vendor/components/lodash/index"
		,"requirejs": "vendor/components/requirejs/index"
		,"talent" : 'vendor/components/talent/index'
		,"jqueryui" : 'vendor/legacy/jqueryui'
		,"jscolor" : 'vendor/legacy/jscolor'
    	,'$.tree' : 'vendor/legacy/jquery.ztree.core-3.5'
		,"mockjax": "vendor/components/jquery.mockjax/index"
		,"customizePage": "vendor/components/customizePage/index"
	},
	shim: {
		'$': {
			exports: '$'
		}
		,'_': {
			exports: '_'
		}
		,'backbone': {
			deps: ['json', '_', '$'],
			exports: 'Backbone'
		}
		,'marionette': {
			deps: ['backbone'],
			exports: 'Marionette'
		}
		,'talent': {
			deps: ['marionette'],
			exports: 'Talent'
		}
		,'jqueryui': {
			deps: ['$']
		}
		,'mockjax': {
			deps: ['$']
		}
		,'customizePage': {
			deps: ['jqueryui','$.tree','jscolor','mockjax']
		}
	}
});