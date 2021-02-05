import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const PetDetail = (props) => {
  return (
    <View>
      <Image source={props.img} style={styles.image}/>
      <Text>{props.name}</Text>
    </View>
  
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200
  }
})

export default PetDetail