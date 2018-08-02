<template>
  <div class="canvas-demo flex-grow flex-column real-area animated fadeIn">
    <section ref="content" class="abs-max abs-area"></section>
  </div>
</template>

<script>
  export default {
    props: {},
    watch: {},
    methods: {
      init() {
        while (!this.canvas) {
          this.canvas = document.createElement('canvas');
          this.canvas.center = Object.create(null);
          this.$refs.content.append(this.canvas);
        }

        if (this.canvas) {
          this.canvas.width = this.$refs.content.clientWidth;
          this.canvas.height = this.$refs.content.clientHeight;
          this.canvas.center.x = this.$refs.content.clientWidth / 2;
          this.canvas.center.y = this.$refs.content.clientHeight / 2;
        }
      },
      draw2D() {
        if (!this.ctx)
          this.ctx = this.canvas.getContext('2d');

        return this.ctx;
      },
      drawTriangle(obj) {
        const ctx = this.draw2D();

        if (!ctx) {
          return false
        }

        obj = obj || Object.create(null);

        const x = obj.x || 0;
        const y = obj.y || 0;
        const type = obj.type || 'fill';

        ctx.fillStyle = obj.style || 'white';
        ctx.strokeStyle = obj.style || 'white';

        const start = obj.start || {x: 100, y: 100};
        const end = obj.end || {x: 0, y: 100};

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);

        if (obj.close)
          ctx.closePath();

        ctx[type]();
      },
      drawCircle(obj) {
        const ctx = this.draw2D();

        if (!ctx)
          return false;

        obj = obj || Object.create(null);

        const x = obj.x || 0;
        const y = obj.y || 0;
        const radius = obj.radius || 100;
        const start = obj.start || 0;
        const end = obj.end || Math.PI * 2;
        const type = obj.type || 'stroke';

        ctx.strokeStyle = obj.style || '#e0f3ff';
        ctx.fillStyle = obj.style || '#e0f3ff';

        ctx.beginPath();
        ctx.arc(x, y, radius, start, end, obj.hasOwnProperty('sort') ? obj.sort : true); // 绘制
        ctx[type]();
      },
      drawRect(obj) {
        const ctx = this.draw2D();

        if (!ctx) {
          return false;
        }

        obj = obj || Object.create(null);

        const x = obj.x || 0;
        const y = obj.y || 0;
        const w = obj.w || 100;
        const h = obj.h || 100;

        const style = obj.style || 'white';
        const type = obj.type || 'fillRect';

        ctx.fillStyle = style;
        ctx.strokeStyle = style;

        ctx[type](x, y, w, h);
      },
      drawBezier(obj) {
        const ctx = this.draw2D();

        if (!ctx)
          return false;

        obj = obj || {};

        const style = obj.style || 'white';
        const type = obj.type || 'stroke';

        let startX = 0;
        let startY = 0;

        let cpX = 0;
        let cpY = 100;

        let endX = 100;
        let endY = 100;

        if (obj.hasOwnProperty('start')) {
          startX = obj.start.x;
          startY = obj.start.y;
        }

        if (obj.hasOwnProperty('cp')) {
          cpX = obj.cp.x;
          cpY = obj.cp.y;
        }

        if (obj.hasOwnProperty('end')) {
          endX = obj.end.x;
          endY = obj.end.y;
        }

        ctx.fillStyle = style;
        ctx.strokeStyle = style;

        if (obj.hasOwnProperty('begin') ? obj.begin : true) {
          ctx.beginPath();
        }
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(cpX, cpY, endX, endY);

        if (obj.close)
          ctx.closePath();
        ctx[type]()
      }
    },
    data: () => ({
      canvas: null,
      rectMap: {},
      ctx: null
    }),
    created() {
    },
    mounted() {
      setTimeout(() => {
        this.init();

        const color1 = '#92fffd';
        const color2 = '#e88cff';
        const color3 = '#6393ff';
        const color4 = '#d4ff84';

        this.drawRect({
          x: this.canvas.center.x - 50,
          y: this.canvas.center.y - 50,
          style: 'rgba(255, 255, 255, .4)',
          name: 'g'
        });

        this.drawRect({
          x: this.canvas.center.x - 150,
          y: this.canvas.center.y - 150,
          style: color3,
          name: 'r'
        });

        this.drawRect({
          x: this.canvas.center.x + 50,
          y: this.canvas.center.y + 50,
          style: color4,
          name: 'y'
        });

        this.drawRect({
          x: this.canvas.center.x - 150,
          y: this.canvas.center.y + 50,
          style: color1,
          name: 'z'
        });

        this.drawRect({
          x: this.canvas.center.x + 50,
          y: this.canvas.center.y - 150,
          style: color2,
          name: 'c'
        });

        this.drawTriangle({
          type: 'fill',
          style: color1,
          x: this.canvas.center.x - 50,
          y: this.canvas.center.y - 150,
          start: {
            x: this.canvas.center.x + 50,
            y: this.canvas.center.y - 150,
          },
          end: {
            x: this.canvas.center.x,
            y: this.canvas.center.y - 250,
          }
        });

        this.drawTriangle({
          type: 'fill',
          style: color2,
          x: this.canvas.center.x + 50,
          y: this.canvas.center.y + 150,
          start: {
            x: this.canvas.center.x - 50,
            y: this.canvas.center.y + 150,
          },
          end: {
            x: this.canvas.center.x,
            y: this.canvas.center.y + 250,
          }
        });

        this.drawTriangle({
          type: 'fill',
          style: color4,
          x: this.canvas.center.x - 150,
          y: this.canvas.center.y - 50,
          start: {
            x: this.canvas.center.x - 250,
            y: this.canvas.center.y,
          },
          end: {
            x: this.canvas.center.x - 150,
            y: this.canvas.center.y + 50,
          }
        });

        this.drawTriangle({
          type: 'fill',
          style: color3,
          x: this.canvas.center.x + 150,
          y: this.canvas.center.y + 50,
          start: {
            x: this.canvas.center.x + 250,
            y: this.canvas.center.y,
          },
          end: {
            x: this.canvas.center.x + 150,
            y: this.canvas.center.y - 50,
          }
        });

        this.drawCircle({
          x: this.canvas.center.x,
          y: this.canvas.center.y - 100,
          radius: 20,
          style: color2,
          type: 'fill'
        });

        this.drawCircle({
          x: this.canvas.center.x,
          y: this.canvas.center.y + 100,
          radius: 20,
          style: color1,
          type: 'fill'
        });

        this.drawCircle({
          x: this.canvas.center.x + 100,
          y: this.canvas.center.y,
          radius: 20,
          style: color4,
          type: 'fill'
        });

        this.drawCircle({
          x: this.canvas.center.x - 100,
          y: this.canvas.center.y,
          radius: 20,
          style: color3,
          type: 'fill'
        });

        this.drawBezier({
          start: {x: this.canvas.center.x - 300, y: this.canvas.center.y + 50},
          cp: {x: this.canvas.center.x - 300, y: this.canvas.center.y + 300},
          end: {x: this.canvas.center.x - 50, y: this.canvas.center.y + 300},
          style: color1,
          type: 'fill'
        });

        this.drawBezier({
          start: {x: this.canvas.center.x + 300, y: this.canvas.center.y - 50},
          cp: {x: this.canvas.center.x + 300, y: this.canvas.center.y - 300},
          end: {x: this.canvas.center.x + 50, y: this.canvas.center.y - 300},
          style: color2,
          type: 'fill'
        });

        this.drawBezier({
          start: {x: this.canvas.center.x - 300, y: this.canvas.center.y - 50},
          cp: {x: this.canvas.center.x - 300, y: this.canvas.center.y - 300},
          end: {x: this.canvas.center.x - 50, y: this.canvas.center.y - 300},
          style: color3,
          type: 'fill'
        });

        this.drawBezier({
          start: {x: this.canvas.center.x + 300, y: this.canvas.center.y + 50},
          cp: {x: this.canvas.center.x + 300, y: this.canvas.center.y + 300},
          end: {x: this.canvas.center.x + 50, y: this.canvas.center.y + 300},
          style: color4,
          type: 'fill'
        });

        this.drawBezier({
          start: {x: 260, y: 400},
          cp: {x: 100, y: 410},
          end: {x: 50, y: 520},
          style: color4,
          type: 'stroke',
        });

        this.drawBezier({
          start: {x: 50, y: 520},
          cp: {x: 100, y: 480},
          end: {x: 260, y: 480},
          style: color4,
          type: 'stroke'
        });

        this.drawBezier({
          start: {x: 340, y: 400},
          cp: {x: 500, y: 400},
          end: {x: 550, y: 360},
          style: color4,
          type: 'stroke',
        });

        this.drawBezier({
          start: {x: 340, y: 480},
          cp: {x: 500, y: 480},
          end: {x: 550, y: 360},
          style: color4,
          type: 'stroke',
        });

        this.drawBezier({
          start: {x: 260, y: 400},
          cp: {x: 260, y: 240},
          end: {x: 220, y: 190},
          style: color4,
          type: 'stroke',
        });

        this.drawBezier({
          start: {x: 340, y: 400},
          cp: {x: 340, y: 240},
          end: {x: 220, y: 190},
          style: color4,
          type: 'stroke',
        });

        this.drawBezier({
          start: {x: 260, y: 480},
          cp: {x: 260, y: 650},
          end: {x: 380, y: 690},
          style: color4,
          type: 'stroke',
        });

        this.drawBezier({
          start: {x: 340, y: 480},
          cp: {x: 340, y: 650},
          end: {x: 380, y: 690},
          style: color4,
          type: 'stroke',
        });

        this.drawCircle({
          x: 300,
          y: 440,
          radius: 20,
          style: color4,
          type: 'stroke'
        });

        this.drawTriangle({
          x: 500,
          y: 200,
          start: {x: 525, y: 340},
          end: {x: 550, y: 200},
          type: 'stroke',
          style: 'black',
          close: false
        });

        this.drawTriangle({
          x: 500,
          y: 200,
          start: {x: 525, y: 110},
          end: {x: 550, y: 200},
          type: 'stroke',
          style: 'black',
          close: false
        });

        this.drawRect({
          x: 519,
          y: 132,
          w: 12.5,
          h: -50,
          style: '#cbcbcb'
        });

        this.drawCircle({
          x: 525,
          y: 75,
          radius: 10,
          type: 'stroke'
        });

        this.drawCircle({
          x: 525,
          y: 75,
          radius: 9,
          type: 'stroke'
        });

        this.drawCircle({
          x: 525,
          y: 75,
          radius: 8,
          type: 'stroke'
        });

        this.drawCircle({
          x: 525,
          y: 75,
          radius: 7,
          type: 'stroke'
        });


        // const ctx = this.ctx;
        // ctx.beginPath();
        // ctx.moveTo(20, 120);
        // ctx.lineTo(120, 120);
        // ctx.quadraticCurveTo(140, 120, 140, 100);
        // ctx.lineTo(140, 30);
        // ctx.quadraticCurveTo(140, 10, 120, 10);
        // ctx.lineTo(20, 10);
        // ctx.quadraticCurveTo(0, 10, 0, 30);
        // ctx.lineTo(0, 100);
        // ctx.fill();

        // this.addBodyEvent('onresize', () => {
        //     this.init();
        // }, true)
      }, 0);
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
