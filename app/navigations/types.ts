// types.ts
import { RouteProp, NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  home: undefined;
  courseDetails: { data: any };
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, "home">;
export type HomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "home"
>;
