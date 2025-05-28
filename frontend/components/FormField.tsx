import { StyleSheet, Text, View, TextInput, DimensionValue } from 'react-native'
import React from 'react'

interface FormProps {
    title?: string,
    value: string,
    placeholder?: string,
    handleChangeText: (val: string) => void,
    handleFocus?: () => void,
    handleBlur?: () => void
    width?: DimensionValue
    secureTextEntry?: boolean;
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
        fontSize: 22,
        color: '#333333'
    },
    input: {
        width: '100%',
        height: 50,
        padding: 10,
        backgroundColor: '#E6E1FA',
        borderRadius: 10,
    }
})