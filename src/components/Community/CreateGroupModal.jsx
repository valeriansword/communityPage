import React from "react";
import { IoClose } from "react-icons/io5";
import "./CreateGroupModal.css";
import { IoPeopleSharp } from "react-icons/io5";
import profile from "./profile.webp";
import { TiTick } from "react-icons/ti";
function CreateGroupModal({ isOpen, onClose,userInfo2,addMembers,handleRemoveMember,handleConfirmMember,handleUserforGroup,singleUser1,handleGroup,handleNone2 }) {
  const handleConfirm=()=>{
    //this is for posting commen as soon as user posted something
    onClose()
    handleConfirmMember();
    
  }
  return (
    <>

      {isOpen ? (
        <div className="overlay">
        <div className="overLayGroup-background" >
        <div className="overLayGroup-container">
        <div className=" p-6  rounded-md text-white">
         {/* add people */}
        <div className="flex justify-between">
            <div className="flex">
              <span className="ml-[20px]">
                <h1 className="text-lg font-bold">Add people</h1>
              </span>
            </div>
            <span onClick={onClose } className="cursor-pointer">
              <IoClose size="25" />
            </span>
        </div>
        {/* add people functionalty */}
        <div className="grid grid-cols-3">
            {addMembers && (addMembers.map((members,index)=>(
              members[0].name!="Group Name-1"?
                <div key={index} className= "flex ring-2 ring-gray-300 p-2 w-fit rounded-[30px] space-x-2 mb-[10px] text-white">
                <span className=""><IoPeopleSharp size="20"/></span>
                <p>{members[0].name}</p>
                <span onClick={()=>handleRemoveMember(members[0].id)} className="cursor-pointer">
              <IoClose size="25" />
            </span>
              </div>:null  


            )))} 
        </div>

        <div className="flex justify-end  ">
               <span className="ring-2 ring-Yellow bg-Yellow rounded-full 
                 cursor-pointer" onClick={()=>handleConfirm()}>
                   <TiTick size="25"/></span>
            </div>
            <input
              text="text"
              name="search"
              placeholder="search"
              autoComplete="off"
              className="w-[98%] m-2 px-3  py-2 font-semibold text-Darkblue placeholder-gray-400 text-lg rounded-[30px]  border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
       {userInfo2.map((user) => (
              <div
                className="w-full  "
                onClick={() => handleUserforGroup(user.id)}
              >
                <div
                  key={user.id}
                  className="mt-[10px] ml-2 flex space-x-2 mb-[10px]  "
                  onClick={()=>singleUser1==1?handleGroup():handleNone2()}
                >
                  <span
                    className={
                      // singleUser == 1
                      //   ? "items-center mt-[5px] text-Yellow"
                         "items-center mt-[5px]"
                    }
                    
                  >
                    <img src={user.profile} className="rounded-full h-[30px] w-[30px] object-fit"/>
                  </span>
                  <span>
                    <h1 className="text-lg font-semibold text-Yellow">{user.name}</h1>
                    <p className="text-md font-normal text-white">
                      {user.recentMessage}
                    </p>
                  </span>
                </div>
                <hr />
              </div>
            ))}

       
       
        
        
        
        
        
        </div></div></div></div>
      ) : null}
    </>
  );
}

export default CreateGroupModal;
