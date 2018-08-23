import Vue from 'vue';
import ElementUI from 'element-ui';
import $ from "jquery";
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';

import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'


import CcTable from './table/Table';
import CcToolbar from './toolbar/Toolbar';
import CcToolbarItem from './toolbar/ToolbarItem';
import CcForm from './form/Form';
import CcPopover from './popover/Popover';
import CcPopoverGroup from './popover/PopoverButtonGroup';
import CcPopoverButton from './popover/PopoverButton';
import CcDialog from './dialog/Dialog';
import CcMenu from './menu/Menu';
import CcTree from './tree/Tree';

import minxi from './mixin';


Vue.prototype.$ = $;
Vue.use(ElementUI);
Vue.mixin(minxi);

Vue.component('CcTable', CcTable);
Vue.component('CcToolbar', CcToolbar);
Vue.component('CcToolbarItem', CcToolbarItem);
Vue.component('CcForm', CcForm);
Vue.component('CcPopover', CcPopover);
Vue.component('CcPopoverGroup', CcPopoverGroup);
Vue.component('CcPopoverButton', CcPopoverButton);
Vue.component('CcDialog', CcDialog);
Vue.component('CcMenu', CcMenu);
Vue.component('CcTree', CcTree);

