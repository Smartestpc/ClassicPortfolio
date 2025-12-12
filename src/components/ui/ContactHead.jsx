import { CiSearch } from "react-icons/ci";

function ContactHead() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start text-sm text-black ">
      <div className="w-full p-2 flex items-center justify-center">
        <div className="w-full flex  items-center gap-3 bg-white rounded">
            <CiSearch fill="gray-300" size={30}/> 
        <input placeholder="Search" className=" h-7 w-9/10 outline-0" type="text" name="" id="" />
        </div>
      </div>
      <div className=" p-1 flex gap-3 items-center duration-200 bg-gray-200 hover:bg-gray-300 w-full border-b border-t  border-gray-300 ">
          <img
          className="h-[30px] rounded-full"
          src="Smart.jpg"
          alt="Nwaiche Smart"
        />
        <div className="flex justify-center text-start flex-col ">
          <h2 className="font-bold">Nwaiche Smart</h2>
        <h3>Smartest PC</h3>
        </div>
      </div>
      <div className=" p-1 flex gap-3 items-center duration-200 bg-gray-200 hover:bg-gray-300 w-full border-b border-t  border-gray-300 ">
          <img
          className="h-[30px] rounded-full"
          src="github.png"
          alt="Smartestpc"
        />
        <div className="flex justify-center text-start flex-col ">
          <h2 className="font-bold">Github</h2>
        <h3>Smartestpc</h3>
        </div>
      </div>
      <div className=" p-1 flex gap-3 items-center duration-200 bg-gray-200 hover:bg-gray-300 w-full border-b border-t  border-gray-300 ">
          <img
          className="h-[30px] rounded-full"
          src="linkedin.png"
          alt="Nwaiche Smart"
        />
        <div className="flex justify-center text-start flex-col ">
          <h2 className="font-bold">LinkedIn</h2>
        <h3>Smart Nwaiche</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactHead;
