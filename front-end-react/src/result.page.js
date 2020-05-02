import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//import styles from './styles';


export default function ResultPage({ route, navigation}) {
  const { picture } = route.params;
  //const { pictureURI } = JSON.stringify(picture);
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Text>picture: {JSON.stringify(picture)}</Text>
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
  },
});
