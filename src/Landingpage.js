// import React, { useState } from "react";
// import Header from "./components/Header/Header";
// import { Link } from "react-router-dom";
// import { FaMinus } from "react-icons/fa";
// import Test from "./Pages/Pricing/Test";
// import { FaPlus, FaTimes } from "react-icons/fa";
// import Footer from "./components/Footer/Footer";
// import Index from "./components/css/Info/Info";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css/pagination";
// import "swiper/css";
// import "swiper/css/navigation";
// import { useMediaQuery } from "react-responsive";
// const Landingpage = () => {
//   const Desktop = ({ children }) => {
//     const isDesktop = useMediaQuery({ minWidth: 777 });
//     return isDesktop ? children : null;
//   };

//   const Mobile = ({ children }) => {
//     const isMobile = useMediaQuery({ maxWidth: 767 });
//     return isMobile ? children : null;
//   };
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleAccordionClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };
//   const technologyLogos = [
//     "logo1.svg",
//     "logo2.svg",
//     "logo3.svg",
//     "logo4.svg",
//     "logo1.svg",
//     "logo2.svg",
//     "logo3.svg",
//     "logo4.svg",
//     "logo1.svg",
//     "logo3.svg",
//     // Add more logo paths here
//   ];
//   const faqData = [
//     {
//       id: "faq1",
//       question: "Is Magical Docs Free.",
//       answer:
//         "Yes, its free for 1 Document (10 mb) limit to try out. We have paid options to give you  more . ",
//     },
//     {
//       id: "faq2",
//       question: "How does it work ?",
//       answer:
//         "Just sign up, upload a document and start asking questions. Its very simple. ",
//     },
//     {
//       id: "faq3",
//       question: "Does it work only on PDFs?",
//       answer: "It works on many different document formats i.e pdf, docs, ",
//     },
//     {
//       id: "faq4",
//       question: "What models are used to train my documents?",
//       answer: "We use gpt-3.5-turbo-16 model from OpenAI",
//     },
//     {
//       id: "faq5",
//       question: "Where are the files stored ? ",
//       answer: `Your documents are encrypted at rest and an in transit. On top, documents are stored on data provider who holds SOC2 Type 2 certification.

//         On top you can choose private option and your documents will never be stored on a cloud provider, ensuring their complete privacy  ",`,
//     },
//     {
//       id: "faq6",
//       question: "Can I get refunded?",
//       answer: `Refunds are not possible, but you can cancel your subscription at any point and you won’t be further charged for it.`,
//     },
//     {
//       id: "faq7",
//       question: "Is my data secure?",
//       answer: `Data security is our top priority. We use industry-standard SSL encryption to make sure all your information is entirely protected. `,
//     },
//     {
//       id: "faq8",
//       question: "Can I chat in any language?",
//       answer: `Yes, we support any language you want and you can chat in any language. `,
//     },
//     // Add more FAQ items as needed
//   ];

//   return (
//     <div>
//       <Mobile>
//         <Header />
//         <hr />
//         <div
//           className=" mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-8 lg:py-20"
//           style={{
//             background: "rgba(247, 249, 251, 1)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="row  p-10 ">
//             <div className="col-lg-6 mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
//               <h1
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontWeight: 800,
//                   fontSize: "50px",
//                   lineHeight: "60px",
//                 }}
//               >
//                 Chat with any PDF <br /> document.
//               </h1>

