import React,{useState} from 'react'

function Status() {

    const repairedItems = ['บรรยายรวม 1', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์', 'บรรยายรวม 2', 'วิศวกรรมศาสตร์'];
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
                <h1 className="font-bold text-5xl text-[#340000] my-5">STATUS</h1>
            </div>

            <div className="w-full h-[50rem] bg-gradient-to-t from-[#FFD705] to-[#FF0000] rounded-t-[35px]">

                <div className="w-[20%] h-[5%]"></div>
                <div className="flex justify-between items-center">
                    <label className="inline-flex items-center cursor-pointer ">
                        <input type="checkbox" id="toggleSwitch" className="sr-only peer" 
                        onChange={handleToggle} // เรียกฟังก์ชันเมื่อมีการเปลี่ยนสถานะ
                            checked={!isRepaired} />
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
                    <div id="statusBox" className="w-[85%] h-[90%] bg-gray-200 rounded-md overflow-y-auto">
                        {isRepaired ? (
                            // แสดงรายการเมื่อสถานะเป็น "Repaired"
                            repairedItems.map((item, index) => (
                                <div key={index} className="flex p-5 bg-green-200 mb-2">
                                    <li>{item}</li>
                                </div>
                            ))
                        ) : (
                            // แสดงรายการเมื่อสถานะเป็น "Pending Repair"
                            pendingItems.map((item, index) => (
                                <div key={index} className="flex p-5 bg-red-200 mb-1 shadow-sm ">
                                    <li>{item}</li>
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