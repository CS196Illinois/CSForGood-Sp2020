import 'react-native-gesture-handler';

import React, { PureComponent, useEffect, useState } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CameraPage from './src/camera.page';
import ResultPage from './src/result.page';


const Stack = createStackNavigator();
// This is the function that contains the whole App.
// The navigation container allows us to navigate around the navigation stack
// Essentially this allows us to change between each screen.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Results" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
// The homescreen page is stored right here
// It will display some instructions on how to use the app and will have the camera button
// the button will take you to the camera page.
function Homescreen({ navigation }) {
  const [expectedString,setString] = useState('');
   return (
     <View style={styles.container}>
           <View style={styles.title}>
             <Text style={styles.titletext}>Welcome to CS-For-Good project</Text>
             <Text></Text>
             <Text></Text>
             <Text></Text>
             <Text>Just type in what your picture should say,</Text>
             <Text></Text>
             <Text>press the camera button,</Text>
             <Text></Text>
             <Text>take a picture of the text you want analyzed,</Text>
             <Text></Text>
             <Text>and the app will give you a grade!</Text>
           </View>
           <View style={styles.textbox}>
             <Text>Enter what the image should say below:</Text>
             <TextInput
               style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 2 }}
               onChangeText={text => setString(text)}
               value={expectedString}
             />
           </View>
           <View style={styles.bottom}>
             <View style={styles.button}>
               <Button
                 onPress={() => {
                   navigation.navigate('Camera', {
                     textinfo: expectedString,
                   });
                 }}
                 color="#128dfe"
                 title="Camera"
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
    backgroundColor: '#fff',
    justifyContent: 'space-between',

  },
  titletext: {
    fontSize: 20,
    fontWeight: "bold"
  },
  textbox: {
    flex: 2,
    alignSelf: 'center'
  },
  button: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  title: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
  },
});
