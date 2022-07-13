import { StyleSheet, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'

export default function Signin() {
  return (
    <SafeAreaView>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/empty-state.png")}
      />
        <Text>
          Never forget your note
        </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  tinyLogo:{
    alignSelf:'center',
    width:100
  }
})