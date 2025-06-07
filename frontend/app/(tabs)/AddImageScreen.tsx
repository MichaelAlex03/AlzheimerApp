import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';


const AddImageScreen = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.profileContainer}>
                <FontAwesome name="user-circle" size={48} color="white" />
            </View>


            <View style={styles.pictureSelectorContainer}>
                <TouchableOpacity style={styles.addImageStyle}>
                    <View style={styles.outerBorder}>
                        <View style={styles.innerBorder}>
                            <Text style={[styles.textStyles, { fontSize: 34 }]}>Press to Add Image Here</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.pictureDisplay}>
                    <View>

                    </View>
                </View>
            </View>
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
    pictureSelectorContainer: {
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
    pictureDisplay: {
        flexDirection: 'row',
        width: '100%'
    }
})