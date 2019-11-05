// @flow

import React, {PureComponent} from 'react'
import {Text, Button} from 'react-native'
import {secondsToTimer} from './Utils'
import {Bar} from '../Progress'

import styles from './styles/Timer'

type Props = {|
  timerKey: string,
  onPressStart: (key: string) => void,
  secondsLeft: number,
  diff: number
|}

class Timer extends PureComponent<Props> {
    handlePressStart = () => {
      const {onPressStart, timerKey} = this.props
      if (onPressStart) {
        onPressStart(timerKey)
      }
    }

    render() {
      const {secondsLeft, diff} = this.props
      return (
        <>
          <Text style={styles.text}>{secondsToTimer(secondsLeft)}</Text>
          <Bar progress={100 * secondsLeft / diff} />
          <Button
            title='START'
            onPress={this.handlePressStart}
          />
        </>
      )
    }
}

export default Timer
