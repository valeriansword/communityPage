import React, { useState } from 'react'
import SideBarProfile from './SideBarProfile'
import Hackathon from "./Hackathon.png"
import OnlineQuiz from "./onlineQuiz.png";
import aptitude from "./Aptitute-Test.webp";
import codingSkill from "./codingSkill.png";
import AptitudeGraph from './AptitudeGraph.jsx';

function AnalyticsProfile() {
    const HackathonData=[
        {
            id:1,
            img:Hackathon,
            name:"Hackathon Name",

        },
        {
            id:2,
            img:Hackathon,
            name:"Hackathon Name",

        },
        {
            id:3,
            img:Hackathon,
            name:"Hackathon Name",

        },
        

    ]
    const onlinequiz=[
        {
            id:1,
            img:OnlineQuiz,
            name:"Quiz Name",
        }
    ]
    const Aptitude=[{
        id:1,
        img:aptitude,
        name:"Aptitude Tests",
    }]
    const CodingSkill=[{
        id:1,
        img:codingSkill,
        name:"Coding skill"

    }]
    const [isaptitude,setAptitude]=useState(false);
    
  return (
    <div className="w-full h-full flex font-times">
      <SideBarProfile />
      <div className="bg-Yellow w-full ml-[10px] mr-[10px] rounded-md p-2 pl-[50px] pr-[50px] rounded-md">
        {/* hackathon */}
        <div className='w-full ' >
            <span className='flex space-x-4 mb-[10px] '>
                <h1 className='text-lg font-bold'>Hackathons</h1>
                <p className='text-md font-normal underline cursor-pointer' >View wore</p>
            </span>
            <div className='w-full grid grid-cols-3 space-x-2'>
        {HackathonData.map((data)=>(
            
            <div className='w-[90%] p-2 bg-white rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105 ' key={data.id}>
                <img src={data.img} className='rounded-md'/>
                <span className='flex justify-between mt-[10px] mb-[10px]'>
                    <h1 className='font-semibold text-Darkblue text-lg'>{data.name}</h1>
                    <p className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-md font-normal rounded-md px-2 h-[20px] mr-[2px]'>Completed</p>
                </span>
                <p className='text-md font-normal text-justify'>Lorem ipsum dolor sit amet elit id consectetur adipisicing . Quam pariatur thin normal wedow wery  </p>

            </div>
        ))}
        </div>

        </div>
        {/* quiz */}
        <div className='w-full mt-[20px]' >
            <span className='flex space-x-4 mb-[10px] '>
                <h1 className='text-lg font-bold'>Online Quiz</h1>
                <p className='text-md font-normal underline cursor-pointer' >View wore</p>
            </span>
            <div className='w-full grid grid-cols-3 space-x-2'>
        {onlinequiz.map((data)=>(
            
            <div className='w-[90%] p-2 bg-white rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105 ' key={data.id}>
                <img src={data.img} className='rounded-md'/>
                <span className='flex justify-between mt-[10px] mb-[10px]'>
                    <h1 className='font-semibold text-Darkblue text-lg'>{data.name}</h1>
                    <p className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-md font-normal rounded-md px-2 h-[20px] mr-[2px]'>Completed</p>
                </span>
                <p className='text-md font-normal text-justify'>Lorem ipsum dolor sit amet elit id consectetur adipisicing . Quam pariatur thin normal wedow wery  </p>

            </div>
        ))}
        </div>

        </div>
        {/* aptitude test */}
        <div className='w-full mt-[20px]' >
            <span className='flex space-x-4 mb-[10px] '>
                <h1 className='text-lg font-bold'>Aptitude Tests</h1>
                <p className='text-md font-normal underline cursor-pointer' onClick={()=>setAptitude(true)} >View wore</p>
            </span>
            <div className='w-full grid grid-cols-3 space-x-2'>
        {Aptitude.map((data)=>(
            
            <div className='w-[90%] p-2 bg-white rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105 ' key={data.id}>
                <img src={data.img} className='rounded-md'/>
                <span className='flex justify-between mt-[10px] mb-[10px]'>
                    <h1 className='font-semibold text-Darkblue text-lg'>{data.name}</h1>
                    <p className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-md font-normal rounded-md px-2 h-[20px] mr-[2px]'>Completed</p>
                </span>
                <p className='text-md font-normal text-justify'>Lorem ipsum dolor sit amet elit id consectetur adipisicing . Quam pariatur thin normal wedow wery  </p>

            </div>
        ))}
        </div>
            
        </div>
        <AptitudeGraph isaptitude={isaptitude} onClose={()=>setAptitude(false)} />
        {/* codingskill */}
        <div className='w-full mt-[20px]' >
            <span className='flex space-x-4 mb-[10px] '>
                <h1 className='text-lg font-bold'>Coding Skill</h1>
                <p className='text-md font-normal underline cursor-pointer ' >View wore</p>
            </span>
            <div className='w-full grid grid-cols-3 space-x-2'>
        {CodingSkill.map((data)=>(
            
            <div className='w-[90%] p-2 bg-white rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105 ' key={data.id}>
                <img src={data.img} className='rounded-md'/>
                <span className='flex justify-between mt-[10px] mb-[10px]'>
                    <h1 className='font-semibold text-Darkblue text-lg'>{data.name}</h1>
                    <p className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-md font-normal rounded-md px-2 h-[20px] mr-[2px]'>Completed</p>
                </span>
                <p className='text-md font-normal text-justify'>Lorem ipsum dolor sit amet elit id consectetur adipisicing . Quam pariatur thin normal wedow wery  </p>

            </div>
        ))}
        </div>

        </div>
        
        

        

    </div>
    </div>
  )
}

export default AnalyticsProfile
