/* eslint-disable no-undef */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/index.css';
import moment from 'moment';
import axios from 'axios';

// 注册插件
Vue.use(ElementUI);

// 全局过滤器,格式化日期
Vue.filter('fmtData', (value, fmtString) => {
  return moment(value).format(fmtString);
});

// 配置全局的axios
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
