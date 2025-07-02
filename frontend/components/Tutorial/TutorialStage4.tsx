import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import useAuth from '@/hooks/useAuth';

interface TutorialStage4Props {
    tutorialStage: number;
    setTutorialStage: (stage: number) => void;
}

const USER_API_URL = '/api/student'

const TutorialStage4 = ({ tutorialStage, setTutorialStage }: TutorialStage4Props) => {

    const axiosPrivate = useAxiosPrivate();
    const { auth, setAuth } = useAuth()

    const handleFinish = async () => {
        try {
            await axiosPrivate.patch(USER_API_URL, {
                firstName: auth.firstName,
                lastName: auth.lastName,
                password: '',
                firstTime: false,
                email: auth.email
            })
            setAuth({ ...auth, firstTime: false })
            setTutorialStage(0)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 22, color: '#ffffff', fontWeight: '700', textAlign: 'center', marginBottom: 24 }}>
                Wait for the model to process your images and your done!
            </Text>

            <View style={styles.buttonContainer}>

                <TouchableOpacity onPress={() => setTutorialStage(tutorialStage - 1)} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFinish} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Finish</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TutorialStage4

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: COLORS.white,
        paddingVertical: 8,
        paddingHorizontal: 14,
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
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
})