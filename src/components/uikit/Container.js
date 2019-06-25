import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Container = memo(({ children = null }) => {
  const { container } = styles
  return <View style={container}>{children}</View>
})

Container.propTypes = {
  children: PropTypes.node
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' }
})

export { Container }
