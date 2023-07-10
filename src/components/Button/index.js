import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator, View} from 'react-native';
import styles from './styles';

function Button(props) {
  return (
    <TouchableOpacity
      style={[
        styles.btnDefault,
        (props.loading || props.disabled) && styles.btnDefaultDisabled,
        props.mode === 'outlined' && styles.btnModeOutlined,
        props.mode === 'text' && styles.btnModeText,
        props.round && styles.btnRound,
        props.secondary && styles.btnSecondary,
        {width: props.width, padding: props.padding},
        props.autoWidth && styles.btnAuthWidth,
        props.style,
      ]}
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.loading && <ActivityIndicator color="white" size="large" />}

      {!props.loading && (
        <View style={styles.wrapperTitle}>
          {props.icon}
          <Text
            numberOfLines={1}
            style={[
              styles.btnText,
              props.secondary && styles.btnTextSecondary,
              props.mini && styles.btnTextMini,
              {marginHorizontal: props.paddingH},
              props.textStyle,
            ]}>
            {props.title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  width: '100%',
  onPress: () => null,
  // onPressIn: () => null,
  // onPressOut: () => null,
};

export default Button;
