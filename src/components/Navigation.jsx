import { Link } from "react-router-dom"
import { useState } from "react"
import Offcanvas from "./Offcanvas"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex lg:justify-around max-lg:justify-between items-center bg-background text-text h-[60px] z-50 border-b sticky top-0 w-full max-lg:px-5 bg-gradient-to-r from-background to-orange-200">

      <div className="logo text-xl font-extrabold">
        <Link to={'/'}>
          <img src="src\assets\icons\nuka_cola_vector_logo.png" alt="nuka-cola-logo" className="h-[45px]" />
        </Link>
      </div>

      <ul className="lg:flex space-x-5 text-md font-bold hidden">
        <motion.li  whileHover={{scale: 1.2}} className=""><Link to={'/'}>Home</Link></motion.li>
        <motion.li whileHover={{scale: 1.2}} className=""><Link to={'/products'}>Products</Link></motion.li>
        <motion.li whileHover={{scale: 1.2}} className=""><Link to={'/history'}>History</Link></motion.li>
        <motion.li whileHover={{scale: 1.2}} className=""><Link to={'/sustainability'}>Sustainability</Link></motion.li>
      </ul>

      <div className="lg:hidden transition-all">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen 
            ? <img src="src\assets\icons\x.svg" alt="" className="h-[40px]" />
            : <img src="src\assets\icons\menu.svg" alt="" className="h-[40px]" />
          }
        </button>
      </div>

      {/* Offcanvas menu */}
      <Offcanvas isOpen={isOpen} setIsOpen={setIsOpen}/>

    </nav>
  )
}