//               <p className="mt-6 text-lg leading-8 text-gray-600 mr-10">
//                 From legal agreements to financial reports, brings your
//                 documents to life. You can ask questions, get summaries, find
//                 information, and more.
//               </p>
//               <div className="d-flex align-items-center mt-4">
//                 <Link to="/signup">
//                   <button
//                     style={{
//                       background: "rgba(30, 42, 127, 1)",
//                       padding: "12px",
//                       borderRadius: "12px",
//                       backgroundColor: "#3843D0",
//                       color: "#fff",
//                       marginRight: "12px",
//                     }}
//                   >
//                     Start For Free
//                   </button>
//                 </Link>
//                 {/* <Link to="/demo">
//                   {" "} */}
//                 <Link
//                   style={{
//                     fontFamily: "'Inter', sans-serif",
//                     fontWeight: "bolder",
//                     fontSize: "16px",
//                     lineHeight: "60px",
//                   }}
//                   to="/demo"
//                 >
//                   Try the demo →
//                 </Link>
//                 {/* </Link> */}
//               </div>
//             </div>
//             <div className="col-lg-6 sc-32a7df2f-4 kflDvB">
//               <div style={{ position: "relative" }}>
//                 <img className="" src="/land1.svg" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <section
//           id="counts"
//           className=" section-bg"
//           style={{ background: "#F7F7F7" }}
//         >
//           <div className="container">
//             <div className="row justify-content-center align-items-center">
//               <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
//                 <div className="count-box">
//                   <span
//                     data-purecounter-start="0"
//                     data-purecounter-end="65"
//                     data-purecounter-duration="2"
//                     className="purecounter"
//                   ></span>
//                   <h2>1M</h2>
//                   <p>Active Users</p>
//                 </div>
//               </div>
//               <br />
//               <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
//                 <div className="count-box">
//                   <span
//                     data-purecounter-start="0"
//                     data-purecounter-end="85"
//                     data-purecounter-duration="2"
//                     className="purecounter"
//                   ></span>
//                   <h2>5+</h2>
//                   <p>Files Chats</p>
//                 </div>
//               </div>
//               <br />
//               <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
//                 <div className="count-box">
//                   <span
//                     data-purecounter-start="0"
//                     data-purecounter-end="30"
//                     data-purecounter-duration="2"
//                     className="purecounter"
//                   ></span>
//                   <h2>10M</h2>
//                   <p>Online Tools</p>
//                 </div>
//               </div>
//               <br />
//               <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
//                 <div className="count-box">
//                   <span
//                     data-purecounter-start="0"
//                     data-purecounter-end="20"
//                     data-purecounter-duration="2"
//                     className="purecounter"
//                   ></span>
//                   <h2>500k</h2>
//                   <p>PDF’s Coverted</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section
//           id="technologies"
//           className="technologies d-flex section-bg "
//           style={{
//             background: "rgba(216, 217, 229, 1)",
//             padding: "20px",
//             marginTop: "90px",
//           }}
//         >
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-12 col-md-10">
//                 <Swiper
//                   slidesPerView={3} // Number of logos to show
//                   spaceBetween={20} // Space between logos
//                   autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                   }}
//                   breakpoints={{
//                     "@0.00": {
//                       slidesPerView: 2.5,
//                       spaceBetween: 10,
//                     },
//                     "@0.75": {
//                       slidesPerView: 2,
//                       spaceBetween: 20,
//                     },
//                     "@1.00": {
//                       slidesPerView: 3,
//                       spaceBetween: 40,
//                     },
//                     "@1.50": {
//                       slidesPerView: 4,
//                       spaceBetween: 50,
//                     },
//                   }}
//                   modules={[Autoplay]}
//                   className="mySwiper1"
//                 >
//                   {technologyLogos.map((logo, index) => (
//                     <SwiperSlide key={index}>
//                       <img
//                         src={logo}
//                         alt={`Tech Logo ${index}`}
//                         style={{ margin: "auto" }}
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="services-list" className="services-list">
//           <br />
//           <br />
//           <div className="section-header">
//             <h2 className="text-center" style={{ marginTop: "100px" }}>
//               Features
//             </h2>
//           </div>

//           <div className="row gy-5 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-8 lg:py-20">
//             <div
//               className="col-lg-4 col-md-6 service-item d-flex"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               <div className="icon flex-shrink-0">
//                 <img src="/serv1.png" />
//               </div>
//               <div className="mx-auto">
//                 <h4 className="title">
//                   <Link to="/" className="stretched-link">
//                     Upload Documents
//                   </Link>
//                 </h4>
//                 <p className="description">
//                   From legal agreements to financial <br /> reports, brings{" "}
//                 </p>
//               </div>
//             </div>

//             <div
//               className="col-lg-4 col-md-6 service-item d-flex"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="icon flex-shrink-0">
//                 <img src="/serv3.png" />
//               </div>
//               <div className="mx-auto">
//                 <h4 className="title">
//                   <Link to="/" className="stretched-link">
//                     Instant Answers{" "}
//                   </Link>
//                 </h4>
//                 <p className="description">
//                   From legal agreements to financial <br /> reports, brings{" "}
//                 </p>
//               </div>
//             </div>

