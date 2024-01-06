import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import GlobalApi from "../shared/GlobalApi";
import { CourseListModel } from "../models/Media.model";
import color from "../shared/color";
import { useNavigation } from "@react-navigation/native";

function CourseList(props) {
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCourseList();
  }, []);

  const getCourseList = async () => {
    const resp = (await GlobalApi.getCourseList(props.type)).data;

    //console.log("resp,", resp);
    let result = resp;
    const res = result.data;
    //console.log("res", res);
    let here = res[0].attributes;
    console.log("attributes", props.type, here.topic);

    const courses = resp.data.map((course) => ({
      id: course.id,
      name: course.attributes.name,
      description: course.attributes.description,
      image: course.attributes.image.data.attributes.url,
      Topic: course.attributes.topic,
    }));

    // for (const item of res) {
    //   course.id = item.id;
    //   course.name = item.attributes.name;
    //   course.description = item.attributes.description;
    //   course.image = item.attributes.image.data.attributes.url;
    //   course.Topic = item.attributes.topic;

    //   courses.push(course);
    //   // course = {} as CourseListModel;
    // }
    setCourseList(courses);
    // console.log("courses", courses[0]);
  };

  const onPressCourse = (course) => {
    navigation.navigate("courseDetails", { courseData: course });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 3,
          textTransform: "capitalize",
        }}
      >
        {props.type} List
      </Text>
      <FlatList
        data={courseList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: color.white,
              marginRight: 10,
              borderRadius: 10,
            }}
            onPress={() => onPressCourse(item)}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                height: 100,
                borderRadius: 10,
                width: 210,
              }}
            />
            <View style={{ padding: 10, overflow: "hidden" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ color: color.gray, fontWeight: "300" }}>
                {item.Topic?.length} Lessons
              </Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

export default CourseList;
