<template>
  <div id="random-canvas">
    <Canvas :pixel-data="pixelData" :colors="colors" :pixel-size="pixelSize" :background="background"></Canvas>
    <input type="radio" id="bw" value="bw" v-model="palette">
    <label for="bw">Black and White</label>
    <br>
    <input type="radio" id="rgb" value="rgb" v-model="palette">
    <label for="rgb">rgb</label>
    <br>
    <input type="radio" id="mario" value="mario" v-model="palette">
    <label for="mario">mario</label>
    <br>
    <input type="radio" id="monalisa" value="monalisa" v-model="palette">
    <label for="monalisa">monalisa</label>
    <br>
    <button v-on:click="clear">Clear</button>
    <button v-on:click="renderImage">Render</button>
    <button v-on:click="showMario">Mario</button>
    <button v-on:click="showCero">Cero</button>
  </div>
</template>

<script>
import Canvas from './Canvas'
import { Mario, RandomImage, Cero, DefaultImage } from '../utils'

export default {
  name: 'RandomCanvas',
  props: {
  },
  components: {
    Canvas
  },
  data() {
    return { ...DefaultImage, palette: '' }
  },
  created() {
  },
  methods: {
    renderImage: function() {
      const image= RandomImage(14, 17, this.palette, '20px')
      Object.assign(this, image)
    },
    clear: function() {
      Object.assign(this, DefaultImage)
      // Empty array to run changes
      this.pixelData.splice(0)
    },
    showMario: function() {
      Object.assign(this, Mario)
    },
    showCero: function() {
      Object.assign(this, Cero)
    }
  }
}
</script>

<style scoped>
  .l-pixel {
    display: inline-block;
  }
</style>