//             <div
//               className="col-lg-4 col-md-6 service-item d-flex"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <div className="icon flex-shrink-0">
//                 <img src="/Frame 28.svg" />
//               </div>
//               <div className="mx-auto">
//                 <h4 className="title">
//                   <Link to="/" className="stretched-link">
//                     Sources Included
//                   </Link>
//                 </h4>
//                 <p className="description">
//                   From legal agreements to financial <br /> reports, brings{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <br />
//         <br />
//         <div
//           className="row video"
//           style={{ background: "#F7F7F7", padding: "20px", marginTo: "60px" }}
//         >
//           <div className="col-lg-12">
//             <h2 className="text-center">How It Works</h2>
//           </div>
//           <div className="col-lg-12 d-flex mx-auto">
//             <img className="mx-auto" src="/video.svg" />
//           </div>
//         </div>
//         <section
//           id="about"
//           className="about section-bg "
//           style={{ marginTop: "150px" }}
//         >
//           <div className="row no-gutters  max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-4 ">
//             <div className="  content col-xl-5 d-flex align-items-stretch">
//               <div className="content">
//                 <p>Security</p>
//                 <h3>Everything for teams. Safe and sound.</h3>
//                 <p>
//                   From legal agreements to financial reports, brings your
//                   documents to life You can ask questions, get summaries, find
//                   information, and more.
//                 </p>
//               </div>
//             </div>
//             <div className=" col-xl-7 d-flex align-items-stretch">
//               <div className="icon-boxes d-flex flex-column justify-content-center">
//                 <div className="row">
//                   <div
//                     className="col-md-6 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <img className="mx-auto" src="/lock1.png" />
//                     <br />
//                     <h4>Security</h4>
//                     <p>
//                       From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more.
//                     </p>
//                   </div>
//                   <div
//                     className="col-md-6 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="200"
//                   >
//                     <img className="mx-auto" src="/lock2.png" />
//                     <br />
//                     <h4>Security</h4>
//                     <p>
//                       From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more.
//                     </p>
//                   </div>
//                   <div
//                     className="col-md-6 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="300"
//                   >
//                     <img className="mx-auto" src="/lock3.png" />
//                     <br />
//                     <h4>Security</h4>
//                     <p>
//                       From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more.
//                     </p>
//                   </div>
//                   <div
//                     className="col-md-6 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="400"
//                   >
//                     <img className="mx-auto" src="/serv4.png" />
//                     <br />
//                     <h4>Security</h4>
//                     <p>
//                       From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section
//           id="about"
//           className="about section-bg "
//           style={{ marginTop: "150px" }}
//         >
//           <div className="row no-gutters  max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-4 ">
//             <div className="  content col-xl-5 d-flex align-items-stretch">
//               <div className="content">
//                 <p>Security</p>
//                 <h3>Everything for teams. Safe and sound.</h3>
//                 <p>
//                   From legal agreements to financial reports, brings your
//                   documents to life You can ask questions, get summaries, find
//                   information, and more.
//                 </p>
//               </div>
//             </div>
//             <div className=" col-xl-7 d-flex align-items-stretch">
//               <div className="icon-boxes d-flex flex-column justify-content-center">
//                 <div className="row mx-auto">
//                   <div
//                     className="col-3 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <img className="" src="/lock1.png" />
//                     <br />
//                   </div>
//                   <div
//                     className="col-8 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <h4 className="text-start">Security</h4>
//                     <p className="text-start">
//                       From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more.
//                     </p>
//                   </div>
//                   <div
//                     className="col-3 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <img className="" src="/lock2.png" />
//                     <br />
//                   </div>
//                   <div
//                     className="col-8 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <h4 className="text-start">Security</h4>
//                     <p className="text-start">
//                       From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more.
//                     </p>
//                   </div>
//                   <div
//                     className="col-3 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <img className="" src="/lock3.png" />
//                     <br />
//                   </div>
//                   <div
//                     className="col-8 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <h4 className="text-start">Security</h4>
//                     <p className="text-start">
//                       From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more.
//                     </p>
//                   </div>
//                   <div
//                     className="col-3 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <img className="" src="/serv4.png" />
//                     <br />
//                   </div>
//                   <div
//                     className="col-8 icon-box aos-init aos-animate"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                   >
//                     <h4 className="text-start">Security</h4>
//                     <p className="text-start">
//                       From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="container rounded">
//           {" "}
//           <h3 className="tag">What Our Happy Client Say (Testimonials)</h3>{" "}
//           <p className=" text-center head">
//             From legal agreements to financial reports, brings your documents to
//             life.You can ask questions, get summaries, find information, and
//             more.
//           </p>{" "}
//           <div className="row d-flex owl-carousel owl-theme mx-auto max-w-7xl px-6  pt-10 sm:pb-32  lg:px-4">
//             <Swiper
//               slidesPerView={3} // Number of logos to show
//               spaceBetween={20} // Space between logos
//               autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//               }}
//               breakpoints={{
//                 "@0.00": {
//                   slidesPerView: 1,
//                   spaceBetween: 10,
//                 },
//                 "@0.75": {
//                   slidesPerView: 1,
//                   spaceBetween: 20,
//                 },
//                 "@1.00": {
//                   slidesPerView: 3,
//                   spaceBetween: 40,
//                 },
//                 "@1.50": {
//                   slidesPerView: 4,
//                   spaceBetween: 50,
//                 },
//               }}
//               modules={[Autoplay]}
//               className="mySwiper1"
//             >
//               <SwiperSlide>
//                 <div className="col-lg-6 owl-item">
//                   {" "}
//                   <div className=" card d-flex flex-column">
//                     {" "}
//                     <div className="mt-2">
//                       {" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       {/* <span className="fas fa-star-half-alt active-star"></span>{" "} */}
//                     </div>{" "}
//                     <div className="main font-weight-bold pb-2 pt-1">
//                       Great Service
//                     </div>{" "}
//                     <div className="testimonial">
//                       “From legal agreements to financial reports, brings your
//                       documents to life.You can ask questions, get summaries,
//                       find information, and more” Devid Weilium Researcher{" "}
//                     </div>{" "}
//                     <br />{" "}
//                     <div className="col-lg-6  d-flex flex-row profile pt-4 mt-auto">
//                       <img
//                         src="https://media.licdn.com/dms/image/D4E03AQEa_LNcu-si0w/profile-displayphoto-shrink_400_400/0/1662540662827?e=1709164800&v=beta&t=5llULLva6ZIWyjXo5HejUg8_xcugeHALlNALUfq4RJU"
//                         alt=""
//                         className="rounded-circle"
//                       />{" "}
//                       <div className=" d-flex flex-column pl-2">
//                         {" "}
//                         <div className="name">Saad Saeed</div>{" "}
//                         <p className="text-muted designation">
//                           Co-founder Layla | Co-founder Flink
//                         </p>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="col-lg-6 owl-item">
//                   {" "}
//                   <div className="card d-flex flex-column">
//                     {" "}
//                     <div className="mt-2">
//                       {" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       {/* <span className="fas fa-star-half-alt active-star"></span>{" "} */}
//                     </div>{" "}
//                     <div className="main font-weight-bold pb-2 pt-1">
//                       Great Service
//                     </div>{" "}
//                     <div className="testimonial">
//                       {" "}
//                       if i can connect it to my Google drive and Dropbox, then
//                       this is going to be last time, i ever have to open
//                       documets .{" "}
//                     </div>
//                     <div className="d-flex flex-row profile pt-4 mt-auto">
//                       <img
//                         src="https://media.licdn.com/dms/image/D5603AQGk7GcWtVV-vQ/profile-displayphoto-shrink_400_400/0/1667500494260?e=1709164800&v=beta&t=FQ7qz22AYDSZ0q9OXCQpsup3K7XH84p-kblykBo2JdA"
//                         alt=""
//                         className="rounded-circle"
//                       />{" "}
//                       <div className="d-flex flex-column pl-2">
//                         {" "}
//                         <div className="name">Behfar</div>{" "}
//                         <p className="text-muted designation">
//                           Founder & CEO - Chrono Games
//                         </p>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <br /> <br /> <br />
//                 </div>{" "}
//                 <br />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="col-lg-6 owl-item">
//                   {" "}
//                   <div className="card d-flex flex-column">
//                     {" "}
//                     <div className="mt-2">
//                       {" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star-half-alt active-star"></span>{" "}
//                     </div>{" "}
//                     <div className="main font-weight-bold pb-2 pt-1">
//                       Great Service
//                     </div>{" "}
//                     <div className="testimonial">
//                       {" "}
//                       This is a game changer! Its going to change how we view
//                       documents.Honestly, the only AI tool after ChatGPT that I
//                       use daily{" "}
//                     </div>
//                     <div className="d-flex flex-row profile pt-4 mt-auto">
//                       {" "}
//                       <img
//                         src="https://media.licdn.com/dms/image/D4E03AQEcy4jmmBudFA/profile-displayphoto-shrink_400_400/0/1690634615693?e=1709164800&v=beta&t=-tuMeVDCH-cFR4juBw8WYfRUxErdwOH8RlVNrAkuPQk"
//                         alt=""
//                         className="rounded-circle"
//                       />{" "}
//                       <div className="d-flex flex-column pl-2">
//                         {" "}
//                         <div className="name">Helping B2B companies</div>{" "}
//                         <p className="text-muted designation">
//                           CEO of My Company
//                         </p>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>{" "}
//                 <br />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="col-lg-6 owl-item">
//                   {" "}
//                   <div className="card d-flex flex-column">
//                     {" "}
//                     <div className="mt-2">
//                       {" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       <span className="fas fa-star active-star"></span>{" "}
//                       {/* <span className="fas fa-star-half-alt active-star"></span>{" "} */}
//                     </div>{" "}
//                     <div className="main font-weight-bold pb-2 pt-1">
//                       Great Service
//                     </div>{" "}
//                     <div className="testimonial">
//                       {" "}
//                       Its amazing. I upload all my past month invoices and ask
//                       any questions, I want. This is literally saving me 10s of
//                       hours every month .{" "}
//                     </div>{" "}
//                     <div className="d-flex flex-row profile pt-4 mt-auto">
//                       {" "}
//                       <img
//                         src="https://media.licdn.com/dms/image/C4E03AQE8QZWsLNdcwQ/profile-displayphoto-shrink_400_400/0/1658617509685?e=1709164800&v=beta&t=eSKe4CPlcjdv0t6bMjNBOlXWpXcqnHNcb7OwLCyBpNo"
//                         alt=""
//                         className="rounded-circle"
//                       />{" "}
//                       <div className="d-flex flex-column pl-2">
//                         {" "}
//                         <div className="name">Christian Stolz</div>{" "}
//                         <p className="text-muted designation">
//                           Pinterest Marketing solution
//                         </p>{" "}
//                       </div>{" "}
//                     </div>
//                   </div>{" "}
//                 </div>
//               </SwiperSlide>{" "}
//             </Swiper>{" "}
//           </div>{" "}
//         </div>
//         <section id="faq" className="faq">
//           <div className="container lg:px-8 lg:py-20" data-aos="fade-up">
//             <div className="section-title">
//               <h2 className="text-center">FAQ’s</h2>
//             </div>
//             <div className="row d-flex">
//               {faqData.map((item, index) => (
//                 <div key={item.id} className="col-lg-6">
//                   <div
//                     className={`question faq-item border border-solid border-gray-200 border-2 ${
//                       activeIndex === index ? "active" : ""
//                     }`}
//                     onClick={() => handleAccordionClick(index)}
//                   >
//                     {item.question}
//                     {activeIndex === index ? (
//                       <FaMinus className="icon-close" />
//                     ) : (
//                       <FaPlus className="icon-show" />
//                     )}
//                   </div>
//                   <div
//                     className={`collapse ${
//                       activeIndex === index ? "show faq-list" : ""
//                     }`}
//                     id={item.id}
//                     style={{
//                       maxHeight: activeIndex === index ? "1000px" : "0",
//                       overflow: "hidden",
//                       transition: "max-height 0.3s ease-out",
//                     }}
//                   >
//                     <p>{item.answer}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <Test />
//         {/* <div className="container" style={{ background: "#F7F7F7",  height: "auto" }}>
//           <div className="row box" style={{ background: "#1E2A7F",  width: "auto", margin: "auto" }}>
//             <div className="col-lg-7">
//               <h4 className="text-light">Try Now For Free and Chat with any PDF document.</h4>
//               <p>Easy answers to the product questions we get most often.Easy answers to the product questions we get most often.</p>
//             </div>
//             <div className="col-sm-12">
//               <button className="" style={{ padding: "15px", background: "#1A1B29", color: "#fff" }}>
//                 Start For Free
//               </button>
//             </div>
//           </div>
//         </div> */}
//         <div
//           style={{ padding: "20px" }}
//           className="self-stretch bg-main-colors-white-1 flex flex-col items-start justify-start py-spacing-32 px-spacing-16 text-left text-base text-main-colors-white-2"
//         >
//           <div
//             style={{
//               borderRadius: "20px",
//               background: "#1E2A7F",
//               width: "auto",
//               margin: "auto",
//             }}
//             className="self-stretch rounded-roundness-16 bg-button-color overflow-hidden flex flex-col items-start justify-start p-6 gap-[10px]"
//           >
//             <div className="self-stretch flex flex-col items-start justify-start relative align-items-center">
//               <div className="self-stretch relative leading-[160%] font-semibold z-[2] text-light">
//                 Try Now For Free and Chat with any PDF document.
//               </div>
//               <div
//                 style={{ color: "#C9CAD6" }}
//                 className="self-stretch relative text-sm leading-[24px] text-main-colors-dark-5 z-[3]"
//               >
//                 Easy answers to the product questions we get most often.Easy
//                 answers to the product questions we get most often.
//               </div>
//             </div>
//             <br />
//             <div
//               className="col-sm-12 w-100 mx-auto"
//               style={{
//                 background: "#1A1B29",
//                 width: "100%",
//                 color: "#fff",
//                 borderRadius: "20px",
//               }}
//             >
//               <Link to="/signup">
//                 <button
//                   className="w-100 mx-auto"
//                   style={{
//                     padding: "15px",
//                     background: "#1A1B29",
//                     width: "100%",
//                     color: "#fff",
//                     borderRadius: "20px",
//                     backgroundColor: "#3843D0",
//                   }}
//                 >
//                   Start For Free
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <br />
//         <br />
//         <Footer />
//       </Mobile>
//       <Desktop>
//         <Header />
//         <hr />
//         <div className="container mx-auto  px-6 pb-24 pt-10 sm:pb-32  lg:px-8 lg:py-20">
//           <div
//             className="row  p-10"
//             style={{ display: "flex", alignItems: "center" }}
//           >
//             <div className="col-lg-6 mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
//               <h1
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontWeight: 800,
//                   fontSize: "50px",
//                   lineHeight: "60px",
//                 }}
//               >
//                 Chat with any PDF <br /> document.
//               </h1>

