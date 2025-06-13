import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '@/constants';
import ProfileSideBar from '@/components/ProfileSideBar';

interface VisualizedData {
  taskNumber: number
}

const VisualizedData = ({ taskNumber }: VisualizedData) => {

  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => setToggleSideBar(true)}>
          <FontAwesome name="user-circle" size={48} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ position: 'absolute' }}>
        <ProfileSideBar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
      </View>

      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollView}>

        <View style={styles.textContainer}>
          <Text style={[styles.textStyles, { fontSize: 28, fontWeight: 700 }]}>Visualized Data - Task 1</Text>
        </View>

        <View style={styles.content}>

          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={styles.pictureContainer}>
              <Text style={[styles.textStyles, { fontSize: 28, fontWeight: 700 }]}>Picture</Text>
              <Image style={styles.picture} />
            </View>


            <View style={styles.contrastContainer}>
              <Text style={[styles.textStyles, { fontSize: 28, fontWeight: 700 }]}>Color Contrast</Text>
              <View style={styles.contrastInfo}>

              </View>
            </View>
          </View>


          <View style={styles.recommendContainer}>
            <Text style={[styles.textStyles, { fontSize: 28, fontWeight: 700 }]}>Recommendations</Text>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default VisualizedData

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  textStyles: {
    color: '#FFFFFF'
  },
  profileContainer: {
    alignItems: 'flex-end',
    width: '100%'
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
    width: '100%'
  },
  content: {
    width: '100%',
    gap: 20
  },
  pictureContainer: {
    alignItems: 'flex-start',
    marginTop: 60,
    width: 451
  },
  picture: {
    width: '100%',
    height: 622,
    backgroundColor: '#6964A2',
    borderRadius: 32,
    marginTop: 10
  },
  scrollView: {
    alignItems: 'flex-start',
    marginTop: 60
  },
  contrastContainer: {
    alignItems: 'flex-start',
    marginTop: 60,
    width: 300
  },
  contrastInfo: {
    width: '100%',
    height: 622,
    backgroundColor: '#6964A2',
    borderRadius: 32,
    marginTop: 10
  },
  recommendContainer: {

  },
  recommendations: {

  }
})