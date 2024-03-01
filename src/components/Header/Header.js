import React from "react";
import "../../App.css";
import "./header.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

import Cookies from "js-cookie";
import SubHead from "./SubHead";
import logo from "../../assets/2.svg";
const Header = () => {
  const userCookie = Cookies.get("user");
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 777 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const paragraphStyles = {
    color: "var(--Main-Colors-White-1, #FCFCFF)",

    /* 16/body 16 Semibold */
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "160%", // 25.6px
  };
  return (
    <div>
      <Desktop>
        {userCookie ? (
          <SubHead />
        ) : (
          <Link to="https://magicalpdf.com">
            <div
              style={{
                marginTop: "20px",
                marginLeft: "100px",
                padding: "10px",
              }}
            >
              <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
                MagicalPDF
              </span>
            </div>
          </Link>
          // <div className="container sc-4abd7efd-0 fwqFtH">
          //   <div className="row  sc-4abd7efd-1 cEOECa">
          //     <div className="col-6 sc-4abd7efd-2 fOlkLG">
          //       <Link to="/" style={{ paddingLeft: "10px" }}>
          //         MagicalPdf
          //         {/* <img alt="Logo" src={logo} style={{ width: "150px" }} /> */}
          //       </Link>
          //     </div>
          //     {/* <div className="sc-4abd7efd-2 fOlkLG hide-mobile">
          //     <div className="sc-4abd7efd-4 bICoNm"></div>
          //   </div> */}
          //     {/* <div className="col-6 mx-auto max-w-7xl px-6  lg:px-8 lg:py-20 d-flex justify-content-end">
          //       <Link
          //         to="/demo"
          //         className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          //       >
          //         Demo
          //       </Link>
          //       <Link
          //         to="/price"
          //         className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          //       >
          //         Pricing
          //       </Link>
          //       <Link
          //         to="/usecases"
          //         className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          //       >
          //         Use cases
          //       </Link>
          //       <Link to="/login">
          //         <button
          //           style={{
          //             background: "#3843D0",
          //             padding: "12px",
          //             borderRadius: "12px",
          //             color: "#fff",
          //             marginRight: "-13px",
          //             fontFamily: "Inter",
          //             fontSize: "16px",
          //             fontStyle: "normal",
          //             fontWeight: 600,
          //             // lineHeight: "160%",
          //           }}
          //         >
          //           Get Started →
          //         </button>
          //       </Link>
          //     </div> */}
          //   </div>
          // </div>
        )}
      </Desktop>
      <Mobile>
        <Link to="/">
          <div style={{ marginTop: "20px", marginLeft: "20px" }}>
            <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
              MagicalPDF
            </span>
          </div>
        </Link>
        {/* <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link to="/" className="sc-4abd7efd-3 ubXNY">
              <img alt="Logo" src={logo} style={{ width: "150px" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <HiOutlineBars3BottomRight />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className=" " style={{listStyle: "none"}}>
                
                <li className="nav-item">
                  <Link
                    to="/demo"
                    className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Demo
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link
                    to="/price"
                    className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Pricing
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link
                    to="/usecases"
                    className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Use cases
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/login">
                    <button
                      style={{
                        background: "#3843D0",
                        padding: "12px",
                        borderRadius: "12px",
                        color: "#fff",
                        marginRight: "-13px",
                      }}
                    >
                      Get Started →
                    </button>
                  </Link>
                  </li>
      
              </ul>
            </div>
          </div>
        </nav>{" "} */}
        <hr />
      </Mobile>
    </div>
  );
};

export default Header;
