<template>
  <div id="app">
  <NthWeek />
  </div>
</template>

<script>
import NthWeek from '@/components/NthWeek.vue'

export default {
  name: 'App',
  components: {
    NthWeek
  }
}
</script>

<style>
body {
  background-color: #369FAD;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
