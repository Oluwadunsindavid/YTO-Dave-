import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import OurProgramsPage from "./pages/OurProgramsPage";
import GalleryPage from "./pages/GalleryPage";
import Aboutpage from "./pages/AboutPage";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/ourPrograms" element={<OurProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
};

export default App;
