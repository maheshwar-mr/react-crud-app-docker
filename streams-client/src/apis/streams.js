import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_HOST_IP_ADDRESS || "http://localhost:3001",
});
