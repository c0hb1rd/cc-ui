<template>
  <div class="cc-editor-content-area">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CcEditorContentArea",
    componentName: "CcEditorContentArea",
    components: {},
    props: {},
    watch: {},
    methods: {
      getText() {
        let tmp = '';
        for (const children of this.$children) {
          tmp += children.getText();
        }
        return tmp;
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
