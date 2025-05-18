import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { router } from 'expo-router';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [password, setPassword] = useState('');
  const [passFocus, setPassFocus] = useState(false);
  const [validPass, setValidPass] = useState(false);

  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [isProfessional, setIsProfessional] = useState(false);
  const [isCaregiver, setIsCaregiver] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPass(PASSWORD_REGEX.test(password))
  }, [password])


  const handleSubmit = () => {

  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.textStyle, { fontSize: 48, marginBottom: 70 }]}>Sign Up</Text>

      <Text style={[styles.textStyle, { fontSize: 34, marginBottom: 50 }]}>Role</Text>
      <View style={styles.roleSelectorContainer}>
        <TouchableOpacity
          style={isProfessional ? [styles.buttonStyles, { width: 274, backgroundColor: '#6964A2' }] : [styles.buttonStyles, { width: 274 }]}
          onPress={() => {
            setIsProfessional(true);
            setIsCaregiver(false);
          }}
        >
          <Text style={isProfessional ? [styles.buttonText, { color: 'white' }] : styles.buttonText}>Professional</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={isCaregiver ? [styles.buttonStyles, { width: 274, backgroundColor: '#6964A2' }] : [styles.buttonStyles, { width: 274 }]}
          onPress={() => {
            setIsCaregiver(true);
            setIsProfessional(false);
          }}
        >
          <Text style={isCaregiver ? [styles.buttonText, { color: 'white' }] : styles.buttonText}>Caregiver</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.whiteBar} />

      <View style={styles.textContainer}>

        <View style={{ flexDirection: 'row', gap: 20 }}>
          <FormField
            title='First Name'
            value={firstName}
            handleChangeText={(e) => setFirstName(e)}
            width={283}
          />
          <FormField
            title='Last Name'
            value={lastName}
            handleChangeText={(e) => setLastName(e)}
            width={283}
          />
        </View>

        <FormField
          title='Email'
          value={email}
          handleChangeText={(e) => setEmail(e)}
          handleFocus={() => setEmailFocus(true)}
          handleBlur={() => setEmailFocus(false)}
          width={'100%'}
        />

        <FormField
          title='Password'
          value={password}
          handleChangeText={(e) => setPassword(e)}
          handleFocus={() => setPassFocus(true)}
          handleBlur={() => setPassFocus(false)}
          width={'100%'}
        />

      </View>

      <CustomButton title={"Sign Up"} width={224} onPress={handleSubmit} />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 40 }}>
        <Text style={[styles.textStyle, [{ fontSize: 28 }]]}>Already have account?</Text>
        <TouchableOpacity onPress={() => {
          router.push('/Login')
        }}>
          <Text style={{ color: '#007AFF', fontSize: 28 }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2466',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '#D9D9D9'
  },
  buttonStyles: {
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 64,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24
  },
  roleSelectorContainer: {
    flexDirection: 'row',
    gap: 20
  },
  whiteBar: {
    borderColor: '#D9D9D9',
    borderWidth: 4,
    width: 586,
    marginTop: 60,
    marginBottom: 60
  },
  textContainer: {
    width: 586,
    gap: 20,
    marginBottom: 40
  }
})