import React, { memo } from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { WHITE } from '#styles/colors'

const Header = memo(({ title = null, left = null, right = null }) => {
  const { wrapper, leftComponent, centerComponent, rightComponent } = styles

  return (
    <SafeAreaView style={wrapper}>
      <View style={leftComponent}>{left}</View>
      <View style={centerComponent}>{title}</View>
      <View style={rightComponent}>{right}</View>
    </SafeAreaView>
  )
})

Header.propTypes = {
  title: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 15,
    backgroundColor: WHITE
  },
  leftComponent: { flex: 1, alignSelf: 'flex-start', paddingLeft: 15 },
  centerComponent: { flex: 1 },

  rightComponent: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15,
    justifyContent: 'flex-end'
  }
})

export { Header }
