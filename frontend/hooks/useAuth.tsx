import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import AuthContext from '@/context/AuthContext'

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth