import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { axiosPrivate } from '@/api/axios'
import useAuth from './useAuth'
import useRefreshToken from './useRefreshToken'

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {

    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        const fullUrl = `${axiosPrivate.defaults.baseURL || ''}${config.url || ''}`;
        console.log('📡 Axios Request URL:', fullUrl);
        console.log('📦 Data:', config.data);
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        }
        return config;
      }, (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        Promise.reject(error)
      }

    )

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    }

  }, [auth, refresh]);

  return axiosPrivate
}

export default useAxiosPrivate

