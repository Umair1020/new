import React from "react";

const Scanner = ({ result }) => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className=" mb-4 relative">
          <div className="text-center font-semibold text-lg">Scanned results</div>
          <div className="flex gap-3 absolute top-1/2 -translate-y-1/2 right-2">
            <button
              className="hover:text-brand"
              aria-label="Copy result"
              data-microtip-position="top"
              role="tooltip"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"
                ></path>
              </svg>
            </button>
            <button
              className="hover:text-brand"
              aria-label="Save as PDF"
              data-microtip-position="top"
              role="tooltip"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeLinejoin="1.5">
                  <path d="M3 19V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
                  <path d="M8.6 9h6.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6H8.6a.6.6 0 0 0-.6.6v4.8a.6.6 0 0 0 .6.6ZM6 13.6V21h12v-7.4a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6Z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="resume-ai-results"
          className="p-4 sm:px-6 bg-white rounded-lg shadow overflow-auto"
          style={{ height: "640px" }}
        >
          {result}
        </div>
      </div>
    </div>
  );
};

export default Scanner;
