import { LiaRobotSolid } from "react-icons/lia";
import { CiGlobe } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";

function SmartRank() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-start py-1 text-lg '>
        <h1 className="text-sm text-gray-700 mb-2">Favourites</h1>
        <div className='flex items-center gap-2 duration-200 mb-1 bg-blue-300 hover:bg-blue-300 w-full rounded pl-1'>
            <LiaRobotSolid size={20} fill="blue" />
            <h2>Ai Discription</h2>
        </div>
        <div className='flex items-center gap-2 duration-200 mb-1 hover:bg-blue-300 w-full rounded pl-1'>
            <CiGlobe size={20} fill="blue" />
            <h2>Browser</h2>
        </div>
        <div className='flex items-center gap-2 duration-200 mb-1 hover:bg-blue-300 w-full rounded pl-1'>
            <CiShare1 size={20} fill="blue" />
            <h2>Shared</h2>
        </div>
    </div>
  )
}

export default SmartRank