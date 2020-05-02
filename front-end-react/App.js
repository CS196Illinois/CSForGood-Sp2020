import 'react-native-gesture-handler';

import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CameraPage from './src/camera.page';
import ResultPage from './src/result.page';

//'use strict';

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

function Homescreen({ navigation }) {
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
        </View>
      );
}

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
