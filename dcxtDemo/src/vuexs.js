import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const state = {			//原始数据  可以在任何组件通过 this.$store.state.userinto 获取
	userinto : JSON.parse(localStorage.getItem("userinto")),	//用mutations方法获得数据  获取本地的数据
	useelist : []			//用actions方法异步获取数据
}

const mutations = {				//拿到组件里面的数据传给state  然后其他组件都可以调用
	SAVE_USERINFO (state,userinto){
		localStorage.setItem("userinto",JSON.stringify(userinto))		//把传来的数据先储存到本地
		state.userinto = userinto	//正常数据传递过程
		console.log(userinto)
	},
	SAVE_LIST (state,savelist){				//用actions异步获取全局的数据
		state.useelist = savelist
	}
}

const actions = {				//异步调用mutations里面的方法异步改变数据
	/*axiosinto (context) {			//异步获取全局数据给mutations  再给state
		context.commit('SAVE_LIST')
	}*/
	SAVE_LISTS ({commit}) {
		return new Promise((resolve , reject) => {			//把异步变成同步
			Axios.get('http://jsonplaceholder.typicode.com/comments')		//没有上面的return方法  就是一个异步方法
			.then(function (response) {
			commit('SAVE_LIST',response.data);
			resolve();
			})
			.catch(function (error) {
			    console.log(error);
			})
		})
	}
}

const getters = {		//数据处理  把已经获得的数据处理完之后返return出来	
	cjhy : state => state.useelist.filter(m => m.postId <= 20),
	zjhy : state => state.useelist.filter(m => m.postId > 20&&m.postId <= 40),
	gjhy : state => state.useelist.filter(m => m.postId > 40&&m.postId <= 60),
	viphy : state => state.useelist.filter(m => m.postId > 60&&m.postId <= 80),
	djhy : state => state.useelist.filter(m => m.postId > 80&&m.postId <= 100)
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})