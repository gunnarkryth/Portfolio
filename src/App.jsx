import { BrowserRouter, Routes, Route } from "react-browser-router";
// import { NavLink as Link } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Route path="/" component={<Home/>}></Route>
    </BrowserRouter>
  );
}

export default App;
