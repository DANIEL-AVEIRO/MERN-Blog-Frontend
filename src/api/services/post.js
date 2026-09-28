import api from "../axios";
import endpoints from "../endpoints";

export const postList = async (search = "") => {
  const response = await api.get(`${endpoints.post.list}/?search=${search}`);
  return response.data;
};

// http://localhost:8000/api/post/list/?search=keyword
export const postCreate = async (data) => {
  const response = await api.post(endpoints.post.create, data);
  return response.data;
};

export const postDetails = async (id) => {
  const response = await api.get(endpoints.post.details(id));
  return response.data;
};

export const postUpdate = async (id, data) => {
  const response = await api.put(endpoints.post.update(id), data);
  return response.data;
};

export const postDelete = async (id) => {
  const response = await api.delete(endpoints.post.delete(id));
  return response.data;
};
