import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {flex: 2, padding: sizes.spaces.standard},
  genderContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: sizes.spaces.standard,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.lightGray,
  },
});
