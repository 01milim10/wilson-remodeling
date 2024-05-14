import "../App.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Underlay from "../components/underlay";
import SlideShow from "../components/slideshow";
import ImageCycler from "../utilities/imageCycler";

import measuringTape from "../assets/ConstructionService/sheetrock-measuring-tape-2022-12-16-11-42-44-utc-1536x1024.jpg";
import paintingDrywall from "../assets/ConstructionService/Painting_and_Drywall_Repair_Near_Me_155387946.jpg";
import dryWallRepair from "../assets/ConstructionService/drywall-repair-scaled-1.jpeg";
import dryWallRepairServices from "../assets/ConstructionService/Drywall-Repair-Services-scaled-1.jpg";
import tapeCutter from "../assets/ConstructionService/AdobeStock_163360714-1.webp";
import section9Img from "../assets/ConstructionService/image4-475397a6d2d54f4781f67ea3ac98b1df.png";
import section10Img from "../assets/ConstructionService/istockphoto-1191804011-612x612-1.jpg";
import pondCliffDoor from "../assets/ConstructionService/62582cfe4be1753fede3a2c5_159-Pondcliff_LR_-24-of-30-6-scaled-1-scaled.jpg";

import bg1 from "../assets/ConstructionService/apartment-remodel-worker-is-standing-on-wooden-st-2022-05-18-15-13-01-utc-scaled.jpg";
import bg2 from "../assets/ConstructionService/apartment-remodeling-tools-2022-12-16-11-45-23-utc-scaled.jpg";
import bg3 from "../assets/ConstructionService/small-remodeling-job-2022-12-16-11-41-05-utc-scaled.jpg";
import bg4 from "../assets/ConstructionService/bi-fold-door-trim-02.jpg";
import bg5 from "../assets/ConstructionService/door-casing.jpg";
import bg6 from "../assets/ConstructionService/windows-and-door-v2.jpg";

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
                  WILSON'S REMODELING LLC EXPERIENCE SUPERIOR CRAFTSMANSHIP WITH
                  QUALITY DRYWALL SERVICES
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
                  src={measuringTape}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-banner"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left ml-5 mt-5"
              >
                <span className="block text-5xl font-bold text-blue-400 leading-tight">
                  Quality Drywall Services At Wilson's Remodeling LLC: Transform
                  Your Spaces In Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  At Wilson’s Remodeling LLC, we specialize in providing quality
                  drywall services to clients in Brookland, AR, and the
                  surrounding areas. If you’re looking to remodel your interior
                  spaces, our drywall experts are here to assist you.
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
              DRYWALL SERVICES INCLUDE:
            </p>
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={dryWallRepair}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-banner"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Transform Your Spaces with Expert Drywall Services
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Professional Installation:</b> We have a team of highly
                  skilled and experienced drywall installers who can handle a
                  variety of projects, whether it’s new construction or
                  remodeling. We ensure that each panel is installed correctly
                  and precisely, resulting in a smooth and uniform surface.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Drywall Repair and Remodeling:</b> If your drywall walls
                  are damaged due to cracks, holes, or deformities, our experts
                  can provide repair and remodeling services. Whether you need a
                  simple repair or a complete overhaul of your walls, we’ll make
                  sure they are in perfect condition.
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
                  <b>Finishing and Texturing:</b> Proper finishing and texturing
                  of drywall are essential elements in achieving a flawless
                  final result. Our professionals are trained in various
                  texturing techniques and can provide you with a wide range of
                  options to customize the appearance of your walls according to
                  your preferences.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>
                    Extensive Experience in Commercial and Residential Projects:{" "}
                  </b>
                  At Wilson’s Remodeling LLC, we have worked on a variety of
                  drywall projects, both commercial and residential. Whether you
                  need drywall services for an office, store, house, or
                  apartment, we have the experience and knowledge to efficiently
                  and satisfactorily complete the job.Extensive Experience in
                  Commercial and Residential Projects: At Wilson’s Remodeling
                  LLC, we have worked on a variety of drywall projects, both
                  commercial and residential. Whether you need drywall services
                  for an office, store, house, or apartment, we have the
                  experience and knowledge to efficiently and satisfactorily
                  complete the job.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Commitment to Quality and Customer Satisfaction: </b>
                  In every drywall project, we are committed to using quality
                  materials and upholding the highest standards of workmanship.
                  Our goal is to exceed our customers’ expectations and leave
                  them fully satisfied with the final result of their drywall
                  walls.
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
                  src={paintingDrywall}
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
                  src={dryWallRepairServices}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="construction-worker"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Repair and Restore Your Walls with Trusted Drywall Experts
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  Trust Wilson’s Remodeling LLC to provide you with quality
                  drywall services that will transform your interior spaces.
                  Contact us today for a free consultation and start improving
                  your walls with Wilson’s Remodeling LLC.
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
                  WE OFFER DRYWALL TEXTURE KNOCKDOWN
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
                  <p>BROOKLAND, ARKANSAS AREA'S TRIM AND DOORS EXPERTS</p>
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
                  ENHANCE YOUR HOME'S AESTHETICS WITH CUSTOMIZED TRIM AND DOORS
                  SOLUTIONS
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
                  src={tapeCutter}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="house-painting"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left ml-5 mt-5"
              >
                <span className="block text-5xl font-bold text-blue-400 leading-tight">
                  Quality Trim And Doors Services At Wilson's Remodeling LLC:
                  Enhance Your Spaces In Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  At Wilson’s Remodeling LLC, we specialize in providing quality
                  trim and doors services to clients in Brookland, AR, and the
                  surrounding areas. If you’re looking to improve the appearance
                  and functionality of your spaces, our trim and doors experts
                  are here to assist you.
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
              TRIM AND DOORS SERVICES INCLUDE:
            </p>
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={section9Img}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-exterior"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Elevate Your Spaces with Expert Trim and Doors Services
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
                  src={section10Img}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="wash-burn-front1"
                />
              </div>
            </div>
          </div>
          <div id="colored-section-11" className=" bg-[#f6fbff] py-5">
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={pondCliffDoor}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="sky-blue-house"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Upgrade Your Spaces with Professional Trim and Doors
                  Installation
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  At Wilson’s Remodeling LLC, we understand the importance of
                  having a beautiful and well-maintained exterior. Our
                  meticulous attention to detail and commitment to quality set
                  us apart in exterior painting services. We strive to exceed
                  your expectations and make your home stand out in the
                  neighborhood.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  Trust Wilson’s Remodeling LLC to provide you with quality
                  exterior painting services and exceptional results. Contact us
                  today for a free consultation and start transforming the
                  appearance of your home with a fresh coat of exterior paint.
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
          <div id="section-12-blue">
            <div className="bg-blue-600/80  mx-auto py-10">
              <div className="grid justify-self-center text-white">
                <div className="block justify-self-center py-2 text-3xl md:text-4xl font-bold text-center w-2/3">
                  WE OFFER BASEBOARD, CROWN, AND DOORS
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
        </div>
        <Footer />
      </div>
      <Underlay />
    </>
  );
}
