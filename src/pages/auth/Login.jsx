import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.token);
      toast.success(response.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-950">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Sign in to your account to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mt-5">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-black hover:underline"
        >
          Create one
        </Link>
      </p>
    </div>
  );
};

export default Login;
