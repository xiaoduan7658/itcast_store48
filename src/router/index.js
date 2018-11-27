import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import Home from '../views/Home';
import Users from '../views/Users/Users';

// @ 代表的是src的绝对路径
// @ 是在bild/webpack.base.conf.js

// 为什么可以省略.vue 在build/webpack.base.conf.js
// 魔窟省略后缀之后,加载的顺序extensions: ['.js', '.vue', '.json'],
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {name: 'Login', path: '/login', component: Login},
    {
      name: 'Home',
      path: '/',
      component: Home,
      children: [
        {name: 'Users', path: '/users', component: Users}
      ]
    }
  ]
});
