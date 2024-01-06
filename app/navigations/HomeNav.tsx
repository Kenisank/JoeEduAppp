import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import CourseDetails from "../pages/CourseDetails";
import { RootStackParamList } from "./types";
import CourseChapter from "../pages/CourseChapter";

const Stack = createNativeStackNavigator();

function HomeNav(props: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      {/* <Stack.Screen
        name="courseDetails"
        component={CourseDetails}
      ></Stack.Screen>
      <Stack.Screen
        name="course-chapter"
        component={CourseChapter}
      ></Stack.Screen> */}
    </Stack.Navigator>
  );
}

export default HomeNav;
