import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

const InstaPublicRoutes: React.FC = () => {
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
        <Screen name="InstaLanding" component={P.InstaLanding} />
        <Screen name="InstaLogin" component={P.InstaLogin} />
        <Screen name="InstaRegister" component={P.InstaRegister} />
      </Navigator>
    </>
  )
}

export default InstaPublicRoutes
