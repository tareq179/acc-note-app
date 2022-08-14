import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Image
        source={require("../../assets/adaptive-icon.png")}
        style={{ width: 40, height: 40 }}
      />
      <Image
        source={require("../../assets/adaptive-icon.png")}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
