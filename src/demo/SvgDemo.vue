<template>
  <div ref="content" class="svg-demo abs-max flex-column common-background">
    <!--<svg width="100" height="100" style="background-color: #2b636f"></svg>-->
  </div>
</template>

<script>
  export default {
    props: {},
    watch: {},
    methods: {},
    data() {
      return {
        svg: null
      }
    },
    created() {
    },
    mounted() {
      // this.$(".svg-demo").mCustomScrollbar({
      //   theme: 'inset',
      //   axis: 'y'
      // });

      setTimeout(() => {
        while (!this.svg) {
          this.svg = document.createElement('svg');
          this.svg.style.width = this.$refs.content.clientWidth + 'px';
          this.svg.style.height = this.$refs.content.clientHeight + 'px';
          this.svg.style.backgroundColor = "#fff";

          console.log(this.svg);

          this.$refs.content.append(this.svg);
        }
      }, 200)

    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .svg-demo {
    margin: 30px 60px;
    border-radius: 4px;
  }
</style>
