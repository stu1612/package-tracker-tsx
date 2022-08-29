// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";

// files
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Package from "./pages/Package";

import "./styles/main.scss";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package" element={<Package />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
