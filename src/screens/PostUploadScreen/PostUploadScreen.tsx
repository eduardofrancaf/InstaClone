/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraType, FlashMode, CameraPictureOptions } from 'expo-camera';
import colors from '~/theme/colors';
import { MaterialIcons } from '@expo/vector-icons';

const flashModes = [FlashMode.off, FlashMode.on, FlashMode.auto, FlashMode.torch];

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const camera = useRef<Camera>(null);

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const micPermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === 'granted' && micPermission.status === 'granted'
      );
    };
    getPermissions();
  });

  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>;
  }
  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }

  const flipCamera = () => {
    setCameraType((currentCameraType) =>
      currentCameraType === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const flipFlash = () => {
    const currentFlashIndex = flashModes.indexOf(flash);
    const nextFlashIndex = currentFlashIndex === flashModes.length - 1 ? 0 : currentFlashIndex + 1;
    setFlash(flashModes[nextFlashIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current) {
      return;
    }
    const options: CameraPictureOptions = {
      quality: 0.7,
      base64: false,
      skipProcessing: true,
    };
    const result = await camera.current.takePictureAsync(options);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        ratio="4:3"
        style={styles.camera}
        type={cameraType}
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonsContainer, { top: 25 }]}>
        <MaterialIcons name="close" color={colors.white} size={30} />
        <Pressable onPress={flipFlash}>
          <MaterialIcons name={flashModeToIcon[flash]} color={colors.white} size={30} />
        </Pressable>
        <MaterialIcons name="settings" color={colors.white} size={30} />
      </View>
      <View style={[styles.buttonsContainer, { bottom: 25 }]}>
        <MaterialIcons name="photo-library" color={colors.white} size={30} />
        <Pressable onPress={takePicture}>
          <View
            style={{
              width: 50,
              aspectRatio: 1,
              borderRadius: 25,
              backgroundColor: colors.white,
            }}
          />
        </Pressable>
        <Pressable onPress={flipCamera}>
          <MaterialIcons name="flip-camera-ios" color={colors.white} size={30} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: colors.black },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'space-around',
  },
});

export default PostUploadScreen;
