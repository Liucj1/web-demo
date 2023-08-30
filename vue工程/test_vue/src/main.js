import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 在项目最开始的地方引入下面的代码
import Tingyun from "@tingyun-sdk/web";
import TingyunPluginRecord from "@tingyun-sdk/web-plugin-record";

Tingyun.init(
  {
	"domain":"xxhapp.js.cmcc:30002",
	"token":"e00f62e9f1f3417bb8bb92acebca906c",
	"key":"GR0v1mrfPQI",
	"id":"4Nl_NnGbjwY",
	"plugins":[
		TingyunPluginRecord()
	],
	"common":{
		"paramCollection":[
			{
				"key":"version",
				"type":1
			},
			{
				"key":"sourceapi_web",
				"type":1
			}
		]
	},
	"page":{
		"drThreshold":600,
		"fpThreshold":400,
		"fsThreshold":900,
		"leThreshold":2000
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

