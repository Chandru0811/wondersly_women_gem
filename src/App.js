import React from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/common/Header";
import About from "./pages/About";
import Topbar from "./component/common/Topbar";
import Footer from "./component/common/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./component/common/404";
import Youth from "./pages/Events/Youth";
import LadyBoss from "./pages/Events/LadyBoss";
import Child from "./pages/Events/Children";
import Donate from "./pages/Donate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/youth" element={<Youth />} />
          <Route path="/events/child" element={<Child />} />
          <Route path="/events/ladyboss" element={<LadyBoss />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
