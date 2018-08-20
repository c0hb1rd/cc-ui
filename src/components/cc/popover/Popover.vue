<template>
  <div class="cc-popover animated fadeIn">
    <div class="demo-menu  flex-column rel-area cc-primary-bg_default" ref="menuArea">
      <ul class="flex-row">
        <li class="flex-center cc-white-color_default" @mouseenter="enterItem" :key="index" @mouseout="leaveItem"
            v-for="item, index in items">{{ item.label }}
          <div class="content-area abs-area cc-primary-bg_light" style="" @mouseover="enter = true">
            <data-cell class="flex-column" :node="item"></data-cell>
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
  export default {
    props: {
      items: {require: true, default: []}
    },
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
            document.getElementById("scrollItem").style.opacity = '0';
          }
        }, 0)
      },
    },
    data() {
      return {
        enter: false,
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
  .cc-popover {
    margin: 10px;
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
        transition: all .3s;

        .content-area {
          transition: all 1s;
          opacity: 0;
          top: 40px;
          left: 20px;
          height: 0;
          overflow: hidden;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);

          min-width: 600px;
        }

        &:hover {
          color: #83e2f9;

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
        transition: all .1s;
      }
    }
  }

</style>
