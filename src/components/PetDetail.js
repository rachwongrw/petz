import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

const PetDetail = (props) => {
  const [treatCount, setTreatCount] = useState(0)

  return (
    <View>
      <Image source={props.img} style={styles.image}/>
      <Text>{props.name}</Text>
      <Text>Treat Count: {treatCount}</Text>
      <Button
        title="Give Treats"
        onPress={() => setTreatCount(treatCount + 1)}
        style={styles.btn}
      />
    </View>
  
  )
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: 10,
    color: "black"
  },
  image: {
    width: 300,
    height: 200
  }
})

export default PetDetail