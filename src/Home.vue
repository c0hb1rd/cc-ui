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
                label: 'Popover 浮层', click: () => {
                  this.$router.push('/cc/components/popover');
                }
              },
              {
                label: 'Dialog 弹框', click: () => {
                  this.$router.push('/cc/components/dialog');
                }
              }
            ]
          },
          {
            label: 'Group 组合', icon: 'fa fa-bank', click: () => {
              this.$router.push("/cc/component")
            }
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

<style lang="scss">
  .home-area {
    .home-header {
      min-height: 50px;
      max-height: 50px;
      padding: 10px;
      background-color: #374355;
      box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
      z-index: 1;
    }

    .home-content {
      .home-menu {
        overflow: hidden;
        background-color: #3D4D65;
        transition: all .2s;
        white-space: nowrap;

        ul {
          list-style: none;
          padding: 0;
          margin: 0;

          .choose {
            color: white !important;
            background-color: #1E679D !important;
            box-shadow: 0 2px 5px rgba(0, 0, 0, .5) !important;
            z-index: 1 !important;

            span:nth-child(1) {
              background-color: #0092f0 !important;
            }
          }

          li {
            height: 40px;
            line-height: 40px;
            display: flex;
            color: #a6a6a6;
            cursor: pointer;
            font-size: 14px;
            transition: background-color .3s, color .2s, box .2s;

            &:hover {
              color: rgba(255, 255, 255, .5);
              background-color: rgba(30, 103, 157, 0.4);
              box-shadow: 0 1px 3px rgba(0, 0, 0, .4);

              span:nth-child(1) {
                background-color: rgba(0, 130, 213, 0.4);
              }
            }

            span {
              display: inline-flex;
              transition: background-color .3s;

              &:nth-child(1) {
                min-width: 8px;
                max-width: 8px;
              }
              &:nth-child(2) {
                justify-content: center;
                align-items: center;
                min-width: 52px;
                max-width: 52px;
              }
              &:nth-child(3) {
                flex: 1;
              }
            }
          }
        }

        .home-menu-footer {
          min-height: 40px;
          max-height: 40px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, .8);
        }
      }
      .home-router {

      }
    }
  }
</style>
