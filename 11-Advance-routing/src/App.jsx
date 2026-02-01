import React from "react";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Course from "./Pages/Course";
import Product from "./Pages/Product";
import PageNotFound from "./Pages/PageNotFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Child from "./Pages/Child";
import Navbar2 from "./Components/Navbar2";
import CourseDetail from "./Pages/CourseDetail";

const App = () => {
  return <div >
    <Navbar />
    <Navbar2 /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/courses/:courseId' element={<CourseDetail />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='child' element={<Child />} />
        </Route>
        <Route path='*' element = {<PageNotFound />} />
      </Routes>
    <Footer />
  </div>;
};

export default App;
