import math from 'mathjs'

const Z = "Z"   //Black
const C = "C";  //Hat & Shirt
const B = "B";  //Brown Hair & Boots
const S = "S";  //Skin Tone
const O = "O";  //Blue Overalls
const Y = "Y";  //Yellow Buckles
const W = "W";  //White Gloves
const _ = "_";

const colors = {
  [Z]: "0, 0, 0",
  [C]: "255, 0, 0",
  [B]: "100, 50, 0",
  [S]: "255, 200, 150",
  [O]: "0, 0, 255",
  [Y]: "255, 255, 0",
  [W]: "255, 255, 255",
  [_]: "229, 230, 232"
}

const colorsNames = Object.keys(colors)
const getColorsNames = (line) => line.map(pos => colorsNames[pos])
const getRndImage = (h, v) => math.randomInt([v, h], 0, colorsNames.length).map(getColorsNames)

export const RandomImage = () => {
  return {
    pixelData: getRndImage(14, 17),
    colors,
    pixelSize: '20px',
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
  colors,
  pixelSize: '20px'
}

export const Cero = {
  pixelData: [
   [_, Z, Z, Z, _],
   [Z, _, _, Z, Z],
   [Z, _, Z, _, Z],
   [Z, Z, _, _, Z],
   [_, Z, Z, Z, _],
  ],
  pixelSize: '60px',
  colors
}
