import "../App.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Underlay from "../components/underlay";
import SlideShow from "../components/slideshow";
import ImageCycler from "../utilities/imageCycler";

import paintingBanner from "../assets/PaintingService/painting-banner.jpg";
import roomReadyPaint from "../assets/PaintingService/room-ready-to-paint-2023-03-14-08-12-59-utc-1-scaled.jpg";
import constructionWorker from "../assets/PaintingService/construction-worker-painting-the-trim-on-a-home-re-2022-11-07-21-55-21-utc-1-scaled.jpg";
import section3 from "../assets/PaintingService/3-tips-for-preparing-for-commercial-painting-services.jpeg";
import housePainting from "../assets/PaintingService/house-painting-cost-scaffold.jpg";
import paintingExterior from "../assets/PaintingService/Painting-Exterior-of-House.jpg";
import skyBlueHouse from "../assets/PaintingService/Sky-Blue-House.jpg";
import washBrunFront from "../assets/PaintingService/1317-Washburn-front-1.jpeg";

import bg1 from "../assets/PaintingService/Professional-painting-wall.webp";
import bg2 from "../assets/PaintingService/interior-painting-roller-2022-12-16-11-50-06-utc-1-scaled.jpg";
import bg3 from "../assets/PaintingService/remodeling-and-painting-2022-12-16-11-43-11-utc-scaled.jpg";
import bg4 from "../assets/PaintingService/professional-painting-house.webp";
import bg5 from "../assets/PaintingService/Cost-To-Paint-a-House-Do-I-Need-to-Paint-My-House.jpg";
import bg6 from "../assets/PaintingService/Painting_iStock_468120950-scaled-1.jpeg";

