import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function home() {
  return (
    <View>
      <Text>home</Text>
      <Link href='/about' style={{
          backgroundColor:'green',
          padding:12,
          marginTop:200
      }}>Goto About Page</Link>
    </View>
  )
}