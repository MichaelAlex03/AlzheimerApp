import { COLORS } from '@/constants'
import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TutorialStage2 from './TutorialStage2'
import TutorialStage3 from './TutorialStage3'
import TutorialStage4 from './TutorialStage4'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'
import useAuth from '@/hooks/useAuth'

const USER_API_URL = '/api/student'

const TutorialStage1 = () => {

    const axiosPrivate = useAxiosPrivate()
    const { auth, setAuth } = useAuth()

    const [tutorialStage, setTutorialStage] = useState(1)

    const handleClose = async () => {
        try {
            const response = await axiosPrivate.patch(USER_API_URL, {
                firstName: auth.firstName,
                lastName: auth.lastName,
                password: '',
                firstTime: false,
                email: auth.email
            })
            setAuth({ ...auth, firstTime: false })
            setTutorialStage(0)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal
            visible={tutorialStage !== 0}
            transparent={true}
            animationType='slide'
            onRequestClose={() => { }}
        >
            <View style={styles.container}>
                <View style={tutorialStage === 1 ? styles.content : styles.contentCompact}>
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
                                <TouchableOpacity style={styles.buttonStyle} onPress={handleClose}>
                                    <Text style={styles.buttonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                    {
                        tutorialStage === 2 && (
                            <TutorialStage2
                                tutorialStage={tutorialStage}
                                setTutorialStage={setTutorialStage}
                            />
                        )
                    }
                    {
                        tutorialStage === 3 && (
                            <TutorialStage3
                                tutorialStage={tutorialStage}
                                setTutorialStage={setTutorialStage}
                            />
                        )
                    }
                    {
                        tutorialStage === 4 && (
                            <TutorialStage4
                                tutorialStage={tutorialStage}
                                setTutorialStage={setTutorialStage}
                            />
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
    contentCompact: {
        width: 593,
        backgroundColor: '#6964A2',
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
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