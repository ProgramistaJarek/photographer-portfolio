import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import PhotoSection from "./components/Photo-section";
import Footer from "./components/Footer";
import Photos from "./components/Photos";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
 

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const requset = `https://api.unsplash.com/photos/?client_id=${APP.key}`;
  const getPhotos = async () => {
    const response = await fetch(requset);
    const data = await response.json();
    setPhotos(data);
    console.log(data);
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<PhotoSection />} />
        <Route path="photos" element={<Photos photos={photos} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
