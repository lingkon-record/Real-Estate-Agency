import React from "react";
// link
import { Link } from "react-router-dom";
import Logo from "../assets/img/x2.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} width={70} />
          <h1>Real Estate Agency</h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="sign-up"
          >
            Sign Up
          </Link>
          <Link
            to="/log-in"
            className="hover:text-violet-900 transition hover:via-red-600"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
