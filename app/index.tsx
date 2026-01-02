import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import home from './home'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View>
          <Text>index</Text>
          <Link href='/home' style={{
              backgroundColor:'blue',
              padding:12,
              marginTop:120
          }}>goto homepage</Link>
    </View>
  )
}

const styles = StyleSheet.create({
     
})