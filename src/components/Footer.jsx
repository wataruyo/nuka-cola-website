import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-background text-text w-full text-center lg:grid grid-cols-3 flex flex-col bg-gradient-to-r from-background to-orange-200">
      <div className="flex justify-center items-center max-lg:flex-col">
        <img src="src\assets\nuka-cola-logo.svg" alt="nuka-cola-log" className="size-20" />
        <span className="text-xl font-bold ml-3">Nuka Cola Company</span>
      </div>

      <ul className="flex lg:space-x-10 text-md font-bold justify-center items-center my-5 max-lg:flex-col ,max-lg:space-y-2 max-lg:divide-y-2">
        <li className="hover:border-b"><Link to={'/'}>Home</Link></li>
        <li className="hover:border-b"><Link to={'/products'}>Products</Link></li>
        <li className="hover:border-b"><Link to={'/history'}>History</Link></li>
        <li className="hover:border-b"><Link to={'/sustainability'}>Sustainability</Link></li>
      </ul>

      {/* Social Links */}
      <div className="flex justify-center items-center mb-5">
        <div>
          <a href="https://github.com/wataruyo">
            <img src="src\assets\icons\github-icon.svg" alt="github-icon" className="size-10" />
          </a>
        </div>
      </div>
    </footer>
  )
}
