import "./App.css";
import React from "react";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Export from "./Export";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/export" element={<Export />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
