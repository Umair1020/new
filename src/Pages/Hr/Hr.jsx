import React, { useState, useEffect, useRef } from "react";
import SubHead from "../../components/Header/SubHead";
import "./hr.css";
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";
import { baseurl } from "../../utils/BaseUrl";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
const Hrservices1 = () => {
  const userCookie = Cookies.get("user");
  const decodedToken = jwtDecode(userCookie);
  const user = userCookie ? decodedToken : null;
  const userId = user.userId == undefined ? user._id : user.userId;
  const [isOcrChecked, setIsOcrChecked] = useState(false);
  const [activeButton, setActiveButton] = useState("document");
  const [isUploadButtonDisabled, setIsUploadButtonDisabled] = useState(true);
  const [sourceDocument, setSourceDocument] = useState(undefined);

  const [question, setQuestion] = useState("");
  const [showFileUpload, setShowFileUpload] = useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [ingestLoading, setIngestLoading] = useState(false);
  const [pdfId, setPdfId] = useState([]);
  const [formdata, setFormdata] = useState(new FormData());
  const [selectedFileNames, setSelectedFileNames] = useState([]);
  const [metaData, setMetaData] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [time, setTime] = useState("");

  const [replay, setReplay] = useState("");
  const extractPageNumberAndLink = (loc) => {
    let pageNumber, sourceLink, pdfId;

    // Extract page number from metadata keys
    if (loc.metadata) {
      for (const key in loc.metadata) {
        if (
          key.toLowerCase().includes("page") ||
          key.toLowerCase().includes("number")
        ) {
          pageNumber = loc.metadata[key];
        }
        if (key.toLowerCase().includes("source")) {
          sourceLink = loc.metadata[key];
        }
        if (key.toLowerCase().includes("pdfId")) {
          pdfId = loc.metadata[key];
        }
      }
    }

    // Extract page number directly from loc
    if (loc.metadata && loc.metadata.pageNumber) {
      pageNumber = loc.metadata.pageNumber;
    }

    // Extract source link directly from loc
    if (loc.metadata && loc.metadata.sourceLink) {
      sourceLink = loc.metadata.sourceLink;
      pdfId = loc.metadata.pdfId;
    }
    if (loc.metadata && loc.metadata.pdfId) {
      pdfId = loc.metadata.pdfId;
    }

    // Extract page number using an alternative method
    if (loc.metadata && loc.metadata.loc && loc.metadata.loc.pageNumber) {
      pageNumber = loc.metadata.loc.pageNumber;
    }
    // localStorage.setItem("url", sourceLink);
    // setSrcSet(sourceLink);
    return { pageNumber, sourceLink, pdfId };
  };
  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (files.length > 5) {
      toast.error("Please select up to 5 files only.");
      return;
    }

    const averageProcessingTimePerFileInSeconds = 10;
    const expectedTimeInSeconds =
      files.length * averageProcessingTimePerFileInSeconds;
    setTime(expectedTimeInSeconds);

    // Initialize countdown with the expected time
    setCountdown(expectedTimeInSeconds);

    // Display expected time to the user
    toast.info(`Expected processing time: ${expectedTimeInSeconds} seconds`);

    // Create a new FormData object
    const newFormdata = new FormData();
    newFormdata.append("userId", userId);
    // Assuming you want to handle multiple files, append each file to the new FormData object
    for (let i = 0; i < files.length; i++) {
      newFormdata.append("pdfDocs", files[i]);
    }

    // Update the selected file names state
    const fileNames = Array.from(files).map((file) => file.name);
    setSelectedFileNames(fileNames);

    // Update the button disabled state
    setIsUploadButtonDisabled(fileNames.length === 0);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      setLoading(true);

      // Pass the updated FormData object directly to axios.post()
      const res = await axios.post(
        `${baseurl}/api/pdf/storeMultipleDoc`,
        newFormdata,
        config
      );

      setPdfId(res.data.pdfId);

      if (res.status === 200) {
        // Move setIngestLoading(true) inside the setTimeout block
        setTimeout(() => {
          setIngestLoading(true); // Set ingestLoading to true after the countdown
          setTimeout(() => {
            setIngestLoading(false); // Set ingestLoading to false after 7 seconds
          }, 7000);
        }, countdown * 1000);
      }
    } catch (error) {
    } finally {
      // Reset loading state regardless of success or failure
      setLoading(false);
    }
  };

  const handleUrl = async () => {
    try {
      if (!question) {
        toast.error("please add job Description");
        return;
      }
      setLoading1(true);

      const { data } = await axios.post(
        `https://anywhere.synapssolutions.com/${baseurl}/api/pdf/compareresume`,
        {
          pdfId,
          question,
          userId,
          history: [],
        }
      );
      setShowModal(true);
      setSourceDocument(data.sourceDocuments);
      setReplay(data.text);
      setMetaData(
        data.sourceDocuments.map((loc) => {
          // Extract page number based on the updated logic
          const pageNumber = extractPageNumberAndLink(loc);

          return pageNumber;
        })
      );
    } catch (e) {
    } finally {
      // Reset loading state regardless of success or failure
      setLoading1(false);
    }
  };
  const handleDelete = (filenameToDelete) => {
    // Filter out the filename to be deleted
    const updatedFileNames = selectedFileNames.filter(
      (filename) => filename !== filenameToDelete
    );

    // Update the selected file names state
    setSelectedFileNames(updatedFileNames);
  };
  const getCleanFileName = (filePath) => {
    const pathArray = filePath.split(/[\/\\]/); // Split by both forward slashes and backslashes
    const fileName = pathArray.pop(); // Get the last element (file name)
    const cleanedFileName = fileName.replace(/\.[^.]+$/, ""); // Remove the extension
    return cleanedFileName + ".pdf"; // Add the ".pdf" extension
  };
  const chatAll = {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    appearance: "none",
    position: "relative",
    cursor: "pointer",
    textAlign: "start",
    lineHeight: "normal",
    whiteSpace: "nowrap",
    margin: "0px",
    padding: "10px 0px",
    // width: "100%",
    color: "rgb(255, 255, 255)",
    background: "rgb(117, 77, 223)", // Commented out as per your original CSS
    fontFamily: "var(--sans)",
    fontWeight: 500,
    fontStyle: "normal",
    // marginLeft: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    width: "47%",
  };
  const chatAll1 = {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    appearance: "none",
    position: "relative",
    cursor: "pointer",
    textAlign: "center",
    lineHeight: "normal",
    whiteSpace: "nowrap",
    margin: "0px",
    padding: "10px 0px",
    // width: "100%",
    color: "rgb(255, 255, 255)",
    background: "rgb(117, 77, 223)", // Commented out as per your original CSS
    fontFamily: "var(--sans)",
    fontWeight: 500,
    fontStyle: "normal",
    // marginLeft: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    width: "28%",
  };
  const [countdown, setCountdown] = useState(null);
  const countdownRef = useRef(countdown);

  useEffect(() => {
    countdownRef.current = countdown;
  }, [countdown]);

  useEffect(() => {
    let timer;

    if (loading && countdownRef.current !== null) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          } else {
            clearInterval(timer);
            return null;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [loading]);

  return (
    <>
      <ToastContainer />
      <SubHead />

      <div className={`max-w-[1080px] mx-auto p-2 hr`}>
        <div className="text-left  my-4">
          <h3 className="text-3xl">
            Find best candidates for your job role immediately
          </h3>
        </div>

        {/* <div className="container "> */}
        <div className="row d-flex justify-between">
          <div className="col-lg-5 ">
            <h3>Upload CV</h3>
            <br />

            <input
              type="file"
              id="input-file-upload"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <label
              // style={ingestLoading ? { width: "60%" } : { width: "40%" }}
              for="input-file-upload"
              style={chatAll}
              disabled={isUploadButtonDisabled}
            >
              {loading ? (
                <>
                  <span style={{ color: "white" }}>Uploading</span>
                  {countdown !== null && (
                    <span style={{ marginLeft: "20px" }}>{countdown}</span>
                  )}
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "white", marginLeft: "10px" }}>
                    {ingestLoading ? (
                      ""
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FaPlus style={{ color: "white" }} />
                        <span style={{ marginLeft: "5px" }}>Add more CVs</span>
                      </div>
                    )}
                  </span>
                </div>
              )}
              {ingestLoading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "white" }}>Ingesting Your PDF</span>
                  <div className="loader2" style={{ marginLeft: "2px" }}></div>
                </div>
              ) : (
                <span></span>
              )}
            </label>
            <table
              className="sc-4131da42-1 khEYYi"
              style={{
                border: "1px solid black",
                marginTop: "20px",
                padding: "0px",
              }}
            >
              <tbody className="sc-4131da42-2 hccZzD">
                {selectedFileNames.map((document, index) => {
                  return (
                    <tr className="sc-4131da42-3 jSZOxE" key={index}>
                      <td className="row-icon" style={{ padding: "5px" }}>
                        <svg
                          className="sc-a8a76c9-0 fxBdmI"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9 0H3c-.55 0-.5 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1 .45 1-1V5L9 0zm3 14H4V2h4v4h4v8z"></path>
                        </svg>
                      </td>

                      <td className="sc-4131da42-5 jgaYkc">
                        <>
                          <a className="flex items-center space-x-2 text-left font-sans font-medium whitespace-nowrap text-black m-0 p-0 bg-none border-none cursor-pointer hover:underline">
                            <span className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px] sm:max-w-lg">
                              {getCleanFileName(document)}
                            </span>
                          </a>
                        </>
                      </td>

                      <td className="sc-4131da42-5 jgaYkc">
                        <button
                          className="text-right align-middle font-sans font-normal whitespace-nowrap text-black/60 m-0 p-0 bg-none border-none cursor-pointer"
                          onClick={() => handleDelete(document)}
                        >
                          <svg
                            className="sc-a8a76c9-0 fxBdmI row-button"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14.49 3.99h-13c-.28 0-.5.22-.5.50s.22.5.50.5h.5v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10h.5c.28 0 .5-.22.5-.50s-.22-.5-.50-.5zm-8.50 9c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v6c0-.55.45-1 1-1s1 .45 1 1v6zm2-12h-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1h-4c-.55 0-1 .45-1 1v1h14v-1c0-.55-.45-1-1-1z"></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-5 ">
            <h3>Job Description</h3>
            <div className="form-floating">
              <textarea
                className="summary-our-mission form-control"
                rows={80}
                cols={80}
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100vh", width: "100%" }}
                defaultValue={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
              {/* <label for="floatingTextarea2">Comments</label> */}
            </div>
            {/* <div className="label">
              <textarea
                className="summary-our-mission"
                rows={20}
                cols={80}
                placeholder="Job Description Here"
                defaultValue={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
            </div> */}
            {/* </div> */}
          </div>
        </div>
        <br />
        <br />
        <>
          <button
            className="p-4 d-flex mx-auto"
            style={chatAll1}
            onClick={handleUrl}
            // disabled={isUploadButtonDisabled}
          >
            {loading1 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>✨ </span>
                  <span style={{ marginLeft: "7px" }}>
                    Finding best Candidate
                  </span>
                  <div className="loader1"></div>
                </div>
              </>
            ) : (
              <div>
                <span>✨ </span>
                <span style={{ marginLeft: "7px" }}>Find best Candidate</span>
              </div>
            )}
          </button>
        </>
      </div>
      {sourceDocument !== undefined &&
        sourceDocument.slice(0, 1).map((sourceDoc, id) => {
          return (
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none align-items-center">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white bg-opacity-0 outline-none focus:outline-none"
                        style={{ height: "70vh" }}
                      >
                        {/*header*/}
                        <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            {getCleanFileName(metaData[id]?.sourceLink)}
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div
                          className="relative p-6 flex-auto modal-content"
                          style={{ maxHeight: "60vh", overflowY: "auto" }}
                        >
                          <p className="my-4 text-blueGray-500 text-lg leading-relaxed bot-reply1">
                            {replay}
                          </p>
                        </div>
                        {/*footer*/}
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 fixed inset-0 z-40 bg-white bg-opacity-0"></div>
                </>
              ) : null}
            </>
          );
        })}
    </>
  );
};

export default Hrservices1;
