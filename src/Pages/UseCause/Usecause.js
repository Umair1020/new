import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Usecause = () => {
  const footerStyles = {
    color: "var(--Main-Colors-Dark-2-Primary-text, #1A1B29)",
    textAlign: "center",

    /* H6's/H6 Semibold */
    fontFamily: "Inter",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "54px", // 150%
  };
  return (
    <div>
      <main>
        <div className="sc-f7a1231a-0 eAOrTQ">
          <Header />
        </div>
        <div className="sc-73f9991a-0 bMzgOT">
          <div className="sc-73f9991a-1 dFgVDd">
            <div className="sc-73f9991a-2 jiRoFs">
              {" "}
              <br />
              <br />
              <h1 style={footerStyles}>Chat with any PDF document</h1>
              <p className="mt-2 text-center">
                Explore a variety of use cases to chat with PDF documents using
                the best ChatPDF app
              </p>
              <hr className="w-75 mx-auto hr" />
            </div>
          </div>
        </div>
        <br /> <br />
        <section id="services" className="services section-bg lg:px-8 lg:py-20">
          <div className="container" data-aos="fade-up">
            <div className="row mx-auto">
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box mx-auto">
                  <div className=" mx-auto d-flex">
                    <span className="bg-teal-50 text-teal-700 inline-flex rounded-lg p-3 ring-4 ring-white mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M16.432 15C14.387 9.893 12 8.547 12 6V3h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8v3c0 2.547-2.387 3.893-4.432 9c-.651 1.625-2.323 4 6.432 4s7.083-2.375 6.432-4m-1.617 1.751c-.702.21-2.099.449-4.815.449s-4.113-.239-4.815-.449c-.249-.074-.346-.363-.258-.628c.22-.67.635-1.828 1.411-3.121c1.896-3.159 3.863.497 5.5.497s1.188-1.561 1.824-.497a15.353 15.353 0 0 1 1.411 3.121c.088.265-.009.553-.258.628"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-base text-center font-semibold leading-6 text-gray-900">
                      <Link to="/tools" className="focus:outline-none">
                        <span className="absolute " aria-hidden="true"></span>
                        Scientific papers
                      </Link>
                    </h3>
                    <p className="mt-2 text-center text-sm text-gray-500">
                      From legal agreements to financial reports, brings yo
                    </p>
                    <Link
                      to="/login"
                      className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 d-flex justify-content-center align-items-center"
                    >
                      <p className="mx-3" style={{ color: "#3843D0" }}>
                        Learn More{" "}
                      </p>{" "}
                      <FaArrowRight className="arrow" />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className=" mx-auto d-flex">
                    <span className="bg-rose-50 text-rose-700 inline-flex rounded-lg p-3 ring-4 ring-white mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g fill="none">
                          <path
                            fill="#00A6ED"
                            d="M17.045 27.286H30V13a2 2 0 0 0-2-2H17.045z"
                          />
                          <path
                            fill="#D3D3D3"
                            d="M15.682 27.964H30v1.357H15.682z"
                          />
                          <path
                            fill="#0074BA"
                            d="M16.023 11A1.02 1.02 0 0 0 15 12.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V11z"
                          />
                          <path
                            fill="#0074BA"
                            d="M16.023 27.286A1.02 1.02 0 0 0 15 28.304v.678A1.02 1.02 0 0 0 16.023 30h12.954c.446 0 .824-.283.965-.678H16.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H30v-.678z"
                          />
                          <path
                            fill="#CA0B4A"
                            d="M10.045 23.286H23V9a2 2 0 0 0-2-2H10.045z"
                          />
                          <path
                            fill="#D3D3D3"
                            d="M8.682 23.964H23v1.357H8.682z"
                          />
                          <path
                            fill="#990838"
                            d="M9.023 7A1.02 1.02 0 0 0 8 8.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V7z"
                          />
                          <path
                            fill="#990838"
                            d="M9.023 23.286A1.02 1.02 0 0 0 8 24.304v.678A1.02 1.02 0 0 0 9.023 26h12.954c.446 0 .824-.283.965-.678H9.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H23v-.678z"
                          />
                          <path
                            fill="#86D72F"
                            d="M4.045 20.286H17V6a2 2 0 0 0-2-2H4.045z"
                          />
                          <path
                            fill="#D3D3D3"
                            d="M2.682 20.964H17v1.357H2.682z"
                          />
                          <path
                            fill="#44911B"
                            d="M3.023 4A1.02 1.02 0 0 0 2 5.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V4z"
                          />
                          <path
                            fill="#008463"
                            d="M3.023 20.286A1.02 1.02 0 0 0 2 21.304v.678A1.02 1.02 0 0 0 3.023 23h12.954c.446 0 .824-.283.965-.678H3.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H17v-.678z"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-base text-center font-semibold leading-6 text-gray-900">
                      <Link to="/tools" className="focus:outline-none">
                        <span className="absolute " aria-hidden="true"></span>
                        Books
                      </Link>
                    </h3>
                    <p className="mt-2 text-center text-sm text-gray-500">
                      From legal agreements to financial reports, brings yo
                    </p>
                  </div>
                  <Link
                    to="/login"
                    className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 d-flex justify-content-center align-items-center"
                  >
                    <p className="mx-3" style={{ color: "#3843D0" }}>
                      Learn More{" "}
                    </p>{" "}
                    <FaArrowRight className="arrow" />
                  </Link>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className=" mx-auto d-flex">
                    <span className="bg-yellow-50 text-yellow-700 inline-flex rounded-lg p-3 ring-4 ring-white mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 1760 1760"
                      >
                        <path
                          fill="currentColor"
                          d="M1739 1504q0 53-37 90l-107 108q-39 37-91 37q-53 0-90-37l-363-364q-38-36-38-90q0-53 43-96L800 896l-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13t10 11.5t10 13.5t6 13.5t5.5 16.5t1.5 18q0 38-28 68q-3 3-16.5 18t-19 20.5T582 1243t-22 15.5t-22 9t-26 4.5q-40 0-68-28L36 836Q8 808 8 768q0-13 4.5-26t9-22T37 698t16.5-18.5t20.5-19T92 644q30-28 68-28q10 0 18 1.5t16.5 5.5t13.5 6t13.5 10t11.5 10t13 12.5t12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12T649 233t-10-11.5t-10-13.5t-6-13.5t-5.5-16.5t-1.5-18q0-38 28-68q3-3 16.5-18t19-20.5T698 37t22-15.5t22-9T768 8q40 0 68 28l408 408q28 28 28 68q0 13-4.5 26t-9 22t-15.5 22t-16.5 18.5t-20.5 19t-18 16.5q-30 28-68 28q-10 0-18-1.5t-16.5-5.5t-13.5-6t-13.5-10t-11.5-10t-13-12.5t-12-12.5q14 14 14 34t-14 34L896 800l256 256q43-43 96-43q52 0 91 37l363 363q37 39 37 91"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-base text-center font-semibold leading-6 text-gray-900">
                      <Link to="/tools" className="focus:outline-none">
                        <span className="absolute " aria-hidden="true"></span>
                        Legal documents
                      </Link>
                    </h3>
                    <p className="mt-2 text-center text-sm text-gray-500">
                      From legal agreements to financial reports, brings yo
                    </p>
                    <Link
                      to="/login"
                      className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 d-flex justify-content-center align-items-center"
                    >
                      <p className="mx-3" style={{ color: "#3843D0" }}>
                        Learn More{" "}
                      </p>{" "}
                      <FaArrowRight className="arrow" />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <div className="mx-auto d-flex">
                    <span className="bg-purple-50 text-purple-700 inline-flex rounded-lg p-3 ring-4 ring-white mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 2048 2048"
                      >
                        <path
                          fill="currentColor"
                          d="m0 1898l384-384v534H0zm512-512l384-384v1046H512zm1280-490h128v1152h-384v-918zm-448 426l64-64v790h-384V1002zm704-1066v512h-128V475l-576 575l-384-384L0 1627v-182l960-959l384 384l485-486h-293V256z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-base text-center font-semibold leading-6 text-gray-900">
                      <Link to="/" className="focus:outline-none">
                        <span className="absolute " aria-hidden="true"></span>
                        Financial reports
                      </Link>
                    </h3>
                    <p className="mt-2 text-center text-sm text-gray-500">
                      From legal agreements to financial reports, brings yo
                    </p>
                    <Link
                      to="/login"
                      className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 d-flex justify-content-center align-items-center"
                    >
                      <p className="mx-3" style={{ color: "#3843D0" }}>
                        Learn More{" "}
                      </p>{" "}
                      <FaArrowRight className="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <br /> <br />
        <Footer />
      </main>
    </div>
  );
};

export default Usecause;
