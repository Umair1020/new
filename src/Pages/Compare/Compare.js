import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "../main.css";

import CompareFile from "./CompareFile";

const Compare = () => {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const fileInputRef = useRef();

  const [pdfFile, setPdfFile] = useState(null);
  const fileType = ["application/pdf"];

  const handleFileUpload = () => {
    fileInputRef.current.click(); // Trigger the hidden file input element
  };
  const fileInputRefResume = useRef(null);
  const fileInputRefJobDescription = useRef(null);
  const [selectedFileResume, setSelectedFileResume] = useState(null);
  const [selectedFileJobDescription, setSelectedFileJobDescription] =
    useState(null);
  const formdata = new FormData();
  formdata.append("pdfDocs", selectedFileResume);
  formdata.append("pdfDocs", selectedFileJobDescription);
  formdata.append("userQuestioni", name);
  const handleFileChangeResume = (e) => {
    const file = e.target.files[0];
    setSelectedFileResume(file);
  };

  const handleFileChangeJobDescription = (e) => {
    const file = e.target.files[0];
    setSelectedFileJobDescription(file);
  };

  const handleFileUploadResume = () => {
    fileInputRefResume.current.click();
  };

  const handleFileUploadJobDescription = () => {
    fileInputRefJobDescription.current.click();
  };
  const [uploadedPdf, setUploadedPdf] = useState(null);

  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setUploadedPdf(url);
    }
    if (selectedFile) {
      // Check if the selected file type is valid
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select a valid PDF file");
      }
    } else {
      // console.log("Select your file");
    }
  };

  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     // Set the selected file
  //     setSelectedFile(file);

  //     // Use pdfjs to load and parse the PDF
  //     const pdfData = await file.arrayBuffer();
  //     const pdfjs = await import("pdfjs-dist");
  //     const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
  //     const textContent = await pdf.getPage(1).getTextContent();

  //     // Extract name and description from the PDF content
  //     const extractedName = textContent.items[0]?.str || "";
  //     const extractedInstructions = textContent.items
  //       .slice(1)
  //       .map((item) => item.str)
  //       .join(" ");

  //     // Set the extracted values in the state
  //     setName(extractedName);
  //     setInstructions(extractedInstructions);

  //     // Update the list of uploaded PDFs
  //     setUploadedPDFs((prevPDFs) => [...prevPDFs, extractedName]);
  //   }
  // };

  return (
    <div>
      <Header />
      <div className="sc-2d29d064-0 fosaaz">
        <div className="sc-2d29d064-1 aTnAc1">
          <h3 className="text-center my-3 fw-bold">Resume_Analyser</h3>

          <div>
            {/* <div className="pdf-container">
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                accept=".pdf"
                                onChange={handleFileChange}
                            />
                            <button onClick={handleFileUpload}  className="sc-7ff41d46-0 aEnZv">upload resume</button> <br />
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                accept=".pdf"
                                onChange={handleFileChange}
                            />
                            <button onClick={handleFileUpload}  className="sc-7ff41d46-0 aEnZv">upload job description</button>
                            <br /> <hr />
                            {selectedFile && <p>{selectedFile.name}</p>}
                            {selectedFile && <p>{selectedFile.name}</p>}
                        </div>
                       */}
            <div className="pdf-container">
              <input
                type="file"
                ref={fileInputRefResume}
                style={{ display: "none" }}
                accept=".pdf"
                onChange={handleFileChangeResume}
              />
              <button
                onClick={handleFileUploadResume}
                className="sc-7ff41d46-0 aEnZv"
              >
                Upload Resume
              </button>{" "}
              <br />
              {selectedFileResume && <p>{selectedFileResume.name}</p>}
              <hr />
              {/* <input
                type="file"
                ref={fileInputRefJobDescription}
                style={{ display: "none" }}
                accept=".pdf"
                onChange={handleFileChangeJobDescription}
              />
              <button
                onClick={handleFileUploadJobDescription}
                className="sc-7ff41d46-0 aEnZv"
              >
                Upload Job Description
              </button> */}
              <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label"> textarea</label> */}
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <br />
              {selectedFileJobDescription && (
                <p>{selectedFileJobDescription.name}</p>
              )}
              <hr />
            </div>
          </div>
          {/* <h3 className='fw-lighter my-4'>Tools</h3> 
                    <hr /> */}
          {/* </div> */}
        </div>
        <CompareFile
          resume={selectedFileResume}
          jobDes={selectedFileJobDescription}
        />
        {/* <DemoFile /> */}
      </div>
    </div>
  );
};

export default Compare;
