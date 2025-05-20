import { StyleSheet, Text, View, TextInput, DimensionValue } from 'react-native'
import React from 'react'

interface FormProps {
    title: string,
    value: string,
    placeholder?: string,
    handleChangeText: (val: string) => void,
    handleFocus?: () => void,
    handleBlur?: () => void
    width?: DimensionValue
}

const FormField = ({ title, value, placeholder, handleChangeText, handleFocus, handleBlur, width }: FormProps) => {
    return (
        <View style={[styles.formContainer, { width: width ?? '100%' }]}>
            <Text style={styles.formText}>{title}</Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                onChangeText={handleChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={styles.input}
            />
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'flex-start',
        gap: 10
    },
    formText: {
        fontSize: 28,
        color: '#D9D9D9'
    },
    inputContainer: {

    },
    input: {
        width: '100%',
        height: 50,
        padding: 10,
        backgroundColor: '#E6E1FA',
        borderRadius: 10.
    }
})