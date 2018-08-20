// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import "./assets/cc/index.scss"

import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../node_modules/animate.css'

let $ = require('jquery');
require("jquery-mousewheel");
require('malihu-custom-scrollbar-plugin');


import './components/cc/index'
import './functions'


Vue.config.productionTip = false;

Vue.use(ElementUI);


Vue.prototype.$ = $;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
