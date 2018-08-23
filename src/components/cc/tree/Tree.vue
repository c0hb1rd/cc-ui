<template>
  <div class="cc-tree">
    <div class="cc-tree-node" v-for="item in data">
      <div class="cc-tree-node__content flex-row flex-y-center"
           @click="toggle(`cc-node-icon-${item.id}`, `cc-node-${item.id}`, item)"
           :style="{paddingLeft: padding + 'px'}">
        <div :ref="`cc-node-icon-${item.id}`" class="cc-tree-node__icon flex-row flex-a-center"><i
          v-if="item.children && item.children.length > 0" class="fa fa-caret-right"></i></div>
        <item-node :props="props" :node="item" :itemNode="itemNode"></item-node>
      </div>
      <div class="cc-tree-node__children"
           :data-height="item[props.children] ? (item[props.children].length * 40) + 'px': 0"
           @click.native.prevent="() => {}" :ref="`cc-node-${item.id}`"
           v-if="item[props.children] && item[props.children].length > 0">
        <cc-tree :data="item[props.children]" :padding="padding + 22" :props="props"
                 :itemNode="itemNode"></cc-tree>
      </div>
    </div>
  </div>
</template>

<script>
  import TreeNode from './TreeNode'

  export default {
    name: "CcTree",
    componentName: "CcTree",
    components: {
      itemNode: {
        name: 'itemNode',
        componentName: 'itemNode',
        props: {
          node: {require: true},
          props: {require: true},
          itemNode: {require: true}
        },
        render(h) {
          const itemNode = this.itemNode;
          return h(this.node.component || itemNode.component, {
            props: {
              node: this.node,
              props: this.props
            },
            on: itemNode.on
          })
        }
      }
    },
    props: {
      data: {require: true, type: Array},
      padding: {require: true, default: 0},
      props: {
        default: () => {
          return {
            label: 'label',
            children: 'children',
          }
        }
      },
      itemNode: {
        default: function () {
          const self = this;

          return {
            component: TreeNode,
            on: {
              nodeClick: function (val) {
                self.$emit("nodeClick", val);
              }
            }
          }
        }
      }
    },
    watch: {},
    methods: {
      toggle(icon, node, item) {
        if (!item.children || item.children.length === 0)
          return;

        console.log(icon);
        console.log(node);

        console.log(this.$refs[node]);
        console.log(this.$refs[icon]);

        node = this.$refs[node][0];
        icon = this.$refs[icon][0];

        if (node.style.height === '0px' || !node.style.height) {
          node.style.height = node.attributes.getNamedItem('data-height').value;
          icon.style.transform = 'rotate(90deg)';
          setTimeout(() => {
            if (node.style.height === node.clientHeight + 'px')
              node.style.height = 'auto';
          }, 200)
        } else {
          node.style.height = node.clientHeight + 'px';
          icon.style.transform = 'rotate(0deg)';
          node.attributes.getNamedItem('data-height').value = node.clientHeight + 'px';
          node.style.height = '0px';
        }
      }
    },
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    destroyed() {
    },
  }
</script>