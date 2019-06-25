import { createStackNavigator } from 'react-navigation'
import { MAIN_SCREEN, FAVOURITES } from '#config/routes'
import MainScreen from './MainScreen'
import FavouritesScreen from './FavouritesScreen'

export default createStackNavigator(
  {
    [MAIN_SCREEN]: { screen: MainScreen },
    [FAVOURITES]: { screen: FavouritesScreen }
  },
  {
    headerMode: 'none',
    gesturesEnabled: false
  }
)
