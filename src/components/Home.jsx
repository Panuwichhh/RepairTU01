import React from 'react'

function Home() {
  return (
    <>
     <div className="w-full h-[85%]  bg-[#F6F6F6] flex flex-wrap  items-center justify-center">
        <div className="flex flex-col flex-wrap">
            <div className="text-[#340000]">
                <p className="font-bold text-[10vw] leading-none">WELCOME</p>
                <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quaerat saepe consequatur esse excepturi unde?</p>
                <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quaerat saepe consequatur esse excepturi unde?</p>
                <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quaerat saepe consequatur esse excepturi unde?</p>
                <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quaerat saepe consequatur esse excepturi unde?</p>
            </div>

            <div className="text-[#340000] mt-10">
                <h1 className="font-bold text-2xl ">How to use</h1>
                <p className="intro">1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, libero!</p>
                <p className="intro">2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae.</p>
                <p className="intro">3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, dolorum.</p>
            </div>
        </div>

        <div className="flex flex-col justify-center">
            <i classNameName="text-[15vw] text-[#340000] ml-5 fa-solid fa-screwdriver-wrench self-center"></i>
            <button id="get_start" className="w-60 h-14 font-black bg-[#E20B0B] text-white rounded-3xl shadow-2xl mt-5 hover:opacity-80 hover:text-yellow-400">GET STARTED</button>
        </div>
    </div>
    </>
  )
}

export default Home