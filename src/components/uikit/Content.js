import React, { memo } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const Content = memo(({ children = null }) => {
  return <View>{children}</View>
})

Content.propTypes = {
  children: PropTypes.node
}

export { Content }
