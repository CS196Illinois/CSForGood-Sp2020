import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import * as ImageManipulator from "expo-image-manipulator";
import { Asset } from "expo-asset";

export default function ResultPage({ route, navigation }) {
  //receives picture from camera.page
  const { picture } = route.params;
  const { expectedString } = route.params;

  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    getFeedback();
  }, [])

  const getFeedback = async () => {
    //send image to back end and receive feedback

    // formData.append('file', { url: picture.uri.replace('file://', ''), name: 'image.jpg', type: 'image/jpeg' })

    // console.log(formData);

    const image = Asset.fromURI(picture.uri);
    await image.downloadAsync();
    const compImage = await ImageManipulator.manipulateAsync(image.localUri || image.uri, [{resize:{width:100}}], {compress:0.2})

    var formdata = new FormData();
    formdata.append('file', compImage);


    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://91e523a5.ngrok.io/ocr2?expect=test", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


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
        <Text style={styles.resulttext}>Result = {feedback}</Text>
      </View>
      <View style={styles.score}>
        <Text>Score = {score}</Text>
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
