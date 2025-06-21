import { COLORS } from '@/constants'
import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TutorialStage2 from './TutorialStage2'



const TutorialStage1 = () => {

    const [tutorialStage, setTutorialStage] = useState(1)

    return (
        <Modal
            visible={true}
            transparent={true}
            animationType='slide'
            onRequestClose={() => { }}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    {tutorialStage === 1 && (
                        <>
                            <Text style={[styles.textStyles, { fontSize: 28, fontWeight: '700' }]}>Welcome to NeuroNest</Text>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/logo.png')} />
                                <Text style={[styles.textStyles, { fontSize: 48, fontWeight: '500' }]}>NeuroNest</Text>
                            </View>

                            <Text style={[styles.textStyles, { fontSize: 22, fontWeight: '700', width: 500, textAlign: 'center' }]}>
                                Here We Will Understand How To Use The Application
                            </Text>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => setTutorialStage(2)}>
                                    <Text style={styles.buttonText}>Continue</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => setTutorialStage(0)}>
                                    <Text style={styles.buttonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                    {
                        tutorialStage === 2 && (
                            <>
                                <Text style={[styles.textStyles, { fontSize: 22, fontWeight: '700', width: 500, textAlign: 'center' }]}>TutorialStage2</Text>
                            </>
                        )
                    }
                </View>
            </View>
        </Modal>
    )
}

export default TutorialStage1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyles: {
        color: '#FFFFFF'
    },
    content: {
        width: 593,
        height: 878,
        backgroundColor: '#6964A2',
        borderRadius: 27,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    buttonStyle: {
        backgroundColor: COLORS.white,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: COLORS.accent,
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.12,
        shadowRadius: 2,
        elevation: 2,
        width: 150

    },
    buttonText: {
        fontWeight: '700',
        color: COLORS.accent,
        fontSize: 20,
        textAlign: 'center'
    }
})