import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { categoryCreate } from "../../api/services/category";
import { toast } from "react-toastify";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Please enter a category name");
      return;
    }
    setLoading(true);
    try {
      const response = await categoryCreate({ name });
      toast.success(response.message);
      navigate("/categories");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <Link
          to="/categories"
          className="text-sm font-medium text-gray-500 hover:text-black"
        >
          ← Back to Categories
        </Link>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-950">
          Create Category
        </h1>

        <p className="mt-2 text-gray-600">
          Create a new category for your blog.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
      >
        {/* Title */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-800"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter category name"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-6">
          <Link
            to="/categories"
            className="rounded-lg px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            disabled={loading}
          >
            {loading ? "Creating category..." : "Create Category"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateCategory;
