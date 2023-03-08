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

export const validateEmail = (email: string) => {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validatePw = (pw: string) => {
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
  return re.test(pw);
};
