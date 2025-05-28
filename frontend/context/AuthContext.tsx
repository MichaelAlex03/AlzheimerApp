import { View, Text } from 'react-native'
import React, { useState } from 'react'

interface AuthProps{
    accessToken: string
}

const AuthContext = () => {
    const [auth, setAuth] = useState({} as AuthProps);
    

    return (
        <View>
            <Text>AuthContext</Text>
        </View>
    )
}

export default AuthContext