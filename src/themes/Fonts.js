import {responsiveFontSize} from 'react-native-responsive-dimensions';

const calcFontSize = ratio => Math.round(responsiveFontSize(ratio));

export const sizes = {
  tiny: calcFontSize(1.4),
  small: calcFontSize(1.6),
  smallUp: calcFontSize(1.8),
  normal: calcFontSize(2),
  medium: calcFontSize(2.5),
  upsize: calcFontSize(3),
  big: calcFontSize(3.5),
  bigger: calcFontSize(4),
  huge: calcFontSize(4.5),
  tab: calcFontSize(1.3),
  button: calcFontSize(1.75),
  badge: calcFontSize(1.3),
  marker: calcFontSize(5),
  navigate: calcFontSize(7),
};

export const fontFamily = {
  InterBlack: 'Inter-Black',
  InterBlackItalic: 'Inter-BlackItalic',
  InterBold: 'Inter-Bold',
  InterBoldItalic: 'Inter-BoldItalic',
  InterExtraBold: 'Inter-ExtraBold',
  InterExtraBoldItalic: 'Inter-ExtraBoldItalic',
  InterItalic: 'Inter-Italic',
  InterMedium: 'Inter-Medium',
  InterMediumItalic: 'Inter-MediumItalic',
  InterRegular: 'Inter-Regular',
  InterSemiBold: 'Inter-SemiBold',
  InterSemiBoldItalic: 'Inter-SemiBoldItalic',
};
