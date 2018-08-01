<template>
  <div ref="content" class="canvas-demo flex-grow">
  </div>
</template>

<script>
  export default {
    props: {},
    watch: {},
    data() {
      return {
        ctx: null,
      }
    },
    created() {
    },
    methods: {
      draw() {
        return this.ctx;
      },
      drawRect(obj) {
        const ctx = this.draw();

        obj = obj || {};

        const x = obj.x || 0;
        const y = obj.y || 0;

        const height = obj.height || 50;
        const width = obj.width || 100;

        const type = obj.type || 'fillRect';
        const style = obj.style || 'white';

        ctx.fillStyle = style;
        ctx.strokeStyle = style;

        ctx[type](x, y, width, height);

        return ctx;
      }
    },
    mounted() {
      setTimeout(() => {
        const canvas = document.createElement('canvas');
        canvas.height = this.$refs.content.clientHeight - 60;
        canvas.width = this.$refs.content.clientWidth - 120;

        this.$refs.content.appendChild(canvas);

        const center = {
          x: canvas.width / 2,
          y: canvas.height / 2
        };

        this.ctx = canvas.getContext('2d');

        this.drawRect({
          x: center.x - 150,
          y: center.y - 50,
          width: 300,
          height: 100,
          style: "#90f7ff"
        })
      }, 0)
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .canvas-demo {
    margin: 30px 60px;
    border-radius: 4px;

    background-color: #3D4D65;
  }
</style>
