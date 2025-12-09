import React from 'react'

function Resume() {
  return (
          <div>
            <h1 className="text-2xl font-bold">Welcome to Smartest PC</h1>
            <p className="text-gray-600">
              This is your file library. You can manage and organize your files
              here.
            </p>
            <div className="flex flex-col items-center w-20 font-medium ">
              <img className="w-20 hover:scale-110 transition-transform" src="word.webp" alt="Resume" />
            <h2>Resume.doc</h2>
            </div>
          </div>
  )
}

export default Resume