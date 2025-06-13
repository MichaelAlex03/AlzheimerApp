import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, router, Stack } from 'expo-router'
import useAuth from '@/hooks/useAuth'

const TabsLayout = () => {

  const { loggedIn } = useAuth();

  useEffect(() => {
    if(!loggedIn){
      return router.replace("/Login")
    }
  },[])

  return (
    <Stack>
      <Stack.Screen name='Home' options={{headerShown: false}} />
      <Stack.Screen name='AddImageScreen' options={{headerShown: false}} />
    </Stack>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})