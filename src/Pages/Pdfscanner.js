import React, { useState } from "react";
// import "./scanner.css";
// import Scanner from "./Scanner";
import { useLocation } from "react-router-dom";
import { baseurl } from "../utils/BaseUrl";
import WaveCircle from "./OcrPdf/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Demofile.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useMediaQuery } from "react-responsive";
import Pdf from "../components/Pdf/Pdf";
import "./Demofile.css";
import axios from "axios";
import SubHead from "../components/Header/SubHead";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Pdfscanner = () => {
  const path = useLocation();
  const curPath = path.pathname;
  const userCookie = Cookies.get("user");
  // const decodedToken = jwtDecode(userCookie);
  // const user = userCookie ? decodedToken : null;
  // const userId = user.userId == undefined ? user._id : user.userId;
  // let [userQuestion, setUserQuestion] = useState('');
  const [newQuestion, setNewQuestion] = useState("");
  let message;
  const [isLoading, setIsLoading] = useState(false);
  const [otherPdf, setOtherPdf] = useState("");
  let confirm;
  // State to store chat messages
  const [chatMessages, setChatMessages] = useState([]);
  const [check, setCheck] = useState("");
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUploaded, setPdfUploaded] = useState(false);
  let file;
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setOtherPdf(file);
    setSelectedFile(file);
    setPdfUploaded(true);
    const formData = new FormData();
    formData.append("pdfDoc", file);
    formData.append(
      "userQuestion",
      curPath === "/invoicescanner"
        ? "Could you kindly provide a detailed evaluation of the attached invoice? I'm seeking constructive feedback in the form of a numbered list, highlighting both strengths and areas for improvement."
        : "Would you mind conducting a thorough review of my CV, assessing both its strengths and weaknesses? I'm looking for a detailed analysis, including a numerical score out of 10, along with actionable suggestions on how to further improve it."
    );
    setIsLoading(true);

    try {
      const response = await axios.post(
        `https://anywhere.synapssolutions.com/${baseurl}/api/pdf/resume`,
        formData
      );
      const confirm = response.data.chat_history;
      setCheck(confirm);

      // Process the response into a list of separate lines
      const responseLines = confirm
        .split("\n")
        .filter((line) => line.trim() !== "");

      const newUserMessage = {
        sender: "user",
        direction: "outgoing",
      };

      const updatedChatMessages = [...chatMessages, newUserMessage];

      // Add each line of the response as a separate message

      updatedChatMessages.push({
        message: confirm,
        sender: "backend",
      });

      setChatMessages(updatedChatMessages);
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error
        : "An unexpected error occurred";

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMessageChange = async (e) => {
    message = e.target.value;
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleSendMessage = async () => {
    if (message.trim()) {
      const formData = new FormData();
      formData.append("pdfDoc", selectedFile);
      formData.append("userQuestion", message);
      // formData.append("userId", userId);
      // formData.append("pdfUrl", path);
      // pdfId ? formData.append("pdfId", pdfId) : "";

      // if (isLocateSectionSelected) {
      //   message = "Locate a specific section: " + message;
      //   setIsLocateSectionSelected(false);
      //   setInputPlaceholder("Type Message here");
      // }
      // if (isLanguageSelected) {
      //   message = "Translate a paragraph: " + message;
      //   setLanguageSelected(false);
      //   setInputPlaceholder("Type Message here");
      // }

      setIsLoading(true);

      try {
        const response = await axios.post(
          `https://anywhere.synapssolutions.com/${baseurl}/api/pdf/resume`,
          formData
        );
        confirm = response.data.chat_history;

        const newUserMessage = {
          message: message,
          sender: "user",
          direction: "outgoing",
        };

        const updatedChatMessages = [...chatMessages, newUserMessage];
        if (confirm) {
          updatedChatMessages.push({
            message: confirm,
            sender: "backend",
          });
        }

        setChatMessages(updatedChatMessages);

        message = ""; // Clear the input field
      } catch (error) {
        alert(error); // Add this line to show the error via alert
        const errorMessage = error.response
          ? error.response.data.error
          : "An unexpected error occurred";
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <Desktop>
        <div>
          <main>
            {userCookie ? <SubHead /> : <Header />}
            <div className="bg-[#f7f5ee] text-black px-4">
              <div className=" mx-auto py-16 max-w-7xl">
                <div className="flex flex-col text-center mb-6">
                  <h1 className="text-5xl font-serif">
                    {" "}
                    {curPath === "/invoicescanner"
                      ? "Invoice AI Scanner"
                      : "Resume AI Scanner"}
                  </h1>
                  <p className="mt-2 text-gray-600">
                    {curPath === "/invoicescanner"
                      ? "Get Invoice overview and questions to assess the report"
                      : "Get resume overview and questions to assess the candidates"}
                    Get resume overview and questions to assess the candidates
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  {" "}
                  <div className="relative text-center w-50">
                    <input
                      className="cursor-pointer hidden"
                      type="file"
                      id="input-file-upload"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                    <div>
                      <div className="min-h-screen" style={{ marginLeft: "" }}>
                        <label
                          className="h-full flex items-center justify-center border rounded bg-white border-dashed border-stone-300 block h-96"
                          htmlFor="input-file-upload"
                        >
                          {selectedFile ? (
                            <div className="text-center">
                              <h2 className="text-lg font-semibold">
                                {selectedFile.name}
                              </h2>

                              <div style={{}}>
                                <Pdf file={selectedFile.name} />
                              </div>
                            </div>
                          ) : (
                            <div
                              className="cursor-pointer flex flex-col items-center space-y-3"
                              style={{
                                height: "200px",
                                width: "300px", // Set a fixed width if needed
                                marginTop: "100px",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                              </svg>
                              <p className="font-medium text-sm leading-6 opacity-75">
                                Click to upload or drag and drop
                              </p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-50">
                    {selectedFile && (
                      <>
                        <div
                          className="chat-container"
                          style={{
                            background: "#fff",
                            padding: "10px",
                            border: "1px solid #dee2e6",
                            // borderTop: "none",
                            height: "100vh",
                          }}
                        >
                          <div
                            className={`${
                              curPath === "/resumescanner"
                                ? "test"
                                : "messages-container"
                            }`}
                          >
                            {chatMessages.map((msg, index) => {
                              const messageKey = `message-${index}-${msg.sender}`; // Unique key for each message
                              return msg.sender === "user" ? (
                                <div
                                  className="message user-message"
                                  key={messageKey}
                                >
                                  <p>{msg.message}</p>
                                </div>
                              ) : (
                                <div
                                  className="message bot-reply"
                                  key={messageKey}
                                >
                                  <>
                                    {msg.message.split("\n").map((line, i) => {
                                      if (line.startsWith("# ")) {
                                        // Render h2 headings
                                        return (
                                          <h2
                                            style={{
                                              color: "white",
                                              fontWeight: "bold",
                                            }} // Adjust styling as needed
                                            key={i}
                                          >
                                            {line.replace("# ", "")}
                                          </h2>
                                        );
                                      } else if (line.startsWith("## ")) {
                                        // Render h3 headings
                                        return (
                                          <h3
                                            style={{
                                              color: "white",
                                              fontWeight: "bold",
                                            }} // Adjust styling as needed
                                            key={i}
                                          >
                                            {line.replace("## ", "")}
                                          </h3>
                                        );
                                      } else if (line.startsWith("### ")) {
                                        // Render h4 headings
                                        return (
                                          <h4
                                            style={{
                                              color: "white",
                                              fontWeight: "bold",
                                            }} // Adjust styling as needed
                                            key={i}
                                          >
                                            {line.replace("### ", "")}
                                          </h4>
                                        );
                                      } else if (line.startsWith("- ")) {
                                        // Render list items
                                        return (
                                          <li
                                            style={{ color: "white" }} // Adjust styling as needed
                                            key={i}
                                          >
                                            {line.replace("- ", "")}
                                          </li>
                                        );
                                      } else {
                                        // Render paragraphs with default styling
                                        const boldTextRegex = /\*\*(.*?)\*\*/g;
                                        const parts = line.split(boldTextRegex);
                                        return (
                                          <p
                                            key={i}
                                            style={{
                                              color: "white",
                                              lineHeight: "1.5",
                                            }} // Adjust styling as needed
                                          >
                                            {parts.map((part, index) => {
                                              if (index % 2 === 1) {
                                                return (
                                                  <strong key={index}>
                                                    {part}
                                                  </strong>
                                                );
                                              } else {
                                                return part;
                                              }
                                            })}
                                          </p>
                                        );
                                      }
                                    })}
                                  </>
                                </div>
                              );
                            })}
                          </div>
                          {isLoading && <WaveCircle />}
                          <div className="input-container">
                            <img className="mx-3 " src="/attach.svg" />

                            <input
                              type="text"
                              className="input"
                              placeholder="enter message"
                              value={message}
                              onChange={handleMessageChange}
                              onKeyPress={handleKeyPress}
                            />
                            <button onClick={handleSendMessage}>
                              <img src="/send.svg" />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </Desktop>
      <Mobile>
        <div>
          <main>
            {userCookie ? <SubHead /> : <Header />}

            <div className="bg-[#f7f5ee] text-black px-4">
              <div className=" mx-auto py-16 max-w-7xl">
                <div className="flex flex-col text-center mb-6">
                  <h1 className="text-5xl font-serif">Resume AI Scanner</h1>
                  <p className="mt-2 text-gray-600">
                    Get resume overview and questions to assess the candidates
                  </p>
                </div>
                <div className="w-full ">
                  {" "}
                  <div className="relative text-center w-100">
                    <input
                      className="cursor-pointer hidden"
                      type="file"
                      id="input-file-upload"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                    <label
                      className="h-full flex items-center justify-center border rounded transition-all bg-white border-dashed border-stone-300 block  h-96"
                      htmlFor="input-file-upload"
                    >
                      {selectedFile ? (
                        <div className="text-center">
                          <h2 className="text-lg font-semibold">
                            {selectedFile.name}
                          </h2>
                          <p className="text-sm">
                            {(selectedFile.size / 1024).toFixed(2)} KB
                          </p>
                          <Pdf file={URL.createObjectURL(selectedFile)} />
                        </div>
                      ) : (
                        <div
                          className="cursor-pointer flex flex-col items-center space-y-3"
                          style={{
                            height: "200px",
                            margin: "auto",
                            display: "flex",
                            alignItems: " center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                          </svg>
                          <p className="d-flex justify-content-center align-items-center pointer-events-none font-medium text-sm leading-6 pointer opacity-75">
                            Click to upload or drag and drop
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                  <div className="w-100" style={{ height: "300px" }}>
                    {selectedFile && (
                      <>
                        <div
                          className=""
                          style={{ background: "#fff", padding: "10px" }}
                        >
                          <h3 className="fw-bold">Chat With Your PDF File</h3>
                        </div>
                        <div className="chat-container">
                          {/* {showLogoAndText && (
                        <div
                          style={{
                            position: "absolute",
                            top: "27%",
                            left: "66%",
                          }}
                        >
                          <img
                            className="d-flex justify-content-center align-items-center mx-auto  "
                            alt="Logo"
                            src={logo}
                          />
                          <h2 className="text-center">
                            How can I help you today?
                          </h2>
                        </div>
                      )}
                      {showOptions && (
                        <div
                          style={{
                            position: "absolute",
                            left: "57%",
                            bottom: "28%",
                            margin: "auto",
                            borderColor: "rgba(0,0,0,.1)",
                          }}
                        >
                          <div style={containerStyle}>
                            <button
                              className="mx-3 flex items-center justify-center"
                              style={boxStyle}
                              onClick={() =>
                                handleOptionClick(
                                  "Find a summary of the document"
                                )
                              }
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src="/btnicon.svg"
                                  style={{ marginRight: "10px" }}
                                />
                                <div className="flex flex-col overflow-hidden text-start mx-4">
                                  <div style={titleStyle}>Find Summary</div>
                                  <div style={contentStyle}>
                                    Get a quick summary of the PDF content
                                  </div>
                                </div>
                              </div>
                            </button>
                            <br />
                            <button
                              className="mx-3 flex items-center justify-center"
                              style={boxStyle}
                              onClick={() =>
                                handleOptionClick(
                                  "Explain this document, as if I am in 7th Grade"
                                )
                              }
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src="/btnicon.svg"
                                  style={{ marginRight: "10px" }}
                                />
                                <div className="flex flex-col overflow-hidden text-start mx-4">
                                  <div style={titleStyle}>Explain</div>
                                  <div style={contentStyle}>
                                    Explain this document, as if I am in 7th
                                    Grade
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      )} */}
                          <div className="messages-container">
                            {chatMessages.map((msg, index) => {
                              const messageKey = `message-${index}-${msg.sender}`; // Unique key for each message
                              return msg.sender === "user" ? (
                                <div
                                  className="message user-message"
                                  key={messageKey}
                                >
                                  <p>{msg.message}</p>
                                </div>
                              ) : (
                                <div
                                  className="message bot-reply"
                                  key={messageKey}
                                >
                                  <p>{msg.message}</p>
                                </div>
                              );
                            })}
                          </div>
                          {isLoading && <WaveCircle />}
                          <div className="input-container">
                            <img className="mx-3 " src="/Frame.svg" />
                            <input
                              type="text"
                              className="input"
                              placeholder="enter message"
                              value={message}
                              onChange={handleMessageChange}
                              onKeyPress={handleKeyPress}
                            />
                            <button onClick={handleSendMessage}>
                              <img src="/send.svg" />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </Mobile>
    </>
  );
};

export default Pdfscanner;
