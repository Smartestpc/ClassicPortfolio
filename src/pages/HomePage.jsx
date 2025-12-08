import ButtomNav from "../components/ui/ButtomNav";
import Library from "../components/ui/Library";

function HomePage() {
  return (
    <div
      className="h-screen bg-cover bg-center grid place-items-center relative"
      style={{ backgroundImage: "url('/winbg.png')" }}
    >
      <div className="flex flex-col absolute top-5 left-5 w-20 items-center cursor-pointer">
        <div
          className="h-20 w-20 bg-cover bg-center hover:scale-110 transition-transform"
          style={{ backgroundImage: "url('/userfile.png')" }}
        ></div>
        <h3 className="text-white font-bold ">My Files</h3>
      </div>
      <Library />
      <ButtomNav />
      {/* <div className="flex flex-col absolute top-15 right-15 w-20 items-center cursor-pointer">
        <div
          className="h-20 w-20 bg-cover bg-center hover:scale-110 transition-transform"
          style={{ backgroundImage: "url('/browser.png')" }}
        ></div>
        <h3 className="text-white font-bold ">Browser</h3>
      </div> */}
    </div>
  );
}

export default HomePage;
