import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Home from '@/Home'
import CanvasDemo from '@/components/CanvasDemo'
import ConsoleDemo from '@/components/ConsoleDemo'

Vue.use(Router)

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
          redirect: '/home/canvas',
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
            }
          ]
        }
      ]
    }
  ]
})
