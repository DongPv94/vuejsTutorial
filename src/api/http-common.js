import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8081/dong",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type",
    "Content-type": "application/json",
  },
});
