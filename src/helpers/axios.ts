import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL_BE || "http://localhost:8000/api";

export default axios.create({
  baseURL: baseURL,
});
