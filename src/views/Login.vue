<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="formData">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <!-- 组件, vue有自己的事件机制,用的是vue事件机制实现的keyup事件-->
        <!--想使用DOM中的keyup事件
        native是告诉组件,我要使用原生的DOM事件 -->
        <el-input @keyup.enter.native="hanldeLogin" type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="hanldeLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable func-call-spacing,no-unexpected-multiline,standard/object-curly-even-spacing */

import axios from 'axios';
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
  //   hanldeLogin() {
  //     axios
  //       .post('http://localhost:8888/api/private/v1/login', this.formData)
  //       .then((response) => {
  //         // response 的样子
  //         // { data: , status: 200 headers: {}.....}
  //         // response.data的样子,服务器返回的数据
  //         // (data: , meta: {msg:'',status: 200}}
  //         var status = response.data.meta.status;
  //         var msg = response.data.meta.msg;
  //
  //         if (status === 200) {
  //           // 登录成功
  //           // 提示
  //           this.$message.success(msg);
  //           // 记录token
  //           var token = response.data.data.token;
  //           sessionStorage.setItem('token', token);
  //           // 跳转到后台首页
  //         } else {
  //           // 登录失败
  //           this.$message.error(msg);
  //         }
  //       }).catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }
    async hanldeLogin () {
      if (this.formData.username === '') {
        this.$message.error('请输入用户名');
        return;
      } else if (this.formData.password === '') {
        this.$message.error('请输入密码');
        return;
      }
      var response = await axios.post
      ('http://localhost:8888/api/private/v1/login', this.formData);
      // var status = response.data.meta.status;
      // var msg = response.data.meta.msg;
      var {data: { meta: {status, msg}}} = response;
      if (status === 200) {
        // 登录成功
        // 提示
        this.$message.success(msg);
        // var {data: { data: {token}}} = response;
        // 记录token
        var token = response.data.data.token;
        sessionStorage.setItem('token', token);
        // 跳转到后台首页
        this.$router.push('/');
      } else {
        // 登录失败
        this.$message.error(msg);
      }
    }
  }
};
</script>

<style scoped>
  /*scoped 是html5中提供的属性

  会给当前页面素有的标签,添加一个data-v-xxx的一个属性作为标示
  当前页面的样式只为当前页面的元素服务
  */
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  border-radius: 2px;
  padding: 30px;
}
.login-wrap .login-form .btn {
  width: 100%;
}
</style>
