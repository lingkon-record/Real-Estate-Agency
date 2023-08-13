import React from "react";
import { Routes, Route } from "react-router-dom";

// component
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import PropertyDetails from "./pages/PropertyDetails";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
