// import * as Chroma from 'chroma-js';
// import * as colorBlind from 'color-blind';
// import * as culori from 'culori';

// culori.useMode(culori.modeOklch);
// culori.useMode(culori.modeA98);
// culori.useMode(culori.modeCubehelix);
// culori.useMode(culori.modeDlab);
// culori.useMode(culori.modeDlch);
// culori.useMode(culori.modeHsi);
// culori.useMode(culori.modeHsl);
// culori.useMode(culori.modeHsv);
// culori.useMode(culori.modeHwb);
// culori.useMode(culori.modeJab);
// culori.useMode(culori.modeJch);
// culori.useMode(culori.modeLab);
// culori.useMode(culori.modeLab65);
// culori.useMode(culori.modeLch);
// culori.useMode(culori.modeLch65);
// culori.useMode(culori.modeLchuv);
// culori.useMode(culori.modeLrgb);
// culori.useMode(culori.modeLuv);
// culori.useMode(culori.modeOklab);
// culori.useMode(culori.modeOklch);
// culori.useMode(culori.modeP3);
// culori.useMode(culori.modeProphoto);
// culori.useMode(culori.modeRec2020);
// culori.useMode(culori.modeRgb);
// culori.useMode(culori.modeXyz50);
// culori.useMode(culori.modeXyz65);
// culori.useMode(culori.modeYiq);

// export enum TextColor {
//   White = '#FFFFFF',
//   Dark = '#4A4A4A',
//   Black = '#000000',
// }

// export type RGBColor = {
//   r: number,
//   g: number,
//   b: number,
//   a?: number,
// }

// export enum ColorMode {
//   a98 = 'a98',
//   cubehelix = 'cubehelix',
//   dlab = 'dlab',
//   dlch = 'dlch',
//   hsi = 'hsi',
//   hsl = 'hsl',
//   hsv = 'hsv',
//   hwb = 'hwb',
//   jab = 'jab',
//   jch = 'jch',
//   lab = 'lab',
//   lab65 = 'lab65',
//   lch = 'lch',
//   lch65 = 'lch65',
//   lchuv = 'lchuv',
//   lrgb = 'lrgb',
//   luv = 'luv',
//   oklab = 'oklab',
//   oklch = 'oklch',
//   p3 = 'p3',
//   prophoto = 'prophoto',
//   rec2020 = 'rec2020',
//   rgb = 'rgb',
//   xyz65 = 'xyz65',
//   xyz50 = 'xyz50',
//   yiq = 'yiq',
// }

// export type ColorModeLCH = ColorMode.lch | ColorMode.oklch | ColorMode.lchuv | ColorMode.dlch | ColorMode.lch65;
// type CuloriColor = (
//   { mode: ColorMode.hsl | ColorMode.cubehelix, h?: number, s?: number, l?: number } |
//   { mode: ColorMode.jab, j?: number, a?: number, b?: number } |
//   { mode: ColorMode.jch, j?: number, c?: number, h?: number } |
//   { mode: ColorMode.lab | ColorMode.lab65 | ColorMode.oklab | ColorMode.dlab, l?: number, a?: number, b?: number } |
//   { mode: ColorModeLCH, l?: number, c?: number, h?: number } |
//   { mode: ColorMode.luv, l?: number, u?: number, v?: number } |
//   { mode: ColorMode.rgb | ColorMode.lrgb, r?: number, g?: number, b?: number, a?: number } |
//   { mode: ColorMode.xyz50 | ColorMode.xyz65, x?: number, y?: number, z?: number }
// );

// /**
//  * Returns a brightness value (0 - 255) for a given hex color
//  */
// export const getBrightness = (hex: string): number => {
//   let rgb = hexToRgb(hex);
//   if (!rgb) {
//     rgb = {
//       r: 255,
//       g: 255,
//       b: 255,
//     };
//   }
//   return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
// }

// export const isDark = (hex: string): boolean =>  getBrightness(hex) < 180;

// export const getTextColor = (hex: string, useBlack = false): TextColor => {
//   const darkText = useBlack? TextColor.Black : TextColor.Dark;
//   return (!isValidHex(hex, true) || Chroma.contrast(hex, darkText) > 4.5)? darkText : TextColor.White;
// };

// /**
//  * Check that the string is a valid hex color. Only 3 or 6 digits are considered 
//  * valid unless allowAlpha is set to true
//  * @param allowAlpha when true a 4 or 8 digit hex color is also considered valid
//  */
// export const isValidHex = (hex: string, allowAlpha = false): boolean => {
//   if(typeof hex !== 'string'){
//     return false;
//   }
//   const toTest = '#' + hex.replace('#', '');
//   if(allowAlpha){
//     return /(^#[0-9A-F]{8}$)|(^#[0-9A-F]{6}$)|(^#[0-9A-F]{4}$)|(^#[0-9A-F]{3}$)/i.test(toTest);
//   }
//   return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(toTest);
// }

