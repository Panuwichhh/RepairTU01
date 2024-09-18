
function Upload() {

  return (
    <>
   <div className="font-inter">

    <h1 className="font-inter mt-4 ml-[3rem] text-[4.5rem] font-bold text-[#340000] ">INFORMATION</h1>
      <form className=" ml-5 justify-center flex max-md:grid max-md:grid-cols-1">
        <div className="flex item-center justify-center w-full h-[50rem]  ">
          <label htmlFor="dropzone-file" className="  flex flex-col items-center justify-center bg-gray-100 h-auto w-full mx-5  mb-[2rem]  mt-[3rem] border rounded-[35px] cursor-pointer hover:bg-gray-300 border-4 border-dashed border-red-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <i className="fa-regular fa-image text-[5rem] text-red-400"></i>
            </div>
            <div className=" text-lg flex">
              <p>Click to upload image</p> <p className="text-red-400 ml-2">Here</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <div className=" shadow-xl mt-[3rem] h-full item-center bg-gray-200 mx-5 mb-5 rounded-[35px] p-4 w-[45rem] bg-gradient-to-b from-[#FF0000] to-[#FFD705] shadow-2xl">
          <div className="mb-5">
            <label htmlFor="email" className="text-white block mb-2 text-lg  font-medium   ">สถานที่</label>
            <select type='choices' className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-lg  w-full p-2.5 " required >
              <option value="option1">วิศวะ</option>
              <option value="option2">Sc</option>
              <option value="option3">Jc</option>
              <option value="option3">โรงพยาบาล</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className=" text-white block mb-2 text-lg  font-medium   ">สิ่งที่ต้องการแก้ไข</label>
            <input type='text' className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg w-full p-2.5  " placeholder="สิ่งที่ต้องการแก้ไข"></input>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-lg  font-medium  text-white ">รายละเอียดเพิ่มเเติม</label>
            <textarea type='text' className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 h-64 " placeholder="ใส่รายละเอียด"></textarea>
          </div>
          <div className="mb-5 text-center">
            <button className="shadow bg-red-500 text-white  hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="button">
              Summit
            </button>
          </div>
        </div>
        


      </form>
      </div>

    </>
  )

}

export default Upload
