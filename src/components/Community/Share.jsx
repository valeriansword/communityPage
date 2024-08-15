import React from "react";
import "./Comments.css";
import { CgProfile } from "react-icons/cg";
import { FcManager } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import profile from "./profile.webp";
function Share({ isOpen, onClose }) {
  const userNotify = [
    {
      id: 1,
      profile: profile,
      name: "John doe",
    },
    {
      id: 2,
      profile: profile,
      name: "John doe",
    },
    {
      id: 3,
      profile: profile,
      name: "John doe",
    },
   
  ];
  return (
    <>
      {isOpen ? (
        <div className="overlay">
          <div className="overLayComments-background" >
            <div className="overLayComments-container">
              <div className="p-6 font-times">
                <div className="flex justify-between">
                <h1 className="text-lg font-semibold ">send john does message</h1>
                <span onClick={onClose } className="cursor-pointer">
              <IoClose size="25" />
            </span></div>

        {userNotify.map((user)=>(
            <div>
            <div className="flex mt-[20px]" key={user.id}>
            <span>
            <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit ml-[2px]"/>
            </span>
            <div>

            <h1 className="text-md font-semibold">{user.name}</h1>
            <p className="text-md text-gray-400 font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              mollitia 
            </p>
            
            
            </div>
            <input type="checkbox" className="ml-[10px] bg-Yellow  rounded-full"/>
            </div>
            <hr/>
            </div>
          
    ))}

<button className="ring-2 ring-Darkblue mt-[20px] text-lg font-normal text-white bg-Darkblue  w-[100px] h-[30px] rounded-[30px] ">
              send
            </button>



</div> 

            </div>



          </div>
        </div>
      ) : null}
    </>
  );
}

export default Share;
