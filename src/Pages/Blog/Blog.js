import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Header />
      <div
        className="w-full bg-white border-t border-gray-200"
        style={{ minHeight: "calc(100vh - 61px)" }}
      >
        <div className="max-w-[1080px] mx-auto p-2">
          <div className="text-left p-2 my-4">
            <h2 className="text-3xl font-serif"></h2>
          </div>
          <div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <h2 className="text-3xl sm:text-4xl font-serif">Our Blog</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Unveiling the Synergy: Sharing Everything We Know about PDF
                  and AI
                </p>
                <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-12-05T14:52:00.020Z"
                        className="text-gray-500"
                      >
                        12/5/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>Unlocking
                          the Power of AI in PDF Processing
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Explore how artificial intelligence is revolutionizing
                        the way we handle and extract information from PDF
                        documents, improving efficiency and accuracy.
                      </p>
                    </div>
                  </article>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-11-15T19:51:15.835Z"
                        className="text-gray-500"
                      >
                        11/16/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>The Role of
                          AI in PDF Accessibility: Making Documents Inclusive
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Discuss the impact of AI on making PDFs more accessible
                        for individuals with disabilities, and how it enhances
                        the overall user experience.
                      </p>
                    </div>
                  </article>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-10-23T23:49:04.862Z"
                        className="text-gray-500"
                      >
                        10/24/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>Smart
                          Document Management: Integrating AI with PDFs
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Delve into how AI-powered document management systems
                        are transforming the way organizations handle, organize,
                        and search through large volumes of PDF files.
                      </p>
                    </div>
                  </article>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-10-23T23:48:56.745Z"
                        className="text-gray-500"
                      >
                        10/24/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>PDF
                          Extraction Made Easy: A Guide to AI-Powered Data
                          Extraction
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Provide insights into how AI algorithms are simplifying
                        data extraction from PDFs, automating mundane tasks and
                        saving time for businesses.
                      </p>
                    </div>
                  </article>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-10-23T23:48:35.079Z"
                        className="text-gray-500"
                      >
                        10/24/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>Enhancing
                          Collaboration with AI in PDF Annotation and Review
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Discuss the role of AI in collaborative document review
                        and annotation, highlighting tools and technologies that
                        streamline the process.
                      </p>
                    </div>
                  </article>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-10-10T06:36:50.848Z"
                        className="text-gray-500"
                      >
                        10/10/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>PDF Security
                          in the Age of AI: Safeguarding Sensitive Information
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Explore the intersection of AI and PDF security,
                        discussing the latest advancements in protecting
                        sensitive data through intelligent encryption and access
                        controls.
                      </p>
                    </div>
                  </article>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-10-06T00:38:34.487Z"
                        className="text-gray-500"
                      >
                        10/6/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>The Future
                          of Digital Signatures: AI-Powered Authentication in
                          PDFs
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Examine how AI is influencing the evolution of digital
                        signatures in PDFs, making authentication more secure
                        and efficient.
                      </p>
                    </div>
                  </article>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-09-28T04:24:11.867Z"
                        className="text-gray-500"
                      >
                        9/28/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>Automating
                          Form Processing with AI: A PDF Revolution
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Explore the impact of AI on automating the processing of
                        PDF forms, making it faster and more accurate for
                        businesses and individuals.
                      </p>
                    </div>
                  </article>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2023-09-14T03:40:17.147Z"
                        className="text-gray-500"
                      >
                        9/14/2023
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to="/">
                          <span className="absolute inset-0"></span>AI-Driven
                          PDF Editing: The Next Frontier in Document
                          Manipulation
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Discuss how AI technologies are changing the landscape
                        of PDF editing, making tasks such as text recognition,
                        image editing, and formatting more intuitive and
                        efficient.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
