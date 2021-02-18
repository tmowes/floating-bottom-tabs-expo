import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import styled, { css, useTheme } from 'styled-components/native'
import { auth } from '../secrets'
import InstaPrivateRoutes from './insta.private.routes'
import InstaPublicRoutes from './insta.public.routes'
// import DashRoutes from './dash.routes'
// import AppRoutes from './app.routes'
// import TabRoutes from './tab.routes'
// import ChatRoutes from './chat.routes'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
  `}
`

const Routes: React.FC = () => {
  const { colors } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        setIsLoggedIn(false)
        setIsLoading(false)
      } else {
        setIsLoggedIn(true)
        setIsLoading(false)
      }
    })
  }, [])

  if (isLoading) {
    return (
      <AppWrapper>
        <ActivityIndicator size={64} color={colors.orange} />
      </AppWrapper>
    )
  }

  // return <AppRoutes />
  // return <TabRoutes />
  // return <DashRoutes />
  // return <ChatRoutes />
  if (isLoggedIn) {
    return <InstaPrivateRoutes />
  }
  return <InstaPublicRoutes />
}

export default Routes
