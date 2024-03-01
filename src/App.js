import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "./Landingpage";
import Login from "./components/Login/Login";
import Demo from "./Pages/Demo";
import Cookies from "js-cookie";
import Document from "./Pages/Document/Document";
import Compare from "./Pages/Compare/Compare";
import SignUp from "./components/Login/SignUp";
import OcrPdf from "./Pages/OcrPdf/OcrPdf";
// import PdfView from "./components/Pdf/Part";
import Pdfscanner from "./Pages/Pdfscanner";
import Usecause from "./Pages/UseCause/Usecause";
import Test from "./Pages/Pricing/Test";
import Ask from "./Pages/Ask";
import ErrorFallback from "./ErrorHandling";
import Support from "./Pages/Support/Support";
import Privacy from "./Pages/Privacy/Privacy";
import Blog from "./Pages/Blog/Blog";
import ChatWithMultiple from "./Pages/ChatWithMultiple/ChatWithMultiple";
import Hrservices1 from "./Pages/Hr/Hr";
const userCookie = Cookies.get("user");
function App() {
  const [hasError, setHasError] = useState(false);
  // Function to catch errors
  const handleError = (error, errorInfo) => {
    console.error(error, errorInfo);
    setHasError(true);
  };
  // Reset error state when the component successfully renders
  const resetError = () => setHasError(false);

  return (
    <>
      {hasError && <ErrorFallback />}
      {!hasError && (
        <Routes onError={handleError} onLoad={resetError}>
          <Route
            path="/"
            element={userCookie ? <Navigate to="/Document" /> : <Login />}
          />
          <Route path="/price" element={<Test />} />
          {/* <Route path="/pdfview" element={<PdfView />} /> */}
          <Route path="/usecases" element={<Usecause />} />
          <Route path="/demo" element={<Ask />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support" element={<Support />} />

          <Route path="/privacy-policy" element={<Privacy />} />
          <Route
            path="/login"
            element={userCookie ? <Navigate to="/Document" /> : <Login />}
          />
          <Route
            path="/signup"
            element={userCookie ? <Navigate to="/Document" /> : <SignUp />}
          />
          <Route
            path="/Document"
            element={userCookie ? <Document /> : <Navigate to="/login" />}
          />
          <Route
            path="/pdf/:id"
            element={userCookie ? <Demo /> : <Navigate to="/login" />}
          />
          <Route
            path="/ask/:id"
            element={userCookie ? <Demo /> : <Navigate to="/login" />}
          />
          <Route
            path="/compare"
            element={userCookie ? <Compare /> : <Navigate to="/login" />}
          />
          <Route
            path="/chatwithmultiple/:userId"
            element={
              userCookie ? <ChatWithMultiple /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/Ocrpdf/:id"
            element={userCookie ? <OcrPdf /> : <Navigate to="/login" />}
          />
          <Route
            path="hrservice"
            element={userCookie ? <Hrservices1 /> : <Navigate to="/login" />}
          />

          <Route path="/resumescanner" element={<Pdfscanner />} />
          <Route path="/invoicescanner" element={<Pdfscanner />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      )}
    </>
  );
}

export default App;
