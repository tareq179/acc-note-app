import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";
import Input from "../components/input";
import { auth, db } from "../../App";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigateToSignUp = () => {
    navigation.navigate("Signup");
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("signed in successfully", res);
      })
      .catch((err) => {
        console.log("error signing in", err);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/login-image.png")}
          style={{ alignSelf: "center", width: "80%", height: 250 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
          Never forget your notes
        </Text>
      </View>

      <View style={{ margin: 25 }}>
        <Input
          placeholder="Email"
          autoCapitalize={"none"}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Login"
            customStyles={{ marginTop: 25, alignSelf: "center" }}
            onPress={login}
          />
        )}
      </View>

      <TouchableOpacity onPress={navigateToSignUp} style={{ marginTop: 25 }}>
        <Text style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Text style={{ color: "#18B18D", fontWeight: "bold" }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 16,
  },
});

// tinyLogo: {
//   alignSelf: "center",
//   width: 250,
//   height: 250,
// },
