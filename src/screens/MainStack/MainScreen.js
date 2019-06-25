import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RNShake from 'react-native-shake'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card, Header, Container, Content } from '#components/uikit'
import { CardStack } from '#components'
import { BLACK, GRAY, ROMAN } from '#styles/colors'
import { getImage } from '#images'
import { fetchMarsPictures, rateCard, addToFavourites } from '#actions'
import { photosType } from '#prop-types'
import { PAGING_COUNT } from '#config/constants'
import { FAVOURITES } from '#config/routes'

class MainScreen extends Component {
  state = {
    prevCard: null,
    count: PAGING_COUNT,
    page: 0,
    isLoading: true
  }

  componentDidMount = async () => {
    await this.props.fetchMarsPictures()
    this.setState({ count: this.props.photos.length, isLoading: false })

    RNShake.addEventListener('ShakeEvent', () => {
      this.props.navigation.navigate(FAVOURITES)
    })
  }

  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent')
  }

  handlePaging = () => {
    this.setState(
      prev => ({ page: prev.page + 1, count: PAGING_COUNT, isLoading: true }),
      async () => {
        await this.props.fetchMarsPictures({
          page: this.state.page
        })
        this.setState({ isLoading: false })
        this.swiper.initDeck()
      }
    )
  }

  onLove = ({ item }) => {
    this.props.addToFavourites({ item })
  }

  getCurrentCard = () => {
    let index = 0
    try {
      index = this.swiper.getCurrentCardIndex()
    } catch (err) {
      //
    }
    if (index === null) return null

    return this.props.photos[index]
  }

  render() {
    const {
      undoTextActive,
      undoTextInactive,
      titleText,
      heartIcon,
      rateBtn,
      cardStack
    } = styles
    const {
      state: { prevCard, count, isLoading },
      props: { favourites }
    } = this

    const currentCard = this.getCurrentCard()
    const isCurrentCardFavourited = currentCard
      ? favourites.map(item => item.id).includes(currentCard.id)
      : false

    if (count === 0) this.handlePaging()

    return (
      <Container>
        <Header
          left={
            <TouchableOpacity
              disabled={this.state.prevCard === null || isLoading}
              onPress={() => {
                this.setState(
                  prev => {
                    return {
                      count: prev.count + 1,
                      prevCard: null,
                      isLikedBefore: prev.prevCard.isLiked
                    }
                  },
                  () => {
                    this.swiper.goBackFromBottom()
                  }
                )
              }}
            >
              <Text
                style={
                  prevCard === null || isLoading
                    ? undoTextInactive
                    : undoTextActive
                }
              >
                Undo
              </Text>
            </TouchableOpacity>
          }
          title={<Text style={titleText}>My Mars</Text>}
          right={
            <TouchableOpacity
              disabled={isCurrentCardFavourited || isLoading}
              onPress={() => {
                const _currentCard = this.getCurrentCard()
                this.props.addToFavourites({ item: _currentCard })
              }}
            >
              <Image
                source={getImage(
                  !isCurrentCardFavourited || isLoading
                    ? 'heart_roman'
                    : 'heart_roman_clicked'
                )}
                style={heartIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          }
        />
        <Content>
          {!isLoading ? (
            <CardStack
              style={cardStack}
              ref={swiper => {
                this.swiper = swiper
              }}
              verticalSwipe={false}
              outputRotationRange={['0deg', '0deg', '0deg']}
            >
              {this.props.photos.map(element => (
                <Card
                  key={element.id}
                  onSwipedLeft={() => {}}
                  onSwipedRight={() => {}}
                  onRate={() => {
                    this.setState({
                      prevCard: element
                    })
                  }}
                  image={element.img_src}
                  title={element.rover.name}
                  description={element.camera.full_name}
                  date={element.earth_date}
                />
              ))}
            </CardStack>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '60%'
              }}
            >
              <ActivityIndicator color={ROMAN} size="large" />
            </View>
          )}
        </Content>
        {!isLoading ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'flex-end',
              marginBottom: 25
            }}
          >
            <TouchableOpacity
              style={[
                rateBtn,
                {
                  backgroundColor: BLACK
                }
              ]}
              onPress={() => {
                this.setState(prev => ({ count: prev.count - 1 }))
                this.swiper.swipeLeft()
              }}
            >
              <Image source={getImage('dislike')} />
            </TouchableOpacity>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 14,
                color: GRAY,
                width: 100,
                textAlign: 'center'
              }}
            >
              {isLoading ? 'Downloading' : `${this.state.count} cards`}
            </Text>
            <TouchableOpacity
              style={[
                rateBtn,
                {
                  backgroundColor: '#EB5757'
                }
              ]}
              onPress={() => {
                this.setState(prev => ({ count: prev.count - 1 }))
                this.swiper.swipeRight()
              }}
            >
              <Image source={getImage('like')} />
            </TouchableOpacity>
          </View>
        ) : null}
      </Container>
    )
  }
}

MainScreen.propTypes = {
  fetchMarsPictures: PropTypes.func.isRequired,
  photos: photosType.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  addToFavourites: PropTypes.func.isRequired,
  favourites: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired
}

const styles = StyleSheet.create({
  cardStack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  rateBtn: {
    height: 56,
    width: 56,
    borderRadius: 56 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
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

const mapStateToProps = ({
  main: { photos },
  favourites: { photos: favourites }
}) => ({
  photos,
  favourites
})

const mapDispatchToProps = { fetchMarsPictures, rateCard, addToFavourites }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)
