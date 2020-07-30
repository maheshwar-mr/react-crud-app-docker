import axios from "axios";

export default axios.create({
  baseURL: `http://${process.env.REACT_APP_HOST_IP_ADDRESS}:3001`,
});
