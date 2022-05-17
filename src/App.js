import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Blog from "./components/Blog/Blog";
import FatherRole from "./components/Blog/Articles/FatherRole/FatherRole";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Main to={"/"} />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="articles/fatherrole" element={<FatherRole />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
