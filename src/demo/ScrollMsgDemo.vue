<template>
  <div class="scroll-demo flex-grow flex-center animated fadeIn">
    <section class="content-area">

      <div class="slider" ref="slider">
        <div class="content-item" v-for="item, index in stack" :key="index">{{ item.info }}</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      stack: [
        {
          info: '长度： 10， 消息：这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息'
        },
        {
          info: '长度： 15， 消息：这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息'
        },
        {
          info: '长度： 20， 消息：这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息'
        },
        {
          info: '长度： 10， 消息：这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息'
        },
        {
          info: '长度： 2， 消息：这是一个消息，这是一个消息'
        },
        {
          info: '长度： 7， 消息：这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息'
        },
        {
          info: '长度： 12， 消息：这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息'
        },
        {
          info: '长度： 10， 消息：这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，这是一个消息，'
        },
      ],
      timer: null
    }),
    mounted() {
      const slider = this.$refs.slider;

      setTimeout(() => {
        // 初始化 Margin 为 0
        let margin = 0;
        // 获取第一个 Node 的高度，加 5 是因为 Node 自身的 Margin
        let currentNodeHeight = slider.firstChild.clientHeight + 5;


        this.timer = setInterval(() => {
          // 判断当前的 Margin 是否与当前的 Node 高度相等
          if (-margin === currentNodeHeight) {

            // 获取地一个 Node 并移动到末尾
            const node = slider.firstChild;
            slider.removeChild(node);
            slider.appendChild(node);


            // 重新初始化 Margin 和 Node 高度
            margin = 0;
            currentNodeHeight = slider.firstChild.clientHeight + 5;
          }

          // 改变 Slider 的 Margin
          margin -= 1;
          slider.style.marginTop = margin + 'px';
        }, 20)
      }, 0);
    },
    destroyed() {
      this.timer && clearInterval(this.timer);
    },
  }
</script>

<style lang="scss">
  .scroll-demo {
    margin: 5px;
    padding: 5px;

    * {
      transition: none !important;
    }

    .content-area {
      position: relative;
      border-radius: 5px;
      width: 600px;
      max-height: 400px;
      min-height: 400px;
      overflow: hidden;
      /*padding: 20px 40px;*/
      background-color: #3D4F63;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .content-item {
      background-color: #1c3342;
      margin: 5px;
      padding: 5px;
      border-radius: 5px;
    }
  }
</style>
