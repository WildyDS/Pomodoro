// @flow

import React, {PureComponent} from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'

import Timer from '../components/Timer'
import {Bar} from '../components/Progress'

import styles from './styles/Root'

import type {ComponentType} from 'react'
import {secondsLeftSelector} from '../redux/TimerRedux'

type ConnectionProps = {
  left: number
}

class App extends PureComponent<ConnectionProps> {
  render() {
    const {left} = this.props
    return <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <Timer secondsLeft={left} />
          <Bar progress={left} />
        </ScrollView>
      </SafeAreaView>
    </>
  }
}

const mapStateToProps = (state) => ({
  left: secondsLeftSelector(state)
})

const ConnectedComponent: ComponentType<*> = connect(mapStateToProps)(App)

export default ConnectedComponent
