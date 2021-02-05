import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PetDetail from './src/components/PetDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>G'Day</Text>
      <PetDetail name="Koda"/>
      <PetDetail name="Murphy"/>
      <PetDetail name="Effie"/>
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
