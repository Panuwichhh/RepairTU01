import React from 'react';
import { Link } from 'react-router-dom'

const Items1 = ['ต้องการซ่อมตึก'];

function Info() {
    return (
        <>
            <div className='w-full flex flex-col md:flex-row flex-wrap bg-[#F6F6F6]'>

                <div className="w-full h-[25rem] sm:h-[35rem]  md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-l from-[#FF0000] to-[#FFD705] rounded-tr-[2rem] rounded-br-[2rem] ">
                    <div  className="w-8/12  sm:w-9/12 h-56 sm:h-80 lg:h-[360px] shadow-[2px_2px_5px_rgba(0,0,0,0.5)] bg-[#340000] rounded-3xl m-5  flex justify-center items-center">
                        {/* ใส่รูปภาพ */}
                        <img src="" alt="" className='w-[95%] h-[95%]  rounded-3xl'/>
                    </div>
                </div>

                <div className='w-full h-[25rem]  sm:h-[35rem] md:w-1/2  flex justify-center items-center'>
                    {Items1.map((item1, index) => (
                        <div key={index} className="w-full flex flex-col items-center">
                            <div className="flex flex-col items-start w-9/12  m-2 mx-auto">
                                {/* ใส่ชื่อสถานที่ */}
                                <h1 className="font-bold text-4xl lg:text-6xl text-[#340000] text-left w-full indent-5">LOCATION</h1>
                                {/* ใส่เวลาที่รับแจ้ง */}
                                <p className="text-left w-full indent-5">Time 00:00</p>
                            </div>
                            <textarea name="Detail2" className="w-9/12  h-56 sm:h-72 bg-white shadow-[2px_2px_5px_rgba(0,0,0,0.5)] rounded-3xl mb-5 indent-5 p-3 outline-none overflow-y-auto" readOnly>
                                {/* ใส่รายละเอียด */}
                                {item1}
                            </textarea>


                           {/* ปุ่มกลับมาหน้า Status */}
                            <Link to="/Status"><button className="w-32 h-10  bg-[#E20B0B] text-white rounded-3xl mb-5 hover:opacity-80 hover:text-yellow-400 shadow-lg shadow-black/35">
                                Back
                            </button></Link>


                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}

export default Info;