// /**
//  * Check that the string can loosely be considered a hex color (between 3 and 6 digits)
//  * @param allowAlpha when true a 7 or 8 digit hex color is also considered valid
//  */
//  export const isValidHexLoose = (hex: string, allowAlpha = false): boolean => {
//   if(typeof hex !== 'string'){
//     return false;
//   }
//   const toTest = '#' + hex.replace('#', '');
//   if(allowAlpha){
//     return /(^#[0-9A-F]{3,8}$)/i.test(toTest);
//   }
//   return /(^#[0-9A-F]{3,6}$)/i.test(toTest);
// }

// /**
//  * Returns an rgba object for a given 3, 6 or 8 digit hex color
//  */
// export const hexToRgb = (hex: string): RGBColor => {
//   if (isValidHex(hex, true)) {
//     // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//     const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d]{0,2})$/i;
//     hex = hex.replace(shorthandRegex, function (m, r, g, b, a = '') {
//       return r + r + g + g + b + b + a + a;
//     });

//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{0,2})$/i.exec(hex);
//     const a = (result && result[4] && result[4].length)? parseInt(result[4], 16) : undefined;
//     return result ? {
//       r: parseInt(result[1], 16),
//       g: parseInt(result[2], 16),
//       b: parseInt(result[3], 16),
//       a,
//     } : null;
//   }
//   return null;
// }

// /**
//  * Convert a number (0-255) to a 2 character hex string
//  */
// export const componentToHex = (rgbComponent: number): string => {
//   const hexComponent = rgbComponent.toString(16);
//   return hexComponent.length === 1 ? "0" + hexComponent : hexComponent;
// }

// /**
//  * Returns a 6 or 8 digit hex value for a given rgb or rgba string
//  * @param rgbaString The rgb string in rgba(20,106,200,.2) format
//  */
// export const rgbaToHex = (rgbaString: string): string => {
//   const rgba = rgbaString.replace(/(rgba|rgb)|\(|\s|\)/ig, '').split(',').map(x => +x);
//   const hex = rgbToHex(`rgb(${rgba.slice(0,3).join(',')})`);
//   if (rgba.length < 4 || rgba[3] === 1) return hex;
//   const alpha = Math.round(rgba[3] * 255).toString(16);
//   if (alpha.length === 1) 0 + alpha;
//   return (hex + alpha).toUpperCase();
// }

// /**
//  * 
//  * @param rgbString The rgb string in rgba(20,106,200,.2) format
//  */
// export const rgbToHex = (rgbString: string): string => {
//   const rgbComponents = rgbString.replace(/(rgba|rgb)|\(|\s|\)/ig, '').split(',').slice(0,3).map(x => +x);
//   return "#" + rgbComponents.map(componentToHex).join('').toUpperCase();
// }

// /**
//  * Convert a partial hex string to a full 6 digit hex value:
//  * '' -> ''
//  * '#' -> ''
//  * '#3' -> '#33FFFF'
//  * '#32' -> '#3322FF'
//  * '#333' -> '#333333'
//  * '1234' -> '#112233'
//  * '12345' -> '#113355'
//  * '123456' -> '#123456'
//  * '12345678' -> '#123456'
//  */
// export const formatHexInput = (colorHex: string, includeHash = true): string => {
//   colorHex = colorHex.replace('#', '');
//   if (colorHex.length === 0) return colorHex;

//   if (colorHex.length === 5) {
//     colorHex = colorHex.charAt(0) + colorHex.charAt(2) + colorHex.charAt(4);
//   }
  
//   if (colorHex.length <= 4) {
//     const [r = 'F', g = 'F', b = 'F'] = colorHex;
//     colorHex = r + r + g + g + b + b;
//   }

//   if (colorHex.length > 6) {
//     colorHex = colorHex.slice(0, 6);
//   }
  
//   return (includeHash? '#' : '') + colorHex;
// };

// /**
//  * Converts 3 or 6 digit color hex to a 6 digit hex value. A hash is added to the beginning if the input value has one.
//  */
// export const to6DigitHex = (hex: string): string => {
//   let hasHash = hex.charAt(0) === '#';
//   hex = hex.replace('#', '').substr(0, 6);
//   if(hex.length < 3){
//     hasHash = false;
//     hex = '';
//   }
//   else if(hex.length < 6){
//     hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
//   }
//   return ((hasHash? '#': '') + hex).toUpperCase();
// };

// /**
//  * Converts 3 or 6 digit color hex with numeric alpha to an 8 digit hex value. A hash is added to the beginning if the input value has one.
//  * @param hexColor 3 or 6 digit hex string
//  * @param alpha number between 0 and 1
//  */
// export const to8DigitHex = (hexColor: string, alpha: number = 1): string => {
//   if(hexColor && hexColor.length){
//     const hasHash = hexColor.charAt(0) === '#';
//     let hex = hexColor.replace('#', '').substr(0, 6);
//     if(hex.length === 3){
//       hex = to6DigitHex(hex);
//     }
//     if(hex.length === 6){
//       if(alpha == null){
//         alpha = 1;
//       }
//       const alphaNum = Math.round(alpha * 255);
//       let alphaHex = alphaNum < 16? "0" : "";
//       alphaHex += alphaNum.toString(16);
//       return ((hasHash? '#': '') + hex + alphaHex).toUpperCase();
//     }
//   }
//   return '';
// };

