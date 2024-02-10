import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { getCurrentMoment } from "@/lib/helper";

function Layout() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />

      <Outlet />

      <Footer />
      <Toaster />
    </div>
  );
}

export default Layout;
