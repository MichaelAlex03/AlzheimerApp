import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { router } from 'expo-router';

const ProfessionalVerification = () => {

  const states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TT", "TX", "UT", "VI", "VT", "VA", "WA", "WI", "WV", "WY"];

  const [orgName, setOrgName] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ width: 485, height: 145 }}>
        <Text style={[styles.textStyles, { fontSize: 48, textAlign: 'center' }]}>Professional Verification</Text>
      </View>


      <View style={styles.inputContainer}>
        <FormField title={'Organization Name'} value={orgName} handleChangeText={(e) => setOrgName(e)} />

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <FormField
            title="Address"
            value={address}
            handleChangeText={(e) => setAddress(e)}
            width={285}
          />
          <FormField
            title="Zipcode"
            value={zipcode}
            handleChangeText={(e) => setZipcode(e)}
            width={285}
          />
        </View>

        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <FormField
            title="City"
            value={city}
            handleChangeText={(e) => setCity(e)}
            width={285}
          />

          <View style={{ gap: 10 }}>
            <Text style={[styles.textStyles, { fontSize: 22, color: '#FFFFFF' }]}></Text>
            <SelectDropdown
              searchPlaceHolder='State...'
              data={states}
              onSelect={(selectedItem) => {
                setState(selectedItem)
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.title) || 'Select your mood'}
                    </Text>
                    <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                  </View>
                );
              }}
              renderItem={(item, isSelected) => {
                console.log("state", item)
                return (
                  <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                    <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}

            />
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
            onPress={() => {router.push("/VerificationInProgress")}}
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
    alignItems: 'center'
  },
  dropdownButtonStyle: {
    width: 285,
    height: 50,
    padding: 10,
    backgroundColor: '#E6E1FA',
    borderRadius: 10,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
})