import { StyleSheet, Platform } from 'react-native'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { fonts, colors } from '../../themes'

export default StyleSheet.create({
  headerContainer: {
    width: responsiveWidth(100),
    height: Platform.OS === 'ios' ? responsiveHeight(7) : responsiveHeight(6),
    backgroundColor: colors.rushYellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 0.3,
    // borderColor: colors.lightGray,
    zIndex: 99,
  },
  infoHeaderMini: {
    width: responsiveWidth(10),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
    backgroundColor: colors.transparent,
    borderBottomWidth: 0,
  },
  headerIcon: {
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(3.3),
    alignContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  headerIconLabel: {
    fontFamily: fonts.fontFamily.InterSemiBold,
    fontSize: fonts.sizes.medium,
    marginHorizontal: responsiveWidth(2),
    marginBottom: responsiveHeight(0.26),
    color: colors.white,
  },
  headerRightIcon: {
    right: 0,
  },
  headerMiniIcon: {
    padding: responsiveWidth(1),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  headerTitle: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    fontWeight: 'bold',
    letterSpacing: 1,

    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.medium,
    color: colors.niceBlack,
  },
})
