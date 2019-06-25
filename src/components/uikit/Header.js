import React, { memo } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { WHITE, BLACK } from '#styles/colors'

const Header = memo(({ title = 'My Mars', left = null, right = null }) => {
  const {
    wrapper,
    leftComponent,
    centerComponent,
    titleText,
    rightComponent
  } = styles

  return (
    <SafeAreaView style={wrapper}>
      <View style={leftComponent}>{left}</View>
      <View style={centerComponent}>
        <Text style={titleText}>{title}</Text>
      </View>
      <View style={rightComponent}>{right}</View>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 15,
    backgroundColor: WHITE
  },
  leftComponent: { flex: 1, alignSelf: 'flex-start', paddingLeft: 15 },
  centerComponent: { flex: 1 },
  titleText: {
    textAlign: 'center',
    color: BLACK,
    fontWeight: '500',
    fontSize: 18
  },
  rightComponent: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15,
    justifyContent: 'flex-end'
  }
})

export { Header }
