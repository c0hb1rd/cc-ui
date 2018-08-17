<template>
  <div class="console-demo animated fadeIn flex-grow flex-center" @click="c">
    Demo
  </div>
</template>

<script>
  export default {
    props: {},
    watch: {},
    methods: {
      c() {
        alert('Hello, World')
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

<style lang="scss">
  .console-demo {
    width: 800px;
    height: 600px;
  }
</style>
