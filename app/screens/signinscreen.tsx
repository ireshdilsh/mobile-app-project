import { BarcodeScanningResult, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
// import imageView

export default function SigninScreen() {

  const router = useRouter();

  // using ref for camera view
  const cameraRef = useRef<CameraView>(null);

  const [permission, requestPermission] = useCameraPermissions();

  // to store photo uri
  const [photos, setphoto] = useState<string | undefined>(undefined);

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

  // get photos using ref
  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    setphoto(photo?.uri);
  }

  return (
    <View>
      <Text style={{ fontSize: 86 }}>signinscreen</Text>

      {/* Facing using can access front or back camera */}
      <CameraView barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }}

        // use to access camera methods
        ref={cameraRef}

        // log the barcode result
        onBarcodeScanned={(result) => {
          console.log(result);
        }}

        // styles
        style={{ width: 550, height: 400 }} facing={facing} />

      {/* switch camera facing */}
      <Text style={{ fontSize: 20, padding: 20, color: 'blue' }} onPress={toggleFacing}>Toggle Facing</Text>
      <Text style={{ fontSize: 20, padding: 20, color: '#ffffff', backgroundColor: '#ff0000' }} onPress={takePhoto}>Take Photo</Text>
      {photos && <Image source={{ uri: photos }} style={{ width: 200, height: 200 }} />}
    </View>
  )
}