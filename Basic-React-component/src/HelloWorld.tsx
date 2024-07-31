import React from "react";
import { Link } from "react-router-dom";

const HelloWorld: React.FC = () =>{
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container flex mx-auto justify-between items-center">
          <div className="text-xl font-extrabold">LOGO</div>
          <div className="space-x-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        </nav>
    );
};

export default HelloWorld;