<template>
  <div id="app">
    <Header/>
    <div class = "contiaer">
      <router-view v-if="isRouterAlive"></router-view>     <!--点击哪个按钮  哪个组件就展示在这个里面-->
    </div>
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    Header
  },
  provide (){
    return {
      reload:this.reload
    }
  },
  data (){
    return {
      isRouterAlive:true
    }
  },
  methods:{
    reload (){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
*{margin:0;padding:0}
body{font:12px/150% tahoma,arial,Micorosoft YaHei,Hiragino SansGB,"\5b8b\4f53",sans-serif;color:#666}
ul{list-style:none}
a{text-decoration:none;color:#666}
html,body,#app,.contiaer{height:100%;}
</style>
