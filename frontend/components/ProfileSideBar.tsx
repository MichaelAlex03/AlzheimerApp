import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import React from 'react'

interface SideBarProps {
  toggleSideBar: boolean,
  setToggleSideBar: (val: boolean) => void
}

const ProfileSideBar = ({ toggleSideBar, setToggleSideBar }: SideBarProps) => {

  const handleSignOut = async () => {

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
          <Text style={[styles.textStyles, { fontSize: 32, fontWeight: '500' }]}>Name Placeholder</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignOut} style={styles.signoutButton}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option}>
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
          <TouchableOpacity style={styles.option}>
            <Text style={[styles.optionsTextStyles, { borderBottomWidth: 10, width: 559, borderBottomColor: 'white', paddingBottom: 10 }]}>Reset File</Text>
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
    marginTop: 20,
  },
  option: {
    width: 559,
    height: 90,
    borderTopColor: 'white',
    borderTopWidth: 10,
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