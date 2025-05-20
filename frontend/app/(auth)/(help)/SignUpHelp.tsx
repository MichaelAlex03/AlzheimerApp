import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { router } from "expo-router";


const width = Dimensions.get('window').width;

const steps = [
  {
    title: 'Step 1: Create an account',
    description: 'Click "Sign Up," and provide your basic information to get started.',
  },
  {
    title: 'Step 2: Sign up via email',
    description: 'Enter a valid email address and create a secure password. Ensure your password is at least 8 characters long.',
  },
  {
    title: 'Step 3: Confirm your email',
    description: 'Check your inbox (and spam folder) for a confirmation email. Click the link to verify your account.',
  },
];

const SignUpHelp = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to sign up:</Text>
      <Carousel
        ref={ref}
        width={width * 0.9}
        height={175}
        data={steps}
        onProgressChange={progress}
        renderItem={({ item }) => (
  <View style={styles.slide}>
    <Text style={styles.stepText}>{item.title}</Text>
    <Text style={styles.descriptionText}>{item.description}</Text>
  </View>
)}
      />
      <Pagination.Basic
        progress={progress}
        data={steps}
        dotStyle={styles.dotStyle}
        containerStyle={styles.paginationContainer}
        onPress={onPressPagination}
      />
      <TouchableOpacity style={styles.ctaButton} onPress={() => (router.push('/SignUp'))}><Text style={styles.ctaText}>Sign up now!</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E2466',
  },
  title: {
    color: '#D9D9D9',
    fontSize: 24,
    marginBottom: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A2E7F',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#6964A2',
    padding: 20,
    margin: 10,
  },
  stepText: {
    color: '#D9D9D9',
    fontSize: 18,
    textAlign: 'center',
  },
  descriptionText: {
  color: '#D9D9D9',
  fontSize: 14,
  textAlign: 'center',
  marginTop: 10,
},
  dotStyle: {
    backgroundColor: '#6964A2',
    borderRadius: 50,
    width: 10,
    height: 10,
  },
  paginationContainer: {
    gap: 8,
    marginTop: 20,
  },
  ctaButton: {
  backgroundColor: '#D9D9D9',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  marginTop: 20,
},
ctaText: {
  color: '#111',
  fontSize: 16,
  textAlign: 'center',
},
});

export default SignUpHelp;