<template>
  <el-card class="card">
    <!--面包屑组件-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!--搜索-->
    <el-row class="searchRow">
      <el-col :span="24">
        <el-input placeholder="请输入内容" class="searchInput">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success" plain>成功按钮</el-button>
      </el-col>
    </el-row>
      <!--表格-->
    <!--
        border 加边框
        stripe 斑马纹
        序号列
    -->
      <el-table
        border
        stripe
        :data="data"
        style="width: 100%">
        <!--序号-->
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="username"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话"
          width="180">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="时间">
          <template slot-scope="scope">
            {{scope.row.create_time | fmtData('YYYY-MM-DD') }}
          </template>
        </el-table-column>
        <el-table-column
          prop="mg_state"
          label="用户状态"
          width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <!-- scope.row 是当前行绑定的数据对象 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              plain>
            </el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              plain>
            </el-button>
            <el-button
              type="success"
              icon="el-icon-check"
              size="mini"
              plain>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
  </el-card>

</template>

<script>
/* eslint-disable func-call-spacing,no-unexpected-multiline,standard/object-curly-even-spacing,no-unused-vars */

export default {
  // http://localhost:8888/api/private/v1/users

  data () {
    return {
      data: []
    };
  },
  created () {
    this.loadData();
  },
  methods: {
    async loadData () {
      // 发送请求的时候,要在请求头中添加Authorization=token

      var token = sessionStorage.getItem('token');
      this.$http.defaults.headers.common['Authorization'] = token;
      var response = await this.$http.get
      ('http://localhost:8888/api/private/v1/users?pagenum=1&pagesize=10');

      // Vue.prototype.$http = axios; 在 main.js 中
      // this.$http.get()

      var {data: {meta: { status, msg}}} = response;
      if (status === 200) {
        this.data = response.data.data.users;
        console.log(this.data);
      } else {
        this.$message.error(msg);
      }
    }
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
.searchRow {
  margin-top: 10px;
  margin-bottom: 10px;
}
  .searchInput {
    width: 300px;
  }
</style>
