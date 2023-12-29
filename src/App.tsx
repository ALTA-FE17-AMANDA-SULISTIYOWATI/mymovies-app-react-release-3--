import React from "react"
import Navbar from "./components/navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Now from "./pages/now"
import Favorite from "./pages/favorite"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="now" element={<Now />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
