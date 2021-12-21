import immutablePersistenceTransform from './ImmutablePersistenceTransform'
import AsyncStorage from '@react-native-community/async-storage'

import ReduxPersist from './ReduxPersist'

import {persistStore} from 'redux-persist'
import StartupActions from '../StartupRedux'

const ReducerVersions = {
  dev: '1'
}

const logVersionChange = (localVersion: string) => {
  if (__DEV__) {
    // eslint-disable-next-line
    (console as any).tron.display({
      name: 'PURGE',
      value: {
        'Old Version:': localVersion,
        'New Version:': ReduxPersist.reducerVersion
      },
      preview: 'Reducer Version Change Detected',
      important: true
    })
  }
}

const purge = (store: any, startup: any, AsyncStorage: any, localVersion: string) => {
  // Purge store
  logVersionChange(localVersion)
  persistStore(store, null, startup)
    .purge()
    .then(() => AsyncStorage.setItem('reducerVersion', ReduxPersist.reducerVersion))
}

const updateReducers = (store: any) => {
  const startup = () => {
    store.dispatch(StartupActions.startup())
  }
  // Check to ensure latest reducer version
  AsyncStorage
    .getItem('reducerVersion')
    .then((localVersion) => {
      if (localVersion === ReduxPersist.reducerVersion) {
        persistStore(store, null, startup)
      } else {
        purge(store, startup, AsyncStorage, localVersion)
      }
    }).catch(() => {
      persistStore(store, null, startup)
      AsyncStorage.setItem('reducerVersion', ReduxPersist.reducerVersion)
    })
}

const REDUX_PERSIST = {
  active: true,
  reducerVersion: ReducerVersions.dev,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // blacklist: [], // reducer keys that you do NOT want stored to persistence here
    whitelist: [], // Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
    transforms: [immutablePersistenceTransform]
  },
  updateReducers
}

export default REDUX_PERSIST
