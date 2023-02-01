import axios from "axios";

export const restServer1 = axios.create({
  baseURL: "http://localhost:3000",
});
