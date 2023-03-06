import {Dimensions, Platform} from 'react-native';

const FIGMA_WIDTH = 390;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const isOnIos = Platform.OS === 'ios';
export const isTablet = width >= 600;

export let smallScreen: boolean = false;
if (isOnIos && height >= 660 && height <= 740) {
  smallScreen = true;
} else {
  smallScreen = false;
}

export const scaleFontSize = (fontSize: number): number => {
  const ratio = fontSize / FIGMA_WIDTH;
  const newSize = Math.round(ratio * width);
  return newSize;
};
