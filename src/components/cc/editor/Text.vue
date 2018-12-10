<template>
  <span :class="['cc-editor-text', textColor[type]]">{{ text }}</span>
</template>

<script>
  export default {
    name: "CcEditorText",
    componentName: "CcEditorText",
    components: {},
    props: {
      type: {default: "default"},
      text: {require: true}
    },
    watch: {},
    methods: {
      getText() {
        let tmp = '';
        switch (this.type) {
          case "keyWorld":
            tmp = `${this.text} `;
            break;
          case "funcWorld":
            tmp = `${this.text}`;
            break;
          case "argWorld":
            tmp = `${this.text}`;
            break;
          case "varWorld":
            tmp = `${this.text}`;
            break;
          case "intWorld":
            tmp = `${this.text}`;
            break;
          case "strWorld":
            tmp = `${this.text}`;
            break;
          case "symbol":
            tmp = ` ${this.text} `;
            break;
          default:
            tmp = this.text;
        }

        return tmp
      }
    },
    data() {
      return {
        textColor: {
          default: "default",
          keyWorld: "key-world",
          argWorld: "arg-world",
          varWorld: "var-world",
          intWorld: "int-world",
          strWorld: "str-world",
          symbol: "symbol",
          funcWorld: 'func-world',
        }
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
