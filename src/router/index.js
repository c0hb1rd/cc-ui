import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Home from '@/Home'
import CanvasDemo from '@/demo/CanvasDemo'
import ConsoleDemo from '@/demo/ConsoleDemo'
import ScrollMsgDemo from '@/demo/ScrollMsgDemo'
import ComponentDemo from '@/demo/ComponentDemo'
import PopoverDemo from '@/demo/PopoverDemo'
import SvgDemo from '@/demo/SvgDemo'


import TableDemo from '@/demo/TableDemo'
import ToolbarDemo from '@/demo/ToolbarDemo'
import FormDemo from '@/demo/FormDemo'
import DialogDemo from '@/demo/DialogDemo'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'App',
    //   redirect: '/home',
    //   component: App,
    //   children: [
    //     {
    //       path: '/home',
    //       name: 'Home',
    //       component: Home,
    //       children: [
    //         {
    //           path: '/home/canvas',
    //           name: 'CanvasDemo',
    //           component: CanvasDemo
    //         },
    //         {
    //           path: '/home/console',
    //           name: 'ConsoleDemo',
    //           component: ConsoleDemo
    //         },
    //         {
    //           path: '/home/scroll',
    //           name: 'ScrollMsgDemo',
    //           component: ScrollMsgDemo
    //         },
    //         {
    //           path: '/home/component',
    //           name: 'ComponentDemo',
    //           component: ComponentDemo
    //         },
    //         {
    //           path: '/home/popover',
    //           name: 'PopoverDemo',
    //           component: PopoverDemo
    //         },
    //         {
    //           path: '/home/svg',
    //           name: 'SvgDemo',
    //           component: SvgDemo
    //         }
    //       ]
    //     }
    //   ],
    //
    // },
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: '/cc',
      children: [
        {
          path: '/cc',
          component: Home,
          name: 'Home',
          children: [
            {
              path: '/cc/components/table',
              component: TableDemo,
              name: 'TableDemo'
            },
            {
              path: '/cc/components/toolbar',
              component: ToolbarDemo,
              name: 'ToolbarDemo'
            },
            {
              path: '/cc/components/form',
              component: FormDemo ,
              name: 'FormDemo '
            },
            {
              path: '/cc/components/dialog',
              component: DialogDemo ,
              name: 'DialogDemo '
            }
          ]
        },
      ],
    }
  ]
})
