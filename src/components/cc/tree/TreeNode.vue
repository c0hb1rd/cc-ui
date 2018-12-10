<template>
  <div class="cc-tree-simple-content flex-row flex-a-center flex-grow" @click="nodeClick($event)">
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
      nodeClick(event) {
        this.$emit("nodeClick", event, this.node);
      }
    }
  }
</script>
