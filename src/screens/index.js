import { createStackNavigator, createAppContainer } from 'react-navigation'
import { MAIN_STACK } from '#config/routes'
import MainStack from './MainStack'

const AppNavigator = createStackNavigator(
  {
    [MAIN_STACK]: { screen: MainStack }
  },
  {
    initialRouteName: MAIN_STACK,
    backBehavior: 'initialRoute',
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)
