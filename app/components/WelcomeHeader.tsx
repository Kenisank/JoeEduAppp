import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
function WelcomeHeader(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello, </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> Joe</Text>
      </View>
      <Image
        source={require("../assets/images/user.png")}
        style={{ width: 40, height: 40, borderRadius: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default WelcomeHeader;