//               <p className="mt-6 text-lg leading-8 text-gray-600 mr-10">
//                 From legal agreements to financial reports, brings your
//                 documents to life. You can ask questions, get summaries, find
//                 information, and more.
//               </p>
//               <div className="d-flex align-items-center mt-4">
//                 <Link to="/signup">
//                   <button
//                     style={{
//                       background: "rgba(30, 42, 127, 1)",
//                       padding: "12px",
//                       borderRadius: "12px",
//                       color: "#fff",
//                       marginRight: "12px",
//                       backgroundColor: "#3843D0",
//                     }}
//                   >
//                     Start For Free
//                   </button>
//                 </Link>

//                 <Link
//                   style={{
//                     fontFamily: "'Inter', sans-serif",
//                     fontWeight: "bolder",
//                     fontSize: "16px",
//                     lineHeight: "60px",
//                   }}
//                   to="/demo"
//                 >
//                   Try the demo →
//                 </Link>
//               </div>
//             </div>
//             <div className="col-lg-6 sc-32a7df2f-4 kflDvB">
//               <div style={{ position: "relative" }}>
//                 <img
//                   style={{
//                     maxWidth: "100%",
//                     height: "auto",
//                     paddingLeft: "35px",
//                   }}
//                   src="/topban.svg"
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <section id="counts" className="counts section-bg">
//             <div className="container">
//               <div className="row justify-content-center align-items-center">
//                 <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
//                   <div className="count-box">
//                     <span
//                       data-purecounter-start="0"
//                       data-purecounter-end="65"
//                       data-purecounter-duration="2"
//                       className="purecounter"
//                     ></span>
//                     <h2>1 Million</h2>
//                     <p>Active Users</p>
//                   </div>
//                 </div>

