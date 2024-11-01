import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/styles/App.scss";

import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MainLayout } from "./Layout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
