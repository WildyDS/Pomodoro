import React, {PureComponent, ReactElement} from 'react'
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native'
import styles from './styles/Button'

type Props = {
  children?: Array<ReactElement>,
  title?: string,
  onPress?: (value: any) => void,
  value?: any,
  textStyle?: TextStyle,
  style?: ViewStyle
}

const hitSlop = {top: 6, bottom: 6, left:  6, right: 6}

export default class Button extends PureComponent<Props> {
  handlePress = () => {
    const {onPress, value} = this.props
    if (onPress) {
      onPress(value)
    }
  }

  render() {
    const {children, title, style, textStyle} = this.props
    return <TouchableOpacity style={[styles.container, style]} hitSlop={hitSlop} onPress={this.handlePress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {children}
    </TouchableOpacity>
  }
}
