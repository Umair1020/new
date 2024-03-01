// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div
//       style={{
//         background: "#111827",
//         color: "white",
//         width: "100%",
//         position: "relative",
//         bottom: "0px",
//         overflowX: "hidden",
//       }}
//     >
//       <div
//         className="mx-auto container  px-6 pb-8  lg:px-8  border-t border-gray-900/10 pt-16"
//         // style={{ background: "#111827" }}
//       >
//         <br />
//         <br />
//         <div className="container mx-auto xl:grid xl:grid-cols-3 xl:gap-8">
//           <div className="space-y-8">
//             <img
//               className="h-7"
//               src="/1.svg"
//               alt="Magicaldocs logo"
//               style={{ color: "white" }}
//             />
//             <div
//               className="text-sm leading-6 text-gray-600"
//               style={{ color: "white" }}
//             >
//               Chat with any PDF: ask questions, get summaries, find information,
//               and more.
//             </div>
//             <div className="flex space-x-6">
//               <Link
//                 className="text-gray-400 hover:text-gray-500"
//                 to="https://www.tiktok.com/@magical.docs?_t=8iuHEDkeWZc&_r=1"
//                 target="_blank"
//               >
//                 <span className="sr-only">TikTok</span>
//                 <svg
//                   fill="currentColor"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 2859 3333"
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   className="h-6 w-6"
//                   aria-hidden="true"
//                   style={{ width: "20px", color: "white" }}
//                 >
//                   <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path>
//                 </svg>
//               </Link>
//               <Link
//                 className="text-gray-400 hover:text-gray-500"
//                 to="https://www.facebook.com/profile.php?id=100093010917065"
//                 target="_blank"
//               >
//                 <span className="sr-only">Instagram</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
//                   />
//                 </svg>
//               </Link>
//               <Link
//                 className="text-gray-400 hover:text-gray-500"
//                 to="https://www.linkedin.com/company/magical-pdf"
//                 target="_blank"
//               >
//                 <span className="sr-only">Twitter</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="currentColor"
//                     fillRule="evenodd"
//                     d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.792 7.792 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.31 6.31 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </Link>
//               <Link
//                 className="text-gray-400 hover:text-gray-500"
//                 to="https://www.youtube.com/@magicalPDF/videos"
//                 target="_blank"
//               >
//                 <span className="sr-only">YouTube</span>
//                 <svg
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   className="h-6 w-6"
//                   style={{ color: "white" }}
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//           <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
//             <div className="md:grid md:grid-cols-3 md:gap-8">
//               <div>
//                 <h3
//                   className="text-sm font-semibold leading-6 text-gray-900"
//                   style={{ color: "white" }}
//                 >
//                   Products
//                 </h3>
//                 <ul
//                   role="list"
//                   className="space-y-4 list-none p-0"
//                   style={{ color: "white" }}
//                 >
//                   <li className="p-0 m-0">
//                     <Link
//                       to="/usecases"
//                       className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                       style={{ color: "white" }}
//                     >
//                       Use cases
//                     </Link>
//                   </li>
//                   <li className="p-0 m-0" style={{ color: "white" }}>
//                     <a
//                       href="https://chromewebstore.google.com/detail/magical-docs/lmnhlolmdjmleaomaekdbgfjaoljaifo"
//                       className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Chrome extension
//                     </a>
//                   </li>
//                   {/* <li className="p-0 m-0 " style={{ color: "white" }}>
//                   <Link
//                     className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                     style={{ color: "white" }}
//                   >
//                     API docs
//                   </Link >
//                 </li> */}
//                   <li className="p-0 m-0" style={{ color: "white" }}>
//                     <Link
//                       className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                       style={{ color: "white" }}
//                       to="/price"
//                     >
//                       Pricing
//                     </Link>
//                   </li>
//                   <li className="p-0 m-0" style={{ color: "white" }}>
//                     <Link
//                       className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                       style={{ color: "white" }}
//                       to="/blog"
//                     >
//                       blog
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="mt-10 md:mt-0" style={{ color: "white" }}>
//                 <h3
//                   className="text-sm font-semibold leading-6 text-gray-900"
//                   style={{ color: "white" }}
//                 >
//                   We also built
//                 </h3>

//                 <ul
//                   role="list"
//                   style={{ color: "white" }}
//                   className=" space-y-4 list-none p-0"
//                 >
//                   <li className="p-0 m-0">
//                     <Link
//                       to="/resumescanner"
//                       className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                       style={{ color: "white" }}
//                     >
//                       Resume Roaster
//                     </Link>
//                   </li>
//                   <li className="p-0 m-0" style={{ color: "white" }}>
//                     <Link
//                       to="/invoicescanner"
//                       className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                       style={{ color: "white" }}
//                     >
//                       Invoice AI Scanner
//                     </Link>
//                   </li>

//                   <li className="p-0 m-0" style={{ color: "white" }}>
//                     <Link
//                       to="/tools"
//                       className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                       style={{ color: "white" }}
//                     >
//                       Other PDF tools
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="mt-10 md:mt-0" style={{ color: "white" }}>
//                 <h3
//                   className="text-sm font-semibold leading-6 text-gray-900"
//                   style={{ color: "white" }}
//                 >
//                   Customer Support
//                 </h3>
//                 <ul
//                   role="list"
//                   style={{ color: "white" }}
//                   className=" space-y-4 list-none p-0"
//                 >
//                   <li className="p-0 m-0">
//                     <Link
//                       to="/support"
//                       className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//                       style={{ color: "white" }}
//                     >
//                       Contact
//                     </Link>
//                   </li>
//                 </ul>
//                 <br />
//                 <br /> <br />
//               </div>
//             </div>
//           </div>
//         </div>{" "}
//         <br />
//         <hr />
//         <div className="container d-md-flex my-3">
//           <p className="copyright mx-auto text-center">
//             {" "}
//             ©MagicalPdf All Rights Reserved
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return <div></div>;
};

export default Footer;
