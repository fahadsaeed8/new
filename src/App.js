import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import HomeDark from "./page/HomeDark";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/dark" element={<HomeDark />} />
      </Routes>
    </>
  );
}

export default App;
