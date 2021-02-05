import React from 'react'

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
  TabButtonLayout,
  IAppearenceOptions,
} from 'react-native-animated-nav-tab-bar'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import * as P from '../pages'

const { Navigator, Screen } = AnimatedTabBarNavigator()

const TabRoutes = () => {
  const { colors } = useTheme()
  const tabBarOptions = {
    activeTintColor: colors.foodWhiteIsh,
    inactiveTintColor: colors.grayHard,
  }
  const appearenceOptions: Partial<IAppearenceOptions> = {
    floating: true,
    dotSize: DotSize.SMALL,
    dotCornerRadius: 16,
    activeTabBackgrounds: colors.orange,
    activeColors: colors.foodWhiteIsh,
    whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
    tabBarBackground: colors.transparent,
    shadow: true,
    whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
    tabButtonLayout: TabButtonLayout.VERTICAL,
  }
  return (
    <Navigator appearence={appearenceOptions} tabBarOptions={tabBarOptions}>
      <Screen
        name="Home"
        component={P.Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Reanimated 2"
        component={P.ReanimatedTwoExample}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="image" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Reanimated 3"
        component={P.ReanimatedTwoExample}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="compass" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Reanimated 4"
        component={P.ReanimatedTwoExample}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={20} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
export default TabRoutes
