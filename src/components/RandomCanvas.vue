<template>
  <v-app id="random-canvas">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-subheader>Palette</v-subheader>
        <div class="ml-3 mr-3">
          <v-switch
            id="byn"
            value="byn"
            :label="`Black and White`"
            v-model="palette"
          ></v-switch>
          <v-switch
            id="rgb"
            value="rgb"
            :label="`RGB`"
            v-model="palette"
          ></v-switch>
          <v-switch
            id="mario"
            value="mario"
            :label="`Mario`"
            v-model="palette"
          ></v-switch>
          <v-switch
            id="luigi"
            value="luigi"
            :label="`Luigi`"
            v-model="palette"
          ></v-switch>
          <v-switch
            id="monalisa"
            value="monalisa"
            :label="`Monalisa`"
            v-model="palette"
          ></v-switch>
        </div>
        <v-divider></v-divider>
        <v-subheader>Pixel</v-subheader>
        <div class="ml-3 mr-3">
          <v-text-field
            v-model.number="pixelSizeNumber"
            name="input-2"
            label="Pixel Size"
            value="Input text"
            class="input-group--focused"
            type="number"
          ></v-text-field>
        </div>
        <v-divider></v-divider>
        <v-subheader>Canvas</v-subheader>
        <div class="ml-3 mr-3">
          <v-text-field
            v-model.number="imageSizeWidth"
            name="input-2"
            label="Image size width"
            value="Input text"
            class="input-group--focused"
            type="number"
          ></v-text-field>
          <v-text-field
            v-model.number="imageSizeHeight"
            name="input-2"
            label="ImageSize height"
            value="Input text"
            class="input-group--focused"
            type="number"
          ></v-text-field>
        </div>
        <v-divider></v-divider>
        <div  class="pt-2 pl-5 pr-5">
          <v-btn centered color="success" block v-on:click="renderImage">Render</v-btn>
          <v-divider></v-divider>
          <v-btn outline centered color="success" block v-on:click="showMario">Mario</v-btn>
          <v-btn outline centered color="success" block v-on:click="showLuigi">Luigi</v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>interactive-random-pixel-generator</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
              <v-card>
                <Canvas :pixel-data="pixelData" :colors="colors" :pixel-size="pixelSize" :background="background"></Canvas>
              </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <v-btn color="error" v-on:click="clear" flat  block>Clear</v-btn>
      <v-btn color="success" v-on:click="renderImage"  block>Render</v-btn>
    </v-footer>
  </v-app>
</template>
<script>

import Canvas from './Canvas'
import { Mario, RandomImage, Luigi, DefaultImage } from '../utils'

export default {
  name: 'RandomCanvas',
  components: {
    Canvas
  },
  data() {
    return {
      ...DefaultImage,
      palette: 'byn',
      pixelSizeNumber: 20,
      imageSizeWidth: 14,
      imageSizeHeight: 17,
      drawer: null
    }
  },
  created() {
  },
  methods: {
    renderImage: function() {
      const image = RandomImage(this.imageSizeWidth, this.imageSizeHeight, this.palette, this.addPx(this.pixelSizeNumber))
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
