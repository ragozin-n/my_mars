import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import RNShake from 'react-native-shake'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Header } from '#components/uikit'
import { MAIN_SCREEN } from '#config/routes'
import { photosType } from '#prop-types'

class FavouritesScreen extends Component {
  componentDidMount() {
    RNShake.addEventListener('ShakeEvent', () => {
      this.props.navigation.navigate(MAIN_SCREEN)
    })
  }

  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent')
  }

  render() {
    const { photos } = this.props
    return (
      <Container>
        <Header title={<Text>Shake to leave</Text>} />
        <FlatList
          data={photos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Text>{item.id}</Text>}
        />
      </Container>
    )
  }
}

FavouritesScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  photos: photosType.isRequired
}

const mapStateToProps = ({ favourites: { photos } }) => ({ photos })

export default connect(
  mapStateToProps,
  {}
)(FavouritesScreen)
