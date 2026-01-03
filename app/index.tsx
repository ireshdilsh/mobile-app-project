import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

export default function index() {

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