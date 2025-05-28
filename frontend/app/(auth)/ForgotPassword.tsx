import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetPassword = () => {
    Alert.alert(
      'Password Reset',
      'A reset link has been sent to your email. Please check your junk folder if you do not see the reset password email.',
      [
        {
          text: 'Check email now',
          onPress: () => {
            router.push('/');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer} />

      <View style={styles.overlay}>
        <Text style={[styles.textStyle, { fontSize: 32, marginBottom: 50 }]}>
          Reset Your Password
        </Text>

        <View style={styles.inputContainer}>
          <FormField
            title="Enter your email"
            value={email}
            handleChangeText={(e) => setEmail(e)}
            placeholder="hello@xyz.com"
          />
        </View>

        <CustomButton
          title="Reset Password"
          width={340}
          onPress={resetPassword}
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

export default ForgotPassword;

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
    marginBottom: 340,
  },
  textStyle: {
    color: '#222222', 
  },
});
