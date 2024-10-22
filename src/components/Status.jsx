import { useState } from "react";
import { Link } from "react-router-dom";

function Status() {

    const repairedItems = ['บรรยายรวม 1','บรรยายรวม 2', 'ministadium', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'ministadium', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์'];
    const pendingItems = ['พาณิชยศาตร์ และการบัญชี', 'ministadium', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์'];
    
    // สร้าง state เพื่อเก็บสถานะปัจจุบันของสวิตช์
    const [isRepaired, setIsRepaired] = useState(true);

    // ฟังก์ชันจัดการการเปลี่ยนสถานะของสวิตช์
    const handleToggle = () => {
        setIsRepaired(!isRepaired); // สลับสถานะเมื่อคลิก
    };


    return (
        <>
            <div className="w-full  bg-[##F6F6F6] flex items-center indent-10">
                <h1 className="font-bold text-5xl text-[#340000] my-10">STATUS</h1>
            </div>

            <div className="w-full h-[35rem]  bg-gradient-to-t from-[#FFD705] to-[#FF0000] rounded-t-[35px]">

                <div className="w-[20%] h-[5%]"></div>
                <div className="flex justify-between items-center">
                    <label className="inline-flex items-center cursor-pointer ">
                        <input type="checkbox" id="toggleSwitch" className="sr-only peer" 


                        onChange={handleToggle} // เรียกฟังก์ชันเมื่อมีการเปลี่ยนสถานะ
                            checked={!isRepaired} />
                        <div className="relative w-72 h-14 ml-[7vw]  shadow-[0_10px_5px_-5px_rgba(0,0,0,0.3)]
                     rounded-xl peer dark:bg-[#340000] 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    after:absolute after:top-[4px] after:start-[6px] after:bg-[#FFD705] after:rounded-xl 
                    after:h-12 after:w-[48%] after:transition-all peer-checked:bg-[#340000]">
                            <div className="flex items-center justify-between h-full px-4 ">
                                <span className="text-[#340000] font-semibold ml-5 z-10 ">REPAIRED</span>
                                <span className="text-[#340000] font-semibold  z-10">PENDING REPAIR</span>
                            </div>
                        </div>
                    </label>

                   <Link to="/Upload" > <button id="to_add_page"  className="text-5xl text-white mr-12 fa-solid fa-plus hover:opacity-80"></button></Link> 
                </div>

                {/* <!-- Centering the gray box --> */}
                <div className="flex justify-center items-center w-full h-[75%] mt-10">
                    <div id="statusBox" className="w-[85%] h-[90%] bg-white rounded-md overflow-y-auto">
                        {isRepaired ? (
                            // แสดงรายการเมื่อสถานะเป็น "Repaired"
                            repairedItems.map((item, index) => (
<<<<<<< HEAD
                                <div key={index} className="flex p-10 bg-green-200 mb-2 shadow-md rounded-md">
                                    <li>{item}</li>
=======
                                <div key={index} className="flex justify-between p-2 bg-white  shadow-2xl hover:shadow-gray-500 shadow-inner ">
                                    <div class="w-1/5   flex items-center justify-center">
                                        <div src="" alt="" class="w-10 h-10 bg-gray-400 rounded-full"></div>
                                    </div>
                                    <div class="w-full h-full">
                                        <div class=" w-full h-1/2 font-black text-[3vh] flex items-center ">
                                            <p>{item}</p>
                                            <p class="font-normal text-[15px] ml-10 ">Time 00:00</p>
                                        </div>
                                        <div class=" w-full h-1/2 text-gray-500 ">
                                            name
                                        </div>
                                    </div>
                                    <div class="w-28 flex items-center justify-center ">
                                        <div id="status_color" class="w-5 h-5 bg-green-500 rounded-full"></div>
                                    </div>
>>>>>>> 2b118d013d5c6239764ac2611744532bc8100692
                                </div>
                            ))
                        ) : (
                            // แสดงรายการเมื่อสถานะเป็น "Pending Repair"
                            pendingItems.map((item, index) => (
<<<<<<< HEAD
                                <div key={index} className="flex p-10 bg-red-200 mb-1 shadow-sm ">
                                    <li>{item}</li>
=======
                                <div key={index} className="flex justify-between p-2 bg-white  shadow-2xl hover:shadow-gray-500 shadow-inner ">
                                    <div class="w-1/5   flex items-center justify-center">
                                        <div src="" alt="" class="w-10 h-10 bg-gray-400 rounded-full"></div>
                                    </div>
                                    <div class="w-full h-full">
                                        <div class=" w-full h-1/2 font-black text-[3vh] flex items-center ">
                                            <p>{item}</p>
                                            <p class="font-normal text-[15px] ml-10 ">Time 00:00</p>
                                        </div>
                                        <div class=" w-full h-1/2 text-gray-500 ">
                                            name
                                        </div>
                                    </div>
                                    <div class="w-28 flex items-center justify-center ">
                                        <div id="status_color" class="w-5 h-5 bg-red-500 rounded-full"></div>
                                    </div>
                                
>>>>>>> 2b118d013d5c6239764ac2611744532bc8100692
                                </div>

             
                                
                            ))
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Status