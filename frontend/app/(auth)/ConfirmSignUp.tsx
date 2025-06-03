import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { useLocalSearchParams } from 'expo-router';
import axios from '@/api/axios';
import { router } from "expo-router"

const RESEND_URL = '/auth/resend';
const VERIFY_URL = '/auth/verify'

const ConfirmSignUp = () => {

  const { email, userType } = useLocalSearchParams();
  const [verificationCode, setVerificationCode] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleResendEmail = async () => {
    try {
      await axios.post(RESEND_URL, {
        params: {
          email: email
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleVerifyCode = async () => {

    try {
      const response = await axios.post(VERIFY_URL, {
        email,
        verificationCode: parseInt(verificationCode, 10)
      })

      console.log("res", response)

      if (userType === "Professional") {
        router.push("/ProfessionalVerification");
      } else {
        router.push("/Login");
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={[styles.textStyle, styles.title]}>Confirm Email</Text>
          <View style={styles.content}>
            <Text style={[styles.textStyle, styles.subtitle]}>
              You will receive a 6 digit code in your email
            </Text>
            <FormField
              value={verificationCode}
              handleChangeText={(e) => setVerificationCode(e)}
              placeholder='Ex. 123456'
              width={310}
            />
            <CustomButton
              title='Submit Code'
              width={310}
              onPress={() => {
                handleVerifyCode();
      
              }}
              containerStyle={{ marginTop: 30 }}
            />
            <CustomButton
              title='Send Code Again'
              width={310}
              onPress={handleResendEmail}
              containerStyle={{ marginTop: 20 }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ConfirmSignUp

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2466',
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginTop: 0,
  },
  textStyle: {
    color: '#D9D9D9',
  },
});