// /**
//  * Convert a given hex string to a color-alpha object
//  * @param hex a 3, 6 or 8 digit hex value to be converted
//  * @param defaultColor value to use when hex is null
//  * @param defaultAlpha value to use when an alpha value is not in the hex string (default: 1)
//  * @returns {object} {color, value} - color - 6 digit hex value, alpha - Percentage between 0 and 1
//  * }
//  */
// export const getColorAlphaObject = (hex: string, defaultColor: string = null, defaultAlpha = 1): {color: string, alpha: number} => {
//   let alpha: number = defaultAlpha;
//   if(!isValidHexLoose(hex, true)){
//     hex = defaultColor;
//   }
//   if(hex === defaultColor){
//     return {color: defaultColor, alpha};
//   }
//   hex = hex.replace('#', '');
//   const hexToPercent = (hex) => {
//     return parseFloat(Number(parseInt(hex, 16) / 256).toFixed(2));
//   };
//   if(hex.length < 6){
//     if(hex.length > 3){
//       alpha = hexToPercent(hex[3] + hex[3]);
//     }
//     hex = to6DigitHex(hex);
//   }
//   else if(hex.length > 6){
//     const a = hex.substr(6, 2);
//     alpha = (a.length === 1)? hexToPercent(a + a): hexToPercent(a);
//   }
//   const color: string = hex.substr(0, 6).toUpperCase();
//   return {color, alpha};
// };

// /**
//  * Turns a 1 dimensional array into a 2 dimensional array
//  */
// export const make2DArray = (stringArray: string[], rowWidth = 6): string[][] => {
//   const [...arr] = stringArray;
//   const rows: string[][] = [];
//   while(arr.length > 0){
//     rows.push(arr.splice(0, rowWidth));
//   }
//   return rows;
// };

// /**
//  * Returns readable text colors for a given background hex
//  */
// export const getTextColorsForBackground = (bgHex: string): string[] => {
//   if(!isValidHexLoose(bgHex, true)){
//     return ['#fff', '#000'];
//   }
//   const colorRamp = ['#fff', Chroma(bgHex).saturate().hex(), '#000'];
//   const arr = Chroma.bezier(colorRamp).scale().correctLightness().colors(7);
//   const colors = [];
//   for (var i = 0; i < arr.length; i++){
//     const isReadable = Chroma.contrast(bgHex, arr[i]) > 2;
//   	isReadable && colors.push(arr[i]);
//   }

//   return colors;
// }

// /**
//   Find the index of the closest color match using chroma.deltaE
// */
// export const getClosestColor = (colors: string[] | {color: string}[], toMatch: string): number => {
//   let distance = Infinity, matchIndex = 0;
//   const findIndex = (color: string, index) => {
//     let d = getColorDelta(color, toMatch);
//     if(d < distance){
//       matchIndex = index;
//       distance = d;
//     }
//   }
//   if(typeof colors[0] === 'string'){
//     toMatch && colors && (colors as string[]).forEach(findIndex);
//   }
//   else{
//     toMatch && colors && (colors as {color: string}[]).forEach((c, i) => findIndex(c.color, i));
//   }
//   return matchIndex;
// }

// export type ChromaColor = string | Chroma.Color;

// /**
//  * The color difference based on deltaE between two colors
//  * https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_.281984.29
//  */
// export const getColorDelta = (colorA: ChromaColor, colorB: ChromaColor) => {
//   return 0.5 * (Chroma.deltaE(colorA, colorB) + Chroma.deltaE(colorB, colorA));
// }

// /**
//  * Replace the closets color match in an array with the "replacement" color
//  */
// export const replaceColorInArray = (colorArray: ChromaColor[], replacement: ChromaColor): ChromaColor[] => {
//   const _getDistanceArray = (colorList: ChromaColor[], brandColor: ChromaColor): number[] => {
//     let x = []
//     const arrayLength = colorList.length;
//     for (let i = 0; i < arrayLength; i++) {
//       x[i] = getColorDelta(colorList[i], brandColor);
//     }
//     return x;
//   }
//   const _indexOfSmallest = (a: number[]): number => {
//     let lowest = 0;
//     for (let i = 1; i < a.length; i++) {
//      if (a[i] < a[lowest]) lowest = i;
//     }
//     return lowest;
//   }
//   const distanceArray = _getDistanceArray(colorArray, replacement);
//   const index = _indexOfSmallest(distanceArray);
//   const safeColorDistance = 20;
  
//   if (distanceArray[index] <= safeColorDistance) {
//     colorArray[index] = replacement;
//   }
  
