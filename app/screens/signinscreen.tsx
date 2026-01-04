import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function SigninScreen() {

     const router = useRouter();

  return (
    <View>
      <Text style={{fontSize:86}}>signinscreen</Text>
    </View>
  )
}