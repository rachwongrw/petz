import React from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import Pet from './src/components/PetDetail'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          pets.map(p => <Pet name={p.name} img={p.img}/>)
        }
      </ScrollView>
    </SafeAreaView>
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
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
