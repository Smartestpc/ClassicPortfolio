// import React from 'react'
import { FaSpinner } from "react-icons/fa6";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-700">
        <div className="">
            <div className="h-64 w-64 flex flex-col">
                <FaSpinner className=" animate-spin text-white text-6xl mx-auto mb-10" />
                <h1 className="text-white text-3xl text-center">Please Wait</h1>
            </div>
        </div>
    </div>
  )
}

export default Loader