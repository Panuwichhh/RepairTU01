import React from 'react';

const Items1 = ['ต้องการซ่อมตึก'];
const Items2 = ['ตึกได้ซ่อมเรียบร้อยแล้ว'];

function Info() {
    return (
        <>
            <div class="flex flex-row">
                <div class="w-1/2 bg-gradient-to-l from-[#FF0000] to-[#FFD705] rounded-tr-[7rem] rounded-br-[7rem]">

                </div>
                {Items1.map((item1, index) => (
                    <div key={index} className="w-1/2 bg-blue-200 flex flex-col items-center">
                        <div class="w-9/12 sm:w-5/12 flex justify-start flex-col m-2 ml-5 ">
                            <h1 className="font-bold text-4xl sm:text-6xl text-[#340000] self-start ">LOCATION</h1>
                            <p>Time 00:00</p>
                        </div>

                        <textarea name="Detail2" className="w-9/12 sm:w-5/12 h-56 sm:h-72 bg-white shadow-[2px_2px_5px_rgba(0,0,0,0.5)] rounded-3xl mb-5 indent-5 p-3 outline-none overflow-y-auto" readOnly>
                            {item1}
                        </textarea>
                        <div class="w-9/12 sm:w-5/12 flex justify-start flex-col m-2 ml-5 ">
                            <p>Time 00:00</p>
                        </div>

                        {Items2.map((item2, index2) => (
                            <textarea key={index2} name="Detail2" className="w-9/12 sm:w-5/12 h-56 sm:h-72 bg-white shadow-[2px_2px_5px_rgba(0,0,0,0.5)] rounded-3xl mb-5 indent-5 p-3 outline-none overflow-y-auto" readOnly>
                                {item2}
                            </textarea>
                        ))}
                        <button className="w-32 h-10 font-black bg-[#E20B0B] text-white rounded-3xl mb-5 hover:opacity-80 hover:text-yellow-400 shadow-lg shadow-black/35">
                            Back
                        </button>

                    </div>

                ))}
            </div>




        </>
    );
}

export default Info;

