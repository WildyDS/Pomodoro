// @flow

import {StyleSheet} from 'react-native'
import Theme from './../../themes'

export default StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: Theme.Colors.background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    height: 88,
    margin: 8
  }
})
