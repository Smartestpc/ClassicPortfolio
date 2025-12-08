// import React from 'react'
import { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
import UserLoginPage from "../components/ui/UserLoginPage";

function LoginPage() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 3000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-700">
      {showLoader ? <UserLoginPage /> : <Loader />}
    </div>
  );
}

export default LoginPage;