export default function PaintingService() {
  const overlayImages = [bg1, bg2, bg3];
  const slideshowImages = [bg4, bg5, bg6];
  return (
    <>
      <div className="App">
        <Header />
        <SlideShow images={overlayImages} />
        <div id="body">
          <div id="section-1-blue" className="">
            <div className="bg-blue-600/80  mx-auto py-14">
              <div className="grid justify-self-center text-white">
                <div className="block justify-self-center py-2 font-bold">
                  WILSON'S REMODELLING LLC
                </div>
                <div className="block justify-self-center py-2 text-3xl md:text-4xl font-bold text-center w-2/3">
                  REVITALIZE YOUR HOME WITH EXPERT INTERIOR PAINTING BY WILSON'S
                  REMODELING LLC
                </div>
                <div className="flex justify-center py-2 ">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue p-4 md:px-6 md:py-4 sm:h-14 text-white rounded-full xl:mt-5 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pl-4 font-bold text-xl">
                        Call Us For A Free Quote
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="section-2" className=" bg-white py-5">
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={paintingBanner}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-banner"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left ml-5 mt-5"
              >
                <span className="block text-5xl font-bold text-blue-400 leading-tight">
                  Exceptional Painting In Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  At Wilson’s Remodeling LLC, we take pride in offering quality
                  interior painting services to clients in Brookland, AR, and
                  the surrounding areas. If you’re looking to breathe new life
                  into your interior spaces, our painting experts are here to
                  help you achieve it.
                </span>
                <div className="flex justify-center md:justify-start">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        Call Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="colored-section-3" className=" bg-[#f6fbff] py-5">
            <p className="text-center text-4xl text-blue-600 font-bold">OUR</p>
            <p className="italic text-center text-4xl text-red-600 font-bold">
              INTERIOR PAINTING SERVICES INCLUDE:
            </p>
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={section3}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-banner"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Make a Statement with Beautifully Painted Interiors by
                  Wilson's Remodeling LLC
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Professional Preparation:</b> Before starting any painting
                  project, we ensure that surfaces are properly prepared. This
                  involves thorough cleaning, smooth wall sanding, and repairing
                  any imperfections to achieve a solid and smooth base.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Color Consultation:</b> We understand that choosing the
                  right color can make a significant difference in the ambiance
                  of your interior spaces. Our team of painting experts can
                  provide personalized advice and recommendations to help you
                  select colors that reflect your style and personality.
                </span>
                <div className="flex justify-center md:justify-start mt-4">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        Call Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="section-4" className=" bg-white py-5">
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5"
              >
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Advanced Painting Techniques:</b> We employ advanced
                  painting techniques to achieve exceptional results. Whether
                  you desire a smooth and uniform finish, special texture, or
                  decorative effect, our team is trained in a wide variety of
                  painting techniques and styles to meet your preferences.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Protection and Cleanup:</b> Before starting any painting
                  work, we take great care to protect your furniture, floors,
                  and fixtures to prevent any damage. Additionally, upon project
                  completion, we ensure to clean up the entire area, leaving
                  your space tidy and organized.
                </span>
                <div className="flex justify-center md:justify-start">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        Call Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center ml-5 p-2"
              >
                <img
                  src={roomReadyPaint}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="room-ready-paint"
                />
              </div>
            </div>
          </div>
          <div id="colored-section-5" className=" bg-[#f6fbff] py-5">
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={constructionWorker}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="construction-worker"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Transform Your Interior Spaces with Professional Painting
                  Services in Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  At Wilson’s Remodeling LLC, we value quality, meticulous
                  attention to detail, and customer satisfaction. We work with
                  high-quality paints and specialized tools to ensure
                  long-lasting and beautiful results. Our highly skilled team of
                  painters strives to exceed your expectations and transform
                  your interior spaces into true havens of beauty.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  Whether you need to paint a single room, an entire house, or
                  any other interior space, you can rely on Wilson’s Remodeling
                  LLC to provide you with quality painting services and
                  exceptional results. Contact us today for a free consultation
                  and embark on transforming your spaces with a fresh coat of
                  paint.
                </span>
                <div className="flex justify-center md:justify-start mt-4">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        Call Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="section-6-blue">
            <div className="bg-blue-600/80  mx-auto py-10">
              <div className="grid justify-self-center text-white">
                <div className="block justify-self-center py-2 text-3xl md:text-4xl font-bold text-center w-2/3">
                  WE OFFER INTERIOR AND EXTERIOR POWER WASH
                </div>
                <div className="flex justify-center">
                  <a href="sms:(870)897-9347">
                    <button className="bg-button-blue p-4 md:px-6 md:py-4 sm:h-14 text-white rounded-full xl:mt-5 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pl-4 font-bold text-xl">
                        SMS Us For A Free Quote
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="section-7-slideshow"
            className="relative h-[500px] w-full bg-blue-400"
          >
            <img
              className="h-full w-full object-cover"
              src={ImageCycler(slideshowImages)}
            ></img>
            <div id="overlay">
              <div
                className="h-full w-full bg-[#58544F]/[0.2]
             absolute top-0 left-0 flex flex-col justify-center text-white p-4 font-bold"
              >
                <div className="w-5/6 mx-auto text-center my-4 text-4xl lg:text-5xl xl:text-6xl">
                  <p>BROOKLAND, ARKANSAS AREA'S REMODELING EXPERTS</p>
                </div>
                <div className="w-2/3 sm:w-2/6 mx-auto text-center shadow-sm mt-5">
                  <a href="tel:(870)897-9347" className="flex justify-center">
                    <button className="bg-button-blue p-4 md:px-6 md:py-4 sm:h-14 text-white rounded-full xl:mt-5 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        SMS Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="section-7-blue" className="">
            <div className="bg-blue-600/80  mx-auto py-14">
              <div className="grid justify-self-center text-white">
                <div className="block justify-self-center py-2 font-bold">
                  WILSON'S REMODELLING LLC
                </div>
                <div className="block justify-self-center py-2 text-3xl md:text-4xl font-bold text-center w-2/3">
                  TRANSFORM YOUR HOME'S CURB APPEAL WITH EXPERT EXTERIOR
                  PAINTING BY WILSON'S REMODELING LLC
                </div>
                <div className="flex justify-center py-2 ">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue p-4 md:px-6 md:py-4 sm:h-14 text-white rounded-full xl:mt-5 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pl-4 font-bold text-xl">
                        Call Us For A Free Quote
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="section-8" className=" bg-white py-5">
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={housePainting}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="house-painting"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left ml-5 mt-5"
              >
                <span className="block text-5xl font-bold text-blue-400 leading-tight">
                  Exceptional Painting Exterior In Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  At Wilson’s Remodeling LLC, we take pride in offering quality
                  exterior painting services to clients in Brookland, AR, and
                  the surrounding areas. If you’re looking to give your home’s
                  façade a fresh look or revitalize your outdoor spaces, our
                  painting experts are here to help you achieve it.
                </span>
                <div className="flex justify-center md:justify-start">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        Call Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="colored-section-9" className=" bg-[#f6fbff] py-5">
            <p className="text-center text-4xl text-blue-600 font-bold">OUR</p>
            <p className="italic text-center text-4xl text-red-600 font-bold">
              EXTERIOR PAINTING SERVICES INCLUDE:
            </p>
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={paintingExterior}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-exterior"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Experience the Difference: Trust Wilson's Remodeling LLC for
                  Exceptional Exterior Painting Results
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Preparation and Repair:</b>Before applying any paint layer,
                  we ensure that the surface is properly prepared. We perform a
                  deep cleaning, removing dirt, mold, and any traces of old
                  paint. We also repair any damage, cracks, or imperfections to
                  ensure a long-lasting and uniform finish.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Color and Finish Selection:</b> Our team of exterior
                  painting experts can assist you in selecting the right colors
                  and finishes to highlight your home’s architecture and
                  complement your personal style. We offer a wide range of
                  options, from traditional and elegant colors to modern and
                  bold tones.
                </span>
                <div className="flex justify-center md:justify-start mt-4">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        Call Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="section-10" className=" bg-white py-5">
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5"
              >
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Durable Painting and Protection:</b> We use high-quality
                  paints specifically designed to withstand outdoor elements
                  such as UV rays, rain, and daily wear and tear. Our goal is to
                  provide a durable paint coating that protects your walls and
                  enhances the beauty of your home for years to come.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Skilled Professionals:</b> We have a team of highly skilled
                  and experienced painters dedicated to delivering quality
                  results. We work with skill and precision to ensure that every
                  detail is taken care of, from surface preparation to paint
                  application, achieving an impeccable finish.
                </span>
                <div className="flex justify-center md:justify-start">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        Call Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center ml-5 p-2"
              >
                <img
                  src={washBrunFront}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="wash-burn-front1"
                />
                S
              </div>
            </div>
          </div>
          <div id="colored-section-9" className=" bg-[#f6fbff] py-5">
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={skyBlueHouse}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="sky-blue-house"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Experience the Difference: Trust Wilson's Remodeling LLC for
                  Exceptional Exterior Painting Results
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Preparation and Repair:</b>Before applying any paint layer,
                  we ensure that the surface is properly prepared. We perform a
                  deep cleaning, removing dirt, mold, and any traces of old
                  paint. We also repair any damage, cracks, or imperfections to
                  ensure a long-lasting and uniform finish.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Color and Finish Selection:</b> Our team of exterior
                  painting experts can assist you in selecting the right colors
                  and finishes to highlight your home’s architecture and
                  complement your personal style. We offer a wide range of
                  options, from traditional and elegant colors to modern and
                  bold tones.
                </span>
                <div className="flex justify-center md:justify-start mt-4">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="pl-4 font-bold text-xl">
                        Call Us Now!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Underlay />
    </>
  );
}
