import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import color from "../shared/color";
import { useNavigation, useRoute } from "@react-navigation/native";

function CourseChapter() {
  let param: any = useRoute().params;
  const navigation = useNavigation();
  const [chapter, setChapter] = useState();

  //let here: any = param;

  useEffect(() => {
    console.log("courseContent", param.courseContent);
    setChapter(param.courseContent.Content);
  }, []);

  return (
    <View style={{ padding: 20, paddingTop: 50 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back-sharp"
          size={28}
          color="black"
          style={{ paddingBottom: 7 }}
        />
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
}

export default CourseChapter;