//                 <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
//                   <div className="count-box">
//                     <span
//                       data-purecounter-start="0"
//                       data-purecounter-end="85"
//                       data-purecounter-duration="2"
//                       className="purecounter"
//                     ></span>
//                     <h2>5k</h2>
//                     <p>Files Chats</p>
//                   </div>
//                 </div>

//                 <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
//                   <div className="count-box">
//                     <span
//                       data-purecounter-start="0"
//                       data-purecounter-end="30"
//                       data-purecounter-duration="2"
//                       className="purecounter"
//                     ></span>
//                     <h2>10 Million</h2>
//                     <p>Online Tools</p>
//                   </div>
//                 </div>

//                 <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
//                   <div className="count-box">
//                     <span
//                       data-purecounter-start="0"
//                       data-purecounter-end="20"
//                       data-purecounter-duration="2"
//                       className="purecounter"
//                     ></span>
//                     <h2>500k</h2>
//                     <p>PDF’s Coverted</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>{" "}
//         <br />
//         <br />
//         <section
//           id="technologies"
//           className="technologies d-flex section-bg "
//           style={{
//             background: "rgba(216, 217, 229, 1)",
//             padding: "20px",
//             marginTop: "90px",
//           }}
//         >
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-12 col-md-10">
//                 <Swiper
//                   slidesPerView={3} // Number of logos to show
//                   spaceBetween={20} // Space between logos
//                   autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                   }}
//                   breakpoints={{
//                     "@0.00": {
//                       slidesPerView: 2.5,
//                       spaceBetween: 10,
//                     },
//                     "@0.75": {
//                       slidesPerView: 2,
//                       spaceBetween: 20,
//                     },
//                     "@1.00": {
//                       slidesPerView: 3,
//                       spaceBetween: 40,
//                     },
//                     "@1.50": {
//                       slidesPerView: 4,
//                       spaceBetween: 50,
//                     },
//                   }}
//                   modules={[Autoplay]}
//                   className="mySwiper1"
//                 >
//                   {technologyLogos.map((logo, index) => (
//                     <SwiperSlide key={index}>
//                       <img
//                         src={logo}
//                         alt={`Tech Logo ${index}`}
//                         style={{ margin: "auto" }}
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </section>
//         <br />
//         <br />
//         <section id="services-list" className="services-list">
//           <div className="container" data-aos="fade-up">
//             <div className="section-header">
//               <h2 className="text-center" style={{ marginTop: "100px" }}>
//                 Features
//               </h2>
//             </div>

