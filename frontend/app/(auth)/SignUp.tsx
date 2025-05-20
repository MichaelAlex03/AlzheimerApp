import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { router } from 'expo-router';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
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
  }, [email]);

  useEffect(() => {
    setValidPass(PASSWORD_REGEX.test(password));
  }, [password]);

  const handleSubmit = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.textStyle, { fontSize: 36, marginBottom: 50 }]}>Sign Up</Text>

      <Text style={[styles.textStyle, { fontSize: 24, marginBottom: 20 }]}>Role</Text>
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

      <View style={styles.whiteBar} />

      <View style={styles.textContainer}>
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

      <CustomButton title="Sign Up" width={200} onPress={handleSubmit} />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 20 }}>
        <Text style={[styles.textStyle, { fontSize: 20 }]}>Already have account?</Text>
        <TouchableOpacity
          onPress={() => {
            router.push('/Login');
          }}
        >
          <Text style={{ color: '#007AFF', fontSize: 20 }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2466',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textStyle: {
    color: '#D9D9D9',
  },
  buttonStyles: {
    backgroundColor: '#E6E1FA',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  roleSelectorContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  whiteBar: {
    borderColor: '#D9D9D9',
    borderWidth: 4,
    width: 340,
    marginVertical: 20,
  },
  textContainer: {
    width: 340,
    gap: 15,
    marginBottom: 20,
  },
});