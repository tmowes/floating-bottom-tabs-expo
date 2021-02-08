import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import React from 'react'
import { useTheme } from 'styled-components/native'
import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

const ChatRoutes: React.FC = () => {
  const { colors } = useTheme()
  const screenOptions: StackNavigationOptions = {
    cardStyle: { backgroundColor: colors.backgroundColor },
    headerStyle: { backgroundColor: colors.signal },
    headerTitleStyle: { color: colors.foodWhiteLighter },
    headerTintColor: colors.foodWhiteLighter,
    headerTitleAlign: 'center',
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Login" component={P.Login} />
      <Screen name="Register" component={P.Register} />
      <Screen name="Chat" component={P.Chat} options={{ title: 'Signal' }} />
    </Navigator>
  )
}

export default ChatRoutes
