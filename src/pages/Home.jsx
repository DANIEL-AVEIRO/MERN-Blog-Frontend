import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <section className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                            Welcome to MERN Blog
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl">
                            Discover ideas,
                            <br />
                            learn something new.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            Explore useful articles, tutorials and
                            ideas from our growing collection of posts.
                        </p>

                        <div className="mt-8 flex gap-3">
                            <Link
                                to="/posts"
                                className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                            >
                                Explore Posts
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">
                            From the blog
                        </p>

                        <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-950">
                            Latest Posts
                        </h2>
                    </div>

                    <Link
                        to="/posts"
                        className="text-sm font-semibold text-gray-700 hover:text-black"
                    >
                        View all →
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <article className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Technology
                        </span>

                        <h3 className="mt-3 text-xl font-semibold text-gray-950">
                            Getting Started with MERN Stack
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Learn how MongoDB, Express, React and
                            Node.js work together.
                        </p>

                        <Link
                            to="/posts"
                            className="mt-5 inline-block text-sm font-semibold text-black"
                        >
                            Read article →
                        </Link>
                    </article>

                    <article className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            JavaScript
                        </span>

                        <h3 className="mt-3 text-xl font-semibold text-gray-950">
                            Understanding Async JavaScript
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Understand promises and asynchronous
                            JavaScript.
                        </p>

                        <Link
                            to="/posts"
                            className="mt-5 inline-block text-sm font-semibold text-black"
                        >
                            Read article →
                        </Link>
                    </article>

                    <article className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Backend
                        </span>

                        <h3 className="mt-3 text-xl font-semibold text-gray-950">
                            Building REST APIs with Express
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Learn how to structure an Express backend
                            with routes and services.
                        </p>

                        <Link
                            to="/posts"
                            className="mt-5 inline-block text-sm font-semibold text-black"
                        >
                            Read article →
                        </Link>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Home;