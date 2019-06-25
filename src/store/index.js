import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistCombineReducers } from 'redux-persist'
import ReduxThunk from 'redux-thunk'
import createSensitiveStorage from 'redux-persist-sensitive-storage'
import { rootReducer } from '#reducers'
import Reactotron from '#config/reactotron'

const storage = createSensitiveStorage({
  keychainService: 'myKeychain',
  sharedPreferencesName: 'mySharedPrefs'
})

const config = {
  key: 'root',
  storage,
  timeout: null
}

const reducers = persistCombineReducers(config, rootReducer)

export const store = __DEV__
  ? createStore(
      reducers,
      composeWithDevTools(
        applyMiddleware(ReduxThunk),
        Reactotron.createEnhancer()
      )
    )
  : createStore(reducers, applyMiddleware(ReduxThunk))

export const persistor = persistStore(store)
