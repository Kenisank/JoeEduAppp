import { create } from "apisauce";

const api = create({
  baseURL: "http://192.168.0.174:1337/api",
  headers: {
    "X-API-Key":
      "2134acdc5a59f136b34970e37e6df71ba9a3e4cdc51744e6c7eb70d7516500ec257dbb584300207f70589189bbf35b402153128a5f8860d592a4754ffa3618434e300ddbc7ad223befa8379b65387f88d1e3a322205d011288f07f08421bdec1567ad8f72dabfa33162d924f1b9e9cdbfc55041782400a89e85ef16fd40c427f",
  },
});

const getSlider = () => api.get("/sliders?populate=*");
const getVideoCourse = () => api.get("video-courses?populate=*");
const getCourseList = (type: string) => api.get("course-lists?filters[type][$eq]=" + type + "&populate=*");
// api.get(
//   "course-lists?filters[type][$eq]=" +
//     type +
//     "&populate=[Topic][populate][0]=Content&populate[image][populate][0]=image"
// );
// const getVideoCourse = () => api.get("video-courses?populate=*");

const GlobalApi = {
  getSlider,
  getVideoCourse,
  getCourseList,
};

export default GlobalApi;
