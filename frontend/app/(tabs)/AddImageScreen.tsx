import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { COLORS } from '../../constants'
import ImageSelector from '@/components/ImageSelector';


const AddImageScreen = () => {

    const [toggleAddOptions, setToggleAddOptions] = useState(false);
    const [toggleSelectPhotos, setSelectPhotos] = useState(false);
    const [toggleCamera, setToggleCamera] = useState(false);
    const [toggleVideo, setToggleVideo] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.profileContainer}>
                <FontAwesome name="user-circle" size={48} color="white" />
            </View>


            <View style={styles.content}>
                <TouchableOpacity style={styles.addImageStyle} onPress={() => setToggleAddOptions(true)}>
                    <View style={styles.outerBorder}>
                        <View style={styles.innerBorder}>
                            <Text style={[styles.textStyles, { fontSize: 34 }]}>Press to Add Image Here</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.pictureDisplayContainer}>

                    <View style={{ alignItems: 'flex-start', gap: 20 }}>
                        <View style={styles.picture} />
                        <Text style={[styles.textStyles, { fontSize: 28, fontWeight: '700' }]}>Picture 1</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start', gap: 20 }}>
                        <View style={styles.picture} />
                        <Text style={[styles.textStyles, { fontSize: 28, fontWeight: '700' }]}>Picture 2</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start', gap: 20 }}>
                        <View style={styles.picture} />
                        <Text style={[styles.textStyles, { fontSize: 28, fontWeight: '700' }]}>Picture 3</Text>
                    </View>

                </View>
            </View>

            <View style={{ alignItems: 'flex-end', width: '100%' }}>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={{ fontSize: 28, color: '#010101' }}>Confirm</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
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

            {
                toggleAddOptions && (
                    <ImageSelector toggleAddOptions={toggleAddOptions} setToggleAddOptions={setToggleAddOptions}/>
                )
            }
        </SafeAreaView>
    )
}

export default AddImageScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E2466',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 58,
        paddingVertical: 24,
        gap: 40
    },
    content: {
        width: '100%',
        gap: 40
    },
    profileContainer: {
        alignItems: 'flex-end',
        width: '100%'
    },
    addImageStyle: {
        borderRadius: 32,
        backgroundColor: '#6964A2',
        width: 721,
        height: 536,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyles: {
        color: '#D9D9D9'
    },
    outerBorder: {
        width: 642,
        height: 462,
        borderRadius: 32,
        borderColor: 'white',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerBorder: {
        width: 605,
        height: 422,
        borderRadius: 32,
        borderColor: 'white',
        borderWidth: 5,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pictureDisplayContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 35
    },
    picture: {
        width: 217,
        height: 200,
        backgroundColor: '#6964A2',
        borderRadius: 13,
    },
    confirmButton: {
        width: 219,
        height: 84,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32
    },
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