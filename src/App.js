import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Blog from "./components/blog/blog";
import Navigation from "./components/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/new-react" element={<Home />} index />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
