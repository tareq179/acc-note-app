import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  View,
  Pressable,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/empty-state.png")}
      />
      <Text style={styles.text}>Never forget your note</Text>

      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />
        <Button
          title={"Login"}
          customStyles={{ alignSelf: "center", marginTop: 60 }}
        />
      </View>
      <View style={styles.pressableText}>
        <Pressable
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text>
            {" "}
            Don't have an account?{""}
            <Text style={{ color: "green", fontWeight: "bold" }}>Sign up</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    alignSelf: "center",
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },
  pressableText: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
