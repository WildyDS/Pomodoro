import {createActions} from 'reduxsauce'

export const {Types, Creators} = createActions({
  start: ['key', 'start', 'end'],
  setTime: ['start', 'end'],
  update: null
})
