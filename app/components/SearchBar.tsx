import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import color from "../shared/color";

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={color.gray} />
      <TextInput placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
    alignItems: "center",
  },
});

export default SearchBar;
