// @flow

import React, {PureComponent} from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'

import Timer from '../components/Timer'

import TimerActions, {POMODORO_KEY} from '../redux/TimerRedux'

import styles from './styles/Root'

import type {ComponentType} from 'react'
import {secondsDiffSelector, secondsLeftSelector} from '../redux/TimerRedux'

type ConnectionProps = {
  left: number,
  diff: number
}

type DispatchProps = {
  startTimer: (start: number, end: number) => void
}

class App extends PureComponent<ConnectionProps & DispatchProps> {
  handlePressStart = () => {
    const now = Date.now()
    this.props.startTimer(now, now + 1000 * 60 * 25)
  }

  render() {
    const {left, diff} = this.props
    return <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <Timer secondsLeft={left} diff={diff} onPressStart={this.handlePressStart} />
        </ScrollView>
      </SafeAreaView>
    </>
  }
}

const mapStateToProps = (state) => ({
  left: secondsLeftSelector(state),
  diff: secondsDiffSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  startTimer: (start: number, end: number) => dispatch(TimerActions.start(POMODORO_KEY, start, end))
}: DispatchProps)

const ConnectedComponent: ComponentType<*> = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedComponent
