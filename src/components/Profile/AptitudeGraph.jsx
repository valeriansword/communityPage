import React,{PureComponent, useState} from "react";
import { CgProfile } from "react-icons/cg";
import { LuFiles } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./Aptitude.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function AptitudeGraph({ isaptitude, onClose }) {
  const data = [
   {name:"Test 1",points:100,},
   {name:"Test 2",points:200,},
   {name:"Test 3",points:500,},
   {name:"Test 4",points:900,},
   {name:"Test 5",points:1000,},
  ];
  
  
  
  
  
  // const getIntroOfPage = (label) => {
  //   if (label === 'Page A') {
  //     return "Page A is about men's clothing";
  //   }
  //   if (label === 'Page B') {
  //     return "Page B is about women's dress";
  //   }
  //   if (label === 'Page C') {
  //     return "Page C is about women's bag";
  //   }
  //   if (label === 'Page D') {
  //     return 'Page D is about household goods';
  //   }
  //   if (label === 'Page E') {
  //     return 'Page E is about food';
  //   }
  //   if (label === 'Page F') {
  //     return 'Page F is about baby food';
  //   }
  //   return '';
  // };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-Yellow text-Darkblue text-md font-bold p-2 rounded-md">
          <p>{`${label}`}</p>
          <p className="label">{`${payload[0].value}`} points</p>

          
          
        </div>
      );
    }
  
    return null;
  };
   return (
    <>

      {isaptitude ? (
        <div className="overlay">
        <div className="overLayComments-background" >
        <div className="overLayComments-container">
        <div className=" p-6  rounded-md text-white">
          <div className="flex justify-between">
            <div className="flex">
              <span className="mb-[20px]">
                <h1 className="text-lg font-bold text-Yellow">Aptitude Tests</h1>
                {/* <p className="text-gray-400">50 mins ago</p> */}
              </span>
            </div>
            <span onClick={onClose } className="cursor-pointer">
              <IoClose size="25" />
            </span>
          </div>
          <LineChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          stroke="Yellow"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="white"/>
          <XAxis dataKey="name" stroke="white"/>
          <YAxis stroke="white"/>
          <Tooltip content={<CustomTooltip />}/>
          <Legend />
          <Line type="monotone" dataKey="points" stroke="#F5CF6B" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
          <table className="w-full mt-[20px]  ">
            <thead >
                  <tr >
                    <th className="text-start text-Yellow">Coding Challenges</th>
                    <th className="text-start text-Yellow">Score</th>
                    <th className="text-center text-Yellow">Points Earned</th>
                    <th className="text-end text-Yellow">Scored Date</th>
                  </tr>
            </thead>
            <tbody className="divide-y mr-[20px]">
                <tr className="" >
                  <td>Code-A-thon</td>
                  <td>25/30</td>
                  <td className="text-center">1500</td>
                  <td className="text-end">11 july 2024</td>
                </tr>
                
                <tr className="mb-[20px]">
                  <td>Code-A-thon</td>
                  <td>25/30</td>
                  <td className="text-center">1500</td>
                  <td className="text-end">11 july 2024</td>
                </tr>
                <tr className="mb-[20px]">
                  <td>Code-A-thon</td>
                  <td>25/30</td>
                  <td className="text-center">1500</td>
                  <td className="text-end">11 july 2024</td>
                </tr>
                
            </tbody>
            
          </table>
          




         
        </div>
        
        
        </div></div></div>
      ) : null}
    </>
  );
}

export default AptitudeGraph;
