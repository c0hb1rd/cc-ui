<template>
  <div id="app" class="flex-grow real-area flex-column">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      document.body.className += ' default-theme'
    }
  }
</script>
