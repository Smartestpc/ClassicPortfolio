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
      setProjectNotes(!projectNotes)
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
      setProjectNotes(!projectNotes)
    }
    if (smartInfo === true) {
      setSmartInfo(false);
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
      setProjectNotes(!projectNotes)
    }
    if (smartInfo == false) {
      setBrowser("Browser");
      setSmartInfo(!smartInfo);
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
      setProjectNotes(!projectNotes)
      setNote("Notes");
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
      }}
    >
      {children}
    </FilesToggleHandler.Provider>
  );
}

export default FilesToggle;
