import {TextStyle} from 'react-native';

const size = {
  xs: 10,
  s: 12,
  default: 13,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  //definindo o tipo dos campos do objeto weight
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export default {size, weight};
