// @flow

import React, {PureComponent} from 'react'
import {Text} from 'react-native'
import {secondsToTimer} from './Utils'

type Props = {
  secondsLeft?: number
}

class Timer extends PureComponent<Props> {
  render() {
    return (
      <Text>{secondsToTimer(this.props.secondsLeft)}</Text>
    )
  }
}

export default Timer
