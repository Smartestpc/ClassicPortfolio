import { useContext } from "react";
import { CiFolderOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { FilesToggleHandler } from "../FilesToggle";

function MyFileHead() {
  let { SubToggle, RecentToggle } = useContext(FilesToggleHandler);
  return (
    <div className='w-full h-full flex flex-col justify-center items-start py-1 text-lg p-2 '>
        <h1 className="text-sm text-gray-700 mb-2">Favourites</h1>
        <div  onClick={() => {SubToggle("file")}} className='flex items-center gap-2 duration-200 mb-1 bg-blue-300 hover:bg-blue-300 w-full rounded pl-1'>
            <CiFolderOn size={20} fill="blue" />
            <h2>My Files</h2>
        </div>
        <div onClick={() => {RecentToggle("recent")}} className='flex items-center gap-2 duration-200 mb-1 hover:bg-blue-300 w-full rounded pl-1'>
            <CiClock2 size={20} fill="blue" />
            <h2>Recents</h2>
        </div>
        <div onClick={() => {SubToggle("shared")}} className='flex items-center gap-2 duration-200 mb-1 hover:bg-blue-300 w-full rounded pl-1'>
            <CiShare1 size={20} fill="blue" />
            <h2>Shared</h2>
        </div>
    </div>
  )
}

export default MyFileHead