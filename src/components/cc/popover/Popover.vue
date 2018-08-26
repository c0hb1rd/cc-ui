<template>
  <div class="cc-popover animated fadeIn">
    <div class="demo-menu  flex-column rel-area cc-primary-bg_dark" ref="menuArea">
      <ul class="flex-row">
        <li class="cc-white-color_default" :key="index" v-for="item, index in items" style="z-index: 20">
          <div class="flex-grow flex-center" @mouseenter="enterItem($event, index)" @mouseleave="leaveItem(index)">{{ item.label }}</div>
          <div @mouseenter="enterContent(index)" @mouseleave="leaveItem(index)" :ref="'children_' + index"
               class="content-area abs-area cc-primary-bg_default">
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
      enterContent(index) {
        this.$refs['children_' + index][0].style.opacity = 1;
        this.$refs['children_' + index][0].style.height = 'auto';
        this.$refs.scrollItem.style.opacity = 1;
      },
      enterItem(e, index) {
        const x = this.$refs.menuArea.getClientRects()[0].x;
        this.$refs.scrollItem.style.opacity = 1;
        console.log(e.target.getClientRects());
        this.$refs.scrollItem.style.marginLeft = (Math.floor(e.target.getClientRects()[0].x) - Math.floor(x) - 7 + 50) + 'px';

        this.$refs['children_' + index][0].style.opacity = 1;
        this.$refs['children_' + index][0].style.height = 'auto';
      },
      leaveItem(index) {
        this.$refs['children_' + index][0].style.opacity = 0;
        this.$refs['children_' + index][0].style.height = '0';
        this.$refs.scrollItem.style.opacity = 0;
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
    z-index: 2000;

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

        .content-area {
          transition: all .3s;
          opacity: 0;
          top: 40px;
          left: 20px;
          height: 0;
          overflow: hidden;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);

          min-width: 600px;
        }
      }
    }

    .scrollbar-contain {
      height: 10px;
      bottom: 0;

      .scrollbar-item {
        opacity: 0;
        display: inline-block;
        border-bottom: 10px solid #53b5ef;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        transition: all .2s;
      }
    }
  }

</style>
