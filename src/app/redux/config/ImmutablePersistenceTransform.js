// @flow

import Immutable from 'seamless-immutable'

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = (obj) => {
  if (obj.asMutable) {
    return obj.asMutable({deep: true})
  } else {
    return obj
  }
}

// convert this JS object into an Immutable object
const toImmutable = (raw: Object) => Immutable(raw)

// the transform interface that redux-persist is expecting
export default {
  out: (state: Object) => toImmutable(state),
  in: (raw: Object) => fromImmutable(raw)

}
