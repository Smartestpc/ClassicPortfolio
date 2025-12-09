import { useContext } from "react";
import { FilesToggleHandler } from "../FilesToggle";

function ButtomNav() {
  let {FileToggleHandle, ExitBtnHandle, BrowserHandle, NoteHandle} = useContext(FilesToggleHandler);
  return (
    <div className="flex justify-evenly max-w-[600px] bg-gray-200 p-3 rounded-lg fixed bottom-0 left-0 right-0 mx-auto text-black text-center mb-2  font-bold md:text-xl">
      <div onClick={ () => {FileToggleHandle(); ExitBtnHandle("HomePage")} } >
        <div
          className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/files.webp')" }}
        ></div>
      </div>
      <div onClick={ () => {BrowserHandle(); ExitBtnHandle("HomePage")} } >
        <div
          className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/browser.webp')" }}
        ></div>
      </div>
      <div onClick={ () => {NoteHandle(); ExitBtnHandle("HomePage")} }>
        <div
          className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/notes.webp')" }}
        ></div>
      </div>
      <div>
        <div
          className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/contact.webp')" }}
        ></div>
      </div>
      <div>
        <div
          className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/gallery.webp')" }}
        ></div>
      </div>
    </div>
  );
}

export default ButtomNav;
