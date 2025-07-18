import axios from "./axios.js";

export const registerUser = async (data) => axios.post("/register", data);
