import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Button({linkPath, variant, text='Find more'}) {
  let imgUrl = 'src\\assets\\icons\\arrow-right.svg'
  let linkClassName = "link flex justify-center items-center"
  if (variant === 'left') {
    imgUrl = 'src\\assets\\icons\\arrow-left.svg'
    linkClassName += ' flex-row-reverse'
  }
  return (
    <motion.button whileHover={{scale: 1.1}} className="flex justify-center items-center border-4 border-primary hover:bg-background hover:border-primary px-3 py-2 rounded-lg text-text bg-background focus:outline-none">
      <Link to={`/${linkPath}`} className={linkClassName}>
        <span className="font-semibold text-md">{text}</span>
        <img src={imgUrl} alt="arrow-right" className="size-8" />
      </Link>
    </motion.button>
  )
}
