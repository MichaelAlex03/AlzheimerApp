import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { router } from 'expo-router';
import ax from '../../api/axios';
import axios, { AxiosError} from 'axios';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SIGN_UP_URL = '/auth/signup'

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
  }, [email]);

  useEffect(() => {
    setValidPass(PASSWORD_REGEX.test(password));
  }, [password]);

  const handleSubmit = async () => {

    if (!firstName || !lastName || !password || !email || (!isProfessional && !isCaregiver)){
      Alert.alert("Missing fields", "One or more fields required are missing. Please fill in and select all fields");
    }

    const userType = isCaregiver ? "Caregiver" : "Professional";

    try {
      const response = await ax.post(SIGN_UP_URL, {
        firstName,
        lastName,
        password,
        email,
        userType
      })

      console.log("RESPONSEEE" , response)

      router.push({ pathname: "/ConfirmSignUp", params: { email, userType } });

      setFirstName('');
      setLastName('');
      setPassword('')
      setEmail('');
      setIsCaregiver(false);
      setIsProfessional(false);

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log('Status:', error.response?.status);
        console.log('Message:', error.response?.data?.message); // if backend sends JSON
      } else {
        console.log('Unexpected error:', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* KeyboardAvoidingView to handle keyboard interaction */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={[styles.textStyle, { fontSize: 30 }]} >Sign Up</Text>

          <View style={styles.inputContainer}>
            <Text style={[styles.textStyle, { fontSize: 24 }]}>Role</Text>
            <View style={styles.roleSelectorContainer}>
              <TouchableOpacity
                style={
                  isProfessional
                    ? [styles.buttonStyles, { width: 160, backgroundColor: '#007AFF' }]
                    : [styles.buttonStyles, { width: 160 }]
                }
                onPress={() => {
                  setIsProfessional(true);
                  setIsCaregiver(false);
                }}
              >
                <Text style={isProfessional ? [styles.buttonText, { color: 'white' }] : styles.buttonText}>
                  Professional
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={
                  isCaregiver
                    ? [styles.buttonStyles, { width: 160, backgroundColor: '#007AFF' }]
                    : [styles.buttonStyles, { width: 160 }]
                }
                onPress={() => {
                  setIsCaregiver(true);
                  setIsProfessional(false);
                }}
              >
                <Text style={isCaregiver ? [styles.buttonText, { color: 'white' }] : styles.buttonText}>
                  Caregiver
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', gap: 10 }}>
              <FormField
                title="First Name"
                value={firstName}
                handleChangeText={(e) => setFirstName(e)}
                width={165}
              />
              <FormField
                title="Last Name"
                value={lastName}
                handleChangeText={(e) => setLastName(e)}
                width={165}
              />
            </View>

            <FormField
              title="Email"
              value={email}
              handleChangeText={(e) => setEmail(e)}
              handleFocus={() => setEmailFocus(true)}
              handleBlur={() => setEmailFocus(false)}
              width={340}
            />

            <FormField
              title="Password"
              value={password}
              handleChangeText={(e) => setPassword(e)}
              handleFocus={() => setPassFocus(true)}
              handleBlur={() => setPassFocus(false)}
              width={340}
            />
          </View>

          <CustomButton title="Sign Up" width={340} onPress={handleSubmit} />
          <CustomButton
            title="Sign Up With Apple "
            width={340}
            onPress={handleSubmit}
            containerStyle={{ backgroundColor: '#222222', marginTop: 10 }}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 16 }}>
            <Text style={[styles.textStyle, { fontSize: 16 }]}>Already have account?</Text>
            <TouchableOpacity onPress={() => router.push('/ProfessionalVerification')}>
              <Text style={[styles.textStyle, { fontSize: 16, color: '#007AFF' }]}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2466',
  },
  backgroundContainer: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  inputContainer: {
    width: 340,
    gap: 20,
    marginBottom: 30,
  },
  textStyle: {
    color: '#555',
  },
  buttonStyles: {
    backgroundColor: '#E6E1FA',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000000',
  },
  roleSelectorContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
