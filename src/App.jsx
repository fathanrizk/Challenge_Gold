import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page from "./components/Page";
import CarDetail from "./components/CarDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/page" element={<Page />} />
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
