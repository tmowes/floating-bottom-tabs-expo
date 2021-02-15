import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'
import TabRoutes from './tab.routes'

const { Navigator, Screen } = createStackNavigator()

const DashRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#15161E' },
    }}
  >
    <Screen name="TabRoutes" component={TabRoutes} />
    <Screen name="CoinInfo" component={P.CoinInfo} />
  </Navigator>
)

export default DashRoutes
