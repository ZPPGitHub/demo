<template>
	<div class = "center">
		<el-carousel :interval="5000" arrow="always">
			<el-carousel-item v-for="item in list" :key="item">
				<a href = ""><img :src = "item" width = "790px" height = "340px"></a>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
    		list : ['../static/lunbotu/1.jpg','../static/lunbotu/2.jpg','../static/lunbotu/3.jpg','../static/lunbotu/4.jpg','../static/lunbotu/5.jpg','../static/lunbotu/6.jpg','../static/lunbotu/7.jpg','../static/lunbotu/8.jpg']
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center{width:790px;height:340px;position:relative;margin:0 auto;}
</style>