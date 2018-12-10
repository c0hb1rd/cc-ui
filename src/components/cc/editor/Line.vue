<template>
  <div class="cc-editor-line">
    <template v-for="item, index in texts">
      <cc-editor-text v-if="item.text" :text="item.text" :type="item.type" :key="index"></cc-editor-text>
      <cc-editor-indent v-if="item.type === 'indent'" :key="index"></cc-editor-indent>
    </template>
  </div>
</template>

<script>
  export default {
    name: "CcEditorLine",
    componentName: "CcEditorLine",
    components: {},
    props: {line: {require: true, default: ''}},
    watch: {
      line() {
        this.parse();
      }
    },
    methods: {
      getText() {
        let tmp = '';
        for (const children of this.$children) {
          tmp += children.getText();
        }
        return tmp + '\n';
      },
      parse() {
        this.texts = [];
        let tmp = '';
        const re = new RegExp(/"(.*)"/);

        for (let i = 0; i < this.line.length; i++) {
          let char = this.line[i];
          if (char === '\t') {
            continue;
          }

          const ret = re.exec(tmp);
          if (ret) {
            const current_tmp = ret[0];
            const first = tmp.substring(0, ret.index);
            const end = tmp.substring(ret.index + current_tmp.length);
            this.texts.push({
              type: 'default',
              text: first
            });

            this.texts.push({
              type: 'strWorld',
              text: current_tmp
            });

            this.texts.push({
              type: 'default',
              text: end
            });
            tmp = '';
          }

          if (this.line.substring(i, i + 4) === '    ') {
            if (tmp)
              this.texts.push({
                type: 'default',
                text: tmp
              });

            tmp = '';

            this.texts.push({
              type: 'indent'
            });
            i += 3;
          } else {
            tmp += char;
          }

          for (const keyWorld of this.keyWorlds) {
            let ret = tmp.indexOf(keyWorld);
            if (ret !== -1) {
              if (keyWorld.indexOf('<') !== -1)
                ret += 1;
              const current_world = tmp.substring(ret, ret + keyWorld.replace('<', '').replace('>', '').length);
              const first = tmp.substring(0, ret);
              const end = tmp.substring(ret + current_world.length);
              this.texts.push({
                type: 'default',
                text: first
              });

              this.texts.push({
                type: 'keyWorld',
                text: current_world
              });

              this.texts.push({
                type: 'default',
                text: end
              });

              tmp = '';
            }
          }

          for (const styleWorld of this.styleWorlds) {
            let ret = tmp.indexOf(styleWorld);
            if (ret !== -1) {
              const current_world = tmp.substring(ret, ret + styleWorld.replace('=', '').length);
              const first = tmp.substring(0, ret);
              const end = tmp.substring(ret + current_world.length);
              this.texts.push({
                type: 'default',
                text: first
              });

              this.texts.push({
                type: 'funcWorld',
                text: current_world
              });

              this.texts.push({
                type: 'default',
                text: end
              });

              tmp = '';
            }
          }
        }

        if (tmp)
          if (this.keyWorlds.indexOf(tmp) > 0) {
            this.texts.push({
              type: 'default',
              text: tmp
            });
          } else {

            this.texts.push({
              type: 'default',
              text: tmp
            });
          }
      }
    },
    data() {
      return {
        texts: [],
        keyWorlds: [
          '<html', '<div', '<tr', '<p', '<table', '<body', '<style', '<span', '<head', '<td', '<title', '<img', '<th', '<meta',
          'html>', 'div>', 'tr>', 'p>', 'table>', 'body>', 'style>', 'span>', 'head>', 'td>', 'title>', 'img>', 'th>'
        ],
        styleWorlds: [
          'class', 'width', 'colspan=', 'lang=', 'src=', 'style=', 'font-size', 'color', 'text-align', 'font-family'
        ]
      }
    },
    created() {
      this.parse()
    },
    mounted() {


    },
    destroyed() {
    },
  }
</script>
