import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Profiles, PostDetail } from "./pages";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/postdetail" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
