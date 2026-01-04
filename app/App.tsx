import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router';

export default function App() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/screens/signinscreen');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 70,
    width: 250
  },
})