import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(dataV);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
