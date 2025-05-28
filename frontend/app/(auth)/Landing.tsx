import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Landing = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <View style={styles.profileIcon} />
          </View>
          <TouchableOpacity>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Start New Task</Text>
        <TouchableOpacity style={styles.imageUpload}>
          <Text style={styles.imageText}>Click to Add Image Here</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Task In Progress</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.taskCard}>
            <Image
              source={{ uri: 'your_image_url_here' }}
              style={styles.taskImage}
            />
            <Text style={styles.taskText}>Status: In Progress</Text>
            <Text style={styles.taskName}>Task 1</Text>
          </View>
          <View style={styles.taskCard}>
            <View style={styles.placeholderImage} />
            <Text style={styles.taskText}>Status: N/A</Text>
            <Text style={styles.taskName}>Task Name</Text>
          </View>
          <View style={styles.taskCard}>
            <View style={styles.placeholderImage} />
            <Text style={styles.taskText}>Status: In Progress</Text>
            <Text style={styles.taskName}>Task 2</Text>
          </View>
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed Task</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navText}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>✅</Text>
          <Text style={styles.navText}>Complete Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E1D62',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#CCC',
  },
  menuIcon: {
    fontSize: 28,
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 24,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
  imageUpload: {
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 16,
    backgroundColor: '#5B4C9F',
  },
  imageText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  viewAll: {
    color: '#AFAFFF',
    fontSize: 14,
    backgroundColor: '#5B4C9F',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  taskCard: {
    backgroundColor: '#705BA1',
    padding: 10,
    borderRadius: 12,
    marginRight: 10,
    width: 140,
    marginVertical: 8,
  },
  taskImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginBottom: 6,
  },
  taskText: {
    color: '#B8E0FF',
    fontSize: 14,
    fontWeight: '600',
  },
  taskName: {
    color: '#fff',
    fontSize: 16,
  },
  placeholderImage: {
    width: '100%',
    height: 80,
    backgroundColor: '#444',
    borderRadius: 8,
    marginBottom: 6,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#705BA1',
    padding: 10,
    borderRadius: 12,
    marginTop: 8,
    marginHorizontal: 16,
  },
  taskDetails: {
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#705BA1',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: '#fff',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});