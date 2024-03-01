import React, { useEffect, useState, useCallback } from "react";
import Loader from "./Loader";
import { Document, Page, pdfjs } from "react-pdf";
import { useLocation } from "react-router-dom";
import ControlPanel from "./ControlPanel";
import "./pdf.css";
import { baseurl } from "../../utils/BaseUrl";
import { Viewer, Worker } from '@react-pdf-viewer/core';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { useFile } from "../../FIleContext";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = ({ path, SrcSet, file }) => {
  const fieUrl = `${baseurl}/uploads/${file}`;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [filename, setFilename] = useState("");
  const [localStorageUrl, setLocalStorageUrl] = useState(
    localStorage.getItem("url") || ""
  );
  const [fileName, setFileName] = useState("");
  const { setFile, setSrcSet } = useFile();

  const changPdf = `https://anywhere.synapssolutions.com/${baseurl}/uploads/${filename}`;
  const resolvePath = `https://anywhere.synapssolutions.com/${
    path ? path : fieUrl
  }`;
  const { userId, id } = useParams();
  const [list, setList] = useState([]);
  const pathname = useLocation();
  const newName = pathname.pathname;
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [singleurl, setSingleUrl] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const getSinglePdf = async () => {
      const res = await axios.get(`${baseurl}/api/pdf/getOnlyPdf/${id}`);
      const fix1 = res.data.name;
      setSingleUrl(`https://anywhere.synapssolutions.com/${baseurl}/${fix1}`);
      // setUrl(`https://anywhere.synapssolutions.com/${baseurl}/${fix1}`);
    };
    getSinglePdf();
  }, []);
  const getMultiplePdf = async () => {
    try {
      const { data } = await axios.post(`${baseurl}/api/pdf/getPdf`, {
        userId,
      });

      const fix = data.map((url) => url.name);

      if (fix && fix.length > 0) {
        // Use Promise.all to wait for all promises to be resolved
        const setFilePromises = fix.map(async (path) => {
          const filePath = `${baseurl}/${
            fileName ? `uploads/${fileName}` : path
          }`;
          await setFile(filePath);
          return filePath;
        });

        // Set single URL and URL after all promises are resolved
        const resolvedFilePaths = await Promise.all(setFilePromises);
        // Set srcFile to the first resolved file path

        setUrl(`https://anywhere.synapssolutions.com/${resolvedFilePaths[0]}`);
      }

      setList(fix);
    } catch (error) {}
  };

  useEffect(() => {
    getMultiplePdf();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  function onDocumentLoadError(error) {
    setIsLoading(false);
  }
  const handleSelectChange = (event) => {
    const selectedPath = event.target.value;
    const filename = selectedPath.split("/").pop(); // Get the last part of the path, which is the filename
    setUrl(
      `https://anywhere.synapssolutions.com/${baseurl}/uploads/${filename}`
    );
    setSingleUrl(
      `https://anywhere.synapssolutions.com/${baseurl}/uploads/${filename}`
    );
    setPageNumber(1); // Reset page number when changing the PDF
  };

  const srcFile = singleurl ? singleurl : url;
  const presentFile = srcFile ? srcFile : resolvePath;
  const final = presentFile ? presentFile : changPdf;
  const defaultZoom = window.innerWidth < 768;
  return (
    <div>
      <section
        id="pdf-section"
        className="pdf-container d-flex flex-column align-items-center w-100"
      >
         <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={final}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
        {newName === `/chatwithmultiple/${userId}` ? (
          <div className="selectdiv">
            <label className="" style={{ width: "300px" }}>
              <select className="select" onChange={handleSelectChange}>
                {list.map((path, index) => {
                  const filename = path.split("/").pop(); // Get the last part of the path, which is the filename
                  return (
                    <option className="option" key={index} value={path}>
                      {filename}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        ) : (
          ""
        )}
        <Document
          file={final}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<Loader isLoading={true} />}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={scale}
              renderMode="canvas"
              renderTextLayer={false} // Disable text layer rendering
              inputRef={(ref) => {
                if (ref) {
                  ref.style.height = `100vh`; // Set page height explicitly
                }
              }}
              width={
                newName === "/resumescanner" || newName === "/invoicescanner"
                  ? 500
                  : 700
              }
            />
          ))}
        </Document>
        {/* {!defaultZoom ? (
          <div
            style={{
              position: "fixed",
              bottom: "0",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <ControlPanel
              scale={scale}
              setScale={setScale}
              numPages={numPages}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              file={srcFile}
            />
          </div>
        ) : (
          <ControlPanel
            scale={scale}
            setScale={setScale}
            numPages={numPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            file={srcFile}
          />
        )} */}
      </section>
    </div>
  );
};

export default PDFReader;
