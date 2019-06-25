import React, { Component } from 'react'
import { View, Text } from 'react-native'

class MainScreen extends Component {
  state = { a: 'test' }

  render() {
    return (
      <View>
        <Text>MainScreen</Text>
        <Text>{this.state.a}</Text>
      </View>
    )
  }
}

export default MainScreen
