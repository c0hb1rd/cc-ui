<template>
  <div class="home-area flex-grow rel-area flex-row">
    <cc-menu ref="menu" :menus="menus"></cc-menu>

    <div class="flex-grow flex-column rel-area">
      <header class="flex-row flex-a-center"
              style="padding: 0 10px; min-height: 70px; max-height: 70px; background-color: #fff; top: 0;">
        <el-button size="mini" type="primary" @click="() => {this.$refs.menu.toggle()}"><i class="fa fa-list"></i>
        </el-button>
      </header>
      <div class="abs-area abs-max-width flex-column flex-grow" style="top: 70px; bottom: 0;">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    watch: {},
    methods: {
      toggle() {
        this.size = this.size === 240 ? 60 : 240;
        this.btnType = this.size === 240 ? 'primary' : 'info';
        this.btnIcon = this.size === 240 ? 'el-icon-arrow-left' : 'el-icon-arrow-right';
      }
    },
    data() {
      return {
        btnIcon: 'el-icon-arrow-right',
        btnType: 'primary',
        size: 60,
        active: 1,
        menus: [
          {
            label: 'Component 组件', icon: 'fa fa-th-list', children: [
              {
                label: 'Color 配色表', click: () => {
                  this.$router.push('/cc/components/color');
                }
              },
              {
                label: 'Button 按钮', click: () => {
                  this.$router.push('/cc/components/button');
                }
              },
              {
                label: 'Toolbar 操作栏', click: () => {
                  this.$router.push('/cc/components/toolbar');
                }
              },
              {
                label: 'Table 表格', click: () => {
                  this.$router.push('/cc/components/table');
                }
              },

              {
                label: 'Form 表单', click: () => {
                  this.$router.push('/cc/components/form');
                }
              },
              {
                label: 'Tree 树', click: () => {
                  this.$router.push('/cc/components/tree');
                }
              },
              {
                label: 'Popover 浮层', click: () => {
                  this.$router.push('/cc/components/popover');
                }
              },
              {
                label: 'Dialog 弹框', click: () => {
                  this.$router.push('/cc/components/dialog');
                }
              },
              {
                label: 'PopoverButton 按钮浮层', click: () => {
                  this.$router.push('/cc/components/popover_button');
                }
              }
            ]
          },
          {
            label: 'Demo 例子', icon: 'fa fa-bank',
            children: [
              {
                label: '组合', click: () => {
                  this.$router.push("/cc/component")
                },
              },
              {
                label: '画板', click: () => {
                  this.$router.push("/cc/canvas")
                },
              }
            ]
          }
        ]
      }
    },
    created() {
    },
    mounted() {
      // this.menus[0].click();
      this.addScrollbar(".toolbar-demo");
    },
    destroyed() {
    },
  }
</script>
