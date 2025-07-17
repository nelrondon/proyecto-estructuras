import axios from "./axios.js";

export const getProperties = async () => axios.get(`/properties`);
export const getPropertyById = async (id) => axios.get(`/properties/${id}`);
