import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categoryList } from "../../api/services/category.js";
import { toast } from "react-toastify";
import { postCreate } from "../../api/services/post.js";

const CreatePost = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !category) {
      toast.warn("All fields are required");
    }
    setLoading(true);
    try {
      const response = await postCreate({ title, description, category });
      toast.success(response.message);
      navigate("/posts");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await categoryList();
      setCategories(response.data);
    };
    fetchCategories();
  }, []);
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <Link
          to="/posts"
          className="text-sm font-medium text-gray-500 hover:text-black"
        >
          ← Back to Posts
        </Link>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-950">
          Create Post
        </h1>

        <p className="mt-2 text-gray-600">
          Create a new article for your blog.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
      >
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-800"
          >
            Title
          </label>

          <input
            id="title"
            type="text"
            placeholder="Enter post title"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="mt-6">
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-gray-800"
          >
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-black"
          >
            <option value="" disabled selected>
              Select a category
            </option>

            {categories.map((category) => {
              return <option value={category._id}>{category.name}</option>;
            })}
          </select>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-800"
          >
            Description
          </label>

          <textarea
            id="description"
            rows="8"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your post..."
            className="mt-2 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
          />
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-6">
          <Link
            to="/posts"
            className="rounded-lg px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            disabled={loading}
          >
            {loading ? "Creating Post....." : "Create Post"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
