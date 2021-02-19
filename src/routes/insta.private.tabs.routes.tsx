import { Feather } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as P from '../pages'

const { Navigator, Screen } = createMaterialBottomTabNavigator()

const InstaPrivateTabsRoutes: React.FC = () => {
  const {
    colors: { backgroundColor, orange },
  } = useTheme()

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Navigator
        labeled={false}
        activeColor={orange}
        barStyle={{ backgroundColor }}
        initialRouteName="InstaHomeFeed"
      >
        <Screen
          name="InstaHomeFeed"
          component={P.InstaHomeFeed}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={26} />
            ),
          }}
        />
        <Screen
          name="InstaEmpty"
          component={P.InstaEmpty}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault()
              navigation.navigate('InstaAdd')
            },
          })}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="plus-square" color={color} size={26} />
            ),
          }}
        />
        <Screen
          name="InstaProfile"
          component={P.InstaProfile}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" color={color} size={26} />
            ),
          }}
        />
      </Navigator>
    </>
  )
}

export default InstaPrivateTabsRoutes
