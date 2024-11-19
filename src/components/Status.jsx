import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Status() {

    const repairedItems = ['บรรยายรวม 1', 'บรรยายรวม', 'ministadium', 'บรรยายรวม', 'วิศวกรรมศาสตร์', 'ministadium', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์'];
    const pendingItems = ['พาณิชยศาตร์ และการบัญชี', 'ministadium', 'บรรยายรวม', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์'];

    // สร้าง state เพื่อเก็บสถานะปัจจุบันของสวิตช์
    const [isRepaired, setIsRepaired] = useState(true);

    // ฟังก์ชันจัดการการเปลี่ยนสถานะของสวิตช์
    const handleToggle = () => {
        setIsRepaired(!isRepaired); // สลับสถานะเมื่อคลิก
    };


    return (
        <>
            <div className="min-h-screen">
                <div className="w-full  bg-[##F6F6F6] flex items-center indent-10">
                    <h1 className="font-bold text-4xl sm:text-5xl text-[#340000] my-5 sm:my-10">STATUS</h1>
                </div>

                <div className="w-full h-screen bg-gradient-to-t from-[#FFD705] to-[#FF0000] rounded-t-[35px]">

                    <div className="flex justify-between items-center pt-10 px-5 md:px-12 xl:px-24">
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                id="toggleSwitch"
                                className="sr-only peer"
                                onChange={handleToggle}
                                checked={!isRepaired}
                            />
                            <div
                                className="relative w-48 h-10 sm:w-72 sm:h-14 shadow-[0_10px_5px_-5px_rgba(0,0,0,0.3)] 
    rounded-xl peer dark:bg-[#340000] 
    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
    after:absolute after:top-[4px] after:start-[4px] sm:after:start-[6px] after:bg-[#FFD705] after:rounded-xl 
    after:h-8 sm:after:h-12 after:w-[48%] after:transition-all peer-checked:bg-[rgb(52,0,0)]"
                            >
                                <div className="relative h-full flex items-center">
                                    <span className="absolute left-0 w-[50%] text-center text-[10px] sm:text-base text-[#340000] font-semibold z-10 ">
                                        REPAIRED
                                    </span>
                                    <span className="absolute right-0 w-[50%] text-center text-[10px] sm:text-base text-[#340000] font-semibold z-10 ">
                                        PENDING REPAIR
                                    </span>
                                </div>
                            </div>

                        </label>
                        <Link to="/Upload"> <button id="to_add_page" className="text-3xl sm:text-4xl md:text-5xl  text-white fa-solid fa-plus hover:opacity-80"></button> </Link>

                    </div>




                    {/* <!-- Centering the gray box --> */}
                    <div className="flex justify-center items-center w-full h-[75%] mt-10">
                        <div id="statusBox" className="w-[85%] h-[90%] bg-gray-200 rounded-md overflow-y-auto">
                            {isRepaired ? (
                                // แสดงรายการเมื่อสถานะเป็น "Repaired"
                                repairedItems.map((item, index) => (
                                    <Link to="/inforDone"> <div key={index} className="flex justify-between p-2 bg-white  hover:shadow-gray-500 shadow-inner ">
                                        <div class="w-1/5   flex items-center justify-center">
                                            {/* ใส่รูปภาพ */}
                                            <img src="" alt="" class="w-7 h-7 sm:w-10 sm:h-10 bg-gray-400 rounded-full" />
                                        </div>
                                        <div class="w-full h-full ml-2">
                                            <div class=" w-full h-1/2  font-black flex items-center justify-between">
                                                {/* ใส่ชื่อสถานที่ */}
                                                <p class="text-xs sm:text-xl">{item}</p>
                                                {/* ใส่เวลา */}
                                                <p class="font-normal text-[8px] sm:text-xl ml-10 ">Time 00:00</p>
                                            </div>
                                            {/* ใส่ชื่อผู้ส่ง */}
                                            <div class=" text-[9px] sm:text-lg w-full h-1/2  text-gray-500 ">
                                                name
                                            </div>
                                        </div>
                                        <div class="w-20 flex items-center justify-center ">
                                            <div id="status_color" class="w-3 h-3 sm:w-5 sm:h-5 bg-green-500 rounded-full"></div>
                                        </div>
                                    </div></Link>
                                ))
                            ) : (
                                // แสดงรายการเมื่อสถานะเป็น "Pending Repair"
                                pendingItems.map((item, index) => (
                                    <Link to="/infomation"><div key={index} className="flex justify-between p-2 bg-white  hover:shadow-gray-500 shadow-inner ">
                                        <div class="w-1/5   flex items-center justify-center">
                                            {/* ใส่รูปภาพ */}
                                            <img src="" alt="" class="w-7 h-7 sm:w-10 sm:h-10 bg-gray-400 rounded-full" />                                    </div>
                                        <div class="w-full h-full ml-2 ">
                                            <div class=" w-full h-1/2  font-black flex items-center justify-between">
                                                {/* ใส่ชื่อสถานที่ */}
                                                <p class="text-xs sm:text-xl">{item}</p>
                                                {/* ใส่เวลา */}
                                                <p class="font-normal text-[8px] sm:text-xl ml-10 ">Time 00:00</p>
                                            </div>
                                            {/* ใส่ชื่อผู้ส่ง */}
                                            <div class=" text-[9px] sm:text-lg w-full h-1/2  text-gray-500 ">
                                                name
                                            </div>
                                        </div>
                                        <div class="w-20 flex items-center justify-center ">
                                            <div id="status_color" class="w-3 h-3 sm:w-5 sm:h-5 bg-red-500 rounded-full"></div>
                                        </div>
                                    </div></Link>


                                ))
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Status