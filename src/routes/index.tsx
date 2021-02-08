import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
// import AppRoutes from './app.routes'
// import TabRoutes from './tab.routes'
import ChatRoutes from './chat.routes'

const Routes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  }

  // return <AppRoutes />
  // return <TabRoutes />
  return <ChatRoutes />
}

export default Routes
