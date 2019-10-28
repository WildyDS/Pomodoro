// @flow

import React, {PureComponent} from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'

import Timer from '../components/Timer'
import {Bar} from '../components/Progress'

import styles from './styles/Root'

import type {ComponentType} from 'react'
import {secondsDiffSelector, secondsLeftSelector} from '../redux/TimerRedux'

type ConnectionProps = {
  left: number,
  diff: number
}

class App extends PureComponent<ConnectionProps> {
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
          <Timer secondsLeft={left} />
          <Bar progress={100 * left / diff} />
        </ScrollView>
      </SafeAreaView>
    </>
  }
}

const mapStateToProps = (state) => ({
  left: secondsLeftSelector(state),
  diff: secondsDiffSelector(state)
})

const ConnectedComponent: ComponentType<*> = connect(mapStateToProps)(App)

export default ConnectedComponent
