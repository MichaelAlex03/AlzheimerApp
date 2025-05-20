import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.textStyle, { fontSize: 64, marginBottom: 40 }]}>Log In</Text>

            <View style={styles.inputContainer}>
                <FormField
                    title='Email'
                    value={email}
                    handleChangeText={(e) => setEmail(e)}
                />
                <FormField
                    title='Password'
                    value={password}
                    handleChangeText={(e) => setPassword(e)}
                />

                <TouchableOpacity>
                    <Text style={[styles.textStyle, { fontSize: 24, marginLeft: 'auto', color: '#007AFF' }]}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <CustomButton title={"Log In"} width={202} onPress={handleLogin} />

            <View style={{ gap: 40, marginTop: 40 }}>

                <View style={{ flexDirection: 'row', gap: 4 }}>
                    <Text style={[styles.textStyle, { fontSize: 24 }]}>Don't have account?</Text>
                    <TouchableOpacity onPress={() => { router.push("/SignUp") }}>
                        <Text style={[styles.textStyle, { fontSize: 24, color: '#007AFF' }]}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => { router.push("/SignUpHelp") }}>
                    <Text style={[styles.textStyle, { fontSize: 20, color: '#007AFF', textAlign: 'center' }]}>Don't know how to Sign up?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E2466',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: 340,
        gap: 30,
        marginBottom: 40,
    },
    textStyle: {
        color: '#D9D9D9'
    }
})