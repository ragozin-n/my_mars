import React, { Component } from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Header, Container, Content } from '#components/uikit'
import { BLACK, GRAY } from '#styles/colors'
import { getImage } from '#images'
import { fetchMarsPictures } from '#actions'

class MainScreen extends Component {
  state = { prevCard: null }

  componentDidMount = async () => {
    this.props.fetchMarsPictures()
  }

  render() {
    const { undoTextActive, undoTextInactive, titleText, heartIcon } = styles
    const {
      state: { prevCard }
    } = this

    return (
      <Container>
        <Header
          left={
            <Text style={prevCard === null ? undoTextInactive : undoTextActive}>
              Undo
            </Text>
          }
          title={<Text style={titleText}>My Mars</Text>}
          right={
            <Image
              source={getImage('heart_roman')}
              style={heartIcon}
              resizeMode="contain"
            />
          }
        />
        <Content>
          <Text>MainScreen</Text>
        </Content>
      </Container>
    )
  }
}

MainScreen.propTypes = {
  fetchMarsPictures: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  undoTextActive: {
    color: BLACK,
    fontWeight: '500',
    fontSize: 18
  },
  undoTextInactive: { color: GRAY, fontWeight: '500', fontSize: 18 },
  titleText: {
    textAlign: 'center',
    color: BLACK,
    fontWeight: '500',
    fontSize: 18
  },
  heartIcon: { height: 22.9, width: 20.23 }
})

const mapStateToProps = ({ main }) => ({ main })
const mapDispatchToProps = { fetchMarsPictures }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)
