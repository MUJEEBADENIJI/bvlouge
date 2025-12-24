import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./mainlayout.css";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