//   return colorArray;
// }

// /**
//  * Get the maximum chroma value that is displayable for a given hue and lightness
//  * @param hue - a number between 0 and 360
//  * @param lightness - a number between 0 and 100
//  */
// export const getMaximumChromaHL = (hue: number, lightness: number): number => {
//   const color = {mode: ColorMode.lch, h: hue, c: 0, l: lightness};
//   let c0 = 1;
//   let c1 = 200;
//   for (let i = 1000; i > 0 && c1 - c0 > 0.1; i--) {
//     color.c = (c0 + c1) * 0.5;
//     if (culori.displayable(color)) c0 = color.c;
//     else c1 = color.c;
//   }
//   return color.c;
// }

// export const getMaximumChroma = (color: ChromaColor): number => {
//   // const c = chroma(color);
//   // return getMaximumChromaHL(c.get(ChromaMode.Hue), c.get(ChromaMode.Lightness));

//   // return Chroma(color).set(ChromaMode.Chroma, 200).get(ChromaMode.Chroma); //todo: decide which algorithm to use

//   let cColor;
//   const max = 200;
//   if(typeof color === 'string'){
//     const converter = culori.converter(ColorMode.lch)
//     cColor = converter(color as string);
//     cColor.c = max;
//   }
//   else if((color as Chroma.Color).hcl){
//     const hcl = (color as Chroma.Color).hcl();
//     cColor = {mode: ColorMode.lch65, h: hcl[0], c: max, l: hcl[2]};
//   }
//   return culori.clampChroma(cColor).c || 0;
// }

// export const getMaximumChromaSafe = (color: ChromaColor): number => {
//   // const c = chroma(color);
//   // return getMaximumChromaHL(c.get(ChromaMode.Hue), c.get(ChromaMode.Lightness));

//   // return Chroma(color).set(ChromaMode.Chroma, 200).get(ChromaMode.Chroma); //todo: decide which algorithm to use

//   let cColor;
//   const max = 200;
//   if(typeof color === 'string'){
//     const converter = culori.converter(ColorMode.lch)
//     cColor = converter(color as string);
//     cColor.c = max;
//   }
//   else if((color as Chroma.Color).hcl){
//     const hcl = (color as Chroma.Color).hcl();
//     cColor = {mode: ColorMode.lch65, h: hcl[0], c: max, l: hcl[2]};
//   }
//   return culori.clampChroma(cColor).c || 0;
// }


// export const getMaximumLightness = (color: ChromaColor): number => {
//   return 100; //todo: return a real value
// }

// export const getScaleMaxFixed = (type: ColorChannel, colorMode:ColorModeLCH = ColorMode.oklch): number => {
//   switch (type) {
//     case ColorChannel.Hue: return 360;
//     case ColorChannel.Chroma: {
//       let max = 1;
//       if(colorMode === ColorMode.oklch) max = .322;
//       else if(colorMode === ColorMode.lch) max = 131.207;
//       else if(colorMode === ColorMode.dlch) max = 51.484;
//       else if(colorMode === ColorMode.lchuv) max = 176.956;
//       else if(colorMode === ColorMode.lch65) max = 133.807;
//       return max;
//     }
//     case ColorChannel.Lightness: {
//       let max = 100;
//       if(colorMode === ColorMode.oklch) max = 1;
//       return max;
//     }
//   }
// };

// /**
//  * Returns the hex value of the maximum displayable chroma for a given color
//  * https://observablehq.com/d/eef403e0da66c69b#superSaturate
//  */
// export const superSaturate = (color: ChromaColor): string => {
//   return Chroma(color).set(ColorChannel.Chroma, 200).hex();
// }

// export const getHueArray = (color: ChromaColor, steps: number, fixed = false): string[] => {
//   const colors = [];
//   if(fixed){
//     color = '#35E600'; // use a bright, saturated color (yellow)
//   }
//   const cColor = toCuloriColor(color, ColorMode.oklch);
//   for (let i = 0; i < steps; i++){
//     const step = i/steps;
//     colors.push(toHexColor({
//       ...cColor,
//       h: step * 360,
//     }));
//   }
//   return colors;
// }

// export const getChromaArray = (color: ChromaColor, steps: number, brighten = false): ChromaColor[] => {
//   const colors = [];
//   let cc = Chroma(color);
//   if(brighten){
//     cc = cc.set(ColorChannel.Lightness, 85);
//   }
//   const max = getMaximumChroma(cc);
//   for (let i = 0; i < steps; i++){
//     const step = i/steps;
//     colors.push(cc.set(ColorChannel.Chroma, step * max));
//   }
//   return colors;
// }

// export const getLightnessArray = (color: ChromaColor, steps: number): ChromaColor[] => {
//   const colors = [];
//   const cc = Chroma(color);
//   for (let i = 0; i < steps; i++){
//     const step = i/steps;
//     colors.push(cc.set(ColorChannel.Lightness, step * 130));
//   }
//   return colors;
// }

