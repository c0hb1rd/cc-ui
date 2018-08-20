<template>
  <div class="demo-popover flex-grow ddd flex-column rel-area">
    <cc-popover :items="menus"></cc-popover>
  </div>

</template>

<script>
  import CanvasDemo from './CanvasDemo'
  import ConsoleDemo from './ConsoleDemo'
  import ScrollMsgDemo from './ScrollMsgDemo'


  export default {
    components: {},
    props: {},
    watch: {},
    methods: {},
    data() {
      return {
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
      // this.addScrollbar(".ddd")
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .demo-popover {
    margin: 30px;
  }
</style>
