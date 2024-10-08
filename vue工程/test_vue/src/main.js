import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 在项目最开始的地方引入下面的代码
import Tingyun from "@tingyun-sdk/web";
import TingyunPluginRecord from "@tingyun-sdk/web-plugin-record";


Tingyun.init(
  {
	"domain":"wkbrs2.tingyun.com",
	"token":"a9267ad585d141819946abbb24336c83",
	"key":"etv0JWerlzk",
	"id":"S7Z4tf6rupc",
	"plugins":[
		TingyunPluginRecord()
	],
	"common":{
		"paramCollection":[
			{
				"key":"Accept-Languag",
				"type":2
			}
		]
	},
	"page":{
		"leThreshold":7201
	},
	"ajax":{
		"recordAll":{
			"reqBody":true,
			"reqHeaders":true,
			"resBody":true,
			"resHeaders":true,
			"urlParams":true
		}
	},
	"operation":{
		"rageClickEnabled":false
	},
	"requestTracing":{
		"corsDomains":[
			"www.httpbin.org"
		],
		"propagators":[
			"tingyun"
		]
	},
	"replay":{
		"enabled":true,
		"sampleRate":1.0
	}
}
)
function formatComponentName(vm) {
    if (vm.$root === vm) return 'root';
    var name = vm._isapp
        ? (vm.$options && vm.$options.name) ||
        (vm.$options && vm.$options._componentTag)
        : vm.name;
    return (
        (name ? 'component <' + name + '>' : 'anonymous component') +
        (vm._isapp && vm.$options && vm.$options.__file
            ? ' at ' + (vm.$options && vm.$options.__file)
            : '')
    );
}

// Vue.config.errorHandler = function(err, vm, info) {
//     if (!window.TINGYUN) {
//         return ;
//     }
//     if (vm) {
//         var componentName = formatComponentName(vm);
//         var propsData = vm.$options && vm.$options.propsData;
//         window.TINGYUN.captureException(err, {
//             componentName: componentName,
//             propsData: propsData,
//             info: info
//         });
//     } else {
//         window.TINGYUN.captureException(err);
//     }
// };

const app = createApp(App)
app.config.errorHandler = function(err, vm, info) {
    if (!window.TINGYUN) {
        return ;
    }
    if (vm) {
        var componentName = formatComponentName(vm);
        var propsData = vm.$options && vm.$options.propsData;
        window.TINGYUN.captureException(err, {
            componentName: componentName,
            propsData: propsData,
            info: info
        });
    } else {
        window.TINGYUN.captureException(err);
    }
};
app.use(store).use(router).mount('#app')
Tingyun.setContext({
        name: '刘城郡',
        version: 'V5.2.1',
		//字符串和int类型都支持	
},)
throw new Error('test-error');

