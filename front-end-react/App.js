import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Separator,
  SafeAreaView,
  color,
  accessibilityLabel,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Welcome to our app (that we havent named yet)</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.button}>
          <Button
            onPress={() => {
              alert('This would open up the camera');
              respond();
            }}
            color="#841584"
            title="Camera"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              alert('This would open up the camera roll');
              respond();
            }}
            color="#123456"
            title="Camera Roll"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              alert('This would open up the history / ask for login information');
              respond();
            }}
            color="#654321"
            title="History"
          />
        </View>
      </View>
    </View>
  );
}

export function respond() {
  return <text>Response</text>;
  //this function when called will just say respons the export default means we can use it throughout the app
  // later use <text>good job on the {input char here} letter
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
