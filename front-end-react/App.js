<<<<<<< HEAD
import 'react-native-gesture-handler';
import CameraPage from './src/camera.page';

=======


import 'react-native-gesture-handler';
>>>>>>> d902a127adcca9472cb4c5496ed47b47bf39c910
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import ResultPage from './src/result.page';

'use strict';

const Stack = createStackNavigator();
export default function App() {

return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Homescreen} />
    <Stack.Screen name="cam" component={CameraPage} />
    <Stack.Screen name="results" component={ResultPage} />
  </Stack.Navigator>
</NavigationContainer>

);
}

function Homescreen({navigation}) {
   return (
     <View style={styles.container}>
           <View style={styles.title}>
             <Text>Welcome to CS-For-Good project</Text>
           </View>
           <View style={styles.bottom}>
             <View style={styles.button}>
               <Button
                 onPress={() => {
                   navigation.navigate('cam')


                   //alert('This would open up the camera');
                   //respond();
                 }}
                 color="#841584"
                 title="Camera"
               />
             </View>
             <View style={styles.button}>
               <Button
                 onPress={() => {
                   alert('(Edit or remove this later) Take a picture of your paper with the camera then go to results');
                   //respond();
                 }}
                 color="#123456"
                 title="About"
               />
             </View>

             <View style={styles.button}>
               <Button
                 onPress={() => {
                   navigation.navigate('results')
                   //respond();
                 }}
                 color="#654321"
                 title="results"
               />
             </View>

           </View>

=======
import { RNCamera } from 'react-native-camera';


'use strict';
//import ExampleApp from './src/cameraPage';


const Stack = createStackNavigator();

export default function App() {

return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Homescreen} />
    <Stack.Screen name="cam" component={theCamera} />
  </Stack.Navigator>
</NavigationContainer>

);
}


function Homescreen({navigation}) {
   return (
     <View style={styles.container}>
           <View style={styles.title}>
             <Text>Welcome to our app (that we havent named yet)</Text>
           </View>
           <View style={styles.bottom}>
             <View style={styles.button}>
               <Button
                 onPress={() => {
                   navigation.navigate('cam')


                   //alert('This would open up the camera');
                   //respond();
                 }}
                 color="#841584"
                 title="Camera"
               />
             </View>
             <View style={styles.button}>
               <Button
                 onPress={() => {
                   alert('This would open up the camera roll');
                   //respond();
                 }}
                 color="#123456"
                 title="Camera Roll"
               />
             </View>
             <View style={styles.button}>
               <Button
                 onPress={() => {
                   alert('This would open up the history / ask for login information');
                   //respond();
                 }}
                 color="#654321"
                 title="History"
               />
             </View>
           </View>
>>>>>>> d902a127adcca9472cb4c5496ed47b47bf39c910
         </View>
         );
       //};
     }
<<<<<<< HEAD
=======

function theCamera({ navigation }) {
  //render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  //}


}

takePicture = async () => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    console.log(data.uri);
  }
};

>>>>>>> d902a127adcca9472cb4c5496ed47b47bf39c910
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  title: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
<<<<<<< HEAD
=======

//AppRegistry.registerComponent('', () => App);
>>>>>>> d902a127adcca9472cb4c5496ed47b47bf39c910
