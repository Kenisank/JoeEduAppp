import React, { useEffect, useState } from "react";
import GlobalApi from "../shared/GlobalApi";
import { VideoCourseModel } from "../models/Media.model";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

function VideoCourse(props: any) {
  const [videoList, setVideoList] = useState<any[]>([]);
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    getVideoCourse();
  }, []);

  const getVideoCourse = async () => {
    const resp = (await GlobalApi.getVideoCourse()).data;
    let rest: any = resp;
    //  console.log("rest", rest);
    let video: any = {} as VideoCourseModel;
    let videos: any[] = [] as VideoCourseModel[];
    const res: any = rest.data;
    //console.log("restt", rest.data);
    //console.log("rest", res);
    for (const item of res) {
      video.id = item.id;
      video.name = item.attributes.title;
      video.description = item.attributes.description;
      video.image = item.attributes.image.data.attributes.url;
      video.Topic = item.attributes.VideoTopic;

      videos.push(video);
      video = {} as VideoCourseModel;
    }

    setVideoList(videos);
    //console.log("list", videos);
  };

  const onPressCourse = (course: any) => {
    navigation.navigate("courseDetails", { courseData: course });
  };
  return (
    <View style={{ marginTop: 15, paddingBottom: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 3 }}>
        Video Course
      </Text>
      <FlatList
        data={videoList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressCourse(item)}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 180,
                height: 100,
                marginRight: 10,
                borderRadius: 7,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default VideoCourse;
