import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
