// @flow

import React, {PureComponent} from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'

import Timer from '../components/Timer'
import TimerActions, {secondsDiffSelector, secondsLeftSelector} from '../redux/TimerRedux'

import map from 'lodash/map'

import styles from './styles/Root'

import type {ComponentType} from 'react'
import type {PredefinedTimer} from '../redux/TimerRedux'

type ConnectionProps = {
  [string]: {
    left: number,
    diff: number
  },
  predefinedTimers: Array<PredefinedTimer>
}

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
  // Баг еслинта
  // eslint-disable-next-line no-unused-vars
  for (const predefinedTimer of predefinedTimers) {
    result[predefinedTimer.key] = {
      left: secondsLeftSelector(state, predefinedTimer.key),
      diff: secondsDiffSelector(state, predefinedTimer.key),
      time: predefinedTimer.time
    }
  }
  return result
}

const mapDispatchToProps = (dispatch) => ({
  startTimer: (key: string, start: number, end: number) => dispatch(TimerActions.start(key, start, end))
}: DispatchProps)

const ConnectedComponent: ComponentType<*> = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedComponent
