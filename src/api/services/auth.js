import api from "../axios";
import endpoints from "../endpoints";

export const register = async (data) => {
  const response = await api.post(endpoints.auth.register, data);
  return response.data;
};

export const login = async (data) => {
  const response = await api.post(endpoints.auth.login, data);
  return response.data;
};
