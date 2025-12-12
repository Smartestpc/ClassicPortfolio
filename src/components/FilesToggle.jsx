import { createContext, useState } from "react";

export let FilesToggleHandler = createContext();

function FilesToggle({ children }) {
  let [isToggled, setIsToggled] = useState(true);
  let [fileToggled, setFileToggled] = useState(false);
  let [size, setSize] = useState(true);
  let [exitBtn, setExitBtn] = useState(true);
  let [myFileName, setMyFileName] = useState("My Files");
  let [myInfo, setMyInfo] = useState("");
  let [smartInfo, setSmartInfo] = useState(false);
  let [browser, setBrowser] = useState("");
  let [projectNotes, setProjectNotes] = useState(false);
  let [note, setNote] = useState("");
  let [SelectContact, setSelectContact] = useState(false);
  let [ContactHeader, setContactHeader] = useState("");
  let [subLibrary, setSubLibrary] = useState(false);
  let [recent, setRecent] = useState(false);

  function ToggleHandle() {
    if (isToggled == false) {
      setIsToggled(!isToggled);
    }
    if (fileToggled === true) {
      setFileToggled(false);
    }
    if (smartInfo === true) {
      setSmartInfo(false);
    }
    if (projectNotes == true) {
      setProjectNotes(!projectNotes);
    }
    if (SelectContact == true) {
      setSelectContact(!SelectContact);
    }
  }
  function ExitBtnHandle(source) {
    if (source === "HomePage") {
      if (exitBtn == false) {
        setExitBtn(true);
      }
    } else if (source === "Button from Library") {
      setExitBtn(!exitBtn);
    }
  }

  function FileToggleHandle() {
    if (isToggled === true) {
      setIsToggled(false);
    }
    if (fileToggled === false) {
      setFileToggled(!fileToggled);
      setMyInfo("My Information");
    }
    if (projectNotes == true) {
      setProjectNotes(!projectNotes);
    }
    if (smartInfo === true) {
      setSmartInfo(false);
    }
    if (SelectContact == true) {
      setSelectContact(!SelectContact);
    }
  }
  function BrowserHandle() {
    if (isToggled === true) {
      setIsToggled(false);
    }
    if (fileToggled === true) {
      setFileToggled(false);
    }
    if (projectNotes == true) {
      setProjectNotes(!projectNotes);
    }
    if (smartInfo == false) {
      setBrowser("Browser");
      setSmartInfo(!smartInfo);
    }
    if (SelectContact == true) {
      setSelectContact(!SelectContact);
    }
  }
  function NoteHandle() {
    if (isToggled === true) {
      setIsToggled(false);
    }
    if (fileToggled === true) {
      setFileToggled(false);
    }
    if (smartInfo == true) {
      setSmartInfo(!smartInfo);
    }
    if (projectNotes == false) {
      setProjectNotes(!projectNotes);
      setNote("Notes");
    }
    if (SelectContact == true) {
      setSelectContact(!SelectContact);
    }
  }
  function ContactHandle() {
    if (isToggled === true) {
      setIsToggled(false);
    }
    if (fileToggled === true) {
      setFileToggled(false);
    }
    if (smartInfo == true) {
      setSmartInfo(!smartInfo);
    }
    if (projectNotes == true) {
      setProjectNotes(!projectNotes);
    }
    if (SelectContact == false) {
      setSelectContact(!SelectContact);
      setContactHeader("Contact");
    }
  }

  function SubToggle(source) {
    if (source == "shared") {
      if (subLibrary == false) {
        setSubLibrary(!subLibrary);
      }
    }
    if (source == "file") {
      if (subLibrary == true) {
        setSubLibrary(!subLibrary);
      }
      if (recent == true) {
        setRecent(!recent);
      }
    }
    if (source == "recent") {
      if (subLibrary == true) {
        setSubLibrary(!subLibrary);
      }
    }
  }

  function RecentToggle(source) {
    if (source == "recent") {
      if (recent == false) {
        setRecent(!recent);
        console.log("Recent toggled");
        
      }
      if (subLibrary == true) {
        setSubLibrary(!subLibrary);
      }
    }
  }

    function SizeToggle() {
      setSize(!size);
    }

    return (
      <FilesToggleHandler.Provider
        value={{
          isToggled,
          ToggleHandle,
          size,
          SizeToggle,
          myFileName,
          setMyFileName,
          fileToggled,
          FileToggleHandle,
          exitBtn,
          setExitBtn,
          ExitBtnHandle,
          myInfo,
          browser,
          smartInfo,
          BrowserHandle,
          note,
          projectNotes,
          NoteHandle,
          SelectContact,
          ContactHandle,
          ContactHeader,
          subLibrary,
          SubToggle,
          recent,
          RecentToggle,
        }}
      >
        {children}
      </FilesToggleHandler.Provider>
    );
}

export default FilesToggle;
