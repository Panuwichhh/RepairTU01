import React, { useState } from 'react';

function Login() {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ส่งข้อมูลไปยัง API login
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ studentId, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setAccessToken(data.accessToken);
                setRefreshToken(data.refreshToken);
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="font-inter grid grid-cols-2 h-screen items-center mx-10 max-md:grid-cols-1 max-md:mx-1">

                <div className=" text-center ">
                    <i class=" text-[15vw] text-[#340000] fa-solid fa-screwdriver-wrench max-md:text-[20vw] "></i>
                    <p class="text-[#340000] font-bold text-[9vw] leading-none max-md:text-[15vw]">WELCOME</p>
                </div>
                {/* login */}
                <div className="item-center my-10 max-md:my-5 mx-5 ">
                    <form className=" p-5 bordershadow-sm rounded-2xl bg-gradient-to-b from-[#FF0000] to-[#FFD705] shadow-2xl  mr-2 ">
                        <div className=" ">
                            <div className="text-[5rem]  font-bold  text-center text-white my-2">LOGIN</div>
                        </div>
                        <div className="mb-5">
                            <label for="student_id" id="student_id">
                                &#x1FAAA; <span className="text-white text-xl">STUDENT ID</span>
                            </label>

                            <input             type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-xl  w-full p-2.5 " placeholder="" required />
                        </div>
                        <div className="mb-5 ">
                            <label for="password" id="password">
                                &#128274; <span className="text-white text-xl">PASSWORD</span>
                            </label>
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} id="passowrd" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-xl   w-full p-2.5 " placeholder="*******" required />
                        </div>
                        <div className="mb-5 text-center ">
                            <button onClick={handleSubmit} type="submit" className=" shadow-lg  bg-[#E20B0B] hover:bg-red-400 text-white font-bold py-2 px-4 rounded" >
                                Login
                            </button>

                        </div>
                    </form>
                </div>
                {accessToken && (
        <div>
          <h2>Access Token:</h2>
          <p>{accessToken}</p>
        </div>
      )}

      {refreshToken && (
        <div>
          <h2>Refresh Token:</h2>
          <p>{refreshToken}</p>
        </div>
      )}
            </div>
        </>
    )

}

export default Login
