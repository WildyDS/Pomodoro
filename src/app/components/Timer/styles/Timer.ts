// @flow

import {StyleSheet} from 'react-native'
import Theme from './../../../themes'
import {white, whiteYellow} from '../../../themes/Colors'

export default StyleSheet.create({
  name: {
    ...Theme.Fonts.normal,
    color: white
  },
  timer: {
    ...Theme.Fonts.normal,
    fontSize: 24,
    color: whiteYellow
  },
  progressBar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  startButton: {
  }
})
