import { SafeAreaView, StyleSheet, View } from "react-native";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";
import GlobalApi from "../shared/GlobalApi";
import Slider from "../components/Slider";
import VideoCourse from "../components/VideoCourse";
import CourseList from "../components/CourseList";
import { ScrollView } from "react-native";

function Home(props: any) {
  return (
    <SafeAreaView>
      <View style={{ padding: 15, marginTop: 30 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WelcomeHeader />
          <SearchBar />
          <Slider />
          <VideoCourse />
          <CourseList type={"basic"} />
          <CourseList type={"advance"} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Home;
