import { StyleSheet, Text, View } from 'react-native'
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
      await axios.post(VERIFY_URL, {
        email,
        verificationCode: parseInt(verificationCode, 10)
      })

      
      if (userType === "professional") {
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
      <View>
        <Text style={[styles.textStyle, { fontSize: 48 }]}>Confirm Email</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.textStyle, { fontSize: 24 }]}>You will recieve a 6 digit code in your email</Text>
        <FormField
          value={verificationCode}
          handleChangeText={(e) => setVerificationCode(e)}
          placeholder='Ex. 123456'
        />
        <CustomButton
          title='Submit Code'
          width={310}
          onPress={handleVerifyCode}
          containerStyle={{ marginTop: 30 }}
        />
        <CustomButton
          title='Send Code Again'
          width={310}
          onPress={handleResendEmail}
          containerStyle={{ marginTop: 30 }}
        />
      </View>
    </SafeAreaView>
  )
}

export default ConfirmSignUp

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2466',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: 455,
    height: 84,
    alignItems: 'center',
    marginTop: 70,

  },
  textStyle: {
    color: '#D9D9D9'
  }
})