<template>
  <div class="l-canvas-container" :style="{background: background}">
    <div v-for="(row, rowIndex) in pixelData" :key="rowIndex" :style="{height: pixelSize}">
      <Pixel v-for="(col, colIndex) in row" :key="colIndex" :color="colors[col]"
                 :size="pixelSize">
      </Pixel>
    </div>
  </div>
</template>

<script>
import Pixel from './Pixel';

export default {
  name: 'Canvas',
  components: {
    Pixel
  },
  props: {
    pixelData: {type: Array, required: true},
    colors: {type: Object, required: true},
    pixelSize: {type: String, default: '20px'},
    background: {type: String, default: 'white'}
  },
  methods: {
    onPixelClick(color) {
      let newColor = this.getRandomColor();
      let colors = this.colors;
      for(let c in colors) {
        if (colors[c] === color) {
          colors[c] = newColor;
        }
      }
    },
    getRandomColor() {
      return this.getRandom() + ', ' + this.getRandom() + ', ' + this.getRandom();
    },
    getRandom() {
      return Math.floor(Math.random() * 256);
    }
  }
}
</script>

<style scoped>
  .l-canvas-container {
  }
</style>
