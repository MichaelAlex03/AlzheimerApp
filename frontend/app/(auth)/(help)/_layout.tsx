import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SignUpHelpLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='SignUpHelp' options={{ headerShown: false }} />
    </Stack>
  )
}

export default SignUpHelpLayout

const styles = StyleSheet.create({})