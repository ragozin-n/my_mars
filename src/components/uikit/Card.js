import React from 'react'
import { ImageBackground, View, Text, Dimensions } from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
import { WHITE } from '#styles/colors'

const Card = ({ image, title, description, date }) => {
  const { height, width } = Dimensions.get('window')

  return (
    <ImageBackground
      source={{ uri: image }}
      style={[
        {
          height: height - 250,
          width: width - 60,
          backgroundColor: 'white',
          borderRadius: 8,
          overflow: 'hidden'
        }
      ]}
      resizeMode="cover"
    >
      <View style={{ paddingLeft: 25, paddingTop: 25 }}>
        <Text
          style={{
            color: WHITE,
            fontWeight: '500',
            fontSize: 28,
            marginBottom: 10
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: WHITE,
            fontWeight: 'normal',
            fontSize: 14,
            marginBottom: 5
          }}
        >
          {description}
        </Text>
        <Text
          style={{
            color: WHITE,
            fontWeight: 'normal',
            fontSize: 14
          }}
        >
          {moment(date).format('MMM DD, YYYY')}
        </Text>
      </View>
    </ImageBackground>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export { Card }
