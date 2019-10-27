// @flow

import React, {PureComponent} from 'react'
import {Text} from 'react-native'

type Props = {
  secondsLeft?: number
}

const secondsToTimer = (seconds?: number) => seconds == null ? 'unknown' : `${seconds}`

class Timer extends PureComponent<Props> {
  render() {
    return (
      <Text>{secondsToTimer(this.props.secondsLeft)}</Text>
    )
  }
}

export default Timer
