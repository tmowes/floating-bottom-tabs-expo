import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import styled, { css, ThemeProvider } from 'styled-components/native'
import AppProvider from './hooks/AppProvider'
import Routes from './routes'
import * as C from './components'
import * as themes from './styles/themes'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.backgroundColor};
  `}
`

const AppSrc: React.FC = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={themes.dark}>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <AppWrapper>
            <Routes />
          </AppWrapper>
          <C.LoadingOverlay />
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  )
}

export default AppSrc
