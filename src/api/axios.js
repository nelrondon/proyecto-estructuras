import axios from "axios";

const API_URL = import.meta.env.PROD
  ? "https://backend-proyecto-estructuras.onrender.com/api"
  : "http://localhost:4000/api/";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
