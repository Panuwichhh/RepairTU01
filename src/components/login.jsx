

function Login() {

    return (
        <>
            <div className="grid grid-cols-2 h-screen items-center">
                <div className=" text-center">
                    <i class="fa-solid fa-screwdriver-wrench text-[20rem]"></i>
                </div>
                <div className="item-center m-10">
                    <form className=" py-20 p-6 bordershadow-sm mx-2 rounded-lg bg-gradient-to-b from-[#FF0000] to-[#FFD705] ">
                        <div className=" ">
                            <div className="text-[5rem]  font-bold text-black text-center text-white  my-2">LOG IN</div>
                        </div>
                        <div class="mb-5">
                        <label for="email" class="block mb-2 text-lg  font-medium  text-white "><i class="fa-regular fa-envelope fa-xl mr-2" style={{ color: "#ffffff" }} ></i>Email</label>
                            <input type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-black w-full p-2.5 " placeholder="11" required />
                        </div>
                        <div class="mb-5">
                        <label for="email" class="block mb-2 text-lg  font-medium  text-white "><i class="fa-solid fa-lock fa-xl mr-2" style={{ color: "#ffffff" }} ></i>Password</label>
                            <input type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-black w-full p-2.5 " placeholder="11" required />
                        </div>
                        <div className="text-center">
                            <button type="submit" class="  bg-[#E20B0B] font-medium text-lg rounded-lg px-5 py-2.5 text-center text-white">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login
