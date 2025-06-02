import { DimensionValue, StyleSheet, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string
    width: DimensionValue
    onPress: () => void
    containerStyle?: StyleProp<ViewStyle>;
}

const CustomButton = ({ title, width, onPress, containerStyle }: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.buttonStyles, { width: width }, containerStyle]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: '#005BBB',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 64,
        alignItems: 'center',
        borderColor: '#003087',
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
    }
})