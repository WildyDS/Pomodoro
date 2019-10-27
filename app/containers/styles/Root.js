// @flow

import {StyleSheet} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

export default StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.dark
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
