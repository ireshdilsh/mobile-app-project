import { BarcodeScanningResult, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function SigninScreen() {

  const router = useRouter();

  const [permission, requestPermission] = useCameraPermissions();

  // for camera facing start with back camera
  const [facing, setfacing] = useState<CameraType>('back');

  const toggleFacing = () => {
    setfacing((prev) => (prev === 'back' ? 'front' : 'back'));
  };

  // if permission is null, we are still loading
  if (!permission?.granted) {
    return (
      <View>
        <Text style={{ fontSize: 20, marginBottom: 20, marginTop: 150 }}>We need your permission to show the camera</Text>
        <Text style={{ fontSize: 20, padding: 20, color: 'blue' }} onPress={requestPermission}>Grant Permission</Text>
      </View>
    )
  }

  return (
    <View>
      <Text style={{ fontSize: 86 }}>signinscreen</Text>

      {/* Facing using can access front or back camera */}
      <CameraView barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }} 

      // log the barcode result
      onBarcodeScanned={(result) => {
        console.log(result);
      }}

      // styles
      style={{ width: 550, height: 400 }} facing={facing} />

      {/* switch camera facing */}
      <Text style={{ fontSize: 20, padding: 20, color: 'blue' }} onPress={toggleFacing}>Toggle Facing</Text>
    </View>
  )
}