import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//import styles from './styles';


export default function ResultPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Maybe show the photo?</Text>
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
  title: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
