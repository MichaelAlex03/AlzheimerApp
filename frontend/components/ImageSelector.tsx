import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';

interface ImagePickerProps {
  pictures: string[],
  setPictures: (val: string[]) => void
}

const ImageSelector = ({ pictures, setPictures }: ImagePickerProps) => {

  const pickImage = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert("Permission Required", "Please allow access to your library to select a photo");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })

    if (!result.canceled) {
      setPictures([...pictures, result.assets[0].uri]);
    }

  }

  return (
    <View style={styles.selectorView}>
      <TouchableOpacity style={styles.selector} onPress={pickImage}>
        <Image source={require('../assets/images/folderImg.png')} />
      </TouchableOpacity>
      <Text style={[styles.textStyles, { fontSize: 28 }]}>Existing Image</Text>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  selector: {
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectorView: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  textStyles: {
    color: '#FFFFFF',
    width: 122,
    height: 100,
    textAlign: 'center',
    fontWeight: '700'
  },
})