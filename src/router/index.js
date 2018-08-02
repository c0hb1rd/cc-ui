import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Home from '@/Home'
import CanvasDemo from '@/demo/CanvasDemo'
import ConsoleDemo from '@/demo/ConsoleDemo'
import ScrollMsgDemo from '@/demo/ScrollMsgDemo'
import ComponentDemo from '@/demo/ComponentDemo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/home',
      component: App,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
          children: [
            {
              path: '/home/canvas',
              name: 'CanvasDemo',
              component: CanvasDemo
            },
            {
              path: '/home/console',
              name: 'ConsoleDemo',
              component: ConsoleDemo
            },
            {
              path: '/home/scroll',
              name: 'ScrollMsgDemo',
              component: ScrollMsgDemo
            },
            {
              path: '/home/component',
              name: 'ComponentDemo',
              component: ComponentDemo
            }
          ]
        }
      ]
    }
  ]
})
