import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Offcanvas({isOpen, setIsOpen}) {
  let cn = isOpen ? 'border' : 'hidden'
  return (
    <div className={`absolute top-[60px] left-0 h-auto w-full bg-background/95 ${cn} z-10 bg-gradient-to-r from-background to-orange-200`}>
      <ul className="flex flex-col justify-center items-center text-md font-bold space-y-10 my-5">
        <motion.li  whileHover={{scale: 1.2}} className="" onClick={() => setIsOpen(false)}><Link to={'/'}>Home</Link></motion.li>
        <motion.li whileHover={{scale: 1.2}} className="" onClick={() => setIsOpen(false)}><Link to={'/products'}>Products</Link></motion.li>
        <motion.li whileHover={{scale: 1.2}} className="" onClick={() => setIsOpen(false)}><Link to={'/history'}>History</Link></motion.li>
        <motion.li whileHover={{scale: 1.2}} className="" onClick={() => setIsOpen(false)}><Link to={'/sustainability'}>Sustainability</Link></motion.li>
      </ul>
    </div>
  )
}
