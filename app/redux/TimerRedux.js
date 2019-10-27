// @flow

import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

export const INITIAL_STATE = Immutable({
  time: null
})

const {Types, Creators} = createActions({
  setTime: ['time']
})

const setTime = (state, {time}) => state.merge({time})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TIME]: setTime
})

export const TimerTypes = Types

export default Creators
