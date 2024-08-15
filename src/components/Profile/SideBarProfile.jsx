import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./SideBarProfile.css"
function SideBarProfile() {
    const [menu,setMenu]=useState();
  return (
    <div className='h-[250vh] w-[200px] bg-Darkblue text-white p-2 font-times rounded-r-[10px]'>
      <ul className=' mt-[20px] '>
        <Link to="/SkillCentre/profile/"><li className='text-lg text-white font-semibold  pl-2' >Home</li></Link>
        <Link to="/SkillCentre/profile"> <li className={`${menu=="my profile"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  pl-2 mt-6 cursor-pointer`} onClick={()=>setMenu("my profile")}>My profile</li></Link>
        <Link to="/SkillCentre/learnings"><li className={`${menu=="my learnings"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  pl-2  mt-6 cursor-pointer`} onClick={()=>setMenu("my learnings")}>My Learnings</li></Link>
        <Link to="/SkillCentre/certifications"><li className={`${menu=="my certifications"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  mt-6 pl-2  cursor-pointer`} onClick={()=>setMenu("my certifications")}>My Certifications</li></Link>
        <Link to="/SkillCentre/analytics"><li className={`${menu=="my analytics"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  pl-2  mt-6 cursor-pointer`} onClick={()=>setMenu("my analytics")}>Analytics</li></Link>
        <Link to="/SkillCentre/logout"><li className={`${menu=="logout"?" border-2 border-l-Yellow border-Darkblue ":" "} text-lg text-white font-semibold  pl-2  cursor-pointer mt-6`} onClick={()=>setMenu("logout")}>Logout</li></Link>
      </ul>
    </div>
  )
}

export default SideBarProfile
