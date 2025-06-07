import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import ImageSelector from './ImageSelector'

interface FileSelectorProps {
    toggleAddOptions: boolean,
    setToggleAddOptions: (val: boolean) => void,
    toggleSelectPhotos: boolean,
    setToggleSelectPhotos: (val: boolean) => void,
    toggleCamera: boolean,
    setToggleCamera: (val: boolean) => void,
    toggleVideo: boolean,
    setToggleVideo: (val: boolean) => void,
    pictures: string[],
    setPictures: (val: string[]) => void
}

const FileSelector = (
    {
        toggleAddOptions,
        setToggleAddOptions,
        toggleSelectPhotos,
        setToggleSelectPhotos,
        toggleCamera,
        setToggleCamera,
        toggleVideo,
        setToggleVideo,
        pictures,
        setPictures
    }: FileSelectorProps
) => {


    return (
        <Modal
            visible={toggleAddOptions}
            transparent={true}
            animationType='slide'
            onRequestClose={() => setToggleAddOptions(false)}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={[styles.textStyles, { fontSize: 28, width: 200 }]}>Task Method</Text>

                    <View style={styles.selectorContainer}>

                        <ImageSelector pictures={pictures} setPictures={setPictures}/>

                        <View style={styles.selectorView}>
                            <TouchableOpacity style={styles.selector}>
                                <Image source={require('../assets/images/Camera.png')} />
                            </TouchableOpacity>
                            <Text style={[styles.textStyles, { fontSize: 28 }]}>Picture</Text>
                        </View>

                        <View style={styles.selectorView}>
                            <TouchableOpacity style={styles.selector}>
                                <Image source={require('../assets/images/Video.png')} />
                            </TouchableOpacity>
                            <Text style={[styles.textStyles, { fontSize: 28 }]}>Video</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setToggleAddOptions(false)}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </Modal>
    )
}

export default FileSelector

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        backgroundColor: '#6964A2',
        borderRadius: 27,
        width: 593,
        height: 588,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyles: {
        color: '#FFFFFF',
        width: 122,
        height: 100,
        textAlign: 'center',
        fontWeight: '700'
    },
    selectorContainer: {
        flexDirection: 'row',
        gap: 40,
        marginTop: 60
    },
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
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    closeButton: {
        width: 219,
        height: 75,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32
    },
    buttonText: {
        fontSize: 28,
        color: '#010101'
    }
})