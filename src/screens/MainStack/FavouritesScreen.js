import React, { Component } from 'react'
import { View, Text } from 'react-native'

class FavouritesScreen extends Component {
  state = { a: 'test' }

  render() {
    return (
      <View>
        <Text>FavouritesScreen</Text>
        <Text>{this.state.a}</Text>
      </View>
    )
  }
}

export default FavouritesScreen
