import Header from "../components/header";
import Footer from "../components/footer";
import Underlay from "../components/underlay";
import SlideShow from "../components/slideshow";

import bg1 from "../assets/FlooringService/pasadena-project-high-end-residential-flooring-european-oak-pacific-hardwood-flooring-img5f91d1bb0c350bd6_4-6613-1-08287ba.jpg";
import bg2 from "../assets/FlooringService/big-house-with-wooden-floor-2021-08-26-15-43-39-utc-scaled.jpg";
import bg3 from "../assets/FlooringService/Remodel-VS-Relocate-MAIN-1.webp";

import bestPriceForLaminate from "../assets/FlooringService/best-price-for-laminate-flooring-1.jpg";
import laminatePlanks from "../assets/FlooringService/laminate-floor-planks-crossed-renovation-concept-2022-01-03-23-27-16-utc-1536x1024.jpg";
import laminateFlooring from "../assets/FlooringService/featured-image-laminate-flooring.jpeg-1.jpg";
import refinishReplace from "../assets/FlooringService/Should-you-refinish-or-replace-hardwood-floor.jpg";

export default function FlooringService() {
  const overlayImages = [bg1, bg2, bg3];
  return (
    <>
      <div>
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
                  QUALITY FLOORING AT WILSON'S REMODELING LLC: ENHANCE YOUR
                  SPACE IN BROOKLAND, AR
                </div>
                <div className="flex justify-center py-2 ">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue p-4 md:px-6 md:py-4 sm:h-14 text-white rounded-full xl:mt-5 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
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
                  src={laminatePlanks}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="kitchen-remodel"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left ml-5 mt-5"
              >
                <span className="block text-5xl font-bold text-blue-400 leading-tight">
                  Transforming Your Space In Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  At Wilson’s Remodeling LLC, we take pride in offering quality
                  flooring services to clients in Brookland, AR, and the
                  surrounding areas. If you’re looking to transform your floors
                  and give your spaces a fresh look, our flooring experts are
                  here to assist you. We lay all types of flooring, from
                  laminate, vinyl, tile and showers.
                </span>
                <div className="flex justify-center md:justify-start">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
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
              FLOORING SERVICES INCLUDE:
            </p>
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={refinishReplace}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-banner"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Elevate Your Interior Design with High-Quality Flooring
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Wide Selection of Materials: </b> At Wilson’s Remodeling
                  LLC, we provide a wide variety of flooring options to suit
                  your needs and preferences. From solid wood and laminate to
                  ceramic tiles and vinyl, we will help you select the right
                  material that combines beauty and durability.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Professional Installation:</b> We have a team of highly
                  skilled and experienced flooring installers. We ensure that
                  each flooring piece is installed correctly and precisely to
                  achieve a flawless finish. Our meticulous attention to detail
                  ensures that your new floor looks and performs exceptionally.
                </span>
                <div className="flex justify-center md:justify-start mt-4">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
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
                  <b>Flooring Repair and Replacement:</b>If your current floors
                  are damaged or worn out, we can assist you with flooring
                  repair and replacement services. Our experts will assess the
                  condition of your floors and offer suitable solutions to
                  restore their beauty and functionality.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Personalized Advice and Design:</b> We understand that
                  choosing the right flooring can be overwhelming. Our team of
                  flooring experts can provide personalized advice and
                  recommendations based on your preferences, lifestyle, and
                  budget. We will guide you in selecting a floor that
                  complements your interior design and meets your practical
                  needs.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Guaranteed Quality:</b> At Wilson’s Remodeling LLC, we are
                  committed to providing high-quality flooring products and
                  services. We work with reliable suppliers and use recognized
                  brands in the industry to ensure that you achieve long-lasting
                  and satisfying results.
                </span>
                <div className="flex justify-center md:justify-start">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
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
                  src={laminateFlooring}
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
                  src={bestPriceForLaminate}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="construction-worker"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Revitalize Your Home with Customized Flooring Options
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  Trust Wilson’s Remodeling LLC to provide you with quality
                  flooring services and transform your spaces with beautiful and
                  functional floors. Contact us today for a free consultation
                  and start improving your floors with Wilson’s Remodeling LLC.
                </span>
                <div className="flex justify-center md:justify-start mt-4">
                  <a href="tel:(870)897-9347">
                    <button className="bg-button-blue px-6 py-4 text-white rounded-full mt-5 lg:mt-10 flex items-center hover:opacity-85 ring-1 ring-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
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
                  WE OFFER LAMINATE, VINYL, TILE AND SHOWERS FLOORING
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
