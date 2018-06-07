<template>
  <Random-Canvas/>
</template>

<script>
import RandomCanvas from './components/RandomCanvas.vue'

export default {
  name: 'app',
  components: {
    RandomCanvas
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style src="vuetify/dist/vuetify.min.css"></style>
