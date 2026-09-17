import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Getting Started with MERN Stack",
    description:
      "Learn how MongoDB, Express, React and Node.js work together to build modern web applications.",
    category: "Technology",
    date: "September 15, 2026",
  },
  {
    id: 2,
    title: "Understanding Async JavaScript",
    description:
      "Understand promises, async functions and how asynchronous code works in JavaScript.",
    category: "JavaScript",
    date: "September 12, 2026",
  },
  {
    id: 3,
    title: "Building REST APIs with Express",
    description:
      "Learn how to structure an Express backend with routes, controllers and services.",
    category: "Backend",
    date: "September 10, 2026",
  },
];

const Posts = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Header */}
      <div className="flex flex-col gap-6 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Blog</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
            All Posts
          </h1>

          <p className="mt-2 text-gray-600">
            Explore all articles and tutorials.
          </p>
        </div>

        <Link
          to="/posts/create"
          className="inline-flex w-fit rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Create Post
        </Link>
      </div>

      {/* Posts */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                {post.category}
              </span>

              <span className="text-xs text-gray-400">{post.date}</span>
            </div>

            <h2 className="mt-5 text-xl font-semibold text-gray-950">
              {post.title}
            </h2>

            <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
              {post.description}
            </p>

            <Link
              to={`/posts/${post.id}`}
              className="mt-6 text-sm font-semibold text-black"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Posts;
