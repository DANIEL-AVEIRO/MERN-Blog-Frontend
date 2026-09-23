import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
function Header() {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-black" : "text-gray-500 hover:text-black"
    }`;

  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    window.location.reload();
  };
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-950">
          MERN Blog
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/posts" className={navLinkClass}>
            Posts
          </NavLink>

          <NavLink to="/categories" className={navLinkClass}>
            Categories
          </NavLink>
        </nav>
        {token ? (
          <div className="flex items-center gap-3">
            <Link
              onClick={handleLogout}
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black sm:block"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black sm:block"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