//             <div className="row gy-5 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-8 lg:py-20">
//               <div
//                 className="col-lg-4 col-md-6 service-item d-flex"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//               >
//                 <div className="icon flex-shrink-0">
//                   <img src="/serv1.png" />
//                 </div>
//                 <div>
//                   <h4 className="title">
//                     <Link to="/" className="stretched-link">
//                       Upload Documents
//                     </Link>
//                   </h4>
//                   <p className="description">
//                     From legal agreements to financial <br /> reports, brings{" "}
//                   </p>
//                 </div>
//               </div>

//               <div
//                 className="col-lg-4 col-md-6 service-item d-flex"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//               >
//                 <div className="icon flex-shrink-0">
//                   <img src="/serv3.png" />
//                 </div>
//                 <div>
//                   <h4 className="title">
//                     <Link to="/" className="stretched-link">
//                       Instant Answers{" "}
//                     </Link>
//                   </h4>
//                   <p className="description">
//                     From legal agreements to financial <br /> reports, brings{" "}
//                   </p>
//                 </div>
//               </div>

//               <div
//                 className="col-lg-4 col-md-6 service-item d-flex"
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//               >
//                 <div className="icon flex-shrink-0">
//                   <img src="/serv2.png" />
//                 </div>
//                 <div>
//                   <h4 className="title">
//                     <Link to="/" className="stretched-link">
//                       Sources Included
//                     </Link>
//                   </h4>
//                   <p className="description">
//                     From legal agreements to financial <br /> reports, brings{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>{" "}
//         <br /> <br />
//         <div
//           className="row video"
//           style={{
//             background: "rgba(247, 247, 247, 1)",
//             padding: "26px",
//             marginTop: "110px",
//           }}
//         >
//           <div className="col-lg-12">
//             <h2 className="text-center">How It Works</h2>
//           </div>
//           <div className="col-lg-12 d-flex mx-auto">
//             <img className="mx-auto" src="/video.svg" />
//           </div>
//         </div>
//         <Test />
//         <section
//           id="about"
//           className="about section-bg "
//           style={{
//             background: "rgba(247, 247, 247, 1)",
//             padding: "40px",
//             marginTop: "150px",
//           }}
//         >
//           <div className="container " data-aos="fade-up">
//             <div className="row no-gutters mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-4 ">
//               <div className="  content col-xl-5 d-flex align-items-stretch">
//                 <div className="content">
//                   <p
//                     style={{
//                       color: "#85858F",
//                       fontFamily: "inter",
//                       size: "20px",
//                       lineHeight: "30px",
//                     }}
//                   >
//                     Security
//                   </p>
//                   <h3
//                     style={{
//                       color: "var(--Main-Colors-Dark-2-Primary-text, #1A1B29)",

