import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: sizes.spaces.medium,
    flex: 2,
  },
  addButton: {
    borderWidth: 1,
    borderColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 15,
    height: 70,
    borderRadius: 100,
  },
});
