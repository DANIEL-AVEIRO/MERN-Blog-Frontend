import { Link } from "react-router-dom";
import { categoryList } from "../../api/services/category";
import { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryList();
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Header */}
      <div className="flex flex-col gap-6 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Blog</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
            All Categories
          </h1>

          <p className="mt-2 text-gray-600">Explore all categories.</p>
        </div>

        <Link
          to="/categories/create"
          className="inline-flex w-fit rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Create Category
        </Link>
      </div>

      {/* Categories */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category._id}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-950">
              {category.name}
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;
