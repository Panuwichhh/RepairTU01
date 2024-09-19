
function Login() {

    return (
        <>
            <div className="font-inter grid grid-cols-2 h-screen items-center mx-10 max-md:grid-cols-1 max-md:mx-1">
                {/* <div className="container">
                <p  className=" text-center text-[5rem] max-sm:text-[5rem]">WELCOME</p>
                <div className=" text-center text-[10rem] max-sm:text-[5rem]">
                    <i className="fa-solid m-10 fa-screwdriver-wrench "></i>
                </div>
                </div> */}
                <div className=" text-center ">
                        <i class=" text-[15vw] text-[#340000] fa-solid fa-screwdriver-wrench max-md:text-[20vw] "></i>
                        <p class="text-[#340000] font-bold text-[10vw] leading-none max-md:text-[15vw]">WECOME</p>
                        </div>
                {/* login */}
                <div className="item-center my-10 max-md:my-5 mx-5 ">
                    <form className=" p-6 bordershadow-sm rounded-2xl bg-gradient-to-b from-[#FF0000] to-[#FFD705] shadow-2xl  mr-2 ">
                        <div className=" ">
                            <div className="text-[5rem]  font-bold  text-center text-white my-2">LOGIN</div>
                        </div>
                        <div className="mb-5">
                        <label for="student_id" id="student_id">
                        &#x1FAAA; <span className="text-white text-xl">STUDENT ID</span>
                    </label>
                            
                            <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-xl  w-full p-2.5 " placeholder="@gmail" required />
                        </div>
                        <div className="mb-5 ">
                        <label for="password" id="password">
                        &#128274; <span className="text-white text-xl">PASSWORD</span>
                    </label>
                            <input type="email" id="passowrd" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-xl   w-full p-2.5 " placeholder="*******" required />
                        </div>
                        <div className="mb-5 text-center ">
                            <button className=" shadow-lg  bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="button">
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
