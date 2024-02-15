import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

function Layout() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Outlet />
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}

export default Layout;
