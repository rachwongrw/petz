import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PetDetail from './src/components/PetDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>G'Day</Text>
      <PetDetail name="Koda" img={require('./assets/koda.jpg')}/>
      <PetDetail name="Murphy" img={require('./assets/murphy.jpg')}/>
      <PetDetail name="Effie" img={require('./assets/effie.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
