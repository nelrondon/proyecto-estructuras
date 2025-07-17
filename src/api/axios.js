import axios from "axios";

const API_URL = "https://backend-proyecto-estructuras.onrender.com/api";
// const API_URL = "http://localhost:4000/api/";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
