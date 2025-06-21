import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from '@/api/axios';
import useAuth from './useAuth';
import * as SecureStore from 'expo-secure-store';

const REFRESH_URL = '/auth/refresh';

const useRefreshToken = () => {

    const { auth, setAuth } = useAuth();
    
  
    const refresh = async () => {
        const refreshToken = await SecureStore.getItemAsync("refreshToken");
        try {
            const response = await axios.get(REFRESH_URL, {
                params: {
                    refreshToken,
                    email: auth.email
                }
            })

            setAuth({
                accessToken: response.data.token,
                email: response.data.email,
                enabled: response.data.enabled,
                userId: response.data.userId,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                firstTime: response.data.firstTime
              })

            return response.data.token;
        } catch (error) {
            console.error(error)
        }
    }
  
    return refresh;
}

export default useRefreshToken

