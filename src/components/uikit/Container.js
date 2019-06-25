import React, { memo } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const Container = memo(({ children = null }) => {
  return <View>{children}</View>
})

Container.propTypes = {
  children: PropTypes.node
}

export { Container }
