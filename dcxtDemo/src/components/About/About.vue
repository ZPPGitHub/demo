<template>
<div class = "erjidh">
  <el-row class="tac">
    <el-col :span="12">
      <h4>getters分类</h4>
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link tag = "div" to = "/About/cjhy">初级用户</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link tag = "div" to = "/About/zjhy">中级用户</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link tag = "div" to = "/About/gjhy">高级用户</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link tag = "div" to = "/About/viphy">vip用户</router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
              <router-link tag = "div" to = "/About/djhy">顶级用户</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="12" class = "defaults">
      <h4>子组件内容显示</h4>
      <div class = "absc">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</div>
  <!--<el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>-->
</template>

<script>
export default {
	name: 'About',
  data() {
    return {
      tableData2: []
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
      	/*tableRowClassName({row, rowIndex}) {
        	if (rowIndex === 1) {
          		return 'warning-row';
        	} else if (rowIndex === 3) {
          		return 'success-row';
        	}
        	return '';
      	}*/
  }
}
</script>

<style scoped>
.erjidh,.tac,.el-col-12,.el-menu,.absc{height:100%;}
.el-col-12{width:250px;}
.defaults{width:1050px;}
</style>