import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900">
      {/* Navbar */}
      <Navbar />

      {/* Contenido dinámico */}
      {/* <main className="flex-1 container mx-auto px-4 py-6"> */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
