<template>
  <div class="color-demo flex-grow animated fadeIn">
    <div class="color-item">
      <span class="cc-primary-bg_light">Light Primary</span>
      <span class="cc-primary-bg_default">Default Primary</span>
      <span class="cc-primary-bg_dark">Dark Primary</span>
    </div>

    <div class="color-item">
      <span class="cc-white-bg_light">Light White</span>
      <span class="cc-white-bg_default">Default White</span>
      <span class="cc-white-bg_dark">Dark White</span>
    </div>

    <div class="color-item">
      <span class="cc-gray-bg_light">Light Gray</span>
      <span class="cc-gray-bg_default">Default Gray</span>
      <span class="cc-gray-bg_dark">Dark Gray</span>
    </div>

    <div class="color-item">
      <span class="cc-blue-bg_light">Light Blue</span>
      <span class="cc-blue-bg_default">Default Blue</span>
      <span class="cc-blue-bg_dark">Dark Blue</span>
    </div>

    <div class="color-item">
      <span class="cc-green-bg_light">Light Green</span>
      <span class="cc-green-bg_default">Default Green</span>
      <span class="cc-green-bg_dark">Dark Green</span>
    </div>

    <div class="color-item">
      <span class="cc-pink-bg_light">Light Pink</span>
      <span class="cc-pink-bg_default">Default Pink</span>
      <span class="cc-pink-bg_dark">Dark Pink</span>
    </div>

    <div class="color-item">
      <span class="cc-purple-bg_light">Light Purple</span>
      <span class="cc-purple-bg_default">Default Purple</span>
      <span class="cc-purple-bg_dark">Dark Purple</span>
    </div>

    <div class="color-item">
      <span class="cc-yellow-bg_light">Light Yellow</span>
      <span class="cc-yellow-bg_default">Default Yellow</span>
      <span class="cc-yellow-bg_dark">Dark Yellow</span>
    </div>

    <div class="color-item">
      <span class="cc-black-bg_light">Light Black</span>
      <span class="cc-black-bg_default">Default Black</span>
      <span class="cc-black-bg_dark">Dark Black</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    componentName: "",
    components: {},
    props: {},
    watch: {},
    methods: {},
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      this.$(".color-demo").mCustomScrollbar({
        theme: 'inset',
        axis: 'xy'
      })
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .color-demo {
    margin: 30px;

    .color-item {
      height: 100px;
      line-height: 30px;
      padding: 5px 10px;
      display: flex;
      /*width: 380px;*/

      background-color: #fff;

      margin-bottom: 30px;
      align-items: center;



      span {
        border: 1px solid rgba(9, 46, 71, 0.12);
        display: inline-flex;
        height: 90px;
        flex: 1;
        align-items: center;
        justify-content: center;
        color: #3b8998;

        &:nth-child(1) {border-radius: 2px 0 0 2px}
        &:nth-child(2) {border-left: 0; border-right: 0;}
        &:nth-child(3) {border-radius: 0 2px 2px 0}
      }
    }
  }
</style>
