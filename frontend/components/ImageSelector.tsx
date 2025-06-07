import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ImageSelectorProps{
    toggleAddOptions: boolean,
    setToggleAddOptions: (val: boolean) => void
}

const ImageSelector = ({ toggleAddOptions, setToggleAddOptions}: ImageSelectorProps) => {
  return (
    <Modal
        visible={toggleAddOptions}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setToggleAddOptions(false)}
    >
        <View>
            <Text>Testttt</Text>
        </View>
    </Modal>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6964A2'
    }
})