import { useContext } from "react";
import ButtomNav from "../components/ui/ButtomNav";
import Library from "../components/ui/Library";
import { FilesToggleHandler } from "../components/FilesToggle";

function HomePage() {
  let { ToggleHandle, isToggled } = useContext(FilesToggleHandler);
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center relative items-center"
      style={{ backgroundImage: "url('/winbg.png')" }}
    >
      <div
        onClick={ToggleHandle}
        className="flex flex-col absolute top-5 left-5 w-20 items-center cursor-pointer"
      >
        <div
          className="h-20 w-20 bg-cover bg-center hover:scale-110 transition-transform"
          style={{ backgroundImage: "url('/userfile.webp')" }}
        ></div>
        <h3 className="text-white font-bold ">My Files</h3>
      </div>
      <div className={`${isToggled ? "block" : "hidden"}`}>
        <Library />
      </div>
      <ButtomNav />
    </div>
  );
}

export default HomePage;
