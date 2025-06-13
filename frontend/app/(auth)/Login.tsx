import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import useAuth from '@/hooks/useAuth';

const LOGIN_URL = '/auth/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAuth } = useAuth()

  const axiosPrivate = useAxiosPrivate();

  const handleLogin = async () => {
    try {
      const response = await axiosPrivate.post(LOGIN_URL, {
        email,
        password
      });

      setAuth({
        accessToken: response.data.token,
        email: response.data.email,
        enabled: response.data.enabled,
        userId: response.data.userId
      })

      console.log("response", response)
      if (response.status === 200) {
        router.push('/Home')
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer} />

      <View style={styles.overlay}>
        <Text style={[styles.textStyle, { fontSize: 32, marginBottom: 50 }]}>
          {"Welcome Back!"}
        </Text>

        <View style={styles.inputContainer}>
          <FormField
            title="Email or Phone Number"
            value={email}
            handleChangeText={(e) => setEmail(e)}
            placeholder="hello@xyz.com"
          />
          <FormField
            title="Password"
            value={password}
            handleChangeText={(e) => setPassword(e)}
            placeholder="••••••••"
            secureTextEntry
          />

          <TouchableOpacity onPress={() => router.push('/ForgotPassword')}>
            <Text
              style={[
                styles.textStyle,
                { fontSize: 16, marginLeft: 'auto', marginBottom: 164, color: '#007AFF' },
              ]}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          title="Sign In"
          width={340}
          onPress={() => {
            handleLogin();
          }}
        />



        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={[styles.textStyle, { fontSize: 16, marginTop: 16 }]}>
            Don’t have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push('/SignUp')}>
            <Text
              style={[styles.textStyle, { fontSize: 16, color: '#007AFF', marginTop: 16 }]}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2466',
  },
  backgroundContainer: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 700,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
  },
  inputContainer: {
    width: 340,
    gap: 20,
    marginBottom: 30,
  },
  textStyle: {
    color: '#222222',
  },
});