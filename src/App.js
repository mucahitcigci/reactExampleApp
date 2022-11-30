import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Profiles, PostDetail } from "./pages";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import Provider from "./context/Provider";

function App() {
  return (
    <div className="App">
      <Provider>
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
      </Provider>
    </div>
  );
}

export default App;
