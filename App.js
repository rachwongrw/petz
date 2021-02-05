import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pet from './src/components/PetDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>G'Day</Text>
      {
        pets.map(p => <Pet name={p.name} img={p.img}/>)
      }
    </View>
  );
}

const pets = [
  {name: "Koda", img: require('./assets/koda.jpg')},
  {name: "Murphy", img: require('./assets/murphy.jpg')},
  {name: "Effie", img: require('./assets/effie.jpg')}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
