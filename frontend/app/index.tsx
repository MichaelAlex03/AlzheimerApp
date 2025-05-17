import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.imageStyles}
      />
      <Text style={styles.textStyles}>NeuroNest</Text>

      <View style={styles.welcomeViewContainer}>
        <Text style={[styles.textStyles, { fontSize: 30 }]}>Welcome</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.buttonStyles, {width: 180}]}>
            <Text>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonStyles, {width: 180}]}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={[styles.buttonStyles, {width: 240}]}>
          <Text>How To Sign Up?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2466',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    gap: 40
  },
  imageStyles: {
    width: 200,
    height: 200
  },
  textStyles: {
    color: '#D9D9D9',
    fontSize: 36
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 10
  }, 
  buttonStyles: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 64,
    alignItems: 'center'
  }
})