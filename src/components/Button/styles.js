import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {fonts, colors} from '../../themes';

export default StyleSheet.create({
  btnDefault: {
    backgroundColor: colors.green,
    height: responsiveWidth(13),
    borderRadius: responsiveWidth(1),
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  btnMini: {
    backgroundColor: colors.rushYellow,
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(2),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  btnText: {
    fontFamily: fonts.fontFamily.InterBold,
    fontSize: fonts.sizes.normal,
    color: colors.black,
    fontWeight: '600',
  },
  btnTextMini: {
    fontSize: fonts.sizes.tiny,
  },
  btnRound: {
    borderRadius: responsiveWidth(6),
  },
  btnSecondary: {
    backgroundColor: colors.transparent,
    shadowColor: colors.transparent,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  btnTextSecondary: {
    fontSize: fonts.sizes.tabber,
    textDecorationLine: 'underline',
  },
  btnDefaultDisabled: {
    backgroundColor: colors.disabled,
  },
  btnModeOutlined: {
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.white,
  },
  btnModeText: {
    borderWidth: 0,
    shadowColor: colors.transparent,
    backgroundColor: colors.transparent,
  },
  btnAuthWidth: {
    height: responsiveHeight(5),
    width: 'auto',
    paddingHorizontal: responsiveWidth(3),
    alignSelf: 'flex-end',
    margin: 0,
    right: 0,
  },
  wrapperTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
