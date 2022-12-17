import React from 'react'
import {Routes, Route} from "react-router-dom";
import Blog from '../Pages/Blog';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/Login';
import Pricing from '../Pages/Pricing';
import Register from '../Pages/Register';
import Support from '../Pages/Support';



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/blog" element={<Blog />}> </Route>
        <Route path="/pricing" element={<Pricing />}> </Route>
        <Route path="/support" element={<Support />}> </Route>
       
      </Routes>
    </div>
  );
};

export default AllRoutes;
