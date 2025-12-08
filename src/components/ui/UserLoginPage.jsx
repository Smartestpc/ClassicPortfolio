import Btn from "./Btn";

function UserLoginPage() {
  return (
    <div className="w-full bg-blue-700 h-screen flex justify-center items-center">
      <div className="h-[400px] w-[400px] flex flex-col justify-center items-center rounded-lg">
        <img
          className="h-[150px] rounded-full mb-3"
          src="Smart.jpg"
          alt="Nwaiche Smart"
        />
        <h1 className="text-3xl font-bold text-white">Smartest PC</h1>
        <Btn />
      </div>
    </div>
  );
}

export default UserLoginPage;
