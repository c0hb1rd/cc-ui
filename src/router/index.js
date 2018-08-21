import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Home from '@/Home'
import CanvasDemo from '@/demo/CanvasDemo'
import ComponentDemo from '@/demo/ComponentDemo'
import PopoverDemo from '@/demo/PopoverDemo'


import TableDemo from '@/demo/TableDemo'
import ToolbarDemo from '@/demo/ToolbarDemo'
import FormDemo from '@/demo/FormDemo'
import DialogDemo from '@/demo/DialogDemo'
import ButtonDemo from '@/demo/ButtonDemo'
import ColorDemo from '@/demo/ColorDemo'
import PopoverButtonDemo from '@/demo/PopoverButtonDemo'

Vue.use(Router);

export default new Router({
  routes: [
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
              path: '/cc/canvas',
              name: 'CanvasDemo',
              component: CanvasDemo
            },
            {
              path: '/cc/component',
              name: 'ComponentDemo',
              component: ComponentDemo
            },
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
              name: 'FormDemo'
            },
            {
              path: '/cc/components/dialog',
              component: DialogDemo ,
              name: 'DialogDemo'
            },
            {
              path: '/cc/components/button',
              component: ButtonDemo ,
              name: 'ButtonDemo'
            },
            {
              path: '/cc/components/color',
              component: ColorDemo ,
              name: 'ColorDemo'
            },
            {
              path: '/cc/components/popover',
              component: PopoverDemo ,
              name: 'PopoverDemo'
            },
            {
              path: '/cc/components/popover_button',
              component: PopoverButtonDemo ,
              name: 'PopoverButtonDemo'
            }
          ]
        },
      ],
    }
  ]
})
