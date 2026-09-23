const endpoints = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
  },
  category: {
    list: "/categories",
    create: "/categories",
    details: (id) => `/categories/${id}`,
    update: (id) => `/categories/${id}`,
    delete: (id) => `/categories/${id}`,
  },
  post: {
    list: "/posts",
    create: "/posts",
    details: (id) => `/posts/${id}`,
    update: (id) => `/posts/${id}`,
    delete: (id) => `/posts/${id}`,
  },
};
export default endpoints;
