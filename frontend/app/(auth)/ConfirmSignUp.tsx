import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

const ConfirmSignUp = () => {

  const [code, setCode] = useState('');

  const handleResendEmail = async () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.textStyle, { fontSize: 48 }]}>Confirm Email</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.textStyle, { fontSize: 24 }]}>You will recieve a 6 digit code in your email</Text>
        <FormField
          value={code}
          handleChangeText={(e) => setCode(e)}
          placeholder='EX. 123456'
        />
        <CustomButton
          title='Send Code Again'
          width={338}
          onPress={handleResendEmail}
          containerStyle={{marginTop: 30}}
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