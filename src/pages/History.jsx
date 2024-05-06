import { motion } from "framer-motion"
import { PRODUCTS } from "../constants/products"

export default function History() {
  return (
    <main className="text-text bg-background bg-gradient-to-r from-background to-orange-200">
      <section className="flex flex-col py-10">
        <h1 className="text-5xl font-extrabold p-3 text-center">History</h1>
        <div className="lg:grid grid-cols-2 flex-col items-center my-5">
          <div className="px-5 py-3">
            <h2 className="text-4xl font-extrabold">Since 2044 ~</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur culpa, voluptatum veritatis minus est quidem commodi at, deleniti, excepturi vero consequuntur nemo nisi tempore facere dicta cupiditate dolorum enim ad odit unde obcaecati illo rerum iusto incidunt. Dolore esse placeat assumenda? Eius quibusdam vero expedita laboriosam illo labore repudiandae optio!
            </p>
          </div>
          <div className="order-1">
            <img src="src\assets\images\worker.jpg" alt="worker" />
          </div>
        </div>

        <div className="lg:grid grid-cols-2 flex-col items-center my-5">
          <div className="px-5 py-3">
            <h2 className="text-4xl font-extrabold">New Product, Nuka Cherry</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur culpa, voluptatum veritatis minus est quidem commodi at, deleniti, excepturi vero consequuntur nemo nisi tempore facere dicta cupiditate dolorum enim ad odit unde obcaecati illo rerum iusto incidunt. Dolore esse placeat assumenda? Eius quibusdam vero expedita laboriosam illo labore repudiandae optio!
            </p>
          </div>
          <div className="order-1">
            <img src="src\assets\images\worker2.jpg" alt="worker" />
          </div>
        </div>
      </section>
    </main>
  )
}
