import React, { useState } from 'react';

function Upload() {
  const [location, setLocation] = useState('');
  const [issue, setIssue] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = async () => {
    console.error(issue)
    console.error(location)
    console.error(details)

    const formData = {
      location: location,
      issue: issue,
      details: details,
    };

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData)
        console.log('Data submitted successfully');
        window.alert('ส่งข้อมูลสำเร็จ')
      } else {
        window.alert('ส่งข้อมูลไม่สำเร็จ')
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
   <div className="font-inter">
    <h1 className="font-inter mt-4 ml-[5vw] text-[4.5rem] font-bold text-[#340000] max-lg:text-[2rem] ">INFORMATION</h1>
      <form className="justify-center flex  max-xl:grid max-xl:grid-cols-1">
        <div className="flex item-center justify-center w-full h-[50rem]  max-xl:h-[30rem] max-lg:w-full ">
          <label htmlFor="dropzone-file" className="  flex flex-col items-center justify-center bg-gray-100 h-auto w-full mx-5  mb-[2rem]  mt-[3rem] border rounded-[35px] cursor-pointer hover:bg-gray-300 border-4 border-dashed border-red-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <i className="fa-solid fa-cloud-arrow-up text-[5rem] text-red-400"></i>
            </div>
            <div className=" text-lg flex ">
              <p>Click to upload image</p> <p className="text-red-400 ml-2 underline underline-offset-2">Here</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <div className="mt-[3rem] p-4 w-1/3 max-xl:w-full max-xl:mt-1">
          <div className="bg-gradient-to-b from-[#FF0000] to-[#FFD705] shadow-2xl  item-center mx-5 mb-5 rounded-3xl p-4">
          <div className="mb-5">
            <label htmlFor="email" className="text-white block mb-2 text-lg  font-medium   ">สถานที่</label>
            <select type='choices' select="select some pption" onChange={(e) => setLocation(e.target.value)} value={location}
             className="shadow-sm bg-white border border-gray-300 text-gray-900  rounded-lg  w-full p-2.5 " required >
              <option value="Engr">วิศวะ</option>
              <option value="Sc">Sc</option>
              <option value="Jc">Jc</option>
              <option value="Hospital">โรงพยาบาล</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className=" text-white block mb-2 text-lg  font-medium   ">สิ่งที่ต้องการแก้ไข</label>
            <input type='text'  onChange={(e) => setIssue(e.target.value)} value={issue}
             className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg w-full p-2.5  " placeholder="สิ่งที่ต้องการแก้ไข"></input>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-lg  font-medium  text-white ">รายละเอียดเพิ่มเเติม</label>
            <textarea type='text' value={details}  onChange={(e) => setDetails(e.target.value)}
            className="shadow-sm bg-white border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 h-64 " placeholder="ใส่รายละเอียด"></textarea>
          </div>
          <div className="mb-5 text-center">
            <button onClick={handleSubmit}  
            className="shadow bg-red-500 text-white  hover:bg-red-400 text-white font-bold py-2 px-4 rounded" type="button">
              Submit
            </button>
          </div>
        </div>
        </div>
      </form>
      </div>

    </>
  )

}

export default Upload
