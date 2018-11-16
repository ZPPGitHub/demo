// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRoter from 'vue-router'		//路由组件
import {routes} from './routes'			//路由的js文件
import store from './vuexs'
import ElementUI from 'element-ui'		//element ui组件  轮播
import 'element-ui/lib/theme-chalk/index.css'	//ui组件的css文件
import Axios from 'axios'
// import Home from './components/Home'		//组件引入  vue-router路由
// import Menu from './components/Menu'
// import Admin from './components/Admin'
// import Login from './components/Login'
// import Register from './components/Register'
// import About from './components/About/About'

/*store.dispatch('SAVE_LIST').then(() => {		//在全局里面触发vuex里面的actions方法
	console.log(store.state.useelist)
})*/


Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(VueRoter)						//组件注册 vue-router路由
Vue.use(ElementUI)
// const routes = [
// 	{path:'/',component:Home},				//path表示组件的位置  component表示组件的名字
// 	{path:'/Menu',component:Menu},
// 	{path:'/Admin',component:Admin},
// 	{path:'/Login',component:Login},
// 	{path:'/Register',component:Register},
// 	{path:'/About',component:About}
// ]

const router = new VueRoter({
	linkActiveClass : "active",	//改变className名字
	routes,
	mode:'history'		//为防地址栏出现#号
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
