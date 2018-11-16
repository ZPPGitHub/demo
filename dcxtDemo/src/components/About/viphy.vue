<template>
	<div class = "grxx">
	  	<el-table :data="tableData" style="width: 1000px;margin:0 auto;" :row-class-name="tableRowClassName">
	    	<el-table-column prop="id" label="身份ID" width="180"></el-table-column>
	    	<el-table-column prop="name" label="姓名" width="180"></el-table-column>
	    	<el-table-column prop="email" label="Email"></el-table-column>
	    	<el-table-column prop="body" label="内容"></el-table-column>
		</el-table>
	</div>
</template>

<script>

//import {mapGetters} from 'vuex'		//vuex的辅助函数  另外调用数据的方法
import {mapState,mapAction} from 'vuex'

export default {
	name: 'Admin',
	data () {
		return {
			tableData: []
		}
	},
	created () {
		this.$store.dispatch('SAVE_LISTS').then(() => {
			this.tableData = this.$store.getters.viphy
		})
	},
	methods: {
      	tableRowClassName({row, rowIndex}) {
        	if (rowIndex%2 === 0) {
          		return 'warning-row';
        	} else if (rowIndex%2 !== 0) {
          		return 'success-row';
        	}
        	return ''
      	}
    },
    computed : {
    	...mapState ({
    		useelist : state => state.useelist
    	})
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>