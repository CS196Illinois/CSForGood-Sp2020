import 'react-native-gesture-handler';

import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
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
        <Stack.Screen name="cam" component={CameraPage} />
        <Stack.Screen name="Results" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
// The homescreen page is stored right here
// It will display some instructions on how to use the app and will have the camera button
// the button will take you to the camera page.
function Homescreen({ navigation }) {
   return (
     <View style={styles.container}>
           <View style={styles.title}>
             <Text style={styles.titletext}>Welcome to CS-For-Good project</Text>
             <Text></Text>
             <Text></Text>
             <Text></Text>
             <Text>Just press the camera button,</Text>
             <Text></Text>
             <Text>take a picture of the text you want analyzed,</Text>
             <Text></Text>
             <Text>type in what your picture should say,</Text>
             <Text></Text>
             <Text>and the app will give you a grade!</Text>
           </View>
           <View style={styles.bottom}>
             <View style={styles.button}>
               <Button
                 onPress={() => {
                   navigation.navigate('cam')
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
  titletext: {
    fontSize: 20,
    fontWeight: "bold"
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