// export const getHue = (color: ChromaColor, defaultValue = 0): number => getChannelValue(color, ColorChannel.Hue);
// export const getChroma = (color: ChromaColor): number => getChannelValue(color, ColorChannel.Chroma);
// export const getLightness = (color: ChromaColor): number => getChannelValue(color, ColorChannel.Lightness);
// export const getChannelValue = (color: ChromaColor, type: ColorChannel, defaultValue = 0): number => {
//   const value = Chroma(color).get(type);
//   return value >= 0? value : defaultValue;
// };

// export const brighten = (color: string, by = .2): string => {
//   const cColor: CuloriColor = culori.parse(color);
//   const brighten = culori.filterBrightness(1 + by, cColor.mode);
//   return culori.formatHex(brighten(cColor));
// }

// export const darken = (color: string, by = .2): string => {
//   return brighten(color, by * -1);
// }

// /**
//  * See "Interpolation methods" on https://culorijs.org/api/
//  */
// export enum ChannelSpline {
//   Linear = culori.interpolatorLinear,
//   SplineBasis = culori.interpolatorSplineBasis,
//   SplineBasisClosed = culori.interpolatorSplineBasisClosed,
//   SplineNatural = culori.interpolatorSplineNatural,
//   SplineNaturalClosed = culori.interpolatorSplineNaturalClosed,
//   SplineMonotone = culori.interpolatorSplineMonotone,
//   SplineMonotone2 = culori.interpolatorSplineMonotone2,
//   SplineMonotoneClosed = culori.interpolatorSplineMonotoneClosed,
// };

// export type InterpolationOptions = {
//   stepValues?: number[];
//   chromaBoost?: number | NumberRange;
//   hueDrift?: number | NumberRange;
//   lightnessRange?: [number, number];
//   useBezier?: boolean;
//   colorMode?: ColorMode;
//   channelSplines?: {
//     c?: ChannelSpline,
//     h?: ChannelSpline,
//     l?: ChannelSpline,
//     a?: ChannelSpline,
//     b?: ChannelSpline,
//     j?: ChannelSpline,
//     x?: ChannelSpline,
//     y?: ChannelSpline,
//     z?: ChannelSpline
//   };
// }
// type NumberRange = {
//   low: number,
//   mid: number,
//   high: number,
// }
// export const isGray = (color: ChromaColor) => {
//   return getChroma(color) < 0.001;
// }
// const getNumberRange = (obj: number | NumberRange, defaultValue: number): NumberRange => {
//   if(typeof obj === 'number'){
//     return {
//       low: obj,
//       mid: obj,
//       high: obj,
//     };
//   }
//   else {
//     return {
//       low: obj?.low ?? defaultValue,
//       mid: obj?.mid ?? defaultValue,
//       high: obj?.high ?? defaultValue,
//     };
//   }
// }
// export const defaultLightnessRange: [number, number] = [30, 95];
// export const getSequentialColors = (color: ChromaColor, opts: InterpolationOptions = {}): string[] => {
//   const defaultChromaBoost = 0.66;
//   const defaultHueDrift = 0;
//   let {
//     chromaBoost = defaultChromaBoost,
//     hueDrift = defaultHueDrift,
//     lightnessRange = defaultLightnessRange,
//     useBezier = false,
//   } = opts;
//   if(isGray(color)){
//     chromaBoost = 0;
//   }
//   const hue = getHue(color);
//   const boost = getNumberRange(chromaBoost, defaultChromaBoost);
//   const drift = getNumberRange(hueDrift, defaultHueDrift);
//   const luminanceRangeMid = ((lightnessRange[1]-lightnessRange[0])/2)+lightnessRange[0];
//   const colorRamp: ChromaColor[] = [
//     (Chroma as any)({ h: hue+drift.high, c: (getMaximumChromaHL(hue, lightnessRange[1]) * boost.high), l: lightnessRange[1]}),
//     (Chroma as any)({ h: hue+drift.mid, c: (getMaximumChromaHL(hue, luminanceRangeMid) * boost.mid), l: luminanceRangeMid}),
//     (Chroma as any)({ h: hue+drift.low, c: (getMaximumChromaHL(hue, lightnessRange[0]) * boost.low), l: lightnessRange[0]}),
//   ];
//   let scale = (useBezier)
//     ? Chroma.bezier(colorRamp as any).scale()
//     : Chroma.scale(colorRamp);

//   if(opts.stepValues){
//     const info = getStepInfo(opts.stepValues);
//     const allColors: string[] = scale.mode('lab').correctLightness().colors(info.steps);
//     const colors = [];
//     // get only the step values
//     opts.stepValues.forEach(step => {
//       const index = Math.ceil(step / info.delta) - 1;
//       // console.log('step', step, info, index);
//       colors.push(allColors[index]);
//     })
//     return colors;
//   }
//   const numSteps = opts.stepValues.length;
//   return scale.mode('lab').correctLightness().colors(numSteps);
// }
// export const nearestNamedColor = (color) => culori.nearest(color, culori.differenceCiede2000())
// export const generateColors = (colors: (string | CuloriColor)[], opts: InterpolationOptions): string[] => {
//   const {
//     lightnessRange = defaultLightnessRange,
//     colorMode = ColorMode.oklch,
//     stepValues = defaultStepValues,
//   } = opts;

