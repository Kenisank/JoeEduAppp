import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../shared/GlobalApi";
import { SliderModel } from "../models/Media.model";

function Slider() {
  const [slider, setSlider] = useState<any[]>([]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = async () => {
    const result = (await GlobalApi.getSlider()).data;
    let rest: any = result;
    let slider__: any = {} as SliderModel;
    let sliders: any[] = [] as SliderModel[];
    // console.log("Result", rest);
    const res: any = rest.data;
    //console.log("item", res);

    for (const item of res) {
      slider__.id = item.id;
      slider__.name = item.attributes.Name;
      slider__.image = item.attributes.image.data.attributes.url;
      sliders.push(slider__);
      slider__ = {} as SliderModel;
    }

    // item.forEach((element) => {
    //   console.log("element", element);
    //   slider.id = element.id;
    //   slider.name = element.attributes.Name;
    //   slider.image = element.attributes.image.data.attributes.url;
    // });

    //  console.log("sliders", sliders);
    setSlider(sliders);
  };
  return (
    <View>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // key={slider.id}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: Dimensions.get("screen").width * 0.87,
                height: 150,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Slider;
