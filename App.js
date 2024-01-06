import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./app/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import HomeNav from "./app/navigations/HomeNav";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
