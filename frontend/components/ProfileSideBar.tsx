import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import React from 'react'
import useAuth from '@/hooks/useAuth';
import axios from '@/api/axios';
import { router } from 'expo-router';

interface SideBarProps {
  toggleSideBar: boolean,
  setToggleSideBar: (val: boolean) => void
}

const LOGOUT_URL = "/auth/logout"

const ProfileSideBar = ({ toggleSideBar, setToggleSideBar }: SideBarProps) => {

  const { auth, setIsLoggedIn } = useAuth();

  const handleLogout = async () => {
      try {
        await axios.get(LOGOUT_URL, {
          params: {
            email: auth?.email
          }
        })
  
        setIsLoggedIn(false);
        router.replace("/");
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <Modal
      isVisible={toggleSideBar}
      animationIn={'slideInRight'}
      animationOut={'slideOutLeft'}
      onBackdropPress={() => setToggleSideBar(false)}
    >
      <View style={styles.container}>

        <Text style={[styles.textStyles, { fontSize: 32, fontWeight: '600' }]}>Account</Text>

        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/profile.png')} />
          <Text style={[styles.textStyles, { fontSize: 32, fontWeight: '500' }]}>{auth.firstName} {auth.lastName}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogout} style={styles.signoutButton}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionContainer}>
          <TouchableOpacity style={[styles.option, { borderTopWidth: 10 }]}>
            <Text style={styles.optionsTextStyles}>Account Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionsTextStyles}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionsTextStyles}>Accessibility</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionsTextStyles}>Other</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.option, { borderBottomWidth: 10 }]}>
            <Text style={styles.optionsTextStyles}>Reset File</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => setToggleSideBar(false)}>
          <Text style={[styles.buttonText]}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ProfileSideBar

const styles = StyleSheet.create({
  container: {
    width: 559,
    height: 645,
    backgroundColor: '#2E2466',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyles: {
    color: '#D9D9D9'
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    gap: 20
  },
  signoutButton: {
    width: 452,
    height: 60,
    backgroundColor: '#D9D9D9',
    borderRadius: 32,
    justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#2E2466',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center'
  },
  optionContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  option: {
    width: 559,
    height: 90,
    borderTopColor: 'white',
    borderTopWidth: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionsTextStyles: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',

  },
  backButton: {
    marginTop: 30,
    width: 452,
    height: 60,
    backgroundColor: '#D9D9D9',
    borderRadius: 32,
    justifyContent: 'center'
  }
})