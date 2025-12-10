import React from "react";

function ProjectNote() {
  return (
    <div className="w-full h-full overflow-y-scroll relative">
      <div className="w-full bg-gray-100 flex justify-start items-center border-b border-gray-100 sticky top-0 pt-3 pb-3 z-10">
        <ul className="flex items-center justify-center gap-3">
          <li className=" cursor-pointer hover:text-blue-700 duration-200 ">
            <span className="underline">F</span>ile
          </li>
          <li className=" cursor-pointer hover:text-blue-700 duration-200 ">
            <span className="underline">E</span>dit
          </li>
          <li className=" cursor-pointer hover:text-blue-700 duration-200 ">
            F<span className="underline">o</span>rmat
          </li>
          <li className=" cursor-pointer hover:text-blue-700 duration-200 ">
            <span className="underline">V</span>iew
          </li>
          <li className=" cursor-pointer hover:text-blue-700 duration-200 ">
            <span className="underline">H</span>elp
          </li>
        </ul>
      </div>
      <li className="font-bold mt-7">📅 Date: June 2024</li>
      <ul className="pl-5">
        <li>
          ======================================== <br />
          SMART'S DEV LOG — PERSONAL NOTES <br />
          ========================================
        </li>
        <br />
        <li>
          👨‍💻 About Me: I'm Smart, a passionate web developer focused on crafting
          seamless user experiences and efficient code.
        </li> 
        <br />
        <li className=" font-bold uppercase ">📌 Current Focus:</li>
        <li className="pl-5">- Building clean, responsive UI with React + Tailwind</li>
        <li className="pl-5">- Improving Firebase Auth & Firestore workflow</li>
        <li className="pl-5">- Writing more reusable</li>
        <br />
        <li className=" font-bold uppercase ">components for future projects 🛠️ Tools I Use Daily:</li>
        <li className="pl-5">- VS Code - Git & GitHub </li>
        <li className="pl-5">- Vite + React - Firebase</li>
        <li className="pl-5"> - Postman (API Testing)</li>
        <br />
        <li className=" font-bold uppercase ">🚀 Latest Projects:</li>
        <li className="pl-5">1. SirBethel Bags & Boxes E-commerce (HTML, CSS, JS, Firebase)</li>
        <li className="pl-5">2. Smart’s Dev Launchpad – Beginner Bootcamp materials</li>
        <br />
        <li className=" font-bold uppercase ">
          3. WhatsApp AI Bot with Baileys (Memory Feature + Toggle System)
        </li>
        <li className="pl-5">🧠 What I’m Learning:</li>
        <li className="pl-5">- Node.js (Backend foundations)</li>
        <li className="pl-5">- Database structuring</li>
        <li className="pl-5">
          - API creation and integration - Better UI animations and
          micro-interactions
        </li>
        <br />
        <li className=" font-bold uppercase ">💡 Ideas in Progress:</li>
        <li className="pl-5">- Personal control center built with Android automation</li>
        <li className="pl-5">
          - Portfolio upgrade: Experience timeline + Skills progress bar -
          Building a custom React component library
        </li>
        <br /> 
        <li>
          ======================================== <br />
          *Always Learning. Always Building.* <br />
          ========================================
        </li>
      </ul>
    </div>
  );
}

export default ProjectNote;
