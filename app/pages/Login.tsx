import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import color from "../shared/color";
import { Ionicons } from "@expo/vector-icons";
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useAuth } from "@clerk/clerk-expo";
// import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInWithOAuth from "../components/SignInWithOAuth";

function Login(props: any) {
  //WebBrowser.maybeCompleteAuthSession();

  // const [accessToken, setAccessToken] = useState(null);
  // const [userInfo, setUserInfo] = useState(null);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId:
  //     "752040929258-jnichrjb2trh9ah0atstgedavibbgj8h.apps.googleusercontent.com",
  //   expoClientId:
  //     "752040929258-is33u3c25fvdktp8kqedua3nhpfqfa7v.apps.googleusercontent.com",
  // });

  // useEffect(() => {
  //   handleSignInWithGoogle();
  // }, [response]);

  // async function handleSignInWithGoogle() {
  //   const user = await AsyncStorage.getItem("@user");
  //   if (!user) {
  //     if (response?.type === "success") {
  //       await getUserInfo(response.authentication.accessToken);
  //     }
  //   } else {
  //     setAccessToken(JSON.parse(user));
  //   }
  // }

  // const getUserInfo = async (token) => {
  //   if (!token) return;
  //   try {
  //     const responseu = await fetch(
  //       "https://www.googleapis.com/userinfo/vs/me",
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     const user = await responseu.json();
  //     await AsyncStorage.setItem("@user", JSON.stringify(user));
  //     setAccessToken(user);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   if (response?.type == "success") {
  //     setAccessToken(response.authentication.accessToken);
  //     console.log(response.authentication.accessToken);
  //   }
  // }, [response]);

  // const getUserData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/userinfo/v2/me",
  //       {
  //         headers: { Authorization: `Bearer ${accessToken}` },
  //       }
  //     );

  //     const user = await response.json();
  //     console.log(user);
  //     setUserInfo(user);
  //   } catch (error) {
  //     //Add yu own error handler here
  //   }
  // };

  return (
    // <ClerkProvider
    //   publishableKey={
    //     "pk_test_d29ydGh5LXNhd2Zpc2gtMzMuY2xlcmsuYWNjb3VudHMuZGV2JA"
    //   }
    // >
    <View style={styles.Container}>
      <Image
        style={styles.Image}
        source={require("../assets/images/login.png")}
      />
      <View style={styles.WelcomeContainer}>
        <Text style={styles.WelcomeText}>Welcome to Joe-Learn</Text>
        <Text style={styles.LoginText}>Login/Register</Text>
        {/* <Text>{JSON.stringify(accessToken)}</Text> */}
        <TouchableOpacity style={styles.Button}>
          <Ionicons name="logo-google" size={24} style={styles.GoogleIcon} />
          <SignInWithOAuth />
        </TouchableOpacity>
      </View>
    </View>
    // </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: color.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  Container: {
    // alignItems: "center",
    justifyContent: "center",
  },
  GoogleIcon: {
    color: "white",
    marginRight: 10,
  },
  Image: {
    width: 393,
    height: 241,
  },
  LoginText: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 20,
  },
  WelcomeText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  WelcomeContainer: {
    paddingTop: 40,
    marginTop: -20,
    backgroundColor: color.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default Login;
