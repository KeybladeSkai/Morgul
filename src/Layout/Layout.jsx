import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Footer";
import "../styles/Home/Home.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableContainer = document.getElementById(
      "your-scrollable-container"
    );

    if (scrollableContainer) {
      setTimeout(() => {
        scrollableContainer.scrollTop = 0;
      }, 0);
    }
  }, [pathname]);

  return (
    <div
      id="your-scrollable-container"
      className="overflow-auto overflow-x-hidden h-[100svh]"
    >
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
