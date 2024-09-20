// Initialize Firebase and Firestore (ใส่รายละเอียด config ที่ถูกต้อง)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "test-55ff0.firebaseapp.com",
    projectId: "test-55ff0",
    storageBucket: "test-55ff0.appspot.com",
    messagingSenderId: "657443579582",
    appId: "1:657443579582:web:d05abab4221abcdc99a0ef",
    measurementId: "G-CQ0WC578TR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ฟังก์ชันดึงข้อมูลจาก Firestore
async function getData() {
    const querySnapshot = await getDocs(collection(db, 'Locations'));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        displayLocation(data); // ส่งข้อมูลไปยังฟังก์ชันแสดง
    });
}

// ฟังก์ชันแสดงข้อมูลใน HTML
function displayLocation(data) {
    const container1 = document.getElementById('location_container_1');
    const container2 = document.getElementById('location_container_2');
    const div1 = document.createElement('div');
    div1.classList.add('bg-white', 'p-4', 'm-2', 'shadow-lg', 'rounded-lg');

    div1.innerHTML = `
        <a href="Home.html" >
        <div id="not-done-section" class="w-full h-[10vh] flex justify-between ">
                    <div class="w-1/5 h-full flex items-center justify-center">
                        <img src="" alt="" class="w-10 h-10 bg-gray-400 rounded-full">
                    </div>
                    <div class="w-full h-full">
                        <div class=" w-full h-1/2 font-black text-[20px] flex items-center ">
                            <p>${data.Location}</p>
                            <p class="font-normal text-[15px] ml-10">${new Date(data.Time.seconds * 1000).toLocaleString()}</p>
                        </div>
                        <div class=" w-full h-1/2 text-gray-500 ">
                        ${data.name}
                        </div>
                    </div>

                    <div class="w-28 h-full flex items-center justify-center">
                        <div id="status_color" class="w-5 h-5 bg-green-500 rounded-full"></div>
                    </div>
            </div>
        </a>
            

    `;
    const div2 = document.createElement('div');
    div2.classList.add('bg-white', 'p-4', 'm-2', 'shadow-lg', 'rounded-lg');
    div2.innerHTML = `
        <a href="Home.html" >
        <div id="not-done-section" class="w-full h-[10vh] flex justify-between ">
                    <div class="w-1/5 h-full flex items-center justify-center">
                        <img src="" alt="" class="w-10 h-10 bg-gray-400 rounded-full">
                    </div>
                    <div class="w-full h-full">
                        <div class=" w-full h-1/2 font-black text-[20px] flex items-center ">
                            <p>${data.Location}</p>
                            <p class="font-normal text-[15px] ml-10">${new Date(data.Time.seconds * 1000).toLocaleString()}</p>
                        </div>
                        <div class=" w-full h-1/2 text-gray-500 ">
                        ${data.name}
                        </div>
                    </div>

                    <div class="w-28 h-full flex items-center justify-center">
                        <div id="status_color" class="w-5 h-5 bg-red-500 rounded-full"></div>
                    </div>
            </div>
        </a>
            

    `;
    container1.appendChild(div1);
    container2.appendChild(div2);
}


// เรียกฟังก์ชันเพื่อดึงข้อมูล
getData();

const toggleSwitch = document.getElementById('toggleSwitch');
    const doneSection = document.getElementById('location_container_1');
    const notDoneSection = document.getElementById('location_container_2');

    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            doneSection.classList.add('hidden');
            notDoneSection.classList.remove('hidden');
          
        } else {
            // notDoneSection.classList.add('hidden');
            doneSection.classList.remove('hidden');
            notDoneSection.classList.add('hidden');
        }
    });


    document.getElementById('to_add_page').addEventListener('click', function () {
        window.location.href = './Add_infor_admin.html';  // Correct path to the file inside the build folder
    });

