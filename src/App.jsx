import React from "react";
import { Route, Routes } from "react-router-dom";
import Ref from "./Ref";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ref" element={<Ref />} />
    </Routes>
  );
}

export default App;
