import React from 'react'
import SideBarProfile from './SideBarProfile'
import { FaDownload } from "react-icons/fa6";
import certificate from "./certificate.jpg";
function Certifications() {
    const certificates=[
        {
        id:1,
        name:"Introduction to Digital marketing",
        date:"10 jul 2024",
    },
    {
        id:2,
        name:"Mastering Full Stack Development",
        date:"10 jul 2024",
    },
    {
        id:3,
        name:"App development",
        date:"10 jul 2024",
    },
    
]
  return (
    <div className="w-full h-full flex font-times">
    <SideBarProfile />
    <div className="bg-Yellow w-full ml-[10px] mr-[10px] rounded-md p-2 pl-[50px] pr-[50px] rounded-md">
        <div>
            <h1 className='text-lg font-bold'>Certificates</h1>
            <hr className='h-[1px] bg-Darkblue border-1 border-Darkblue rounded-md'/>
            <div className='w-full bg-Darkblue rounded-md p-2 mt-[20px] flex text-white  '>
                <img src={certificate} className=' h-[100px] w-[200px] rounded-md opacity-[0.9]'/>
                <div className='flex items-center justify-between w-full'>
                    <h1 className='text-Yellow text-xl font-bold ml-[20px]'>Introduction to Digital marketing</h1>
                    <h1 className='text-Yellow text-lg font-semibold ml-[20px]'>Issued On:10 July 2024</h1>
                    <button className="ring-2 ring-Yellow text-Darkblue text-lg font-semibold bg-Yellow rounded-md w-[15%] flex items-center justify-center">Download <FaDownload /></button>
                </div>


            </div>
        </div>
    
    
    
    
    </div></div>
  )
}

export default Certifications
