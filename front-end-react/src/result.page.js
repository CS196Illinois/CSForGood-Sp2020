import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

export default function ResultPage({ route, navigation }) {
  //receives picture from camera.page
  const { picture } = route.params;
  const { expectedString } = route.params;

  //send to back end
  //const res = await axios.post('enter-backend-url',{picture, expectedString});

  //display image, display result, display grade
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Image
            style={{ width: 200, height: 300 }}
            source={{ uri: picture.uri }}
          />
      </View>
      <View style={styles.result}>
          <Text style={styles.resulttext}>This would be the result</Text>
      </View>
      <View style={styles.score}>
          <Text>This would say the score</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  photo: {
    flex: 4,
    justifyContent: 'space-around',
  },
  result: {
    flex: 1,
    backgroundColor: '#fff',
  },
  score: {
    flex: 1,
  },
  resulttext: {
    fontSize: 20,
    fontWeight: "bold"
  },

});
