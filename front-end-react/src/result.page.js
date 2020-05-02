import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

export default function ResultPage({ route, navigation }) {
  //receives picture from camera.page
  const { picture } = route.params;

  //sets up info for backend
  const [expectedString,setString] = useState('');

  //send to back end
  //const res = await axios.post('enter-backend-url',{picture, expectedString});

  //ask for text, display image, display result, display grade
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text>Enter what the image should say below:</Text>
        <TextInput
          style={{ height: 40, width: 350, borderColor: 'gray', borderWidth: 2 }}
          onChangeText={text => setString(text)}
          value={expectedString}
        />
      </View>
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
  textbox: {
    flex: 1,
  },
  photo: {
    flex: 4,
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
