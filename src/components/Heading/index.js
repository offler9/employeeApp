import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

function Heading(props) {
  const {
    type, text, style, textStyle, subText, rowSubText, numberOfLinesText,
  } = props

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          ...style,
        }}
      >
        <Text numberOfLines={numberOfLinesText || 1} style={[styles[type], textStyle]}>
          {text}
        </Text>

        {rowSubText && (
          <Text numberOfLines={1} style={[styles.rowSubText]}>
            {rowSubText}
          </Text>
        )}
      </View>

      {subText && <Text style={styles.subText}>{subText}</Text>}
    </View>
  )
}

Heading.defaultProps = {
  type: 'h1',
  text: '',
}

export default Heading
