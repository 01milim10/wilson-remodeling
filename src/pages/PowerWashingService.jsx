import Header from "../components/header";
import Footer from "../components/footer";
import Underlay from "../components/underlay";
import SlideShow from "../components/slideshow";

import bg1 from "../assets/PowerWashingService/AAA-Window-Solutions-Pressure-Washing-09.16.16.jpg";
import bg2 from "../assets/PowerWashingService/brick-pressure-washing-picture-id1094145182.jpg";
import bg3 from "../assets/PowerWashingService/person-wearing-rainboots-pressure-washing-driveway-aeeec933df5148afa57457d6d1fe6aea.jpg";

import brickPressure from "../assets/PowerWashingService/brick-pressure-washing-picture-id1094145182.jpg";
import powerWashingServiceNeeds from "../assets/PowerWashingService/Why-a-Power-Washing-Service-Might-Be-Exactly-What-Your-Backyard-Needs-to-Look-Like-New1.jpeg";
import cleaningWorker from "../assets/PowerWashingService/vecteezy_worker-cleaning-dirty-floor-with-high-pressure-washer_6538761_741-scaled.jpg";
import PowerWashingServices from "../assets/PowerWashingService/Pressuree-washing-services-in-Toronto.webp";

export default function PowerWashingService() {
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
                  WILSON'S REMODELING LLC EXPERIENCE THE DIFFERENCE OF
                  PROFESSIONAL POWER WASHING FOR CLEANER SURFACES
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
                  src={brickPressure}
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
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-5">
                  Power Washing Services at Wilson’s Remodeling LLC: Restore the
                  Beauty of Your Surfaces in Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  At Wilson’s Remodeling LLC, we offer professional power
                  washing services to clients in Brookland, AR, and the
                  surrounding areas. If you’re looking to revive the appearance
                  of your exterior surfaces, our power washing experts are here
                  to help you.
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
              OUR POWER WASHING SERVICES INCLUDE:
            </p>
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={powerWashingServiceNeeds}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-banner"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Revive Your Exterior Surfaces with Expert Power Washing
                  Services
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Complete Exterior Cleaning: </b> We use high-pressure water
                  jets and specialized equipment to remove dirt, grime, mildew,
                  algae, and other stains from various surfaces. From driveways
                  and sidewalks to decks, fences, and siding, we can effectively
                  clean a wide range of exterior areas.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Revitalizing Your Property:</b> Over time, exterior
                  surfaces can accumulate dirt, pollution, and stains that can
                  dull their appearance. Our power washing services can breathe
                  new life into your property, restoring its original beauty and
                  enhancing its curb appeal.
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
                  <b>Expert Techniques and Equipment:</b> Our team of power
                  washing professionals is trained in the latest techniques and
                  uses advanced equipment to ensure thorough and efficient
                  cleaning. We have the knowledge and expertise to handle
                  different surfaces and adjust the pressure accordingly,
                  delivering optimal results without causing any damage.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Safe and Environmentally Friendly:</b> We prioritize the
                  safety of both your property and the environment. Our power
                  washing methods are designed to be environmentally friendly,
                  using biodegradable detergents and minimizing water waste. You
                  can have peace of mind knowing that we take the necessary
                  precautions to protect your surfaces and the surrounding
                  ecosystem.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Reliable and Timely Service:</b> Reliable and Timely
                  Service: At Wilson’s Remodeling LLC, we understand the
                  importance of delivering reliable and timely service. We
                  strive to accommodate your schedule and complete the power
                  washing project efficiently, ensuring minimal disruption to
                  your daily routine.
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
                  src={cleaningWorker}
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
                  src={PowerWashingServices}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="construction-worker"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Transform Your Outdoor Spaces with Powerful and Safe Power
                  Washing
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  Trust Wilson’s Remodeling LLC to provide you with professional
                  power washing services that will rejuvenate your exterior
                  surfaces. Contact us today for a free consultation and let us
                  help you restore the beauty of your property with our power
                  washing expertise.
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
        </div>
        <Footer />
      </div>
      <Underlay />
    </>
  );
}
