import React, { useEffect } from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop from "react-scroll-to-top";
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
import Volunteer from "./pages/Volunteer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

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
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* <ScrollToTop className="backtoTop" /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
