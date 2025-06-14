import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants'
import { router } from 'expo-router'

const FooterNav = () => {
    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/Home')}>
                <Text style={styles.navIcon}>⌂</Text>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navIcon}>⏱</Text>
                <Text style={styles.navText}>In Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navIcon}>✓</Text>
                <Text style={styles.navText}>Complete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FooterNav

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.navBackground,
        paddingVertical: 16,
        borderRadius: 22,
        position: 'absolute',
        bottom: 14,
        left: 10,
        right: 10,
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.18,
        shadowRadius: 8,
        elevation: 4,
    },
    navItem: {
        alignItems: 'center',
        flex: 1,
    },
    navIcon: {
        fontSize: 26,
        color: COLORS.accentLight,
        marginBottom: 2,
        textShadowColor: COLORS.shadow,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    navText: {
        color: COLORS.navText,
        fontSize: 16,
        marginTop: 2,
        fontWeight: '700',
    },
})