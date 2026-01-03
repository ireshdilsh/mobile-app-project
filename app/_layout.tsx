import { Stack } from 'expo-router';

export default function Layout() {

  const name = () => {
    console.log('Something Went Wrong !')


  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
      />



    </Stack>
  );
}
