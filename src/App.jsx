import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Posts from "./pages/post/Posts";
import CreatePost from "./pages/post/CreatePost";
import UpdatePost from "./pages/post/UpdatePost";
import PostDetails from "./pages/post/PostDetails";

import CreateCategory from "./pages/category/CreateCategory";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import Categories from "./pages/category/Categories";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/posts/create" element={<CreatePost />} />

            <Route path="/posts/:id/update" element={<UpdatePost />} />

            <Route path="/categories/create" element={<CreateCategory />} />
          </Route>
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Posts />} />

          <Route path="/posts/:id" element={<PostDetails />} />

          <Route path="/categories" element={<Categories />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
