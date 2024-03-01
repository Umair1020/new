import "./main.css";
import "../index.css";
import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DemoFile from "./DemoFile";
import { useFile } from "../FIleContext";
import { useLocation } from "react-router-dom";
import Pdf from "../components/Pdf/Pdf";
import { ToastContainer } from "react-toastify";

const Main = ({ click, pdfDoc, userId, path, singlePdf, pdfLink }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [pdfFile, setPdfFile] = useState(null);
  const { file } = useFile();
  useEffect(() => {
    const fileData = localStorage.getItem("fileData");
    const fileName = localStorage.getItem("fileName");
    const fileType = localStorage.getItem("fileType");

    if (fileData) {
      const byteString = atob(fileData.split(",")[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: fileType });
      const blobUrl = URL.createObjectURL(blob);
      setPdfFile(blobUrl);
    }
  }, []);
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  return (
    <>
      <Mobile>
        <ToastContainer />
        <div
          className=""
          style={{ display: "block", width: "100%", height: "50vh" }}
        >
          <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
            <Pdf
              file={pdfFile ? pdfFile : click}
              path={path ? path : pdfLink}
            />
          </div>
          <div
            style={{
              flexBasis: "50%",
              flexGrow: 0,
              flexShrink: 0,
              background: "#F7F7F7",
              height: "50vh",
            }}
          >
            <DemoFile
              pdfDoc={file ? file : pdfDoc}
              userId={userId}
              path={path}
              pdfPath={pdfLink}
              pdfId={singlePdf._id}
            />
          </div>
        </div>
      </Mobile>
      <Desktop>
        <ToastContainer />

        <div
          className=""
          style={{
            display: "flex",
            width: "100%",
            height: "90vh",
            overflowY: "hidden",
            backgroundColor: "rgb(244 244 247)",
          }}
        >
          <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
            <Pdf
              file={pdfFile ? pdfFile : click}
              path={path ? path : pdfLink}
              currentPath={currentPath}
            />
            {/* <PdfHeader file={pdfFile ? pdfFile : click}
              path={path ? path : pdfLink}
              currentPath={currentPath}   /> */}
          </div>
          <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
            <DemoFile
              pdfDoc={file ? file : pdfDoc}
              userId={userId}
              path={path}
              pdfPath={pdfLink}
              pdfId={singlePdf._id}
            />
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default Main;
