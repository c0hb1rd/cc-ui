<template>
  <div class="home-area flex-grow real-area flex-column">
    <header class="home-header flex-row flex-y-center">

    </header>

    <section class="flex-grow home-content flex-row">
      <aside class="home-menu flex-column" :style="{minWidth: size + 'px', maxWidth: size + 'px'}">
        <ul class="flex-grow">
          <li :class="active === menu.index ? 'choose' : ''" @click="menu.click" v-for="menu in menus">
            <span></span><span><i :class="menu.icon"></i></span>
            <span>{{ menu.name }}</span>
          </li>
        </ul>
        <footer class="home-menu-footer flex-row flex-y-center" style="justify-content: flex-end">
          <div style="max-width: 60px; min-width: 60px;" class="flex-center">
            <el-button size="mini" :icon="btnIcon" :type="btnType" @click="toggle"></el-button>
          </div>
        </footer>
      </aside>
      <div class="home-router flex-grow flex-column real-area">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {},
    watch: {},
    methods: {
      toggle() {
        this.size = this.size === 300 ? 60 : 300;
        this.btnType = this.size === 300 ? 'primary' : 'info';
        this.btnIcon = this.size === 300 ? 'el-icon-arrow-left' : 'el-icon-arrow-right';
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
            name: 'Console 控制台', icon: 'fa fa-window-maximize', index: 1, click: () => {
              this.active = 1;
              this.$router.push('/home/console')
            }
          },
          {
            name: 'Scroll 滚动消息', icon: 'fa fa-wpforms', index: 2, click: () => {
              this.active = 2;
              this.$router.push('/home/scroll')
            }
          },
          {
            name: 'Canvas 画板', icon: 'fa fa-paint-brush', index: 3, click: () => {
              this.active = 3;
              this.$router.push('/home/canvas')
            }
          },
          {
            name: 'Component 组件', icon: 'fa fa-th-list', index: 4, click: () => {
              this.active = 4;
              this.$router.push('/home/component')
            }
          },
        ]
      }
    },
    created() {
    },
    mounted() {
      this.menus[0].click();
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
            height: 60px;
            line-height: 60px;
            display: flex;
            color: #c1c1c1;
            cursor: pointer;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .3);
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
