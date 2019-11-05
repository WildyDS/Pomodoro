// @flow

import React, {PureComponent} from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'

import Timer from '../components/Timer'

import TimerActions, {SHORT_BREAK_KEY, POMODORO_KEY} from '../redux/TimerRedux'

import styles from './styles/Root'

import type {ComponentType} from 'react'
import {secondsDiffSelector, secondsLeftSelector} from '../redux/TimerRedux'

type ConnectionProps = {
  [string]: {
    left: number,
    diff: number
  }
}

type DispatchProps = {
  startTimer: (key: string, start: number, end: number) => void
}

class App extends PureComponent<ConnectionProps & DispatchProps> {
  handlePressStart = (key: string) => {
    const now = Date.now()
    this.props.startTimer(key, now, now + this.props[key].time)
  }

  render() {
    return <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <Timer
            timerKey={POMODORO_KEY}
            secondsLeft={this.props[POMODORO_KEY].left}
            diff={this.props[POMODORO_KEY].diff}
            onPressStart={this.handlePressStart}
          />
          <Timer
            timerKey={SHORT_BREAK_KEY}
            secondsLeft={this.props[SHORT_BREAK_KEY].left}
            diff={this.props[SHORT_BREAK_KEY].diff}
            onPressStart={this.handlePressStart}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  }
}

const mapStateToProps = (state) => ({
  [POMODORO_KEY]: {
    left: secondsLeftSelector(state, POMODORO_KEY),
    diff: secondsDiffSelector(state, POMODORO_KEY),
    time: 25 * 60 * 1000
  },
  [SHORT_BREAK_KEY]: {
    left: secondsLeftSelector(state, SHORT_BREAK_KEY),
    diff: secondsDiffSelector(state, SHORT_BREAK_KEY),
    time: 5 * 60 * 1000
  }
})

const mapDispatchToProps = (dispatch) => ({
  startTimer: (key: string, start: number, end: number) => dispatch(TimerActions.start(key, start, end))
}: DispatchProps)

const ConnectedComponent: ComponentType<*> = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedComponent
