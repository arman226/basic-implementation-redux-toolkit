import axios from "axios";
import { REQUEST_TIMEOUT_SECONDS } from "data/constants";

export default axios.create({
  baseURL: process.env.REACT_APP_JSON_PLACEHOLDER,
  timeout: REQUEST_TIMEOUT_SECONDS * 1000,
});
