import Header from "../components/header";
import Footer from "../components/footer";
import Underlay from "../components/underlay";
import SlideShow from "../components/slideshow";

import bg1 from "../assets/RemodellingService/circular-saw-cutting-wooden-trim-on-with-on-remode-2022-11-12-11-03-42-utc-scaled.jpg";
import bg2 from "../assets/RemodellingService/men-ready-for-remodeling-2022-12-16-11-44-14-utc-scaled.jpg";
import bg3 from "../assets/RemodellingService/pro-remodeling-contractor-2022-12-16-11-46-12-utc-scaled.jpg";

import kitchenRemodel from "../assets/RemodellingService/kitchen-remodel-home-improvement-view-installed-in-2022-11-12-10-51-50-utc-1536x995.jpg";
import homeRemodel from "../assets/RemodellingService/remodel-home-improvement-view-installed-in-a-new-k-2022-11-12-11-27-13-utc-scaled.jpg";
import kitchenRemodelBeautiful from "../assets/RemodellingService/kitchen-remodel-beautiful-kitchen-furniture-the-dr-2022-11-12-10-35-29-utc-scaled.jpg";
import constructionWorker from "../assets/RemodellingService/kitchen-remodel-beautiful-kitchen-furniture-the-dr-2022-11-12-10-35-29-utc-scaled.jpg";

export default function RemodelingService() {
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
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clip-rule="evenodd"
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
                  src={kitchenRemodel}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="kitchen-remodel"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left ml-5 mt-5"
              >
                <span className="block text-5xl font-bold text-blue-400 leading-tight">
                  Quality Remodeling At Wilson's Remodeling LLC: Transforming
                  Your Space In Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  At Wilson’s Remodeling LLC, we specialize in high-quality
                  remodeling services for clients in Brookland, AR, and the
                  surrounding areas. If you’re looking to renovate your home or
                  business, our remodeling experts are here to bring your design
                  dreams to life.
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
                          fill-rule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clip-rule="evenodd"
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
              REMODELING SERVICES INCLUDE:
            </p>
            <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto mt-5">
              <div
                id="img-section"
                className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
              >
                <img
                  src={homeRemodel}
                  className="xl:h-[400px] w-full rounded-[45px] object-cover"
                  alt="painting-banner"
                />
              </div>
              <div
                id="text-section"
                className="col-span-12 lg:col-span-4 2xl:col-span-6 text-left mt-5 ml-5"
              >
                <span className="block text-4xl font-bold text-blue-400 leading-tight mb-5">
                  Make a Statement with Beautifully Remodelled Interiors by
                  Wilson's Remodeling LLC
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Custom Design:</b> We understand that every remodeling
                  project is unique. We work closely with you to understand your
                  needs, desires, and design vision. Our team of expert
                  designers will help you develop a customized plan that
                  transforms your space according to your preferences and style.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  <b>Interior Renovations:</b> Whether you want to update a
                  specific room or undertake a complete interior remodel, we are
                  prepared to make it happen. We specialize in interior
                  improvements such as kitchen renovations, bathroom remodels,
                  living room updates, and more. Our goal is to create a
                  functional and aesthetically pleasing space that fits your
                  lifestyle and needs.
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
                          fill-rule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clip-rule="evenodd"
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
                  <b>Exterior Enhancements:</b>We also offer exterior
                  improvement services to enhance the appearance and
                  functionality of your property. From facade renovations to
                  deck and patio construction, our expert team can help you
                  transform your outdoor spaces into beautiful and inviting
                  areas.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Quality Craftsmanship:</b> At Wilson’s Remodeling LLC, we
                  take pride in our meticulous attention to detail and
                  high-quality craftsmanship. We work with premium materials and
                  specialized tools to ensure long-lasting and beautiful
                  results. Our team of skilled professionals is dedicated to
                  executing each project with precision and professionalism.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  <b>Comprehensive Project Management:</b> We take care of all
                  aspects of your remodeling project, from planning and design
                  to execution and completion. Our comprehensive project
                  management approach ensures that deadlines are met and clear
                  communication is maintained at every stage of the process.
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
                          fill-rule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clip-rule="evenodd"
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
                  src={kitchenRemodelBeautiful}
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
                  Transform Your Interior Spaces with Professional Remodelling
                  Services in Brookland, AR
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1 mb-3">
                  At Wilson’s Remodeling LLC, we strive to exceed our clients’
                  expectations in every remodeling project. We take pride in
                  delivering high-quality services and exceptional results that
                  transform your spaces into beautiful and functional
                  environments.
                </span>
                <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                  Contact us today for a free consultation and start turning
                  your remodeling ideas into reality with Wilson’s Remodeling
                  LLC.
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
                          fill-rule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clip-rule="evenodd"
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
