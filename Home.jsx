import Button from "../components/Button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-background text-text bg-gradient-to-r from-background to-orange-200">
      {/* Hero */}
      <section className="lg:grid grid-cols-2 py-10 flex flex-col">
        <div className="flex flex-col justify-center items-center ml-5 my-5">
          <h1 className="text-5xl font-extrabold p-3">Zap That Thirst!!</h1>
          <p className="text-center mx-9 my-3 text-lg italic">
            Selling Best Soda in the World
          </p>
          <div className="mt-5">
            <Button linkPath='/' variant='right'/>
          </div>
        </div>
        <div className="max-lg:order-1">
          <img src="src\assets\images\nuka-girl-riding.jpg" alt="nuka-girl" className="lg:rounded-l-full rounded-lg" />
        </div>
      </section>

      {/* Hisotry */}
      <section className="lg:grid lg:grid-cols-2 flex flex-col py-10">
        <div className="max-lg:order-1">
          <img src="src\assets\images\nuka-girl-by-warf.webp" alt="nuka-cola-prodcuts" className="lg:rounded-r-full rounded-lg"/>
        </div>
        <div className="flex flex-col justify-center items-center mb-5">
          <h2 className="text-4xl font-extrabold">What is Nuka Cola?</h2>
          <p className="mx-9 my-3">Nuka-Cola is the flagship product of the Nuka-Cola Corporation and one of the symbols of United States culture. Introduced in 2044, it rapidly dominated the soft drink market, eventually becoming the most popular soda on the market and a staple of American culture. Bottled and distributed nationwide, Nuka-Cola was available in such numbers that even two centuries after the Great War put a stop to all major bottling operations, Nuka-Cola bottles can still be found in the wastelands in large quantities. In the aftermath of the Great War, Nuka-Cola bottle caps became the de facto currency in most post-War societies.</p>
          <div className="mt-5">
            <Button linkPath='history' variant='left' />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="lg:grid grid-cols-2 flex flex-col py-10">
        <div className="flex flex-col justify-center items-center mb-5">
          <h2 className="text-4xl font-extrabold">Find Your Favorite Nukas!</h2>
          <p className="mx-9 my-3">Nuka-Cola is the flagship product of the Nuka-Cola Corporation and one of the symbols of United States culture. Introduced in 2044, it rapidly dominated the soft drink market, eventually becoming the most popular soda on the market and a staple of American culture. Bottled and distributed nationwide, Nuka-Cola was available in such numbers that even two centuries after the Great War put a stop to all major bottling operations, Nuka-Cola bottles can still be found in the wastelands in large quantities. In the aftermath of the Great War, Nuka-Cola bottle caps became the de facto currency in most post-War societies.</p>
          <div className="mt-5">
            <Button linkPath='products' variant='right' />
          </div>
        </div>
        <div>
          <img src="src\assets\images\nuka-cola-products.jpg" alt="nuka-cola-prodcuts" className="lg:rounded-l-full rounded-lg" />
        </div>
      </section>

      {/* Sustainability */}
      <section className="lg:grid grid-cols-2 flex flex-col py-10">
        <div className="max-lg:order-1">
          <img src="src\assets\images\nuka-girl-1.webp" alt="nuka-cola-prodcuts" className="lg:rounded-r-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-center items-center mb-5">
          <h2 className="text-4xl font-extrabold">Actions for the Earth</h2>
          <p className="mx-9 my-3">Nuka-Cola is the flagship product of the Nuka-Cola Corporation and one of the symbols of United States culture. Introduced in 2044, it rapidly dominated the soft drink market, eventually becoming the most popular soda on the market and a staple of American culture. Bottled and distributed nationwide, Nuka-Cola was available in such numbers that even two centuries after the Great War put a stop to all major bottling operations, Nuka-Cola bottles can still be found in the wastelands in large quantities. In the aftermath of the Great War, Nuka-Cola bottle caps became the de facto currency in most post-War societies.</p>
          <div className="mt-5">
            <Button linkPath='sustainability' variant='left' />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="lg:grid grid-cols-2 flex flex-col py-10">
        <div className="flex flex-col justify-center items-center ml-5 mb-5">
          <h2 className="text-4xl font-extrabold">Contact Us</h2>
          <form action="GET" className="flex flex-col justify-center items-center space-y-5">
            <div className="relative mt-4">
              <input id="name" type="text" className="peer px-2 h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 placeholder-transparent rounded-lg" placeholder="Your name" />
              <label htmlFor="name" className="absolute left-2 -top-6 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm"><span className="" >Your name </span></label>
            </div>
            <div className="relative mt-4">
              <input id="email" type="text" className="peer px-2 h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 placeholder-transparent rounded-lg" placeholder="Your name" />
              <label htmlFor="email" className="absolute left-2 -top-6 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm"><span className="" >Email Address</span></label>
            </div>
            <div className="relative mt-4">
              <textarea name="message" id="message" cols="50" rows="7" className="peer px-2 h-20 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 placeholder-transparent rounded-lg resize-none" placeholder="message"></textarea>
              <label htmlFor="message" className="absolute left-2 -top-6 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                <span>Message</span>
              </label>
            </div>
          </form>
          <div className="mt-5">
            <Button linkPath='hisotry' variant='right' text="Submit" />
          </div>
        </div>
        <div>
          <img src="src\assets\images\nuka-girl-riding.jpg" alt="nuka-girl" className="lg:rounded-l-full rounded-lg" />
        </div>
      </section>
    </main>
  )
}
