import React, { useRef, useState, useEffect } from "react";
import "./demo.css";
import Main from "./Main";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../utils/BaseUrl";
import SubHead from "../components/Header/SubHead";

const Demo = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const fileInputRef = useRef();
  const [modelVisible, setModelVisible] = useState(false);
  const [pdfDoc, setPdfDoc] = useState(null);
  const userCookie = Cookies.get("user");
  const decodedToken = jwtDecode(userCookie);
  const user = userCookie ? decodedToken : null;
  const userId = user.userId == undefined ? user._id : user.userId;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const [filePath, setFilePath] = useState("");
  useEffect(() => {
    const getSiglePdf = async () => {
      try {
        const res = await axios.post(`${baseurl}/api/pdf/getSinglePdf`, {
          pdfId: id,
        });
        setFilePath(`${baseurl}/${res.data.name}`);
        setSingleData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getSiglePdf();
  }, []);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    // Remove the 'user' cookie when logging out
    Cookies.remove("user");
    window.location.reload(); // Reload the page to reflect the change
  };

  // Declare an array of valid file types
  const fileType = ["application/pdf"];

  const handleFileUpload = () => {
    fileInputRef.current.click(); // Trigger the hidden file input element
  };

  const [uploadedPdf, setUploadedPdf] = useState(null);
  const openModel = () => {
    setModelVisible(true);
  };
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    setPdfDoc(selectedFile);
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

  return (
    <>
      <main>
        <div className="sc-67c87563-0 fQOOHf">
          <SubHead />
        </div>
        {/* <Feature /> */}
        <Main
          click={uploadedPdf}
          pdfDoc={pdfDoc}
          userId={userId}
          path={filePath}
          singlePdf={singleData}
        />
      </main>
    </>
  );
};

export default Demo;
