// @flow

import TimerActions, {reducer, INITIAL_STATE, _updateReducer} from '../../app/redux/TimerRedux'
import Immutable from 'seamless-immutable'

const currentDate = Date.now()

const originalDate = global.Date

const mockDate = (time = 1000000) => {
  global.Date = class extends Date {
    static now = () => time
  }
}

const unmockDate = () => global.Date = originalDate

test('start timer', () => {
  const newTimer = {start: currentDate, end: currentDate + 100000, left: 100000}
  const expectation = Immutable({...INITIAL_STATE, 'new timer': newTimer})
  const state = reducer(
    Immutable(INITIAL_STATE),
    TimerActions.start('new timer', newTimer.start, newTimer.end)
  )
  expect(state).toEqual(expectation)
})

// TODO: больше тестов. например с отрицательным временем
test('_updateReducer', () => {
  mockDate()
  const timer = {
    start: 100000,
    end: 1100000,
    left: 1000000
  }
  const expectation = {
    timer: {
      ...timer,
      left: 100000
    }
  }
  expect(_updateReducer({}, timer, 'timer')).toEqual(expectation)
  unmockDate()
})

test('update timer', () => {
  mockDate(2500)
  const timer = {start: 1000, end: 3000, left: 2000}
  const expectation = Immutable({
    'update timer': {...timer, left: 500}
  })
  const state = reducer(
    Immutable({'update timer': timer}),
    TimerActions.update()
  )
  expect(state).toEqual(expectation)
  unmockDate()
})
