import axios from "axios";

export default axios.create({
  baseURL: "https://5dd3a2586625890014a6e8d6.mockapi.io/api/lms/",
  responseType: "json"
});
