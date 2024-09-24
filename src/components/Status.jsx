import React from 'react'

function Status() {
  return (
   <>
       <div className="w-full h-[20rem] bg-[##F6F6F6] flex items-center indent-10">
        <h1 className="font-bold text-5xl text-[#340000]">STATUS</h1>
    </div>

    <div className="w-full h-[50rem] bg-gradient-to-t from-[#FFD705] to-[#FF0000] rounded-t-[35px]">

        <div className="w-[20%] h-[5%]"></div>
        <div className="flex justify-between items-center">
            <label className="inline-flex items-center cursor-pointer ">
                <input type="checkbox" id="toggleSwitch" className="sr-only peer"/>
                <div className="relative w-72 h-14 ml-20
                     rounded-full peer dark:bg-[#340000] 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    after:absolute after:top-[4px] after:start-[6px] after:bg-[#FFD705] after:rounded-full 
                    after:h-12 after:w-[48%] after:transition-all peer-checked:bg-[#340000]">
                    <div className="flex items-center justify-between h-full px-4">
                        <span className="text-[#340000] font-semibold ml-5 z-10">REPAIRED</span>
                        <span className="text-[#340000] font-semibold  z-10">PENDING REPAIR</span>
                    </div>
                </div>
            </label>

            <button id="to_add_page" className="text-5xl  text-white mr-12 fa-solid fa-plus hover:opacity-80"></button>
        </div>

        {/* <!-- Centering the gray box --> */}
        <div className="flex justify-center items-center w-full h-[75%] mt-10">
            <div id="statusBox" className="w-[85%] h-[90%] bg-gray-200 rounded-md">

                <div id="done-section" className="w-full h-[10vh] bg-[#F6F6F6] shadow-xl flex justify-between">
                    {/* <!-- กล่องนี้จะถูกซ่อนเมื่อเริ่มต้น --> */}
                    <div className="w-1/5 h-full flex items-center justify-center">
                        <img src="" alt="" className="w-10 h-10 bg-gray-400 rounded-full"/>
                    </div>
                    <div className="w-full h-full">
                        <div className=" w-full h-1/2 font-black text-[3vh] flex items-center ">
                            <p>Location-1</p>
                            <p className="font-normal text-[15px] ml-10">Time 00:00</p>
                        </div>
                        <div className=" w-full h-1/2 text-gray-500 ">
                            name
                        </div>
                    </div>
                    <div className="w-28 h-full flex items-center justify-center">
                        <div id="status_color" className="w-5 h-5 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                <div id="not-done-section" className="w-full h-[10vh] bg-[#F6F6F6] shadow-xl flex justify-between hidden">

                    <div className="w-1/5 h-full flex items-center justify-center">
                        <img src="" alt="" className="w-10 h-10 bg-gray-400 rounded-full"/>
                    </div>
                    <div className="w-full h-full">
                        <div className=" w-full h-1/2 font-black text-[3vh] flex items-center ">
                            <p>Location-2</p>
                            <p className="font-normal text-[15px] ml-10">Time 00:00</p>
                        </div>
                        <div className=" w-full h-1/2 text-gray-500 ">
                            name
                        </div>
                    </div>

                    <div className="w-28 h-full flex items-center justify-center">
                        <div id="status_color" className="w-5 h-5 bg-red-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>

    </div></>
  )
}

export default Status