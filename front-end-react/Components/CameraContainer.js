import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { AntDesign, Ionicons } from '@expo/vector-icons';


export default function CameraContainer() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [zoomFactor, setZoomFactor] = useState(0);

  let camera = false;
  const snap = async () => {
    if (camera) {
      console.log(camera)
      let photo = await camera.takePictureAsync();
      console.log(photo); // to be replaced with function to send the photo to the backend
    }
  }
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 0.9 }} type={type} ref={ref => {
        camera = ref;
      }} zoom={zoomFactor}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>

        </View>
      </Camera>
      <View
        style={{
          flex: 0.1,
          alignSelf: 'flex-end',
          alignItems: 'center',
          backgroundColor:'white',
          width:'100%',
          justifyContent:'space-around',
          flexDirection:'row'
        }}
        >
        
        <AntDesign name="question" size={60} color="black" />
        <AntDesign name="camera" size={60} color="black" onPress={snap} />
        <Ionicons name="ios-reverse-camera" size={60} color="black" />

      </View>
    </View>
  );
}