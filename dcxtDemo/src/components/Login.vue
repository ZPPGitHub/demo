<template>
  <div class = "logins">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	  <el-form-item label="用户名" prop="Name">
	    <el-input type="text" v-model="ruleForm2.Name" autocomplete="off" placeholder = "请输入邮箱/用户名/已验证的手机"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" prop="Pass">
	    <el-input type="password" v-model="ruleForm2.Pass" autocomplete="off" placeholder = "请输入密码"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary"  @click="submitForm('ruleForm2')">成功</el-button>
	    <el-button @click="resetForm('ruleForm2')">重置</el-button>
	  </el-form-item>
	</el-form>
  </div>
</template>

<script>
import qs from "qs"

export default {
	name: 'logins',
	inject: ['reload'],
	data () {
	    var validatePass = (rule, value, callback) => {
	    	const re = /^[a-zA-Z]\w{3,15}$/;		//用户名登陆验证
	    	const reg = /^1\d{10}$/;				//手机号登陆验证
	    	const regs = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;		//邮箱登陆验证
	        if (value === '') {
	          	callback(new Error('请输入用户名'));
	        } else if (re.test(value)||reg.test(value)||regs.test(value)) {
	        	callback();
	        } else{
	          	callback(new Error('请输入正确的用户名'))
	        }
	    };
	    var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        }else {
	          callback();
	        }
	     };
		return {
			ruleForm2: {
	          	Name: '',
	          	Pass: '',
	          	ABCDEF : {name : "赵盼盼",xingbie : "男",username : "乐淘淘",dengji : "金牌会员"}
	        },
	        rules2: {
	          	Name: [
	            	{ validator: validatePass, trigger: 'blur' }
	          	],
	          	Pass: [
	            	{ validator: validatePass2, trigger: 'blur' }
	          	]
	        }
	    }
	},
	methods: {
    	submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
        		var _this = this
	          	if (valid) {
	            	this.$message({
          				message: '登陆成功',
          				type: 'success'
        			});
        			this.$http.post('http://jsonplaceholder.typicode.com/posts',qs.stringify({
        				name : _this.ruleForm2.Name,
        				pass : _this.ruleForm2.Pass
        			}))
        			.then(function (response) {
					    console.log("后端已收到数据:",response.data);
					    _this.$store.commit('SAVE_USERINFO',_this.ruleForm2.ABCDEF)		//模拟ajax返回的数据 传递给vuex 用this.$store.commit方法  参数第一个为mutations方法的方法名  第二个参数为得到的值
					    _this.$router.push('/')
					    _this.reload()			//vue自带刷新页面方法
					    location.reload()		//强制刷新页面
					})
					.catch(function (error) {
					    console.log(error);
					})
	          	} else {
	            	console.log('error submit!!');
	            return false;
	          	}
        	})
      	},
      	resetForm(formName) {
        	this.$refs[formName].resetFields();
      	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logins{width:500px;height:300px;margin:80px auto}
.el-form{padding:20px 15px 20px 10px}
</style>