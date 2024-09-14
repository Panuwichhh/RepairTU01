
function Upload() {

  return (
    <>
    <h1 className="mt-4 ml-[3rem] text-[3rem]">INFORMATION</h1>
      <form className=" ml-5 justify-center flex ">
        <div className="flex item-center justify-center w-full h-[50rem]  ">
          <label for="dropzone-file" className="  flex flex-col items-center justify-center bg-gray-200 h-auto w-full mx-5  mb-[2rem]  mt-[3rem] border rounded-[35px] cursor-pointer hover:bg-gray-400 hover:border-black border-4 border-dashed border-red-400">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <i class="fa-regular fa-image text-[5rem]"></i>
            </div>
            <div className="span">
              UPLOAD HERE
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <div className=" shadow-xl mt-[3rem] h-full item-center bg-gray-200 mx-5 mb-5 rounded-[35px] p-4 w-[45rem] bg-gradient-to-b from-[#FF0000] to-[#FFD705] shadow-2xl">
          <div className="mb-5">
            <label for="email" className="block mb-2 text-lg  font-medium  text-black ">สถานที่</label>
            <select type='choices' id="passowrd" className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-lg  w-full p-2.5 " required >
              <option value="option1">วิศวะ</option>
              <option value="option2">Sc</option>
              <option value="option3">Jc</option>
              <option value="option3">โรงพยาบาล</option>
            </select>
          </div>
          <div className="mb-5">
            <label for="email" className="block mb-2 text-lg  font-medium  text-black ">สิ่งที่ต้องการแก้ไข</label>
            <input type='text' className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg w-full p-2.5  " placeholder="สิ่งที่ต้องการแก้ไข"></input>
          </div>
          <div className="mb-5">
            <label for="email" className="block mb-2 text-lg  font-medium  text-black ">รายละเอียดเพิ่มเเติม</label>
            <textarea type='text' className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 h-64 " placeholder="ใส่รายละเอียด"></textarea>
          </div>
          <div class="flex items-center mb-4">
            <input id="checkbox-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
            <label for="checkbox-1" class="ms-2 text-lg font-medium text-gray-900 ">ยืนยันข้อมูลแจ้งซ่อม</label>
          </div>
          <div className="mb-5 text-center">
            <button className="shadow bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="button">
              Summit
            </button>
          </div>
        </div>
      </form>

    </>
  )

}

export default Upload
