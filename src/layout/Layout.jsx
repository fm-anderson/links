import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Layout() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
