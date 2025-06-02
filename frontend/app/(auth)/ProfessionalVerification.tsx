import { axiosPrivate } from '@/api/axios'
import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CREATE_PROFESSIONAL_URL = '/professional/';

const states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TT", "TX", "UT", "VI", "VT", "VA", "WA", "WI", "WV", "WY"];

const ProfessionalVerification = () => {
  const [orgName, setOrgName] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async () => {
    if (!orgName || !address || !zipcode || !city || !state ){
      setErrMsg('One or more fields are empty. Please fill in all fields');
      return
    }
    try {
      // api call
    } catch (error) {
      console.log(error)
    }
  }

  const renderDropdown = () => (
    <Modal
      visible={isDropdownOpen}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setIsDropdownOpen(false)}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={() => setIsDropdownOpen(false)}
      >
        <View style={styles.dropdownList}>
          <FlatList
            data={states}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setState(item);
                  setIsDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );

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
          <Text style={[styles.textStyles, styles.title]}>
            Professional Verification
          </Text>

          <View style={styles.inputContainer}>
            <FormField
              title={'Organization Name'}
              value={orgName}
              handleChangeText={setOrgName}
              customTextStyles={{ color: "white" }}
              width={320}
            />

            <View style={styles.row}>
              <FormField
                title="Address"
                value={address}
                handleChangeText={setAddress}
                width={150}
                customTextStyles={{ color: "white" }}
              />
              <FormField
                title="Zipcode"
                value={zipcode}
                handleChangeText={setZipcode}
                width={150}
                customTextStyles={{ color: "white" }}
              />
            </View>

            <View style={styles.row}>
              <FormField
                title="City"
                value={city}
                handleChangeText={setCity}
                width={150}
                customTextStyles={{ color: "white" }}
              />

              <View style={styles.stateDropdownContainer}>
                <Text style={styles.stateLabel}>State</Text>
                <TouchableOpacity
                  style={styles.dropdownButtonStyle}
                  onPress={() => setIsDropdownOpen(true)}
                >
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {state || 'Select state'}
                  </Text>
                  <Icon
                    name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </TouchableOpacity>
                {renderDropdown()}
              </View>
            </View>

            {errMsg ? (
              <Text style={styles.errorMsg}>{errMsg}</Text>
            ) : null}

            <View style={styles.buttonGroup}>
              <CustomButton
                title='ID Picture'
                onPress={() => { }}
                width={250}
                containerStyle={{ marginTop: 10 }}
              />

              <Text style={styles.infoText}>
                Used to verify authenticity
              </Text>

              <CustomButton
                title='Continue'
                onPress={() => { router.push("/VerificationInProgress") }}
                width={250}
                containerStyle={{ marginTop: 10 }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ProfessionalVerification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2466',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 28,
    textAlign: 'center',
    color: '#D9D9D9',
    letterSpacing: 0.2,
  },
  textStyles: {
    color: '#D9D9D9',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 370,
    alignItems: 'center',
    gap: 18,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
    width: 320,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  stateDropdownContainer: {
    gap: 6,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: 150,
  },
  stateLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 2,
    marginLeft: 2,
  },
  dropdownButtonStyle: {
    width: 150,
    height: 44,
    paddingHorizontal: 12,
    backgroundColor: '#E6E1FA',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 24,
    color: '#151E26',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 150,
    maxHeight: 300,
    padding: 10,
    alignSelf: 'center',
    marginTop: 100,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E1FA',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#151E26',
    textAlign: 'center',
  },
  errorMsg: {
    color: '#FF5A5F',
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  buttonGroup: {
    alignItems: 'center',
    gap: 16,
    marginTop: 10,
    width: '100%',
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 4,
    opacity: 0.85,
  },
});