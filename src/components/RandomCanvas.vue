<template>
  <div id="random-canvas">
    <Canvas :pixel-data="pixelData" :colors="colors" :pixel-size="pixelSize" :background="background"></Canvas>
    <button v-on:click="showMario">Mario</button>
    <button v-on:click="showRandom">Random</button>
    <button v-on:click="showCero">Cero</button>
  </div>
</template>

<script>
import Canvas from './Canvas'
import { Mario, RandomImage, Cero } from '../utils'

export default {
  name: 'RandomCanvas',
  props: {
  },
  components: {
    Canvas
  },
  data() {
    return {
      pixelData: [],
      colors: {},
      pixelSize: "20px",
      background: "rgb(229, 230, 232)"
    }
  },
  created() {
  },
  methods: {
    showMario: function() {
 //     this.pixeliData = Mario.pixelData
 //     this.colors = Mario.colors
      Object.assign(this, Mario)
    },
    showRandom: function() {
      const image= RandomImage()
      Object.assign(this, image)
//      this.pixelData = image.pixelData
//      this.colors = image.colors
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
