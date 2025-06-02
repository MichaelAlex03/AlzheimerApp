import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from '@/api/axios';
import useAuth from './useAuth';

const REFRESH_URL = '/auth/refresh';

const useRefreshToken = () => {

    const { auth, setAuth } = useAuth();
  
    const refresh = async () => {
        try {
            const response = axios.get(REFRESH_URL, {
                
            })
        } catch (error) {
            
        }
    }
  
    return refresh;
}

export default useRefreshToken

