import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import colors from './Colors'
import { spaces, radius } from './Sizes'

export default {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0.8,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    elevation: 2,
  },
  shadowReverse: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  card: {
    // height: responsiveHeight(78),
    width: responsiveWidth(90),
    padding: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  verticalMiddle: {
    alignItems: 'center',
  },
  buttonFAB: {
    position: 'absolute',
    backgroundColor: colors.white,
    padding: spaces.medium,
    borderRadius: radius.huge,
    bottom: spaces.larger,
    right: spaces.large,
  },
}
