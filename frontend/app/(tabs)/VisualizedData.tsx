import FooterNav from '@/components/FooterNav';
import ProfileSideBar from '@/components/ProfileSideBar';
import { COLORS } from '@/constants';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
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

            <View style={{ flexDirection: 'row', gap: 30 }}>
              <View style={styles.blackSpotsContainer}>
                <Text style={[styles.textStyles, { fontSize: 28, fontWeight: 700 }]}>Black Spots</Text>
                <View style={styles.blackSpots}>

                </View>
              </View>

              <View style={styles.heightOfSignsContainer}>
                <Text style={[styles.textStyles, { fontSize: 28, fontWeight: 700 }]}>Height of Signs</Text>
                <View style={styles.heightOfSigns}>

                </View>
              </View>
            </View>

          </View>
        </ScrollView>
        
        <View style={styles.footerContainer}>
          <FooterNav />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default VisualizedData

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  mainContainer: {
    flex: 1,
    marginTop: 60,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 120, // Add padding to prevent content from being hidden behind footer
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.background,
    paddingBottom: 10
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
    width: 767,
    height: 250,
    backgroundColor: '#6964A2',
    borderRadius: 32,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  blackSpotsContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    width: 280
  },
  blackSpots: {
    width: '100%',
    height: 311,
    backgroundColor: '#6964A2',
    borderRadius: 32,
    marginTop: 10
  },
  heightOfSignsContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    width: 461
  },
  heightOfSigns: {
    width: '100%',
    height: 311,
    backgroundColor: '#6964A2',
    borderRadius: 32,
    marginTop: 10
  }

})