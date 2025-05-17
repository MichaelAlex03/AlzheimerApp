import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='Login' options={{headerShown: false}}/>
      <Stack.Screen name='SignUp' options={{headerShown: false}}/>
      <Stack.Screen name='ConfirmSignUp' options={{headerShown: false}}/>
      {/* <Stack.Screen name='(help)' options={{headerShown: false}}/> */}
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})