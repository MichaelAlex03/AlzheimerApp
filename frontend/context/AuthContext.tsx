import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useState } from 'react'

interface AuthProps {
    accessToken: string
    email: string
    enabled: boolean
}

interface AuthContextType{
    auth: AuthProps
    setAuth: (auth: AuthProps) => void
    loggedIn: boolean
    setIsLoggedIn: (val: boolean) => void
}

interface AuthProviderProps{
    children: ReactNode
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: AuthProviderProps ) => {
    const [auth, setAuth] = useState<AuthProps>({} as AuthProps);
    const [loggedIn, setIsLoggedIn] = useState(false);


    return (
        <AuthContext.Provider value={{ auth, setAuth, loggedIn, setIsLoggedIn} } >
            { children }
        </AuthContext.Provider >
    )
}

export default AuthContext