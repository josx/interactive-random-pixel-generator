import math from 'mathjs'

const Z = "Z"  //Black
const C = "C"  //Hat & Shirt
const B = "B"  //Brown Hair & Boots
const S = "S"  //Skin Tone
const O = "O"  //Blue Overalls
const Y = "Y"  //Yellow Buckles
const W = "W"  //White Gloves
const _ = "_"
const G = "G"  //Green


const M1 = "M1"
const M2 = "M2"
const M3 = "M3"
const M4 = "M4"
const M5 = "M5"


const marioPalette = {
  [C]: "255, 0, 0",
  [B]: "100, 50, 0",
  [S]: "255, 200, 150",
  [O]: "0, 0, 255",
  [Y]: "255, 255, 0",
  [W]: "255, 255, 255",
  [_]: "229, 230, 232"
}

const bwPalette = {
  [Z]: "0, 0, 0",
  [W]: "255, 255, 255"
}

const luigiPalette = {
  [G]: "0, 180, 0",
  [B]: "100, 50, 0",
  [O]: "0, 0, 255",
  [Y]: "255, 255, 0",
  [Z]: "0, 0, 0",
  [S]: "255, 200, 150",
  [W]: "255, 255, 255",
  [_]: "229, 230, 232"
}

const monalisaPalette = {
 [M1]: "68, 68, 51",
 [M2]: "119, 170,102",
 [M3]: "170, 170, 85",
 [M4]: "255, 238, 85",
 [M5]: "238, 187, 68"
}

const colors = { bwPalette, marioPalette, monalisaPalette, luigiPalette }

const paletteKeys = Object.keys(colors).reduce( (p, c) => {
  p[c] = Object.keys(colors[c])
  return p
}, {})

const getPaletteKeys = Object.keys(colors).reduce((p, c) => {
  p[c] = (line) => line.map(pos => paletteKeys[c][pos])
  return p
}, {})

const getRndImageCustomPalette = (h, v, p) => math.randomInt([v, h], 0, paletteKeys[p].length).map(getPaletteKeys[p])

const getRndRgb = () => getRndColor() + ', ' + getRndColor() + ', ' + getRndColor()
const getRndColor = () =>  Math.floor(Math.random() * 256)

const getRndImageRgb = (h, v) => {
  let palette = {}
  let matrix = []
  let idx = null
  for(var i=0; i<v; i++) {
    matrix[i] = []
    for(var j=0; j<h; j++) {
      matrix[i][j] = getRndRgb()
      idx = i.toString() + j.toString()
      Object.assign(palette, { [idx]: matrix[i][j] })
      matrix[i][j] = idx
    }
  }
  return [matrix, palette]
}

const buildImage = (h, v, palette) => {
  let idx = palette + 'Palette'
  if (colors[idx] == undefined) {
    idx = 'bwPalette'
  }

  if(palette != 'rgb') {
    return [ getRndImageCustomPalette(h, v, idx), colors[idx] ]
  } else {
    return getRndImageRgb(h,v)
  }
}

export const DefaultImage = {
  pixelData: [],
  colors: {},
  pixelSize: "20px",
  background: "rgb(229, 230, 232)"
}

export const RandomImage = (h, v, palette, size) => {
  const [ pixelData, colors ] = buildImage(h, v, palette)
  return {
    pixelData,
    colors,
    pixelSize: size,
  }
}

export const Mario = {
  pixelData: [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, C, C, C, C, C, _, _, _, _, _],
    [_, _, _, C, C, C, C, C, C, C, C, C, _, _],
    [_, _, _, B, B, B, S, S, B, S, _, _, _, _],
    [_, _, B, S, B, S, S, S, B, S, S, S, _, _],
    [_, _, B, S, B, B, S, S, S, B, S, S, B, _],
    [_, _, B, B, S, S, S, S, B, B, B, B, _, _],
    [_, _, _, _, S, S, S, S, S, S, S, _, _, _],
    [_, _, _, C, C, O, C, C, C, C, _, _, _, _],
    [_, _, C, C, C, O, C, C, O, C, C, C, _, _],
    [_, C, C, C, C, O, O, O, O, C, C, C, C, _],
    [_, W, W, C, O, Y, O, O, Y, O, C, W, W, _],
    [_, W, W, W, O, O, O, O, O, O, W, W, W, _],
    [_, W, W, O, O, O, O, O, O, O, O, W, W, _],
    [_, _, _, O, O, O, _, _, O, O, O, _, _, _],
    [_, _, B, B, B, _, _, _, _, B, B, B, _, _],
    [_, B, B, B, B, _, _, _, _, B, B, B, B, _]],
  colors: marioPalette,
  pixelSize: '20px'
}

export const Luigi = {
  pixelData: [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, G, G, G, G, G, _, _, _, _, _],
    [_, _, _, G, G, G, G, G, G, G, G, G, _, _],
    [_, _, _, B, B, B, S, S, Z, S, _, _, _, _],
    [_, _, B, S, B, S, S, S, Z, S, S, S, _, _],
    [_, _, B, S, B, B, S, S, S, Z, S, S, Z, _],
    [_, _, B, B, S, S, S, S, Z, Z, Z, Z, _, _],
    [_, _, _, _, S, S, S, S, S, S, S, _, _, _],
    [_, _, _, G, G, O, G, G, G, G, _, _, _, _],
    [_, _, G, G, G, O, G, G, O, G, G, G, _, _],
    [_, G, G, G, G, O, O, O, O, G, G, G, G, _],
    [_, W, W, G, O, Y, O, O, Y, O, G, W, W, _],
    [_, W, W, W, O, O, O, O, O, O, W, W, W, _],
    [_, W, W, O, O, O, O, O, O, O, O, W, W, _],
    [_, _, _, O, O, O, _, _, O, O, O, _, _, _],
    [_, _, B, B, B, _, _, _, _, B, B, B, _, _],
    [_, B, B, B, B, _, _, _, _, B, B, B, B, _]],
  colors: luigiPalette,
  pixelSize: '20px'
}
