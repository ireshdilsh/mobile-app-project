import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function about() {
  return (
    <View>
      <Text>about</Text>
      <Link href='/home' style={{
          backgroundColor:'red',
          padding:12
      }}>Go to home</Link>
    </View>
  )
}