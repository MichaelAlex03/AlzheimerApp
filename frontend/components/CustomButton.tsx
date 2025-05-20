import { DimensionValue, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: String
    width: DimensionValue
    onPress: () => void
}

const CustomButton = ({ title, width, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.buttonStyles, { width: width }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: '#D9D9D9',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 64,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20
    }
})