//   if(lightnessRange && colors.length > 2){
//     const last = colors.length - 1;
//     colors[0] = modifyColor(colors[0], {mode: ColorMode.lch, l: lightnessRange[1]});
//     colors[last] = modifyColor(colors[last], {mode: ColorMode.lch, l: lightnessRange[0]});
//   }

//   const colorRamp = culori.interpolate(colors, colorMode, {
//     c: ChannelSpline.SplineMonotone2,
//     h: ChannelSpline.SplineMonotoneClosed,
//   });

//   const info = getStepInfo(stepValues);
//   // const allColors = culori.samples(info.steps).map(colorRamp).map(culori.formatHex);
//   const colorArray = culori.samples(info.steps).map(colorRamp).map(culori.formatHex);
//   const allColors: string[] = Chroma.scale(colorArray).mode('lab').correctLightness().colors(info.steps);
//   const newColors = [];
//   // get only the step values
//   stepValues.forEach(step => {
//     const index = Math.ceil(step / info.delta) - 1;
//     // console.log('step', step, info, index);
//     newColors.push(allColors[index]);
//   })
//   return newColors;
// }

// export const modifyColor = (color: string | CuloriColor, modeParam: CuloriColor): CuloriColor => {
//   if(typeof color === 'string'){
//     const inMode = culori.converter(modeParam.mode);
//     color = inMode(culori.parse(color));
//   }
//   return {
//     ...color as CuloriColor,
//     ...modeParam,
//   };
// }

// export function toCuloriColor<T extends ColorMode>(color: string | CuloriColor | ChromaColor, mode: T): CuloriColor & {mode: T} {
//   if((color as Chroma.Color).hex) color = (color as Chroma.Color).hex();
//   const converter = culori.converter(mode);
//   return converter(color);
// }
// export const modifyHexColor = (color: string, modeParam: CuloriColor): string => {
//   const newColor = modifyColor(color, modeParam);
//   const clampedColor = toHexColor(culori.clampChroma(newColor));
//   return toHexColor(newColor);
// }
// export const toHexColor = (color: CuloriColor): string => {
//   return culori.formatHex(color);
// }
// export const modifyColorByChannel = (color: string, channel: ColorChannel, value: number): string => {
//   return Chroma(color).set(channel, value).hex();
// }
// // culori does not appear to convert the color accurately enough, try again after updating the library
// export const modifyColorByChannel2 = (color: string, channel: ColorChannel, value: number, log?: boolean): string => {
//   const changes = convertChromaModeToCulori(channel, value);
//   const newColorHex = modifyHexColor(color, changes);
//   return newColorHex;
// }

// export const convertChromaModeToCulori = (editType: ColorChannel, value: number): CuloriColor => {
//   const mode = ColorMode.lch;
//   return editType === ColorChannel.Chroma
//     ? {mode, c: value}
//     : (editType === ColorChannel.Hue
//         ? {mode, h: value}
//         : {mode, l: value}
//       );
// }

// /**
//  * Should return a GridColor array of base colors
//  */
//  export const getBaseColors = (colors: GridColor[], size = 3): GridColor[] => {
//   const count = colors.length;
//   const lastIndex = count-1;
//   if(count <= size){
//     return colors;
//   }

//   const baseColors = colors.filter(c => c.base && c.index !== 0 && c.index !== lastIndex);

//   // key colors have to include end colors
//   baseColors.unshift(colors[0]);
//   baseColors.unshift(colors[lastIndex]);

//   // if we need to return more key colors
//   if(baseColors.length < size){
//     const indices = getIndices(colors, size);
//     const remainingBaseColors = baseColors.filter(c => !indices.some(i => c.index === i));
//     const remainingIndices = indices.filter(i => !baseColors.some(c => c.index === i));
//     remainingBaseColors.forEach(c => {
//       let toRemove = remainingIndices[0];
//       let diff = c.index - toRemove;
//       remainingIndices.forEach(i => {
//         const curDiff = c.index - i;
//         if(curDiff < diff){
//           toRemove = i;
//           diff = curDiff;
//         }
//       })

//       const index = remainingIndices.indexOf(toRemove);
//       remainingIndices.splice(index, 1);
//     });

//     remainingIndices.forEach(i => baseColors.push(colors[i]));
//   }

//   return baseColors.sort((a, b) => a.index - b.index);
// }

