import { createContext, useState } from "react"

let [isToggled, setIsToggled] = useState(false)
export let FilesToggleHandler = createContext();

function FilesToggle({children}) {

    const FilesToggleHandler = () => {
        setIsToggled(!isToggled)
    }
  return (
    <FilesToggleHandler.Provider value={{isToggled, setIsToggled, FilesToggleHandler}}>
        {children}
    </FilesToggleHandler.Provider>
  )
}

export default FilesToggle