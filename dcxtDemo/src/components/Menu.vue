<template>
  <div class="fenye">
  	<div class = "">
  		<ul>
  			<li></li>
  		</ul>
  	</div>
    <el-pagination background layout="prev, pager, next" :total="100" @current-change = bbb>
	</el-pagination>
  </div>
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
    	}
    },
    created : function(){
    	/*this.$http.get('https://list.jd.com/list.html?cat=737,794,870')
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
		});*/
    },
    methods : {
    	bbb : function(unm){
    		console.log(unm)
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>