import { PRODUCTS } from "../constants/products"
import { motion } from "framer-motion"
import Button from "../components/Button"

export default function Products() {
  return (
    <main className="bg-background text-text bg-gradient-to-r from-background to-orange-200 py-10">
      <section className="lg:grid grid-cols-2 flex flex-col">
        <div className="flex flex-col justify-center items-center space-y-5 shadow-lg py-5">
          <h2 className="text-3xl font-semibold">Get the {' '} 
          <span className="underline">SPECIAL</span>{' '}Discount NOW!!</h2>
          <p className="text-lg">Max 80% OFF</p>
          <Button variant='right' text="Get coupon" />
        </div>
        <div>
          <img src="src\assets\images\nuka-cola-products.jpg" alt="" />
        </div>
      </section>

      <section className="pt-5 container mx-auto">
        <h1 className="text-5xl font-extrabold text-center my-5">Products</h1>
        <div className="flex justify-center items-center flex-wrap gap-5 p-5">
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} className="text-center rounded-lg shadow-lg relative" whileHover={{scale: 1.1}} initial={{opacity: 0}} whileInView={{opacity: 1}} >
              <h3 className="font-bold text-lg text-background bg-black/40 rounded-md absolute bottom-0 right-2 px-1 py-1">{product.name}</h3>
              <img src={product.imgUrl} alt={product.name} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
