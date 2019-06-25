import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StatusBar, StyleSheet, View } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import Reactotron from 'reactotron-react-native'
import { store, persistor } from '#store'
import Router from '#screens'

if (__DEV__) {
  import('#config/reactotron')
  console.log = Reactotron.logImportant // eslint-disable-line
}

export default class App extends Component {
  componentDidMount = () => {
    if (__DEV__) {
      Reactotron.clear()
    }
  }

  render() {
    const { router } = styles

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={router}>
            <Router uriPrefix="my_mars://" />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  router: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  }
})
