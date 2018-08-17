// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import "./assets/cc/index.scss"
// import './assets/main.scss'
// import './assets/color-default.scss'
// import './assets/extends.scss'
// import './assets/extends-color.scss'
// import './assets/theme-default.scss'

import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../node_modules/animate.css'

let $ = require('jquery');
require("jquery-mousewheel");
require('malihu-custom-scrollbar-plugin');


Vue.config.productionTip = false;

Vue.use(ElementUI);

const color1 = '#92fffd';
const color2 = '#e88cff';
const color3 = '#6393ff';
const color4 = '#d4ff84';

Vue.prototype.$ = $;
Vue.prototype.yellow = color4;
Vue.prototype.blue = color3;
Vue.prototype.pink = color2;
Vue.prototype.green = color1;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
