import { Link } from "react-router-dom"

function Nav() {

  return (
    <>
      <nav className="p-4 shadow-lg">
        <div className="flex item-center justify-between">
          <div className=" font-bold flex ">
            <div className="text-[#FF0505] flex text-[2rem] pr-2  ">REPAIR</div>
            <div className="text-[#FFD705] text-[2rem] ">TU</div>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden ">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor"  d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          {/* เมนุเลือกด้านขวา */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className=' w-full hidden md:w-auto font-bold md:flex text-red-600  text-[1.5rem] place-items-center mx-4' >
              <li><Link to="/" className='hover:text-black px-5'>Home</Link></li>
              <li><Link to="/Upload" className='hover:text-black px-5'>Status</Link></li>
          </ul>
          </div>
        </div>
      </nav>
    </>
  )

}

export default Nav
