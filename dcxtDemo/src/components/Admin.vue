<template>
	<div class = "grxx">
	  	<el-table :data="tableData2" style="width: 1000px;margin:0 auto;" :row-class-name="tableRowClassName">
	    	<el-table-column prop="id" label="身份ID" width="180"></el-table-column>
	    	<el-table-column prop="name" label="姓名" width="180"></el-table-column>
	    	<el-table-column prop="email" label="Email"></el-table-column>
	    	<el-table-column prop="body" label="内容"></el-table-column>
		</el-table>
	</div>
</template>

<script>

import {mapState,mapAction} from 'vuex'		//vuex的辅助函数  另外调用数据的方法

export default {
	name: 'Admin',
	data () {
		return {
			tableData2: []
		}
	},
	created () {
		this.$store.dispatch('SAVE_LISTS').then(() => {		//调用actions方法
			//this.tableData2 = this.$store.state.useelist 			//直接调用this.$store.state.useelist给data赋值
			this.tableData2 = this.useelist			//在created里面调用computed计算属性this.useelist给data里面附值
		})
		//this.SAVE_LISTS().then(() => {		//在created里面一样调用事件方法属性来给data赋值
		//	this.tableData2 = this.useelist
		//})
	},
	methods: {			//在时间方法属性里面  可以用
		//...mapActions(['SAVE_LISTS']),		//事件方法调用
      	tableRowClassName({row, rowIndex}) {
        	if (rowIndex%2 === 0) {
          		return 'warning-row';
        	} else if (rowIndex%2 !== 0) {
          		return 'success-row';
        	}
        	return ''
      	}
    },
    computed : {				//通过vuex的辅助函数用computed的方法拿值
    	...mapState ({
    		useelist : state => state.useelist
    	})
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>