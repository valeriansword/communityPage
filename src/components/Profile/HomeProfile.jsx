import React, { useState } from "react";
import SideBarProfile from "./SideBarProfile";
import profile from "./profile.jfif";
import assigned1 from "./assigned_1.png";
import gdrive from "./gdrive.webp";
import EditProfile from "./EditProfile";
function HomeProfile() {
  const[editProfile,setEditProfile]=useState(false);
  const data={
  }
  const [fullName,setFullName]=useState("")
  const [EmailId,setEmailId]=useState("")
  const [PhoneNumber,setPhoneNumber]=useState("")
  const [CollegeName,setCollegeName]=useState("")


  const handleData1=(name,email,phone,college)=>{
    setFullName(name);
    setEmailId(email);
    setPhoneNumber(phone);
    setCollegeName(college);
    console.log(fullName,EmailId,PhoneNumber,CollegeName);


  }
  return (
    <div className=" w-full h-full font-times">
      <div className="flex w-full h-full">
        <SideBarProfile />
        {/* profile section deatila */}
        <div className="h-full w-[100%] ml-[10px] mr-[10px] flex flex-col">

          <div className="w-[100%] pb-2 mb-[50px] bg-Yellow relative top-[50px] pt-[50px] rounded-md">
            <img
              src={profile}
              className="h-[100px] w-[100px] rounded-full absolute top-[-50px] left-[10px]"
            />
            {/* details */}
            <div className=" w-[100%] h-full pl-[150px]">
              <div className="">
                {/* name and phone number */}
                <span className="flex justify-between">
                  <h1 className="text-lg font-semibold text-Darkblue">
                    {" "}
                    {fullName?fullName:"John Doe"}
                  </h1>
                  <p className="pr-[200px] text-lg font-semibold text-Darkblue">
                  {PhoneNumber?PhoneNumber:"123456789"}
                  </p>
                </span>
                {/* phone number */}
                <span className="flex text-lg font-semibold text-Darkblue mt-[20px]">
                  <p> {EmailId?EmailId:"abcde@gmail.com"}</p>
                </span>
                {/* college*/}
                <span className="flex text-lg font-semibold text-Darkblue mt-[20px]">
                  <p> {CollegeName?CollegeName:"abc college of engineering and technology"}</p>
                </span>
                {/* github link */}
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Github Link:</h1>
                  <input
                    type="text"
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md"
                  />
                </span>
                {/* LinkedIn Profile */}
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>LinkedIn Profile:</h1>
                  <input
                    type="text"
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md"
                  />
                </span>
                {/* portfolio link */}
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Portfolio link:</h1>
                  <input
                    type="text"
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md"
                  />
                </span>
                {/* Interest */}
                <span className="flex flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Interests:</h1>
                  <input
                    type="text"
                    className="border-none outline-none bg-white text-Darkblue w-[55%] rounded-md"
                  />
                </span>
                {/* upload your resume */}
                <div className="flex space-x-6 w-full">
                <span className=" w-[50%] flex space-y-2 flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Upload your resume</h1>
                  <button className="bg-White text-Yellow font-bold text-lg border-none ring-2 ring-white rounded-md w-[15%]">
                    <img src={gdrive} className="h-[30px] w-[40px] ml-[10px]" />
                  </button>
                </span>
                <span className="w-[50%] flex space-y-2 flex-col text-lg font-semibold text-Darkblue mt-[20px]">
                  <h1>Edit your profile</h1>
                  <button className="bg-Darkblue text-Yellow font-bold text-lg 
                  border-none ring-2 ring-Darkblue rounded-md w-[15%]" onClick={()=>setEditProfile(true)}>
                    Edit{" "}
                  </button>
                </span>
                </div>
              </div>
            </div>
          </div>
          <EditProfile editProfile={editProfile} onClose={()=>setEditProfile(false)} handleData1={handleData1}/>
          {/* Assigned work */}
          <div className="w-full h-full bg-Yellow mt-[10px] rounded-md p-2 mb-[10px] pl-[20px]">
            <h1 className="font-bold text-lg text-Darkblue">Assigned Trainings/Bootcamps/Workshops</h1>
            <div className="w-[26%] mt-[10px] border-1 border-white bg-Darkblue rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105">
              <img src={assigned1} className="rounded-md"/>
              <div className="p-2 ">
                <p className="text-center font-semibold text-Yellow text-lg">Full Stack Development</p>
                <p className="text-justify font-normal text-white text-md">learn full stack and build your own sites and make it functional</p>
              </div>
              <div className="w-full flex justify-end pb-[10px] pr-[10px]">
                <button className="text-Darkblue bg-Yellow rounded-[30px] ring-2 
                ring-Yellow w-[50%] ">Get Started</button>
              </div>

            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default HomeProfile;
