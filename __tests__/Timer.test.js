// @flow

import 'react-native'
import React from 'react'
import Timer from '../app/components/Timer'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

// TODO: snapshot
it('Timer renders correctly', () => {
  renderer.create(<Timer />)
})
