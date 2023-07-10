import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {fonts, colors} from '../../themes';

export default StyleSheet.create({
  h1: {
    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.big,
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1.5),
    marginHorizontal: responsiveWidth(1),
    // color: colors.white,
  },
  h2: {
    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.upsize,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
    // color: colors.white,
  },
  h3: {
    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.medium,
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    // color: colors.white,
  },
  h4: {
    fontFamily: fonts.fontFamily.InterBold,
    fontSize: fonts.sizes.normal,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    // color: colors.white,
  },
  h5: {
    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.small,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    // color: colors.white,
  },
  subText: {
    fontFamily: fonts.fontFamily.InterRegular,
    fontSize: fonts.sizes.small,
    color: colors.midGray,
    marginVertical: responsiveWidth(1),
  },
  rowSubText: {
    fontFamily: fonts.fontFamily.InterRegular,
    fontSize: fonts.sizes.normal - 1,
    color: colors.white,
    marginBottom: responsiveHeight(2.6),
    marginHorizontal: responsiveWidth(3),
  },
});
