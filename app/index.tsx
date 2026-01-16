import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function App() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/screens/signinscreen');
    }, 8000);
    return () => clearTimeout(timer);
  }, [router]);

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

// https://uncutprime.com/tag/her-fer-2025-hindi-hot-web-series-look/