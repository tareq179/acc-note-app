import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Signin from "./src/screens/signin";
import Signup from "./src/screens/signup";
import Edit from "./src/screens/edit";
import Create from "./src/screens/create";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBn2varMK9xBDSbekqgwm9uXhDjHOHHZ3c",
  authDomain: "acc-note-app-2641b.firebaseapp.com",
  projectId: "acc-note-app-2641b",
  storageBucket: "acc-note-app-2641b.appspot.com",
  messagingSenderId: "894014087987",
  appId: "1:894014087987:web:a483f2bf0b112157441446",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false; // not authenticated
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Create" component={Create} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
