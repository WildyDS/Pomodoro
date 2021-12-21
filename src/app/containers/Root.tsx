import React, {PureComponent} from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'

import Timer from '../components/Timer'
import {
  Actions as TimerActions, secondsDiffSelector, secondsLeftSelector, statusSelector
} from '../redux/Timer'

import map from 'lodash/map'

import styles from './styles/Root'

import type {ComponentType} from 'react'
import type {PredefinedTimer} from '../redux/Timer/Types'

type ConnectionProps = {
  [key: string]: {
    left: number,
    diff: number,
    status: string,
  },
} & { predefinedTimers: Array<PredefinedTimer> }

type DispatchProps = {
  startTimer: (key: string, start: number, end: number) => void
}

class App extends PureComponent<ConnectionProps & DispatchProps> {
  handlePressStart = (key: string) => {
    const now = Date.now()
    this.props.startTimer(key, now, now + this.props[key].time)
  }

  renderTimer = (predefinedTimer: PredefinedTimer) => <Timer
    style={styles.timer}
    key={predefinedTimer.key}
    name={predefinedTimer.name}
    timerKey={predefinedTimer.key}
    secondsLeft={this.props[predefinedTimer.key].left}
    diff={this.props[predefinedTimer.key].diff}
    onPressStart={this.handlePressStart}
    status={predefinedTimer.status}
  />

  render() {
    return <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          {map(this.props.predefinedTimers, this.renderTimer)}
        </ScrollView>
      </SafeAreaView>
    </>
  }
}

const mapStateToProps = (state) => {
  const {timer: {predefinedTimers}} = state
  const result = {
    predefinedTimers
  }
  for (const predefinedTimer of predefinedTimers) {
    result[predefinedTimer.key] = {
      status: statusSelector(state, predefinedTimer.key),
      left: secondsLeftSelector(state, predefinedTimer.key),
      diff: secondsDiffSelector(state, predefinedTimer.key),
      time: predefinedTimer.time
    }
  }
  return result
}

const mapDispatchToProps = (dispatch: any) => ({
  startTimer: (key: string, start: number, end: number) => dispatch(TimerActions.start(key, start, end))
})

const ConnectedComponent: ComponentType<any> = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedComponent
