import axios from "axios";
import { API_URL } from "../constants/env";

export const publicApi = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const authApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
