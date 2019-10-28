// @flow

import React, {PureComponent} from 'react'
import {View} from 'react-native'

import styles from './styles/Bar'

type Props = {
  progress: number
}

class Bar extends PureComponent<Props> {
  render() {
    const {progress} = this.props
    return <View style={styles.outerBar}>
      <View style={[styles.innerBar, {width: `${progress}%`}]} />
    </View>
  }
}

export default Bar
