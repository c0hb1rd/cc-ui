<template>
  <div class="cc-editor debug-border flex-grow rel-area" @click.stop="() => {$refs.cursor.focus()}">
    <cc-editor-content-area class="abs-max cc-gray-color_dark  font-14" ref="contentArea">
      <cc-editor-line v-for="line, index in lines" :key="index" :line="line.replace('\t', '')"></cc-editor-line>
    </cc-editor-content-area>
    <div class="abs-max cc-editor-edit-area debug-border flex-column">
      <div class="flex-grow rel-area flex-column">
        <textarea ref="cursor" class="flex-grow cursor abs-max"
                  v-model="content"
                  @keydown.tab.stop="tabToSpace"
                  title="">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CcEditor",
    componentName: "CcEditor",
    components: {},
    props: {},
    watch: {
      content() {
        this.lines = this.content.split("\n");
        this.$emit("change")
      },
      text(val) {
        this.currentLine = val;
        // this.text = '';
      },
    },
    methods: {
      tabToSpace() {
        const Cursor = this.$refs.cursor;
        const firstStr = this.content.substring(0, Cursor.selectionStart);
        const endStr = this.content.substring(Cursor.selectionStart);
        this.content = firstStr + '    ' + endStr;

        const cursorPosition = Cursor.selectionStart + 4;

        setTimeout(() => {
          Cursor.selectionStart = cursorPosition;
          Cursor.selectionEnd = cursorPosition;
          Cursor.focus();
        }, 0)
      },
      deleteChar() {
        this.currentLine = this.currentLine.substring(0, this.currentLine.length - 1);
      },
      getText() {
        return this.content;
      }
    },
    data() {
      return {
        text: '',
        lines: [],
        currentLine: '',
        content: '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<p>Hello, World</p>\n' +
        '</body>\n' +
        '</html>'
      }
    },
    created() {
      this.lines = this.content.split("\n");
    },
    mounted() {
      // this.addScrollbar(".cc-editor-content-area", {axis: 'yx'});
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .cc-editor {

  }
</style>
