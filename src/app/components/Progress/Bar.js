// @flow

import React, {PureComponent} from 'react'
import {View} from 'react-native'

import styles from './styles/Bar'

import type {ViewStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet'

type Props = {
  style?: ViewStyleProp,
  progress: number,
  children?: Array<React$Element<any>>
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
