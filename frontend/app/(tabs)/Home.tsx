import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileSideBar from '@/components/ProfileSideBar';

const COLORS = {
  background: '#24144A',
  card: '#FFFFFF',
  accent: '#6C5DD3',
  accentLight: '#AFAFFF',
  accentDark: '#3D2C6B',
  white: '#FFFFFF',
  textPrimary: '#FFFFFF',
  textSecondary: '#6C5DD3',
  navBackground: '#32235A',
  navText: '#E0E0E0',
  navIcon: '#AFAFFF',
  border: '#B8B8D1',
  placeholder: '#E8E8F2',
  shadow: '#000000',
};


const Landing = () => {

  const router = useRouter();

  const [toggleSideBar, setToggleSideBar] = useState(false);


  const handleLogout = () => {

  }

  const handleNewTask = () => {

  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

        <View style={{ position: 'absolute' }}>
          <ProfileSideBar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
        </View>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text style={styles.backButton}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <View style={styles.profileIcon} />
          </View>
          <TouchableOpacity onPress={() => setToggleSideBar(true)}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Start New Task</Text>
        <TouchableOpacity style={styles.imageUpload} onPress={() => router.push('/AddImageScreen')}>
          <Text style={styles.imageText}>Click to Add Image Here</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitleSmall}>Tasks In Progress</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20 }}>
          <View style={styles.taskCard}>
            <View style={styles.placeholderImage} />
            <Text style={styles.taskName}>Task 1</Text>
          </View>
          <View style={styles.taskCard}>
            <View style={styles.placeholderImage} />
            <Text style={styles.taskName}>Task Name</Text>
          </View>
          <View style={styles.taskCard}>
            <View style={styles.placeholderImage} />
            <Text style={styles.taskName}>Task 2</Text>
          </View>
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitleSmall}>Completed Tasks</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20 }}>
          <View style={styles.taskCard}>
            <View style={styles.placeholderImage} />
            <Text style={styles.taskName}>Task Name</Text>
          </View>
          <View style={styles.taskCard}>
            <View style={styles.placeholderImage} />
            <Text style={styles.taskName}>Task Name</Text>
          </View>
          <View style={styles.taskCard}>
            <View style={styles.placeholderImage} />
            <Text style={styles.taskName}>Task 3</Text>
          </View>
        </ScrollView>

        <Text style={styles.sectionTitle}>All Tasks</Text>
        <View style={styles.taskRow}>
          <Image
            source={{ uri: 'your_image_url_here' }}
            style={styles.taskImage}
          />
          <View style={styles.taskDetails}>
          </View>
        </View>
      </ScrollView>

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


    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 44,
    paddingBottom: 8,
    marginBottom: 8,
  },
  backButton: {
    color: COLORS.accent,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
    marginTop: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.accent,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 12,
    marginTop: 16,
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.accentLight,
    borderWidth: 2,
    borderColor: COLORS.accent,
  },
  menuIcon: {
    fontSize: 28,
    color: COLORS.accentLight,
    padding: 4,
    marginTop: 16,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 24,
    marginTop: 24,
    fontWeight: '800',
    paddingHorizontal: 20,
    marginBottom: 8,
    letterSpacing: 0.5,
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  sectionTitleSmall: {
    color: COLORS.accentLight,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  imageUpload: {
    borderWidth: 2,
    borderColor: COLORS.accent,
    borderStyle: 'dashed',
    borderRadius: 14,
    paddingVertical: 40,
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 20,
    backgroundColor: COLORS.card,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  imageText: {
    color: COLORS.accent,
    fontSize: 16,
    fontWeight: '700',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 2,
  },
  viewAll: {
    color: COLORS.accent,
    fontSize: 14,
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontWeight: '700',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.accent,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
  taskCard: {
    backgroundColor: COLORS.accentLight,
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
    width: 150,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  taskImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: COLORS.placeholder,
  },
  taskText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '700',
  },
  taskName: {
    color: COLORS.accentDark,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.placeholder,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.accentLight,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
    marginHorizontal: 20,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  taskDetails: {
    marginLeft: 12,
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
});