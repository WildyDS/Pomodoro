// @flow

import React, {PureComponent} from 'react'
import {SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'

import Timer from '../components/Timer'

import styles from './styles/Root'

import type {ComponentType} from 'react'

type ConnectionProps = {
    time: number
}

class App extends PureComponent<ConnectionProps> {
  render() {
    return <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <Timer secondsLeft={this.props.time} />
        </ScrollView>
      </SafeAreaView>
    </>
  }
}

const mapStateToProps = (state) => ({
  time: state.timer.time
})

const ConnectedComponent: ComponentType<*> = connect(mapStateToProps)(App)

export default ConnectedComponent
