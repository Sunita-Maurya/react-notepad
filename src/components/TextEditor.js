import React, { useState } from "react";
const TextEditor = () => {
  const [textValue, setTextValue] = useState("");
  const [selectFile, setSelectFile] = useState("");
  const [fileName, setFileName] = useState("");
  const saveFile = () => {
    if (textValue.trim() === "") {
      return alert("Content empty");
    }
    if (fileName.trim() === "") {
      return alert("Input file name");
    }
    let data = new Blob([textValue], { type: selectFile });
    let URL = window.URL.createObjectURL(data);
    let tempLink = document.createElement("a");
    tempLink.download = fileName;
    tempLink.href = URL;
    tempLink.click();
  };
  return (
    <>
      <div className="container">
        <textarea
          vlaue={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="write text here..."
        ></textarea>
        <div className="file options">
          <div className="fileoption">
            <div className="option">
              <label htmlFor="file name">File Name</label>
              <input
                type="text"
                placeholder="enter file name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
            <div className="option">
              <label htmlFor="save as">Save as</label>
              <select
                value={selectFile}
                onChange={(e) => setSelectFile(e.target.value)}
              >
                <option value="text/plain">Text File (.txt)</option>
                <option value="text/javascript">JS File (.js)</option>
                <option value="text/html">HTML File (.html)</option>
                <option value="image/svg+xml">SVG File (.svg)</option>
                <option value="application/msword">DOC File (.doc)</option>
                <option value="application/vnd.ms-powerpoint">
                  PPT File (.ppt)
                </option>
              </select>
            </div>
          </div>
          <div>
            <button className="savebtn" onClick={saveFile}>
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TextEditor;