// const getStepInfo = (values: number[]) => {
//   const sorted = values.sort((a, b) => a - b);
//   const max = sorted[sorted.length - 1];
//   const deltaMin = sorted.reduce((min, cur, index) => {
//     if(index > 0){
//       const delta = cur - sorted[index-1];
//       // console.log('getStepInfo', min, index, cur, sorted[index-1])
//       return delta < min? delta : min;
//     }
//     return min;
//   }, sorted[0]);
//   return {
//     max,
//     delta: deltaMin,
//     steps: Math.ceil(max/deltaMin),
//   };
// }

// export const generateColorArray = (color: ChromaColor, size: number) => {
//   const cc = Chroma(color);
//   const hueArray = [cc.hex()];
//   const startHue = cc.get(ColorChannel.Hue);
//   for (let i = 0; i < size; i++){
//     const step = i/size;
//     hueArray.push(cc.set(ColorChannel.Hue, (startHue + step * 360) % 360).hex());
//   }
//   return getHueArray(color, 9);
// }

// export enum ColorDeficiency {
//   None = "none",
//   Deuteranomaly = "deuteranomaly",
//   Deuteranopia = "deuteranopia",
//   Protanomaly = "protanomaly",
//   Protanopia = "protanopia",
//   Tritanomaly = "tritanomaly",
//   Tritanopia = "tritanopia",
//   Achromatomaly = "achromatomaly",
//   Achromatopsia = "achromatopsia",
// }

// export function applyVisionDeficiency(hexValue: string, deficiency: ColorDeficiency): string;
// export function applyVisionDeficiency(hexValue: string, deficiency: ColorDeficiency, asRGB: false): string;
// export function applyVisionDeficiency(hexValue: string, deficiency: ColorDeficiency, asRGB: true): RGBColor;
// export function applyVisionDeficiency(hexValue: string, deficiency: ColorDeficiency, asRGB?: boolean): string | RGBColor {
//   return deficiency === ColorDeficiency.None? hexValue : colorBlind[deficiency](hexValue, asRGB);
// }

// export enum ColorChannel {
//   Hue = 'hcl.h',
//   Chroma = 'hcl.c',
//   Lightness = 'hcl.l',
// }

// export const getMax = (type: ColorChannel, color: ChromaColor): number => {
//   switch(type){
//     case ColorChannel.Hue: return 359.99;
//     case ColorChannel.Chroma: return getMaximumChroma(color);
//     case ColorChannel.Lightness: return getMaximumLightness(color);
//   }
// }

// export type ColorGroupOptions = {
//   colorName?: string;
//   keyColorCount?: number;
//   keyColors?: KeyColor[];
//   lockColors?: boolean,
//   setKeyColors?: boolean;
// } & InterpolationOptions;
// const defaultStepValues = [50, 100, 200, 300, 400, 500, 600, 700, 800];
// export const makeColorGroupFromSample = (colorSample: string[], opts: ColorGroupOptions = {}): GridColorGroup => {
//   const {
//     stepValues = defaultStepValues,
//     lockColors = false,
//     setKeyColors = true,
//   } = opts;
//   const name = opts.colorName || 'Color';
//   const colorArray: string[] = createArrayFromSample(colorSample, opts);
//   const lockedKeyColor = opts.keyColors?.find(k => k.locked);
//   if(lockedKeyColor){
//     const matchIndex = getClosestColor(colorArray, lockedKeyColor.color);
//     colorArray[matchIndex] = lockedKeyColor.color;
//   }
//   const colors: GridColor[] = colorArray.map((color, i) => (
//     {
//       color: formatHexInput(color),
//       stepValue: stepValues[i],
//       locked: lockColors || lockedKeyColor != null && isColorMatch(color, lockedKeyColor.color),
//       base: false,
//       index: i,
//     }
//   ));

//   const baseColors = getBaseColors(colors, opts.keyColorCount);
//   const keyColors: KeyColor[] = opts.keyColors || baseColors.map(({color, locked}) => ({ color, locked }));
//   if(setKeyColors){
//     keyColors.forEach(k => {
//       const baseMatch = colors.find(c => isColorMatch(c.color, k.color));
//       if(baseMatch){
//         baseMatch.base = true;
//       }
//     });
//   }

//   return {
//     name,
//     colors,
//     keyColors: keyColors.map(k => ({ 
//         ...k, 
//         color: formatHexInput(k.color),
//     })),
//   }
// };

// export const makeColorGroupFromRange = (range: ColorRange, opts: ColorGroupOptions = {}): GridColorGroup => {
//   const {
//     stepValues = defaultStepValues,
//     lockColors = false,
//   } = opts;
//   const colors = range.values.map((color, i) => (
//     {
//       color: formatHexInput(color),
//       stepValue: stepValues[i],
//       locked: lockColors || range.keyColors?.some(k => isColorMatch(k.color, color) && k.locked) === true,
//       base: range.keyColors?.some(c => isColorMatch(c.color, color)) === true,
//       index: i,
//     }
//   ));

//   return {
//     name: range.name,
//     colors,
//     keyColors: range.keyColors,
//   }
// };

