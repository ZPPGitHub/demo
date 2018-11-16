import Home from './components/Home'		//组件引入
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About/About'

//二级路由
import cjhy from './components/About/cjhy'
import djhy from './components/About/djhy'
import gjhy from './components/About/gjhy'
import viphy from './components/About/viphy'
import zjhy from './components/About/zjhy'

export const routes = [
	{path:'/',component:Home},				//path表示组件的位置  component表示组件的名字
	{path:'/Menu',component:Menu},
	{path:'/Admin',component:Admin},
	{path:'/Login',component:Login},
	{path:'/Register',component:Register},
	{path:'/About',component:About,redirect : "/About/cjhy",children:[
		{path:'/About/cjhy',component:cjhy,},
		{path:'/About/gjhy',component:gjhy},
		{path:'/About/zjhy',component:zjhy},
		{path:'/About/viphy',component:viphy},
		{path:'/About/djhy',component:djhy}
	]}
]