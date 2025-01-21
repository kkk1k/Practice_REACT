import React from "react";
import { Route, Routes } from "react-router-dom";
import Ref from "./Ref";
import Home from "./Home";
import SseComponent from "./SseComponent";
import SocketComponent from "./SocketComponent";
import Reducer from "./Reducer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ref" element={<Ref />} />
      <Route path="/sse" element={<SseComponent />} />
      <Route path="/socket" element={<SocketComponent />} />
      <Route path="/reducer" element={<Reducer />} />
    </Routes>
  );
}

export default App;
