// @flow

import {StyleSheet} from 'react-native'
import Theme from '../../../themes'
import {white} from '../../../themes/Colors'

export default StyleSheet.create({
  container: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...Theme.Fonts.big,
    color: white
  }
})