//                       /* H6's/H6  Semibold */
//                       fontFamily: "Inter",
//                       fontSize: "36px",
//                       fontStyle: "normal",
//                       fontWeight: "600",
//                       lineHeight: "54px" /* 150% */,
//                     }}
//                   >
//                     Everything for teams. Safe and sound.
//                   </h3>
//                   <p
//                     style={{
//                       color: "#85858F",
//                       fontFamily: "inter",
//                       size: "20px",
//                     }}
//                   >
//                     From legal agreements to financial reports, brings your
//                     documents to life.You can ask questions, get summaries, find
//                     information, and more.
//                   </p>
//                 </div>
//               </div>
//               <div className=" col-xl-7 d-flex align-items-stretch">
//                 <div className="icon-boxes d-flex flex-column justify-content-center">
//                   <div className="row">
//                     <div
//                       className="col-md-6 icon-box aos-init aos-animate"
//                       data-aos="fade-up"
//                       data-aos-delay="100"
//                     >
//                       <img src="/lock1.png" />
//                       <h4 style={{ marginTop: "10px" }}>Security</h4>
//                       <p>
//                         From legal agreements to financial reports, brings your
//                         documents to life.You can ask questions, get summaries,
//                         find information, and more.
//                       </p>
//                     </div>
//                     <div
//                       className="col-md-6 icon-box aos-init aos-animate"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                     >
//                       <img src="/lock2.png" />
//                       <h4 style={{ marginTop: "10px" }}>Security</h4>
//                       <p>
//                         From legal agreements to financial reports, brings your
//                         documents to life.You can ask questions, get summaries,
//                         find information, and more.
//                       </p>
//                     </div>
//                     <div
//                       className="col-md-6 icon-box aos-init aos-animate"
//                       data-aos="fade-up"
//                       data-aos-delay="300"
//                     >
//                       <img src="/lock3.png" />
//                       <h4 style={{ marginTop: "10px" }}>Security</h4>
//                       <p>
//                         From legal agreements to financial reports, brings your
//                         documents to life.You can ask questions, get summaries,
//                         find information, and more.
//                       </p>
//                     </div>
//                     <div
//                       className="col-md-6 icon-box aos-init aos-animate"
//                       data-aos="fade-up"
//                       data-aos-delay="400"
//                     >
//                       <img src="/serv4.png" />
//                       <h4 style={{ marginTop: "10px" }}>Security</h4>
//                       <p>
//                         From legal agreements to financial reports, brings your
//                         documents to life.You can ask questions, get summaries,
//                         find information, and more.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="pricing" className="pricing section-bg">
//           <div className="container" data-aos="fade-up">
//             <div
//               className="row d-flex  align-items-center"
//               style={{ marginTop: "100px" }}
//             >
//               <div
//                 className="col-lg-6 col-md-6 sm:pb-32   lg:px-8 lg:py-20"
//                 data-aos="zoom-in"
//                 data-aos-delay="200"
//               >
//                 <h2>
//                   Seamless <br /> Experience Across Devices
//                 </h2>
//                 <p>
//                   From legal agreements to financial reports, brings your
//                   documents to life.You can ask questions, get summaries, find
//                   information, and more.
//                 </p>
//               </div>

