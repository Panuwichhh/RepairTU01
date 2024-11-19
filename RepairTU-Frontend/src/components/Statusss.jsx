import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Status() {
    const [repairedItems, setRepairedItems] = useState([]);
    const [pendingItems, setPendingItems] = useState([]);
    const [isRepaired, setIsRepaired] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); // สำหรับเปิดปิด modal
    const [selectedItem, setSelectedItem] = useState(null); // เก็บข้อมูลของ item ที่ถูกเลือก

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/upload');
                const data = response.data;

                const repaired = data.filter(item => item.status === 'repaired');
                const pending = data.filter(item => item.status === 'pending');

                setRepairedItems(repaired);
                setPendingItems(pending);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    const handleToggle = () => {
        setIsRepaired(!isRepaired); // สลับสถานะเมื่อคลิก
    };

    const openModal = (item) => {
        setSelectedItem(item); // เก็บข้อมูลที่คลิก
        setIsModalOpen(true); // เปิด modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // ปิด modal
        setSelectedItem(null); // เคลียร์ข้อมูลที่เลือก
    };

    return (
        <>
            <div className="w-full bg-[#F6F6F6] flex items-center indent-10">
                <h1 className="font-bold text-5xl text-[#340000] my-5">STATUS</h1>
            </div>

            <div className="w-full h-screen bg-gradient-to-t from-[#FFD705] to-[#FF0000] rounded-t-[35px]">
                <div className="w-[20%] h-[5%] md-w-2"></div>
                <div className="flex justify-between items-center px-4">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            id="toggleSwitch"
                            className="sr-only peer"
                            onChange={handleToggle}
                            checked={!isRepaired}
                        />
                        <div className="md"></div>
                        <div className="relative  md:w-72 h-14 rounded-full peer dark:bg-[#340000] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:absolute after:top-[4px] after:start-[6px] after:bg-[#FFD705] after:rounded-full after:h-12 after:w-[48%] after:transition-all peer-checked:bg-[#340000]">
                            <div className="flex items-center justify-between h-full px-4 ">
                                <span className="text-[#340000] font-semibold ml-5 z-10">REPAIRED</span>
                                <span className="text-[#340000] font-semibold z-10">PENDING REPAIR</span>
                            </div>
                        </div>
                    </label>

                    <Link to="/Upload">
                        <button id="to_add_page" className="text-5xl text-white mr-12 fa-solid fa-plus hover:opacity-80"></button>
                    </Link>
                </div>

                <div className="flex justify-center items-center w-full h-[75%] mt-10">
                    <div id="statusBox" className="w-[85%] h-[90%] bg-white rounded-md overflow-y-auto">
                        {isRepaired ? (
                            repairedItems.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => openModal(item)} // เปิด modal เมื่อคลิก
                                    className="flex justify-between p-2 bg-white shadow-2xl hover:shadow-gray-500 shadow-inner cursor-pointer mb-4"
                                >
                                    <div className="w-1/5 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-md overflow-hidden border-2 border-gray-300 shadow-lg">
                                            <img
                                                src={`http://localhost:3000/api/${item.image_path.replace(/\\/g, '/')}`}
                                                className="w-full h-full object-cover"
                                                alt="images"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-full">
                                        <div className="w-full h-1/2 font-black-500 text-[2vh] flex items-center">
                                            <p>{item.issue}</p>
                                            <p className="font-normal text-[1.5vh] ml-10">{item.time}</p>
                                        </div>
                                        <div className="w-full h-1/2 text-gray-500">{item.location}</div>
                                    </div>
                                    <div className="w-28 flex items-center justify-center">
                                        <div id="status_color" className="w-5 h-5 bg-green-500 rounded-full"></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            pendingItems.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => openModal(item)} // เปิด modal
                                    className="flex justify-between p-2 bg-white hover:shadow-lg cursor-pointer mb-4"
                                >
                                    <div className="w-1/5 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-md overflow-hidden border-2 border-gray-300 shadow-lg">
                                            <img
                                                src={`http://localhost:3000/api/${item.image_path.replace(/\\/g, '/')}`}
                                                className="w-full h-full object-cover"
                                                alt="images"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-full">
                                        <div className="w-full h-1/2 font-black-500 text-[2vh] flex items-center">
                                            <p>{item.issue}</p>
                                            <p className="font-normal text-[1.5vh] ml-10">{item.time}</p>
                                        </div>
                                        <div className="w-full h-1/2 text-gray-500">{item.location}</div>
                                    </div>
                                    <div className="w-28 flex items-center justify-center">
                                        <div id="status_color" className="w-5 h-5 bg-red-500 rounded-full"></div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-50">
                    <div className="bg-white p-6 rounded-lg w-11/12 sm:w-[80%] md:w-[60%] lg:w-[50%] max-w-lg">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{selectedItem?.issue}</h2>

                        <img
                            src={`http://localhost:3000/api/${selectedItem?.image_path.replace(/\\/g, '/')}`}
                            alt="Selected Item"
                            className="w-full max-h-80 object-cover mb-4"
                        />
                        <p className="text-lg sm:text-xl md:text-2xl">{selectedItem?.location}</p>
                        <p className="text-gray-500">{selectedItem?.issue}</p>
                        <p className="text-gray-500 mb-4">เวลาที่รายงาน {selectedItem?.time}</p>
                        <div className="text-center">
                            <button
                                onClick={closeModal}
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                            >
                                ปิด
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Status;
