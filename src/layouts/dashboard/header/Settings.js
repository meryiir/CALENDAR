import React from 'react'

import {RiLockPasswordFill} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import Nav from '../nav/index'

const Settings = () => {
  return (
    <>
      <Nav/>

      <>
      <div className="min-h-screen flex flex-col w-96 h-96 mx-auto  opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center">
        <div className="flex items-center px-4 pt-12 justify-between">
          <div className="w-24 h-24 bg-white-600 flex items-center rounded-full">
            <CgProfile style={{ height : 90 , width : 90 , marginLeft : 20}}/>
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
        <div className="pt-12 px-4 w-full flex flex-col">
          <p className="font-semibold text-gray-600">My Personnal informations</p>
       

          <button className="bg-red-800 w-96 rounded-full px-4 py-2 font-ligth text-white flex mt-8 ">
                Email : ahmed@gmail.com
            </button>
        </div>
        <div className="pt-12 px-4 w-full flex flex-col">
          <p className="font-semibold text-gray-600">Dashboard</p>
          <div className="flex flex-col w-full pt-2 space-y-2">
            <div className="flex w-full h-12">
              <div className="w-2/12 h-full">
              <RiLockPasswordFill style={{height : 50 , width : 40}}/ >
              </div>
              <div className="w-6/12 h-full flex items-start">
              
                <p className="my-auto text-lg font-semibold">Change Your Password</p>
              </div>
              <div className="w-4/12 h-full flex justify-end items-end">
                <button className="flex bg-red-600 rounded-md my-auto px-5 py-1 float-right text-white font-medium">
            
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.bg-gelap{\n  background-color: #001E26;\n}\n.bg-btn{\n  background-color: #FF6446;\n}\n"
        }}
      />
    </>
    
    </>

  )
}

export default Settings
