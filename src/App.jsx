import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Sustainability from './pages/Sustainability'
import History from './pages/History'

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route index element={<Home />}/>
          <Route path='/products' element={<Products />} />
          <Route path='/history' element={<History />}/>
          <Route path='/sustainability' element={<Sustainability />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
