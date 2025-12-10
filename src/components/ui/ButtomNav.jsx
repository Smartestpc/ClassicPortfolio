import { useContext } from "react";
import { FilesToggleHandler } from "../FilesToggle";

function ButtomNav() {
  let {FileToggleHandle, ExitBtnHandle, BrowserHandle, NoteHandle, ContactHandle} = useContext(FilesToggleHandler);
  return (
    <div className="flex justify-evenly max-w-[400px] bg-gray-200 p-3 rounded-lg fixed bottom-0 left-0 right-0 mx-auto text-black text-center mb-2  font-bold md:text-xl">
      <div onClick={ () => {FileToggleHandle(); ExitBtnHandle("HomePage")} } >
        <div
          className=" bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/files.webp')", height: "60px", width: "60px" }}
        ></div>
      </div>
      <div onClick={ () => {BrowserHandle(); ExitBtnHandle("HomePage")} } >
        <div
          className=" bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/browser.webp')", height: "60px", width: "60px" }}
        ></div>
      </div>
      <div onClick={ () => {NoteHandle(); ExitBtnHandle("HomePage")} }>
        <div
          className=" bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/notes.webp')", height: "60px", width: "60px" }}
        ></div>
      </div>
      <div onClick={ () => {ContactHandle(); ExitBtnHandle("HomePage")} }>
        <div
          className=" bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/contact.webp')", height: "60px", width: "60px" }}
        ></div>
      </div>
      <div>
        <div
          className=" bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/gallery.webp')", height: "60px", width: "60px" }}
        ></div>
      </div>
    </div>
  );
}

export default ButtomNav;
