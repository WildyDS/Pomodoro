// @flow

import React, {PureComponent} from 'react'
import {Text} from 'react-native'
import {secondsToTimer} from './Utils'
import {Bar} from '../Progress'
import {Button} from '../Button'

import styles from './styles/Timer'

import type {ViewStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet'

type Props = {|
  timerKey: string,
  onPressStart: (key: string) => void,
  secondsLeft: number,
  diff: number,
  style?: ViewStyleProp,
  name?: string
|}

class Timer extends PureComponent<Props> {
    handlePressStart = () => {
      const {onPressStart, timerKey} = this.props
      if (onPressStart) {
        onPressStart(timerKey)
      }
    }

    render() {
      const {secondsLeft, diff, style, name} = this.props
      return (
        <Bar style={[styles.progressBar, style]} progress={100 * secondsLeft / diff}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.timer}>{secondsToTimer(secondsLeft)}</Text>
          <Button
            style={styles.startButton}
            title='START'
            onPress={this.handlePressStart}
          />
        </Bar>
      )
    }
}

export default Timer
