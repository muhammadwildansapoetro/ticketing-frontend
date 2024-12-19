import axios from "axios";

const base_URL = "http://localhost:8000/api";

export default axios.create({
  baseURL: base_URL,
});
