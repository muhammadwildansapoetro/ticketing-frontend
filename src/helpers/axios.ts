import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_BE;

export default axios.create({
  baseURL: baseURL,
});
