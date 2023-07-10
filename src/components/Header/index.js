import React from 'react';
import {
  View,
  Text,
  I18nManager, // ToastAndroid, BackHandler,
} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import {useBackButton} from '../CustomHooks';

import styles from './styles';
import {fonts, colors} from '../../themes';

function Header(props) {
  const {type, title, rightIcon, style} = props;

  useBackButton(() => {
    if (type === 'back') {
      props.onPress();
    }
  }, true);

  let icon = null;
  switch (type) {
    case 'menu':
      icon = <MaterialCommunityIcons name="menu" size={fonts.sizes.medium} />;
      break;
    case 'back':
      icon = (
        <Ionicons
          name={
            I18nManager.isRTL ? 'md-arrow-round-forward' : 'md-arrow-round-back'
          }
          size={fonts.sizes.big}
          color={colors.niceBlack}
        />
      );
      break;
    case 'none':
    default:
  }

  return (
    <View style={[styles.headerContainer, style]}>
      <View style={styles.headerIcon} onPress={props.onPress}>
        {icon}
        <Text style={styles.headerIconLabel}>{title}</Text>
      </View>

      <View style={[styles.headerIcon, styles.headerRightIcon]}>
        {rightIcon && rightIcon(styles)}
      </View>
    </View>
  );
}

Header.defaultProps = {
  type: 'none',
  title: '',
  rightIcon: null,
  style: null,
  onPress: () => null,
};

export default Header;
