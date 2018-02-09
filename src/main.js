import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import 'animate.css'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyLoad,{
  loading: require('./assets/logo.png')
})
FastClick.attach(document.body);

Vue.filter('initNum',(val)=>{
  return val>10000?(Math.round(val/1000)/10)+'万':val;
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
