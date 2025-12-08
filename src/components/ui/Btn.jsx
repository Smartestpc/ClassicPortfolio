import React from "react";
import { Link } from "react-router-dom";

function Btn() {
  return (
    <>
      <Link to={"/home"}>
        <button className="mt-5 bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
          Login
        </button>
      </Link>
    </>
  );
}

export default Btn;
