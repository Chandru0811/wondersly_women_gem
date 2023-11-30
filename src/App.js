import React from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/common/Header";
import About from "./pages/About";
import Topbar from "./component/common/Topbar";
import Footer from "./component/common/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
