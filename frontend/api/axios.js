import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';

const DEV_URL = 'http://localhost:8080'

export default axios.create({
    baseURL: DEV_URL
})

export const axiosPrivate = axios.create({
    baseURL: DEV_URL,
    headers: {'Content-Type': 'application/json'},
   
})
