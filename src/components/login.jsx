
function Login() {

    return (
        <>
            <div className="grid grid-cols-2 h-screen items-center mx-10 max-md:grid-cols-1 max-md:mx-1">
                <div className=" text-center text-[20rem] max-sm:text-[12rem]">
                    <i className="fa-solid m-10 fa-screwdriver-wrench "></i>
                </div>
                <div className="item-center my-10 mx-5 ">
                    <form className=" p-6 bordershadow-sm rounded-lg bg-gradient-to-b from-[#FF0000] to-[#FFD705] shadow-lg ">
                        <div className=" ">
                            <div className="text-[5rem]  font-bold text-black text-center text-white my-2">LOG IN</div>
                        </div>
                        <div className="mb-5">
                            <label for="email" className="block mb-2 text-lg  font-medium  text-white "><i class="fa-regular fa-envelope fa-xl mr-2" style={{ color: "#ffffff" }} ></i>Email</label>
                            <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-lg  w-full p-2.5 " placeholder="@gmail" required />
                        </div>
                        <div className="mb-5">
                            <label for="email" className="block mb-2 text-lg  font-medium  text-white "><i class="fa-regular fa-envelope fa-xl mr-2" style={{ color: "#ffffff" }} ></i>Password</label>
                            <input type="email" id="passowrd" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-lg  w-full p-2.5 " placeholder="*******" required />
                        </div>
                        <div className="mb-5 text-center">
                            <button className="shadow bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="button">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login
