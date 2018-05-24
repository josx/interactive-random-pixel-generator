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
    <input type="radio" id="luigi" value="luigi" v-model="palette">
    <label for="luigi">luigi</label>
    <br>
    <input type="radio" id="monalisa" value="monalisa" v-model="palette">
    <label for="monalisa">monalisa</label>
    <br>
    <label for="pixel">Pixel Size</label>
    <input v-model.number="pixelSizeNumber" type="number">
    <br>
    <button v-on:click="clear">Clear</button>
    <button v-on:click="renderImage">Render</button>
    <button v-on:click="showMario">Mario</button>
    <button v-on:click="showLuigi">Luigi</button>
  </div>
</template>

<script>
import Canvas from './Canvas'
import { Mario, RandomImage, Luigi, DefaultImage } from '../utils'

export default {
  name: 'RandomCanvas',
  props: {
  },
  components: {
    Canvas
  },
  data() {
    return {
      ...DefaultImage,
      palette: '',
      pixelSizeNumber: 20
    }
  },
  created() {
  },
  methods: {
    renderImage: function() {
      const image = RandomImage(14, 17, this.palette, this.addPx(this.pixelSizeNumber))
      Object.assign(this, image)
    },
    clear: function() {
      DefaultImage.pixelSize = this.addPx(this.pixelSizeNumber)
      Object.assign(this, DefaultImage)
      // Empty array to run changes
      this.pixelData.splice(0)
    },
    showMario: function() {
      Mario.pixelSize = this.addPx(this.pixelSizeNumber)
      Object.assign(this, Mario)
    },
    showLuigi: function() {
      Luigi.pixelSize = this.addPx(this.pixelSizeNumber)
      Object.assign(this, Luigi)
    },
    addPx: function(size) {
      return size + 'px'
    }
  }
}
</script>

<style scoped>
  .l-pixel {
    display: inline-block;
  }
</style>
