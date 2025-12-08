import { createContext, useState } from "react"

export let FilesToggleHandler = createContext();

function FilesToggle({children}) {
    let [isToggled, setIsToggled] = useState(true);
    let [size, setSize] = useState(true);

    function ToggleHandle () {
        setIsToggled(!isToggled)
    }

    function SizeToggle () {
        setSize(!size)
    }

    return (
    <FilesToggleHandler.Provider value={{isToggled, ToggleHandle, size, SizeToggle}}>
        {children}
    </FilesToggleHandler.Provider>
  )
}

export default FilesToggle