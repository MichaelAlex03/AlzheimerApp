import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants';

interface TutorialStage3Props {
    tutorialStage: number;
    setTutorialStage: (stage: number) => void;
}

const TutorialStage3 = ({ tutorialStage, setTutorialStage }: TutorialStage3Props) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 22, color: '#ffffff', fontWeight: '700', textAlign: 'center', marginBottom: 24 }}>
                Select 3 images that you want to use for your task or take some new ones!
            </Text>

            <View style={styles.buttonContainer}>

                <TouchableOpacity onPress={() => setTutorialStage(tutorialStage - 1)} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTutorialStage(tutorialStage + 1)} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TutorialStage3

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