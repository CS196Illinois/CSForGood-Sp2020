import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';


//import styles from './styles';


export default function ResultPage({ route, navigation}) {
  const { picture } = route.params;
  const [expectedString,setString] = useState('');

  //send to back end
  //const res = await axios.post('enter-backend-url',{picture, expectedString});


  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setString(text)}
        value={expectedString}
      />
      <View style={styles.photo}>
          <Text>picture: {JSON.stringify(picture.uri)}</Text>
      </View>
      <View style={styles.result}>
          <Text>This would be the result</Text>
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
  },
  score: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  photo: {
    flex: 5,
    width: 50,
    height: 50,
  },
});
