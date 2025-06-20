import { Stack } from 'expo-router'
import React from 'react'

const TabsLayout = () => {

  // const { loggedIn } = useAuth();

  // useEffect(() => {
  //   if (!loggedIn) {
  //     return router.replace("/Login")
  //   }
  // }, [])

  return (
    <Stack>
      <Stack.Screen name='Home' options={{ headerShown: false }} />
      <Stack.Screen name='AddImageScreen' options={{ headerShown: false }} />
      <Stack.Screen name='VisualizedData' options={{ headerShown: false }} />
    </Stack>
  )
}

export default TabsLayout
