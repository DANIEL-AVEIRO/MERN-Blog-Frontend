import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/services/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);

    try {
      const response = await register({ name, email, password });
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
      <form onSubmit={handleSubmit}>
        {/* Name */}
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
            placeholder="Your name"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mt-5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
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
            placeholder="Create a password"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-5">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-semibold text-gray-800"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-black hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
