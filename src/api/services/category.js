import api from "../axios";
import endpoints from "../endpoints";

export const categoryList = async () => {
  const response = await api.get(endpoints.category.list);
  return response.data;
};

export const categoryCreate = async (data) => {
  const response = await api.post(endpoints.category.create, data);
  return response.data;
};

export const categoryDetails = async (id) => {
  const response = await api.get(endpoints.category.details(id));
  return response.data;
};

export const categoryUpdate = async (id, data) => {
  const response = await api.put(endpoints.category.update(id), data);
  return response.data;
};

export const categoryDelete = async (id) => {
  const response = await api.delete(endpoints.category.delete(id));
  return response.data;
};
