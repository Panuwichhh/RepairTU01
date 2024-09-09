function Nav() {

    return (
      <>
        <nav className="p-4 shadow-lg">
          <div className="flex item-center justify-between">
            <div className=" font-bold flex ">
            <div className="text-[#FF0505] flex text-[2rem] pr-2 ">REPAIR</div>
              <div className="text-[#FFD705] text-[2rem] ">TU</div>
            </div>
            {/* เมนุเลือกด้านขวา */}
            <ul className='hidden font-bold md:flex space-x-4 text-red-600  text-[1.5rem] place-items-center mx-4'>
              <li><a href="#" className='hover:text-black px-5' >Status</a></li>
              <li><a href="#" className='hover:text-black px-5'>Home</a></li>
            </ul>
          </div>
        </nav>
      </>
    )
  
  }
  
  export default Nav