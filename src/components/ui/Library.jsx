import { LiaTimesSolid } from "react-icons/lia";
import { FiMinus } from "react-icons/fi";
import { IoIosSquareOutline } from "react-icons/io";
import { useContext } from "react";
import { FilesToggleHandler } from "../FilesToggle";
import MyFileHead from "./MyFileHead";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import BrowserHead from "./BrowserHead";
import AboutMeDetails from "./AboutMeDetails";
import SmartInfo from "./SmartInfo";
import ProjectNote from "./ProjectNote";
import ProjectNoteHead from "./ProjectNoteHead";
import ContactHead from "./ContactHead";
import SelectContactPage from "./SelectContactPage";
import Shared from "./Shared";
import Recents from "./Recents";

function Library() {
  let { size, SizeToggle, isToggled, myFileName, fileToggled, exitBtn, ExitBtnHandle, myInfo, browser, smartInfo, projectNotes, note, SelectContact, ContactHeader, subLibrary, recent, } = useContext(FilesToggleHandler);
  return (
    <div
      className={`" border border-blue-800 duration-200 relative z-10 overflow-hidden  bg-white h-screen w-screen overflow-hidden" ${
        size ? "max-h-[350px]  max-w-[900px]" : "h-screen w-screen"
      } ${exitBtn ? "block" : "hidden"}`}
    >
      <header className="w-full h-10 bg-blue-700 text-white flex justify-between items-center pl-5">
        <h1 className=" font-bold text-xl cursor-pointer">{isToggled ? myFileName : ""} {fileToggled ? myInfo : ""} {smartInfo ? browser : ""} {projectNotes ? note : ""} {SelectContact ? ContactHeader : ""}</h1>
        <div className="flex cursor-pointer">
          <div
            onClick={() => ExitBtnHandle("Button from Library")}
            className="hover:bg-blue-600 duration-200 h-10 w-10 grid place-items-center"
          >
            <FiMinus size={17} />
          </div>
          <div
            onClick={SizeToggle}
            className="hover:bg-blue-600 duration-200 h-10 w-10 grid place-items-center"
          >
            <IoIosSquareOutline size={17} />
          </div>
          <div
            onClick={() => ExitBtnHandle("Button from Library")}
            className="hover:bg-red-600 duration-200 h-10 w-10 grid place-items-center"
          >
            <LiaTimesSolid size={17} />
          </div>
        </div>
      </header>
      <div className="w-full h-[calc(100%-40px)] bg-gray-100 flex ">
        <div className=" w-3/10 bg-gray-200">
          <div className="relative">
            {
              isToggled ? <MyFileHead /> : ""
            }
            {
              fileToggled ? <AboutMe /> : ""
            }
            {
              smartInfo ? <BrowserHead /> : ""
            }
            {
              projectNotes ? <ProjectNoteHead /> : ""
            }
            {
              SelectContact ? <ContactHead /> : ""
            }
          </div>
        </div>
        <div className="p-5 w-9/10 bg-gray-100 overflow-hidden">
          {
            isToggled == true && subLibrary == false && recent == false ? <Resume /> : ""
          }
          {
            fileToggled ? <AboutMeDetails /> : ""
          }
          {
            smartInfo ? <SmartInfo /> : ""
          }
          {
            projectNotes ? <ProjectNote /> : ""
          }
          {
            SelectContact ? <SelectContactPage /> : ""
          }
          {
            subLibrary ? <Shared /> : ""
          }
          {
            recent ? <Recents /> : ""
          }
        </div>
      </div>
    </div>
  );
}

export default Library;
