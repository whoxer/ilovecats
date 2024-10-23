import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WebCats from "../pages/WebCats";

const AppRoutes = () => {
  return ( //this function will return all the routes and export it so they can be placed on the Browser Router on the main file
    <Routes> 
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/webcats" element={<WebCats></WebCats>}></Route>
    </Routes>
  );
};

export default AppRoutes;