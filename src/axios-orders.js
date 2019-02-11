import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-app-burger-8c2af.firebaseio.com/"
});

export default instance;
