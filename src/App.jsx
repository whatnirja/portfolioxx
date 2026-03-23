import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BootScreen from './components/BootScreen'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Capstone from './pages/Capstone'
import Contact from './pages/Contact'

export default function App() {
  const [booted, setBooted] = useState(false)
  if (!booted) return <BootScreen onDone={() => setBooted(true)} />
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/resume"    element={<Resume />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/capstone"  element={<Capstone />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
