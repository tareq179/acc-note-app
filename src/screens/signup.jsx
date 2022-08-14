import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const genderOptions = ["Male", "Female"];

export default function Signin({ navigation }) {
  const [gender, setGender] = useState(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>Never forget your note</Text>

      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Full Name" />
        <Input placeholder="Age" />
        {genderOptions.map((option) => {
          const selected = option === gender;
          return (
            <Pressable
              onPress={() => setGender(option)}
              key={option}
              style={styles.radioCointainer}
            >
              <View
                style={[
                  styles.outerCercle,
                  selected && styles.selectedOuterCircle,
                ]}
              >
                <View
                  style={[
                    styles.innerCercle,
                    selected && styles.selectedInnerCircle,
                  ]}
                />
              </View>
              <Text style={styles.radioText}>Male</Text>
            </Pressable>
          );
        })}
        <Button
          title={"Sign In"}
          customStyles={{ alignSelf: "center", marginTop: 60 }}
        />
      </View>
      <View style={styles.pressableText}>
        <Pressable
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text>
            Already have an account?{""}
            <Text style={{ color: "green", fontWeight: "bold" }}>Sign in</Text>
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

  pressableText: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  radioCointainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outerCercle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCercle: {
    height: 15,
    width: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
  radioText: {
    marginLeft: 10,
  },
  selectedOuterCircle: {
    borderColor: "orange",
  },
  selectedInnerCircle: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
});
