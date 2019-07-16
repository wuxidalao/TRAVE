// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'// 轮播图片插件
import fastClick from 'fastClick'// 移动端300毫秒点击延迟问题解决
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'// 全局页面样式
import 'styles/border.css'// 解决移动端1px边框问题
import 'styles/iconfont.css'// icon

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
