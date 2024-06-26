import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ArtDetailPage from "./pages/ArtDetailPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/art/:id" element={<ArtDetailPage />} />
      <Route path="/*" element={<div className='w-screen min-h-[70vh] flex flex-col items-center justify-center text-4xl'><h1>Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
