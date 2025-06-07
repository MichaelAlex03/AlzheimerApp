import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

interface ImageSelectorProps {
    toggleAddOptions: boolean,
    setToggleAddOptions: (val: boolean) => void
}

const ImageSelector = ({ toggleAddOptions, setToggleAddOptions }: ImageSelectorProps) => {
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

                        <View style={styles.selectorView}>
                            <TouchableOpacity style={styles.selector}>
                                <Image source={require('../assets/images/folderImg.png')} />
                            </TouchableOpacity>
                            <Text style={[styles.textStyles, { fontSize: 28 }]}>Existing Image</Text>
                        </View>

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

                </View>
            </View>
        </Modal>
    )
}

export default ImageSelector

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
        marginTop: 80
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
    }
})