import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router';

const VerificationInProgress = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.textStyles, { fontSize: 44, marginBottom: 20 }]}>Verification In Progress</Text>

            <Text style={[styles.textStyles, { fontSize: 28, marginTop: 20, marginBottom: 20 }]}>You will be verified in 3-5 business days</Text>

            <CustomButton
                title='Continue'
                onPress={() => { router.push("/Login") }}
                width={245}
                containerStyle={{ marginTop: 35 }}
            />
        </SafeAreaView>
    )
}

export default VerificationInProgress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2466',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyles: {
        color: '#D9D9D9'
    }
})