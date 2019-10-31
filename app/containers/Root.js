// @flow

import React, {PureComponent} from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'

import Timer from '../components/Timer'

import TimerActions from '../redux/TimerRedux'

import styles from './styles/Root'

import type {ComponentType} from 'react'
import {secondsDiffSelector, secondsLeftSelector} from '../redux/TimerRedux'

type ConnectionProps = {
  left: number,
  diff: number
}

type DispatchProps = {
  startTimer: () => void
}

class App extends PureComponent<ConnectionProps & DispatchProps> {
  render() {
    const {left, diff, startTimer} = this.props
    return <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <Timer secondsLeft={left} diff={diff} onPressStart={startTimer} />
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
  startTimer: () => dispatch(TimerActions.start())
}: DispatchProps)

const ConnectedComponent: ComponentType<*> = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedComponent
