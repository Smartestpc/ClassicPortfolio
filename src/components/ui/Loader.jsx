import { FaSpinner } from "react-icons/fa6";

function Loader() {
  return (
            <div className="h-64 w-64 flex flex-col">
                <FaSpinner className=" animate-spin text-white text-6xl mx-auto mb-10" />
                <h1 className="text-white text-3xl text-center">Please Wait...</h1>
            </div>
  )
}

export default Loader