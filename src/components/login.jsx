
function Login() {

    return (
        <>
            <div className="grid grid-cols-2 h-screen items-center mx-10 max-md:grid-cols-1 max-md:mx-1">
                <div className="container">
                <p  className=" text-center text-[5rem] max-sm:text-[5rem]">WELCOME</p>
                <div className=" text-center text-[10rem] max-sm:text-[5rem]">
                    <i className="fa-solid m-10 fa-screwdriver-wrench "></i>
                </div>
                </div>

                {/* login */}
                <div className="item-center my-10 mx-5 ">
                    <form className=" p-6 bordershadow-sm rounded-2xl bg-gradient-to-b from-[#FF0000] to-[#FFD705] shadow-2xl  mr-2 ">
                        <div className=" ">
                            <div className="text-[5rem]  font-bold text-black text-center text-white my-2">LOG IN</div>
                        </div>
                        <div className="mb-5">
                        <label for="student_id" id="student_id">
                        &#x1FAAA; <span class="text-white text-lg">STUDENT ID</span>
                    </label>
                            
                            <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-lg  w-full p-2.5 " placeholder="@gmail" required />
                        </div>
                        <div className="mb-5 ">
                        <label for="password" id="password">
                        &#128274; <span class="text-white text-lg">PASSWORD</span>
                    </label>
                            <input type="email" id="passowrd" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-lg  w-full p-2.5 " placeholder="*******" required />
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
