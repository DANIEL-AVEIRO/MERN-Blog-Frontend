import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Posts from "./pages/post/Posts";
import CreatePost from "./pages/post/CreatePost";
import UpdatePost from "./pages/post/UpdatePost";
import PostDetails from "./pages/post/PostDetails";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Posts />} />

          <Route path="/posts/create" element={<CreatePost />} />

          <Route path="/posts/:id" element={<PostDetails />} />

          <Route path="/posts/:id/update" element={<UpdatePost />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
