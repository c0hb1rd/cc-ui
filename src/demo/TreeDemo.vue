<template>
  <div class="tree-demo cc-white-bg_default abs-max">
    <cc-tree :data="data" @nodeClick="nodeClick"></cc-tree>
  </div>
</template>

<script>
  export default {
    name: "",
    componentName: "",
    components: {},
    props: {},
    watch: {},
    methods: {
      nodeClick(val) {
        this.alter({
          message: `点击了节点：${val.label}`,
          type: 'success'
        })
      }
    },
    data() {
      return {
        data: [
          {
            label: 'A',
            id: 1,
            children: [
              {label: 'A1', id: 11},
              {
                label: 'A2', id: 12,
                children: [
                  {label: 'A21', id: 121},
                  {label: 'A22', id: 122},
                  {label: 'A23', id: 123},
                  {label: 'A24', id: 124},
                ]
              },
              {label: 'A3', id: 13},
            ],
          },
          {
            label: 'B',
            id: 2,
            children: [
              {label: 'B1', id: 11},
              {label: 'B2', id: 12},
              {label: 'B3', id: 13},
            ]
          }
        ]
      }
    },
    created() {
    },
    mounted() {
      this.addScrollbar(".tree-demo");
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .tree-demo {
    margin: 30px;
  }
</style>
