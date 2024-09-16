import { CreateUserParams, UserCredentials } from "@/types";
import axios, { AxiosRequestConfig } from "axios";

const API_URL = "http://localhost:3001/api";

const config: AxiosRequestConfig = {
  withCredentials: true,
};

export const postRegisterUser = async (data: CreateUserParams) => axios.post(`${API_URL}/auth/register`, data, config);
export const postLoginUser = async (data: UserCredentials) => axios.post(`${API_URL}/auth/login`, data, config);

export const getAuthUser = () => axios.get(`${API_URL}/auth/status`, config);
