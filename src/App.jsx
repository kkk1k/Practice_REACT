import React from "react";
import { Route, Routes } from "react-router-dom";
import Ref from "./Ref";
import Home from "./Home";
import SseComponent from "./SseComponent";
import SocketComponent from "./SocketComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ref" element={<Ref />} />
      <Route path="/sse" element={<SseComponent />} />
      <Route path="/socket" element={<SocketComponent />} />
    </Routes>
  );
}

export default App;
