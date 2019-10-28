// @flow

import padStart from 'lodash/padStart'

export const hoursFromSeconds = (seconds: number) =>
  padStart(`${parseInt(seconds / (60 * 60), 10)}`, 2, 0)

export const secondsToTimer = (seconds?: number) => {
  if (seconds == null) {
    return 'unknown'
  }
  const date = new Date(seconds * 1000)
  const _hours = hoursFromSeconds(seconds)
  const _minutes = padStart(`${date.getMinutes()}`, 2, 0)
  const _seconds = padStart(`${date.getSeconds()}`, 2, 0)
  return `${_hours}:${_minutes}:${_seconds}`
}
