import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const ReactRouting: React.FC = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<About/>}/>
            <Route path="/" element={<Contact/>}/>
        </Routes>
        </>
    )
}

export default ReactRouting;