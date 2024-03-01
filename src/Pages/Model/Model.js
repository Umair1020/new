import React, { useState } from "react";
import "./model.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useFile } from "../../FIleContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { baseurl } from "../../utils/BaseUrl";
const Model = ({ hide, namePdf, userId }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isPrivateSelect, setisPrivateSelect] = useState(false);
  const [activeButton, setActiveButton] = useState("document");
  const [isUploadButtonDisabled, setIsUploadButtonDisabled] = useState(true);
  const [selectedFileNames, setSelectedFileNames] = useState([]);
  const [showFileUpload, setShowFileUpload] = useState(true);
  const [ingestLoading, setIngestLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [formdata, setFormdata] = useState(new FormData());
  formdata.append("userId", userId);
  const [file, setFile] = useState("");
  const handleFileChange = async (event) => {
    const files = event.target.files;

    // Create a new FormData object
    const newFormdata = new FormData();

    // Assuming you want to handle multiple files, append each file to the new formdata
    for (let i = 0; i < files.length; i++) {
      newFormdata.append("pdfDocs", files[i]);
      setFile(files[i]);
    }

    // Update the selected file names state
    const fileNames = Array.from(files).map((file) => file.name);
    setSelectedFileNames(fileNames);

    // Update the button disabled state
    setIsUploadButtonDisabled(fileNames.length === 0);

    // Update the formdata state
    setFormdata(newFormdata);
  };

  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleUrl = async () => {
    try {
      if (!pdfUrl && !file) {
        // If neither pdfUrl nor file is provided, return without making the request
        return;
      }

      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // Create a new FormData object
      const newFormdata = new FormData();

      // Append the user ID to the FormData object
      newFormdata.append("userId", userId);
      newFormdata.append("isPrivateSelect", isPrivateSelect);

      // Append the PDF URL if provided
      if (pdfUrl) {
        newFormdata.append("pdfUrl", pdfUrl);
      }

      // Append the file if provided
      if (file) {
        newFormdata.append("pdfDocs", file);
      }

      const res = await axios.post(
        `${baseurl}/api/pdf/storeMultipleDocs`,
        newFormdata,
        config
      );

      if (res.status === 200) {
        // Reset the progress bar after the upload is complete
        setUploadProgress(0);
        setIngestLoading(true);
        setTimeout(() => {
          navigate(`/pdf/${res.data.id}`);
          window.location.reload();

          setIngestLoading(false);
        }, 7000);
      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
      toast.error("Error uploading PDF");
    } finally {
      // Reset loading state regardless of success or failure
      setLoading(false);
    }
  };

  // ... (the rest of your existing code)

  const toggleSections = (uploadType) => {
    if (uploadType === "document") {
      setShowFileUpload(true);
      setActiveButton("document");
    } else if (uploadType === "url") {
      setShowFileUpload(false);
      setActiveButton("url");
    }
  };

  return (
    <div className="sc-f44562c1-0 boSApP">
      <ToastContainer />

      <div
        className="sc-f44562c1-1 cseGOX my-3"
        style={{ maxWidth: "700px", margin: "auto" }}
        data-show=""
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
          }}
        >
          <button
            onClick={hide}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            X
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "4px",
            padding: "4px",
            marginBlock: "24px",
            background: "rgb(246, 246, 248)",
            borderRadius: "24px",
            width: " fit-content",
          }}
        >
          <button
            style={
              activeButton === "document"
                ? {
                    background: "rgb(255, 255, 255)",
                    padding: "8px 16px",
                    boxShadow:
                      "rgba(47, 43, 67, 0.1) 0px 1px 3px, rgba(47, 43, 67, 0.1) 0px -1px 0px inset",
                    borderRadius: "24px",
                    cursor: "pointer",
                  }
                : {
                    background: "transparent",
                    padding: "8px 16px",
                    borderRadius: "0px",
                    cursor: "pointer",
                  }
            }
            className=""
            onClick={() => toggleSections("document")}
          >
            Upload by Document
          </button>
          <button
            style={
              activeButton === "url"
                ? {
                    background: "rgb(255, 255, 255)",
                    padding: "8px 16px",
                    boxShadow:
                      "rgba(47, 43, 67, 0.1) 0px 1px 3px, rgba(47, 43, 67, 0.1) 0px -1px 0px inset",
                    borderRadius: "24px",
                    cursor: "pointer",
                  }
                : {
                    background: "transparent",
                    padding: "8px 16px",
                    borderRadius: "0px",
                    cursor: "pointer",
                  }
            }
            className=""
            onClick={() => toggleSections("url")}
          >
            Upload by URL
          </button>
        </div>
        <p className="sc-ebf96a8a-1 bYmorg"></p>
        <div>
          <div className="space-y-4" style={{ cursor: "pointer" }}>
            {showFileUpload && (
              <div
                className="h-40 w-full relative text-center file-upload-section"
                style={{ cursor: "pointer" }}
              >
                <input
                  className="cursor-pointer hidden"
                  style={{ cursor: "pointer" }}
                  type="file"
                  id="input-file-upload"
                  required
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
                <label
                  style={{ cursor: "pointer" }}
                  className="h-full flex items-center justify-center border rounded transition-all bg-white border-dashed border-stone-300"
                  for="input-file-upload"
                >
                  <div className="cursor-pointer mx-auto">
                    <FaCloudUploadAlt className="mx-auto fs-2" />
                    <p className="pointer-events-none font-medium text-base leading-6 pointer opacity-75">
                      {selectedFileNames.map((fileName, index) => (
                        <span key={index}>
                          {index > 0 && ", "}
                          <img
                            src="./pdficon.svg"
                            alt="PDF Icon"
                            className="inline-block mr-2"
                          />
                          {fileName}
                        </span>
                      ))}
                      {selectedFileNames.length === 0 && (
                        <>Click to upload or drag and drop</>
                      )}
                    </p>
                  </div>
                </label>
              </div>
            )}

            {/* <div className="flex items-center">
              <div className="flex-grow border-t border-gray-200"></div>

              <span className="flex-shrink mx-4 uppercase text-gray-600 text-xs">
                or
              </span>

              <div className="flex-grow border-t border-gray-200"></div>
            </div> */}
            {!showFileUpload && (
              <>
                <div className="flex flex-col space-y-2 url-input-section">
                  <label className="pointer-events-none font-medium text-base leading-6 pointer opacity-75">
                    Import from URL
                  </label>
                  <div className="sc-1c859520-0 jHAXMR ">
                    <input
                      className="sc-1c859520-1 cvZGAj grow text-sm"
                      type="url"
                      placeholder="https://cdn.openai.com/papers/gpt-4.pdf"
                      value={pdfUrl}
                      onChange={(e) => {
                        setPdfUrl(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex">
              <span
                aria-label="This PDF file will not be stored on our servers. 
You will only be able to chat with this document but not view it. 
This document will be removed after 7 days of inactivity."
                data-microtip-position="top"
                role="tooltip"
              ></span>
            </div>
            <div className="flex items-center space-x-3">
              <span
                aria-label="You can chat with pdf without our server"
                data-microtip-position="top"
                role="tooltip"
              >
                <span className="flex items-center">
                  <input
                    id="ocr-doc"
                    type="checkbox"
                    className="cursor-pointer w-4 h-4 accent-orange-600 bg-gray-100 border-gray-300 rounded"
                    checked={isPrivateSelect}
                    onChange={(e) => setisPrivateSelect(e.target.checked)}
                  />
                  <label
                    for="ocr-doc"
                    className="cursor-pointer ml-2 text-sm font-medium text-gray-900"
                  >
                    Private Document
                  </label>
                </span>
              </span>
              {/* {loading && (
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgressbar
                    value={uploadProgress}
                    text={`${uploadProgress}%`}
                    styles={buildStyles({
                      textColor: "#000",
                      pathColor: "rgb(117, 77, 223)",
                      trailColor: "rgba(0,0,0,0.1)",
                    })}
                  />
                </div>
              )} */}
            </div>
            <button
              type="button"
              className={`sc-7ff41d46-0 aEnZv`}
              onClick={handleUrl}
              disabled={isUploadButtonDisabled && !pdfUrl} // Modify this line
            >
              {loading ? (
                <>
                  <span>Uploading</span>
                  <div className="loader1"></div>
                </>
              ) : (
                <span>{ingestLoading ? "" : "upload"}</span>
              )}
              {ingestLoading ? (
                <>
                  <span>Ingesting Your PDF</span>
                  <div className="loader2"></div>
                </>
              ) : (
                <span></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
