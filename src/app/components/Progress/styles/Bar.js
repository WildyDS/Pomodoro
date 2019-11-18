// @flow

import {StyleSheet} from 'react-native'
import Theme from './../../../themes'

export default StyleSheet.create({
  outerBar: {
    borderWidth: 2,
    backgroundColor: Theme.Colors.main,
    borderColor: Theme.Colors.accent,
    borderRadius: 16,
    width: 200,
    height: 200,
    overflow: 'hidden'
  },
  innerBar: {
    backgroundColor: Theme.Colors.fill,
    height: '100%',
    position: 'absolute',
    alignSelf: 'flex-start'
  }
})
