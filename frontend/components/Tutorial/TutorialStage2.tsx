import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants';

interface TutorialStage2Props {
  tutorialStage: number;
  setTutorialStage: (stage: number) => void;
}

const TutorialStage2 = ({ tutorialStage, setTutorialStage }: TutorialStage2Props) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <Text style={{ fontSize: 22, color: '#ffffff', fontWeight: '700', textAlign: 'center', marginBottom: 24 }}>
        Press the area that says {'"Click to Add Image Here"'} to start uploading your first image!
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setTutorialStage(tutorialStage - 1)} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setTutorialStage(tutorialStage + 1)}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TutorialStage2

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.accent,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
    width: 150
  },
  buttonText: {
    fontWeight: '700',
    color: COLORS.accent,
    fontSize: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
})