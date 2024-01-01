import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Now from "./pages/now"
import Favorite from "./pages/favorite"
import NavbarWithRouter from "./components/navbar"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarWithRouter />}>
          <Route index element={<Home />} />
          <Route path="now" element={<Now />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
