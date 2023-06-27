import React from 'react'


import {CgProfile} from "react-icons/cg"
import Nav from '../nav/index'
import DashboardLayout from '../DashboardLayout'


const Settings = () => {
  return (
    <>
      <Nav/>
      
      <div className="min-h-screen flex flex-col w-96  mx-auto  opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center ">
      <DashboardLayout />
        <div className="flex items-center px-4 justify-between">
          <div className="w-24 h-24 bg-white-600 flex items-center rounded-full">
            <CgProfile style={{ height : 90 , width : 90 , marginLeft : 30}}/>
          </div>
          <div className="w-9/12 flex items-center">
            <div className="w-10/12 flex flex-col leading-none pl-4">
              <p className="text-2xl font-bold">Ahmed</p>
              <p className="text-sm pt-1 font-light text-gray-700">
                Teacher
              </p>
            </div>
            
         
             

            <div className="w-2/12">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
                </svg>
              </div>
            </div>
                 
          
          </div>
          
        </div>
        <button className="bg-white-800 w-96 rounded-full px-11 py-1 font-ligth text-black flex  ">
                Email : ahmed@gmail.com
            </button>


            <button className="bg-gray-200 w-96 rounded-full px-4 py-2 font-ligth text-black flex mt-10 ">
                old password : 
            </button>
            
            <button className="bg-gray-200 w-96 rounded-full px-4 py-2 font-ligth text-black flex mt-10 ">
                new password : 
            </button>

        

        <div className="pt-2 px-4 w-full flex flex-end ml-60">
          
          <div className="flex flex-col w-full pt-2">
            <div className="flex w-full h-12">
              
              <div className="flex justify-end">
                <button className="bg-gray-300 rounded-md  px-11  text-black font-medium  mt-5">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>

  )
}

export default Settings
