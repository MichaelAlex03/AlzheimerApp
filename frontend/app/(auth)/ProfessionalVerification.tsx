import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack'

const CREATE_PROFESSIONAL_URL = '';

const ProfessionalVerification = () => {

  const states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TT", "TX", "UT", "VI", "VT", "VA", "WA", "WI", "WV", "WY"];

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
      
    } catch (error) {
      console.log(parseErrorStack)
    }
  }

  const renderDropdown = () => {
    return (
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
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ width: 485, height: 145 }}>
        <Text style={[styles.textStyles, { fontSize: 48, textAlign: 'center' }]}>Professional Verification</Text>
      </View>


      <View style={styles.inputContainer}>
        <FormField title={'Organization Name'} value={orgName} handleChangeText={(e) => setOrgName(e)} customTextStyles={{ color: "white" }} />

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <FormField
            title="Address"
            value={address}
            handleChangeText={(e) => setAddress(e)}
            width={285}
            customTextStyles={{ color: "white" }}
          />
          <FormField
            title="Zipcode"
            value={zipcode}
            handleChangeText={(e) => setZipcode(e)}
            width={285}
            customTextStyles={{ color: "white" }}
          />
        </View>

        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <FormField
            title="City"
            value={city}
            handleChangeText={(e) => setCity(e)}
            width={285}
            customTextStyles={{ color: "white" }}
          />

          <View style={{ gap: 10 }}>
            <Text style={[styles.textStyles, { fontSize: 22, color: '#FFFFFF', }]}>State</Text>
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


        <View style={{ alignItems: 'center', gap: 15 }}>
          <CustomButton
            title='ID Picture'
            onPress={() => { }}
            width={245}
            containerStyle={{ marginTop: 35 }}
          />

          <Text style={{ color: '#FFFFFF', fontSize: 24 }}>Used to verify authenticity</Text>

          <CustomButton
            title='Continue'
            onPress={() => { router.push("/VerificationInProgress") }}
            width={245}
            containerStyle={{ marginTop: 35 }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfessionalVerification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2466'
  },
  textStyles: {
    color: '#D9D9D9'
  },
  inputContainer: {
    width: 586,
    alignItems: 'center',
    gap: 10
  },
  dropdownButtonStyle: {
    width: 285,
    height: 50,
    padding: 10,
    backgroundColor: '#E6E1FA',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
    color: '#151E26',
  },
  modalOverlay: {
    flex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  dropdownList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 285,
    maxHeight: 300,
    padding: 10,

    position: 'absolute',
    right: 125,
    top: 700,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E1FA',
  },
  dropdownItemText: {
    fontSize: 18,
    color: '#151E26',
    textAlign: 'center',
  },
})