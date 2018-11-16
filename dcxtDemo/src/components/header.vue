<template>
  <nav>
    <div class = "heads">
      <div class = "heads-loge">
        <i></i>
        <p>vue 项目应用</p>
      </div>
      <ul>
        <li><router-link exact to = "/">项目1</router-link></li>  <!--exact  高亮-->
        <li><router-link to = "/Menu">项目2</router-link></li>
        <li><router-link to = "/Admin">项目3</router-link></li>
        <li><router-link to = "/About">项目4</router-link></li>
        <!--<li>{{ aaa.username }}</li>   <!--通过另外的方式拿值-->
      </ul>
    </div>
    <div v-if = "ttt === null" class = "head-load">
      <ul>
        <li><router-link to = "/Login">登陆</router-link></li>
        <li><router-link to = "/Register">注册</router-link></li>
      </ul>
    </div>
    <div v-if = "ttt !== null" class = "head-load">
      <ul>
        <li v-for = "iten in ttt">{{ iten }}</li>
        <li @click = "lllp">注销</li>
      </ul>
    </div>
  </nav>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'heads',
  inject: ['reload'],
  data () {
    return {
      //ttt : this.$store.state.userinto    //拿取ajax返回的数据
      ttt : null
    }
  },
  created () {
    this.ttt = this.$store.state.userinto
  },
  methods : {
    lllp : function(){
      localStorage.removeItem('userinto')
      this.ttt = null
      this.reload()
    }
  }/*,
  computed : {
    ...mapState({
      aaa : state => state.userinto   //用计算属性  ...mapState 方法来映射拿值
    })
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{width:900px;margin:0 auto;background:#e9f3f3;position:relative;margin-bottom:10px}
nav,.heads,.heads ul,.heads-loge,.head-load ul{display:flex}
.heads{margin-left:10px}
.heads-loge{margin:10px 10px}
.heads-loge i{display:inline-block;width:21px;height:21px;background:url(../assets/截图102.png) no-repeat}
.heads-loge p{vertical-align:middle;font-size:15px;font-weight:bold}
.heads ul{margin-left:10px;vertical-align:middle}
.heads ul li,.head-load ul li{margin:10px 10px;font-size:14px;color:#929292}
.head-load{position:absolute;right:0;margin-right:10px}
.active{color:#c81623}
</style>