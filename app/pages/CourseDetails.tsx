import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import color from "../shared/color";
import CourseContent from "../components/CourseContent";

function CourseDetails(props: any) {
  let param: any = useRoute().params;
  const [course, setCourse] = useState([]);
  let course__: any = param.courseData;
  const navigation = useNavigation();
  useEffect(() => {
    //console.log("course__", course__);
    //console.log("param", param.courseData);
    setCourse(param.courseData);
  }, []);
  return (
    <View style={{ padding: 20, paddingTop: 40 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back-sharp"
          size={28}
          color="black"
          style={{ paddingBottom: 7 }}
        />
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {course__.name}
        </Text>
        <Text style={{ color: color.gray }}>By JoeEdu</Text>
        <Image
          source={{ uri: course__.image }}
          style={{ height: 150, marginTop: 10, borderRadius: 10 }}
        />
        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>
          About Course
        </Text>
        <Text numberOfLines={4} style={{ color: color.gray }}>
          {course__.description}
        </Text>
      </View>
      <CourseContent course={course__} />
    </View>
  );
}

export default CourseDetails;
