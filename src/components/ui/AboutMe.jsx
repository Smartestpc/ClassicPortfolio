import { VscHome } from "react-icons/vsc";
import { RiContactsBook3Line } from "react-icons/ri";
import { SlMap } from "react-icons/sl";
function AboutMe() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-start py-1 text-lg '>
            <h1 className="text-sm text-gray-700 mb-2">Favourites</h1>
            <div className='flex items-center gap-2 duration-200 mb-1 bg-blue-300 hover:bg-blue-300 w-full rounded pl-1'>
                <VscHome size={20} fill="blue" />
                <h2>Home</h2>
            </div>
            <div className='flex items-center gap-2 duration-200 mb-1 hover:bg-blue-300 w-full rounded pl-1'>
                <RiContactsBook3Line size={20} fill="blue" />
                <h2>Resume</h2>
            </div>
            <div className='flex items-center gap-2 duration-200 mb-1 hover:bg-blue-300 w-full rounded pl-1'>
                <SlMap size={20} fill="blue" />
                <h2>My Journey</h2>
            </div>
        </div>
  )
}

export default AboutMe