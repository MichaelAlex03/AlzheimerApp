import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
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
        <View style={styles.buttonContainer}>
          <CustomButton
            title={"Login"}
            width={270}
            onPress={() => (router.push('/Login'))}
          />
          <CustomButton
            title={"Sign Up"}
            width={270}
            onPress={() => (router.push('/SignUp'))}
            containerStyle={{ marginBottom: 60 }}
          />
        </View>


        <CustomButton
          title={"Help"}
          width={270}
          onPress={() => (router.push('/SignUpHelp'))}
          containerStyle={{ backgroundColor: '#5c2aad' }}
        />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2466',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 48,
    marginBottom: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 10
  },
  buttonStyles: {
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 64,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
  }
})