// const createArrayFromSample = (colorSample: string[], opts: InterpolationOptions = {}) : string[] => {
//   let {
//     colorMode = ColorMode.oklch,
//     lightnessRange = [30, 95],
//     stepValues = defaultStepValues,
//     channelSplines = {
//       c: ChannelSpline.SplineMonotone2,
//       h: ChannelSpline.SplineMonotoneClosed,
//     },
//   } = opts;
//   const toCulori = (color: string): CuloriColor => {
//     const converter = culori.converter(ColorMode.lch)
//     return converter(color);
//   };

//   const numSteps = stepValues.length;
//   const sample = colorSample.length > numSteps? colorSample.splice(0, numSteps) : colorSample;
//   const colors = sample.map(toCulori);
//   if(colors.length < 2){
//     colors.push(colors[0]);
//   }
//   const last = colors.length - 1;
//   colors[0] = modifyColor(colors[0], {mode: ColorMode.lch, l: lightnessRange[1]});
//   colors[last] = modifyColor(colors[last], {mode: ColorMode.lch, l: lightnessRange[0]});
//   const colorRamp = culori.interpolate(colors, colorMode, channelSplines);

//   const info = getStepInfo(stepValues);
//   const colorArray = culori.samples(info.steps).map(colorRamp).map(culori.formatHex);
//   const allColors: string[] = Chroma.scale(colorArray).mode('lab').correctLightness().colors(info.steps);
//   const newColors = [];
//   // get only the step values
//   stepValues.forEach(step => {
//     const index = Math.ceil(step / info.delta) - 1;
//     // console.log('step', step, info, index);
//     newColors.push(allColors[index]);
//   })
//   return newColors;
// }

// export const applyModeToColorGroup = (group: GridColorGroup, opts?: ColorGroupOptions): GridColorGroup => {
//   const range: ColorRange = {
//     name: group.name,
//     keyColors: group.keyColors ?? getBaseColors(group.colors),
//     values: group.colors.map(c => c.color),
//   }
//   return makeColorGroupFromRange(range, opts);
// };

// export const getGridColorArray = (colors: string[], baseColor?: string, opts: ColorGroupOptions = {}): GridColor[] => {
//   const colorArray: string[] = baseColor
//     ? replaceColorInArray(colors, baseColor) as string[]
//     : colors;

//   return colorArray.map((c, i) => ({
//     color: c,
//     stepValue: opts.stepValues != null? opts.stepValues[i] : (i+1) * 100,
//     locked: false,
//     // locked: opts.lockColor && c === baseColor, //todo: add locked color support
//     base: c === baseColor,
//     index: i,
//   }));
// }


// export const getGridColumnColors = (color: ChromaColor, opts: ColorGroupOptions = {}): string[] => {
//   const {
//     lockColors = false,
//     useBezier = false,
//     stepValues = defaultStepValues,
//   } = opts;
  
//   let colors = getSequentialColors(color, {stepValues, useBezier});
//   if(lockColors){
//     colors = replaceColorInArray(colors, color) as string[];
//   }
//   return colors;
// }

// export const getValue = (color: GridColor, type: ColorChannel): number => {
//   switch(type){
//     case ColorChannel.Hue: return getHue(color.color);
//     case ColorChannel.Chroma: return getChroma(color.color);
//     case ColorChannel.Lightness: return getLightness(color.color);
//   }
// }

// export type GridColorGroup = {
//   name: string;
//   colors: GridColor[];
//   keyColors?: KeyColor[];
// }

// export type GridColor = {
//   color: string;
//   stepValue?: number;
//   locked?: boolean;
//   base?: boolean; // deprecated
//   index: number;
// }

// export type LabelledGridColor = {
//   label?: string;
// } & GridColor;

// export type GridColorWithSelector = {
//   selector: PaletteRangeSelector;
// } & GridColor;

// export const isSingleHueRange = (colors: string[], tolerance = 90) => {
//   let hue = getHue(colors[0]);
//   return !colors.some(c => {
//     const abs = Math.abs(getHue(c) - hue);
//     const difference = Math.min(abs, 360 - abs);
//     return difference > tolerance;
//   });
// };

// export const isGrayRange = (colors: string[], tolerance = .1) => {
//   return !colors.some(c => getChroma(c) > tolerance);
// };

// const getIndices = (array: any[], size = 3) => {
//   const count = array.length;
//   if(count < size) size = count;

//   const indices = [];
//   if(size === 1){
//     if(count > size){
//       indices.push(Math.round((count - 1) / 2));
//     }
//     else{
//       indices.push(0);
//     }
//   }
//   else{
//     const step = (count - 1) / (size - 1);
//     for(let i = 0; i < size; i++) {
//       indices.push(Math.round(step * i));
//     }
//   }

//   return indices;
// }

// export const isColorMatch = (c1, c2) => 
//   c1.replace('#', '').toUpperCase() === c2.replace('#', '').toUpperCase();


console.log('Hello World');