//               <div
//                 className="col-lg-6 col-md-6 mt-4 mt-md-0"
//                 data-aos="zoom-in"
//                 data-aos-delay="100"
//               >
//                 <img src="/frame2.svg" />
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="container rounded">
//           {" "}
//           <h3 className="tag">What Our Happy Client Say</h3>{" "}
//           <p className=" text-center head">
//             From legal agreements to financial reports, brings your documents to
//             life.You can ask questions, get <br /> summaries, find information,
//             and more.
//           </p>{" "}
//           <div className="row d-flex owl-carousel owl-theme mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-4">
//             {" "}
//             <div className="col-lg-6 owl-item">
//               {" "}
//               <div className="card d-flex flex-column">
//                 {" "}
//                 <div className="mt-2">
//                   {" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   {/* <span className="fas fa-star-half-alt active-star"></span>{" "} */}
//                 </div>{" "}
//                 <div className="main font-weight-bold pb-2 pt-1">
//                   Great Service
//                 </div>{" "}
//                 <div className="testimonial">
//                   {" "}
//                   "Magicaldocs is amazing. Uploaded a 40 page contract and it's
//                   able to answer all questions "{" "}
//                 </div>{" "}
//                 <div className="d-flex flex-row profile pt-4 mt-auto">
//                   <img
//                     src="https://media.licdn.com/dms/image/D4E03AQEa_LNcu-si0w/profile-displayphoto-shrink_400_400/0/1662540662827?e=1709164800&v=beta&t=5llULLva6ZIWyjXo5HejUg8_xcugeHALlNALUfq4RJU"
//                     alt=""
//                     className="rounded-circle"
//                   />{" "}
//                   <div className="d-flex flex-column pl-2">
//                     {" "}
//                     <div className="name">Saad Saeed</div>{" "}
//                     <p className="text-muted designation">
//                       Co-founder Layla | Co-founder Flink
//                     </p>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//             </div>{" "}
//             <div className="col-lg-6 owl-item">
//               {" "}
//               <div className="card d-flex flex-column">
//                 {" "}
//                 <div className="mt-2">
//                   {" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   {/* <span className="fas fa-star-half-alt active-star"></span>{" "} */}
//                 </div>{" "}
//                 <div className="main font-weight-bold pb-2 pt-1">
//                   Great Service
//                 </div>{" "}
//                 <div className="testimonial">
//                   {" "}
//                   "Its amazing. I upload all my past month invoices and ask any
//                   questions, I want. This is literally saving me 10s of hours
//                   every month "{" "}
//                 </div>{" "}
//                 <div className="d-flex flex-row profile pt-4 mt-auto">
//                   <img
//                     src="https://media.licdn.com/dms/image/C4E03AQE8QZWsLNdcwQ/profile-displayphoto-shrink_400_400/0/1658617509685?e=1709164800&v=beta&t=eSKe4CPlcjdv0t6bMjNBOlXWpXcqnHNcb7OwLCyBpNo"
//                     alt=""
//                     className="rounded-circle"
//                   />{" "}
//                   <div className="d-flex flex-column pl-2">
//                     {" "}
//                     <div className="name">Christian Stolz</div>{" "}
//                     <p className="text-muted designation">
//                       Pinterest Marketing solution
//                     </p>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//               <br /> <br />
//             </div>{" "}
//             <br />{" "}
//             <div className="col-lg-6 owl-item">
//               {" "}
//               <div className="card d-flex flex-column">
//                 {" "}
//                 <div className="mt-2">
//                   {" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star-half-alt active-star"></span>{" "}
//                 </div>{" "}
//                 <div className="main font-weight-bold pb-2 pt-1">
//                   Great Service
//                 </div>{" "}
//                 <div className="testimonial">
//                   {" "}
//                   "This is a game changer! Its going to change how we view
//                   documents.onestly, the only AI tool after ChatGPT that I use
//                   daily "{" "}
//                 </div>{" "}
//                 <div className="d-flex flex-row profile pt-4 mt-auto">
//                   <img
//                     src="https://media.licdn.com/dms/image/D4E03AQEcy4jmmBudFA/profile-displayphoto-shrink_400_400/0/1690634615693?e=1709164800&v=beta&t=-tuMeVDCH-cFR4juBw8WYfRUxErdwOH8RlVNrAkuPQk"
//                     alt=""
//                     className="rounded-circle"
//                   />{" "}
//                   <div className="d-flex flex-column pl-2">
//                     {" "}
//                     <div className="name">Yassin Baum</div>{" "}
//                     <p className="text-muted designation">
//                       Helping B2B companies
//                     </p>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//             </div>{" "}
//             <br />{" "}
//             <div className="col-lg-6 owl-item">
//               {" "}
//               <div className="card d-flex flex-column">
//                 {" "}
//                 <div className="mt-2">
//                   {" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   <span className="fas fa-star active-star"></span>{" "}
//                   {/* <span className="fas fa-star-half-alt active-star"></span>{" "} */}
//                 </div>{" "}
//                 <div className="main font-weight-bold pb-2 pt-1">
//                   Great Service
//                 </div>{" "}
//                 <div className="testimonial">
//                   {" "}
//                   "if i can connect it to my Google drive and Dropbox, then this
//                   is going to be last time, i ever have to open documets "{" "}
//                 </div>{" "}
//                 <div className="d-flex flex-row profile pt-4 mt-auto">
//                   {" "}
//                   <img
//                     src="https://media.licdn.com/dms/image/D5603AQGk7GcWtVV-vQ/profile-displayphoto-shrink_400_400/0/1667500494260?e=1709164800&v=beta&t=FQ7qz22AYDSZ0q9OXCQpsup3K7XH84p-kblykBo2JdA"
//                     alt=""
//                     className="rounded-circle"
//                   />{" "}
//                   <div className="d-flex flex-column pl-2">
//                     {" "}
//                     <div className="name">Behfar</div>{" "}
//                     <p className="text-muted designation">
//                       Founder & CEO - Chrono Games
//                     </p>{" "}
//                   </div>{" "}
//                 </div>
//               </div>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>
//         <section id="faq" className="faq">
//           <div className="container lg:px-8 lg:py-20" data-aos="fade-up">
//             <div className="section-title">
//               <h2 className="text-center">FAQ’s</h2>
//             </div>
//             <div className="row d-flex ">
//               {faqData.map((item, index) => (
//                 <div key={item.id} className="col-lg-6 ">
//                   <div
//                     className={`question faq-item border border border-solid border-gray-200 border-2  ${
//                       activeIndex === index ? "active" : ""
//                     }`}
//                     onClick={() => handleAccordionClick(index)}
//                   >
//                     {item.question}

//                     {activeIndex === index ? (
//                       <FaMinus className="icon-close" />
//                     ) : (
//                       <FaPlus className="icon-show" />
//                     )}
//                   </div>
//                   <div
//                     className={`collapse ${
//                       activeIndex === index ? "show faq-list" : ""
//                     }`}
//                     id={item.id}
//                     style={{
//                       maxHeight: activeIndex === index ? "1000px" : "0",
//                       overflow: "hidden",
//                       transition: "max-height 0.3s ease-out",
//                     }}
//                   >
//                     <p style={{ display: "inline-block" }}>{item.answer}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <div
//           style={{
//             background: "#F7F7F7",

//             width: "100%",
//           }}
//         >
//           <div
//             className="container"
//             style={{ background: "#F7F7F7", padding: "60px", height: "auto" }}
//           >
//             <div
//               className="row box"
//               style={{
//                 background: "#1E2A7F",
//                 padding: "20px",
//                 width: "850px",
//                 margin: "auto",
//               }}
//             >
//               <div className="col-lg-7">
//                 <h2>Try Now For Free and Chat with any PDF document.</h2>
//                 <p>
//                   Easy answers to the product questions we get most often.Easy
//                   answers to the product questions we get most often.
//                 </p>
//               </div>
//               <div className="col-lg-5">
//                 <Link to="/signup">
//                   <button
//                     className=""
//                     style={{
//                       padding: "15px",
//                       background: "#1A1B29",
//                       color: "#fff",
//                       backgroundColor: "#3843D0",
//                     }}
//                   >
//                     Start For Free
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </Desktop>
//     </div>
//   );
// };

// export default Landingpage;
import React from "react";

const Landingpage = () => {
  return <div></div>;
};

export default Landingpage;
