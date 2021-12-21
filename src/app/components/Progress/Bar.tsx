import React, {PureComponent, ReactElement} from 'react'
import {StyleProp, View, ViewStyle} from 'react-native'

import styles from './styles/Bar'

type Props = {
  style?: StyleProp<ViewStyle>,
  progress: number,
  children?: Array<ReactElement>
}

class Bar extends PureComponent<Props> {
  render() {
    const {progress, style, children} = this.props
    return <View style={[styles.outerBar, style]}>
      <View style={[styles.innerBar, {width: `${progress}%`}]} />
      {children}
    </View>
  }
}

export default Bar
