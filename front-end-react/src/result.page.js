import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import * as ImageManipulator from "expo-image-manipulator";
import { Asset } from "expo-asset";
import axios from 'axios';
import { RNS3 } from 'react-native-s3-upload';
import Loader from './Loader';

export default function ResultPage({ route, navigation }) {
  //receives picture from camera.page
  const { picture, expectedString } = route.params;

  const [result, setResult] = useState({ similarity: 0, text: '', loading: true }); //state variable and function to call it is declared here using the the useState hook

  const ref = useRef();

  useEffect(() => {   //useEffect hook is used here to make an API call as soon as this component mount

    getFeedback(); //function will upload image to AmazonS3, get a signed Url back and then send it to the backend for processing
  }, [])




  const getFeedback = async () => {


    //Since, the captured image is very large, the following code is used to compress the file
    const image = Asset.fromURI(picture.uri);
    await image.downloadAsync();
    const compImage = await ImageManipulator.manipulateAsync(image.localUri || image.uri, [], { compress: 0 })

    const file = {                  // this is the file object to be uploaded to Amazon S3 bucket
      uri: compImage.uri,
      name: `image${Math.random()}.jpg`,
      type: "image/jpg"
    }

    // const options = { //the object here is used to set up Amazon S3. All details have been removed to ensure safety.

    // }

    

    RNS3.put(file, options).then(response => {                //RNS3 package is used to get a public URL back for the backend to use
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");     //Standard Error Handling


      axios.get(`http://09d98592.ngrok.io/ocr?url=${response.body.postResponse.location}&expect=${expectedString}`)  //Calls our API for OCR Processing
        .then((res) => {
          setResult({ similarity: res.data.similarity, text: res.data.text, loading: false }) // we update state when we receive response
        })

    });
  }

  if (result.loading) {
    return (
      <Loader/>
      )

  }


  //display image, display result, display grade
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Image
          style={{ width: 200, height: 400 }}
          source={picture}
        />
      </View>
      <View style={styles.result}>
        <Text style={styles.resulttext}>Result: {result.text}</Text>
      </View>
      <View style={styles.score}>
        <Text>Score = {result.similarity * 100}%</Text>
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
