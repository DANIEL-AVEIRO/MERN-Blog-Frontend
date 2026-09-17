import { Link } from "react-router-dom";

const UpdatePost = () => {
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
                    Edit Post
                </h1>

                <p className="mt-2 text-gray-600">
                    Update your article information.
                </p>
            </div>

            <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
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
                        defaultValue="Getting Started with MERN Stack"
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
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
                        defaultValue="technology"
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-black"
                    >
                        <option value="technology">
                            Technology
                        </option>

                        <option value="javascript">
                            JavaScript
                        </option>

                        <option value="backend">
                            Backend
                        </option>
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
                        defaultValue="Learn how MongoDB, Express, React and Node.js work together to build modern web applications."
                        className="mt-2 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
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
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </section>
    );
}

export default UpdatePost;