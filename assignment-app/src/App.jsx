import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
// import Search from "./Pages/Search";
import SearchPage from "./Pages/SearchPage";


function App() {
  return (
    <div>
      <Nav />
      <hr />
      <main className="content">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </main>   
    </div>
  );
}

export default App;
