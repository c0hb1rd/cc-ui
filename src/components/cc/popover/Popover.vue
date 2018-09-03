<template>
  <div class="cc-popover animated fadeIn">
    <div class="demo-menu  flex-column rel-area cc-primary-bg_dark" ref="menuArea">
      <ul class="flex-row cc-popover-menu-contain">
        <li class="cc-popover-menu-item cc-white-color_default" :key="index" v-for="item, index in items"
            style="z-index: 20">
          <div class="flex-grow flex-center" @mouseenter="enterItem($event, index)" @mouseleave="leaveItem(index)">{{
            item.label }}
          </div>
          <div @mouseenter="enterContent(index)" @mouseleave="leaveItem(index)" :ref="'cc-children_' + index"
               class="content-area abs-area cc-primary-bg_default">
            <data-cell :style="item.style" :class="item.class || []" :node="item"></data-cell>
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
        this.$refs['cc-children_' + index][0].style.opacity = 1;
        this.$refs['cc-children_' + index][0].style.height = 'auto';
        this.$refs.scrollItem.style.opacity = 1;
      },
      enterItem(e, index) {
        const menuRect = this.$refs.menuArea.getClientRects()[0];
        const targetRect = e.target.getClientRects()[0];
        this.$refs.scrollItem.style.opacity = 1;
        this.$refs.scrollItem.style.marginLeft = `${targetRect.x - menuRect.x - 5 + targetRect.width / 2}px`;

        this.$refs['cc-children_' + index][0].style.opacity = 1;
        this.$refs['cc-children_' + index][0].style.height = 'auto';
      },
      leaveItem(index) {
        this.$refs['cc-children_' + index][0].style.opacity = 0;
        this.$refs['cc-children_' + index][0].style.height = '0';
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
