<template>
  <el-container class="container">
    <!--头部-->
    <el-header class="header">
      <!--栅格-->
      <el-row>
        <el-col :span="4">
          <img src="../assets/logo.png">
        </el-col>
        <el-col :span="19">
          <p class="title">电商后台管理系统</p>
        </el-col>
        <el-col :span="1">
          <p class="logout">
            <a href="#" @click.prevent="handleLogout">退出</a>
          </p>
        </el-col>
      </el-row>
    </el-header>
    <!--导航栏-->
    <el-container>
      <el-aside class="aside" width="200px">
        <!--default-active   可以让某一个menu-item选中,值是menu-item的index的值

           unique-opened  默认只有一项展开

            开启路由模式, menu-item的index作为路由地址
        -->
        <el-menu
          unique-opened
          router
          style="height: 100%"
          default-active="/users">

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="/users">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="/roles">
                <i class="el-icon-menu"></i>
                <span>角色列表</span>
              </el-menu-item>

              <el-menu-item index="/rights">
                <i class="el-icon-menu"></i>
                <span>权限列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="3-1">
                <i class="el-icon-menu"></i>
                <span>商品列表</span>
              </el-menu-item>

              <el-menu-item index="3-2">
                <i class="el-icon-menu"></i>
                <span>分类参数</span>
              </el-menu-item>

              <el-menu-item index="3-3">
                <i class="el-icon-menu"></i>
                <span>商品分类</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="4-1">
                <i class="el-icon-menu"></i>
                <span>订单列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="5-1">
                <i class="el-icon-menu"></i>
                <span>数据报表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate () {
    // 判断是否登录,token
    var token = sessionStorage.getItem('token');
    if (!token) {
      // 提示
      this.$message.warning('请先登录');
      // 没有token,跳转到登录页面
      this.$router.push('/login');
    }
  },
  methods: {
    handleLogout () {
      // 1.提示退出成功
      this.$message.success('退出成功');
      // 2. 清楚token
      sessionStorage.clear();
      // 3. 调到登录页面
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
  .container {
    height: 100%;
  }

  .header {
    background-color: #b3c0d1;
    padding: 0;
  }

  .header .title {
    text-align: center;
    color: white;
    font-size: 24px;
    line-height: 60px;
    margin: 0;
  }

  .header .logout {
    line-height: 60px;
    text-decoration: none;
    margin: 0;
  }

  .header .logout a {
    color: orange;
    text-decoration: none;
  }

  .aside {
    background-color: #d3dce6;
  }

  .main {
    background-color: #e9eef3;
  }
</style>
