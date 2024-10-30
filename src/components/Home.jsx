import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <div className="h-screen bg-[#F6F6F] flex grid-cols-2 grid max-md:grid-cols-1 items-center justify-center">
        <div className="">
            <div className="text-[#340000] ml-5 ">
                <p className="font-bold text-[10vw] text-center  leading-none mb-10">WELCOME</p>
                <p className="intro">Welcome to Repair TU System!
                Streamline your maintenance requests with ease. Upload a photo, provide necessary details, 
                and stay updated on the status of your report. Our goal is to ensure quick, efficient, 
                and transparent repair services to keep your facilities in top condition."</p>

                
            <div className="text-[#340000] mt-10">
                <h1 className="font-bold text-2xl ">How to use</h1>
                <p className="intro">1. Upload picture</p>
                <p className="intro">2. Fill in the information</p>
                <p className="intro">3. Submit the information and check the status</p>
            </div>
            </div>
        </div>
        
        <div className="flex flex-col items-center">
            <i className=" mb-20 text-[25vw] text-[#340000] fa-solid fa-screwdriver-wrench max-md:text-[20vw] "></i>
            <Link to="/Upload"> <button className="w-60 h-14 font-black bg-[#E20B0B] text-white rounded-3xl shadow-2xl mt-5 hover:opacity-80 hover:text-yellow-400">GET STARTED</button></Link>
        </div>
    </div>
    </>
  )
}

export default Home