import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import color from "../shared/color";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

function CourseContent({ course }: any) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  //let result = course;
  //console.log("result", result);
  //let res = result[0];
  //console.log("res", res);
  // let here = res[1];
  // console.log("here", here);
  // console.log("here", course);

  return (
    <View style={{ marginTop: 10, paddingTop: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Course Content </Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={course?.Topic}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("course-chapter", {
                courseContent: item,
              })
            }
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: color.white,
              marginBottom: 5,
              padding: 10,
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: color.gray,
                marginRight: 20,
              }}
            >
              {index + 1}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {item.Topic ? item.Topic : item.name}
            </Text>
            <Ionicons
              name="play-circle"
              size={24}
              color={color.primary}
              style={{ position: "absolute", right: 10 }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default CourseContent;
