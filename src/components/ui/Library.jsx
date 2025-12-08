import { LiaTimesSolid } from "react-icons/lia";
import { FiMinus } from "react-icons/fi";
import { IoIosSquareOutline } from "react-icons/io";
import { useContext } from "react";
import { FilesToggleHandler } from "../FilesToggle";

function Library() {
  let { ToggleHandle, size, SizeToggle } = useContext(FilesToggleHandler);
  return (
    <div
      className={`" duration-200 relative z-10  bg-white h-screen w-screen overflow-hidden" ${
        size ? "max-h-[350px]  max-w-[900px]" : "h-screen w-screen"
      }`}
    >
      <header className="w-full h-10 bg-blue-700 text-white flex justify-between items-center pl-5">
        <h1 className=" font-bold text-xl cursor-pointer">My Files</h1>
        <div className="flex cursor-pointer">
          <div
            onClick={ToggleHandle}
            className="hover:bg-blue-600 duration-200 h-10 w-10 grid place-items-center"
          >
            <FiMinus size={30} />
          </div>
          <div
            onClick={SizeToggle}
            className="hover:bg-blue-600 duration-200 h-10 w-10 grid place-items-center"
          >
            <IoIosSquareOutline size={30} />
          </div>
          <div
            onClick={ToggleHandle}
            className="hover:bg-red-600 duration-200 h-10 w-10 grid place-items-center"
          >
            <LiaTimesSolid size={30} />
          </div>
        </div>
      </header>
      <div className="w-full h-[calc(100%-40px)] bg-gray-100 flex ">
        <div className="p-5 w-3/10 bg-gray-200">
          <p>This is the Library component.</p>
        </div>
        <div className="p-5 w-7/10 bg-gray-100">
          <p>This is the Library component.</p>
        </div>
      </div>
    </div>
  );
}

export default Library;
