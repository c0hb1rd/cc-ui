<template>
  <div class="popover-demo animated fadeIn abs-max common-background">
    <div class="demo-menu  flex-column real-area" ref="menuArea">
      <ul class="flex-row bg-color-blue">
        <li class="flex-center" @mouseenter="enterItem" :key="index" @mouseout="leaveItem"
            v-for="menu, index in menus">{{ menu.label }}
          <div class="content-area abs-area bg-color-green" @mouseover="enter = true">
            <data-cell class="flex-column" :node="menu"></data-cell>
          </div>
        </li>
      </ul>

      <div class="scrollbar-contain abs-area abs-max-width flex-row flex-y-center">
        <div ref="scrollItem" id="scrollItem" class="scrollbar-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import CanvasDemo from './CanvasDemo'
  import ConsoleDemo from './ConsoleDemo'
  import ScrollMsgDemo from './ScrollMsgDemo'
  import Home from '../Home'


  export default {
    components: {
      dataCell: {
        props: {
          node: {type: Object, default: Object.create(null)}
        },
        render(createElement) {
          const node = this.node;

          if (node.component)
            return createElement(node.component, {
              props: {
                node: node,
              },
              on: node.on
            });

          return createElement('div', {
            attrs: {
              style: "text-overflow: ellipsis; white-space: nowrap; overflow: hidden"
            }
          }, '无');
        }
      }
    },
    props: {},
    watch: {},
    methods: {
      enterItem(e) {
        this.enter = true;
        const x = this.$refs.menuArea.getClientRects()[0].x;
        this.$refs.scrollItem.style.opacity = 1;
        this.$refs.scrollItem.style.marginLeft = (e.target.getClientRects()[0].x - x + 44) + 'px';
      },
      leaveItem() {
        this.enter = false;
        setTimeout(() => {
          if (!this.enter) {
            document.getElementById("scrollItem").style.opacity = 0;
          }
        }, 0)
      },
    },
    data() {
      return {
        enter: false,
        menus: [
          {
            label: '菜单1',
            component: CanvasDemo,
          },
          {
            label: '菜单2',
            component: ScrollMsgDemo,
          },
          {
            label: '菜单3',
            component: ConsoleDemo,
          },
        ]
      }
    },
    created() {
    },
    mounted() {
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .demo-menu {
    box-shadow: 3px 3px 2px rgba(0, 0, 0, .5);

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      /*overflow: hidden;*/

      li {
        height: 40px;
        line-height: 40px;
        min-width: 100px;
        max-width: 100px;
        cursor: pointer;
        color: #e8e8e8;
        z-index: 1;
        transition: all .3s;

        .content-area {
          transition: all 1s;
          opacity: 0;
          top: 40px;
          left: 20px;
          height: 0;
          overflow: hidden;
          z-index: 2;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);

          min-width: 600px;
        }

        &:hover {
          color: #1fa4f9;

          .content-area {
            opacity: 1;
            height: auto;
          }
        }
      }
    }

    .scrollbar-contain {
      height: 10px;
      bottom: 0;

      .scrollbar-item {
        opacity: 0;
        display: inline-block;
        border-bottom: 10px solid #4eb1b4;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        transition: all .3s;
      }
    }
  }

  .popover-demo {
    margin: 30px 60px;
    padding: 30px;
    border-radius: 4px;
  }
</style>
