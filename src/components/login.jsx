import React, { useState } from 'react';
import axios from 'axios';


function Login() {


    const [value, setValue] = useState({
        StudentId: '',
        Password: '',
      });

      
      const handleInputChange = (event) => {
        const { name, value: inputValue } = event.target;
        setValue((prevValue) => ({
          ...prevValue, // Spread the previous state properly
          [name]: inputValue, // Update the changed field
        }));
      };


  const handleSubmit  = (event) => {
    event.preventDefault();
    console.log(value)
    axios.post('http://localhost:5000/api/logim',FormData)
    .then((response) => {
        console.log('Success', response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log('Server Error', error.response.data);
        } else if (error.request) {
          console.log('Network Error', error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  
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
            value={value.StudentId}
            onChange={handleInputChange}className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-xl  w-full p-2.5 " placeholder="" required />
                        </div>
                        <div className="mb-5 ">
                            <label for="password" id="password">
                                &#128274; <span className="text-white text-xl">PASSWORD</span>
                            </label>
                            <input type="password"
                                value={value.Password}
                                onChange={handleInputChange} id="passowrd" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-xl   w-full p-2.5 " placeholder="*******" required />
                        </div>
                        <div className="mb-5 text-center ">
                            <button onClick={handleSubmit} type="submit" className=" shadow-lg  bg-[#E20B0B] hover:bg-red-400 text-white font-bold py-2 px-4 rounded" >
                                Login
                            </button>

                        </div>
                    </form>
                </div>
                </div>
        </>
    )

}

export default Login
