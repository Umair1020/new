import React from "react";
import "./Support.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const Support = () => {
  return (
    <div>
      <Header />
      {/* <div className="sc-ee94f5d4-1 HZkck">
        <div className="sc-ee94f5d4-2 ePWTnE">
          <h1>Support</h1>
        </div>
      </div>
      <div
        className="sc-29e9c78b-2 bYzApS"
        style={{ opacity: "1", transform: "none" }}
      >
        <h1 style={{ opacity: "1", transform: "none" }}>
          for any query please contact here
        </h1>

        <p>
          <b>asfandyar@spotlightai.io</b>
        </p>
      </div> */}
      <section className="half-section bg-sky-blue">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7 col-md-9 d-flex flex-column justify-content-center align-items-center extra-small-screen">
              <div className="page-title-large text-center margin-40px-bottom">
                <h1 className="alt-font text-white font-weight-500 letter-spacing-minus-1">
                  How can we help you?
                </h1>
                <p className="text-white mb-0">
                  for any query please contact at support@magicaldocs.com
                </p>
              </div>{" "}
              <br />
              <div className="newsletter-style-02 position-relative w-100 ">
                {/* <form action="/support-search" method="get" className="d-flex">
                  <input
                    className="search-input large-input border-radius-6px m-0 border-0"
                    name="q"
                    placeholder="Enter keywords to find answers."
                    type="text"
                  />
                  <button
                    type="submit"
                    className=" btn-medium border-left border-0
                            border-color-extra-medium-gray font-weight-600 py-0 search-button d-flex align-items-center"
                  >
                    <i className="fas fa-search text-fast-blue margin-10px-right"></i>
                    search
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <br />
      <section className="padding-8-half-rem-lr xl-padding-3-rem-lr lg-no-padding-lr padding-5-rem-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center margin-1-half-rem-bottom sm-margin-1-half-rem-bottom">
              <h2 className="alt-font font-weight-600">
                Resources for Support
              </h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-9 md-margin-30px-bottom">
              <div className="feature-box flex-column flex-sm-row feature-box-left-icon overflow-hidden padding-4-rem-all sm-padding-2-rem-all">
                <div className="margin-35px-right">
                  <Link to="/">
                    <img
                      src="https://www.pdf-xchange.com/static/common/images/icons/icon-forum.svg"
                      data-no-retina
                      alt=""
                    />
                  </Link>
                </div>
                <div className="feature-box-content xs-pl-0 padding-lg-15px-left">
                  <Link
                    className="alt-font text-extra-medium font-weight-500 margin-10px-bottom d-inline-block"
                    to="/"
                  >
                    Support Forums
                  </Link>
                  <p className="line-height-26px w-90 lg-w-100 margin-10px-bottom">
                    Our free support forums are available around the clock to
                    all users of both the licensed and the free versions of our
                    software. The technical support team, as well as our
                    developers, are actively monitoring the forums in order to
                    ensure that you get the answers you need as quickly as
                    possible.
                  </p>
                  <Link
                    to="/"
                    className="btn btn-link btn-extra-large"
                    target="_blank"
                    rel="noopener"
                  >
                    Browse topics
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-9 md-margin-30px-bottom">
              <div className="feature-box flex-column flex-sm-row feature-box-left-icon overflow-hidden padding-4-rem-all sm-padding-2-rem-all">
                <div className="feature-box-icon">
                  <Link to="/">
                    <img
                      src="https://www.pdf-xchange.com/static/common/images/icons/icon-knowledgebase.svg"
                      data-no-retina
                      alt=""
                    />
                  </Link>
                </div>
                <div className="feature-box-content xs-pl-0 padding-lg-15px-left">
                  <Link
                    className="alt-font text-extra-medium font-weight-500 margin-10px-bottom d-inline-block"
                    to="/"
                  >
                    Knowledge Base
                  </Link>
                  <p className="line-height-26px w-90 lg-w-100 margin-10px-bottom">
                    The Knowledge Base contains more than 500 articles relating
                    to our products. Here you can find information about how to
                    use the software, answers to frequently asked questions,
                    tips and tricks for the product features and specific "how
                    to" instructions for more complicated operations.
                  </p>
                  <Link
                    to="/"
                    className="btn btn-link btn-extra-large"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-9 md-margin-30px-bottom">
              <div className="feature-box flex-column flex-sm-row feature-box-left-icon overflow-hidden padding-4-rem-all sm-padding-2-rem-all">
                <div className="feature-box-icon">
                  <Link to="/">
                    <img
                      src="https://www.pdf-xchange.com/static/common/images/icons/icon-manuals.svg"
                      data-no-retina
                      alt=""
                    />
                  </Link>
                </div>
                <div className="feature-box-content xs-pl-0 padding-lg-15px-left">
                  <Link
                    className="alt-font text-extra-medium font-weight-500 margin-10px-bottom d-inline-block"
                    to="/"
                  >
                    Manuals
                  </Link>
                  <p className="line-height-26px w-90 lg-w-100 margin-10px-bottom">
                    Our documentation contains comprehensive instructions on how
                    to use the features and functionality of all products.
                  </p>
                  <Link
                    to="/"
                    className="btn btn-link btn-extra-large"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-9">
              <div className="feature-box flex-column flex-sm-row feature-box-left-icon overflow-hidden padding-4-rem-all sm-padding-2-rem-all">
                <div className="feature-box-icon">
                  <Link to="/">
                    <img
                      src="https://www.pdf-xchange.com/static/common/images/icons/icon-email.svg"
                      data-no-retina
                      alt=""
                    />
                  </Link>
                </div>
                <div className="feature-box-content xs-pl-0 padding-lg-15px-left">
                  <Link
                    className="alt-font text-extra-medium font-weight-500 margin-10px-bottom d-inline-block"
                    to="/mailto:support@pdf-xchange.com"
                  >
                    Email Support
                  </Link>
                  <p className="line-height-26px w-90 lg-w-100 margin-10px-bottom">
                    If you cannot find the answers to your questions using our
                    support resources then please email our support team with
                    your queries.
                  </p>
                  <Link
                    to="/"
                    className="btn btn-link btn-extra-large"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 padding-4-rem-all">
              <p>
                Searching and supporting PDFs is an essential functionality in
                today's digital landscape. PDFs, or Portable Document Format
                files, serve as a widely-used format for sharing documents
                across various platforms. They encapsulate text, images, and
                formatting, providing a standardized and consistent view
                regardless of the operating system or device.
              </p>

              <p style={{ textAlign: "justify" }}>
                Please ensure you are using the latest release of the product in
                question before reporting any issues, as they may have already
                been resolved if you are using a previous build.
              </p>

              <p>
                If you need to request assistance at our support email -
                <b>support@magicaldocs.com</b> - then please include as much
                information as possible about the environment in which
                <br />
                the software is operating, such as the version of Windows, any
                other software involved in the issue, and a sample file.
                Instructions on how to report bugs
                <br />
                effectively is available <Link to="/">here</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="padding-8-half-rem-lr xl-padding-3-rem-lr lg-no-padding-lr overflow-visible position-relative pt-0 pb-md-0"
        id="need-more-information-section"
      ></section>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Support;
