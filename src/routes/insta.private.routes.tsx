import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as P from '../pages'
import InstaPrivateTabsRoutes from './insta.private.tabs.routes'

const { Navigator, Screen } = createStackNavigator()

const InstaPrivateRoutes: React.FC = () => {
  const {
    colors: { backgroundColor },
  } = useTheme()

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor },
        }}
      >
        <Screen
          name="InstaPrivateTabsRoutes"
          component={InstaPrivateTabsRoutes}
        />
        <Screen
          name="InstaAdd"
          component={P.InstaAdd}
          options={{ headerShown: true }}
        />
        <Screen
          name="InstaSave"
          component={P.InstaSave}
          options={{ headerShown: true }}
        />
      </Navigator>
    </>
  )
}

export default InstaPrivateRoutes
