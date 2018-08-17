<template>
  <div class="cc-menu flex-column" ref="menu">
    <header class="cc-menu-header">
      <button @click="toggle($event)">Hidden</button>
    </header>
    <div class="cc-menu-contain flex-grow">
      <cc-menu-item :menus="menus"></cc-menu-item>
    </div>
  </div>
</template>

<script>
  import CcMenuItem from './MenuItem'

  export default {
    name: 'CcMenu',
    componentName: 'CcMenu',
    components: {CcMenuItem},
    props: {
      menus: {require: true}
    },
    watch: {},
    methods: {
      toggle(e) {
        if (this.$refs.menu.className.indexOf("hidden") === -1) {
          this.$refs.menu.className += " hidden";
          e.target.innerText = "Show";
        } else {
          this.$refs.menu.className = "cc-menu flex-column";
          e.target.innerText = "Hidden";
        }
      }
    },
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      this.$(".cc-menu-contain").mCustomScrollbar({
        theme: 'inset',
        axis: 'y'
      });

      const self = this;
      const itemNode = this.$(".cc-menu-item__node");
      const itemTitle = this.$(".cc-menu-item__title");
      const itemChildren = this.$(".cc-menu-item__children");

      itemNode.on("click", function () {

        itemNode.removeClass("choose-node");
        self.$(this).addClass("choose-node");

        return false;
      });

      itemTitle.on("click", function () {
        const node = self.$(this)[0].parentNode;
        if (node.className.indexOf("choose-title") !== -1) {
          self.$(".choose-title").removeClass("choose-title");
        } else {
          self.$(".choose-title").removeClass("choose-title");
          node.className += " choose-title";
        }

        return false;
      })
    },
    destroyed() {
    },
  }
</script>
