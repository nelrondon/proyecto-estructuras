import axios from "./axios.js";

export const registerUser = async (data) => axios.post("/register", data);

export const loginUser = async (data) => axios.post("/login", data);

export const verifyToken = async () => axios.get("/verify-token");
