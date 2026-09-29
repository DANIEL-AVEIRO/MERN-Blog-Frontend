import { Outlet } from "react-router-dom";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen relative flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
