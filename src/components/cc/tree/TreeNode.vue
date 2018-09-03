<template>
  <div class="cc-tree-simple-content flex-row flex-a-center flex-grow" @click.prevent.stop="nodeClick">
    {{ node[props.label] }}
  </div>
</template>

<script>
  export default {
    name: "CcTreeNode",
    componentName: "CcTreeNode",
    props: {
      node: {require: true},
      props: {
        default: () => {
          return {
            label: 'label'
          }
        }
      }
    },
    methods: {
      nodeClick() {
        this.$emit("nodeClick", this.node);
      }
    }
  }
</script>
