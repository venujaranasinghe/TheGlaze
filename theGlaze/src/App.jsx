import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import CakeDesigns from "./pages/CakeDesigns"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Feedback from "./pages/Feedback"
import MenuCategory from "./pages/MenuCategory"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:category" element={<MenuCategory />} />
            <Route path="/designs" element={<CakeDesigns />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
