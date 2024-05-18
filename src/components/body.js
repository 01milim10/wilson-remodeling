import React, { useState } from "react";
import addContact from "../utilities/storeContact";
import kitchenRemodel from "../assets/kitchen-remodel-beautiful-kitchen-furniture-2022-11-12-11-25-17-utc-2048x1366.jpg";
import service1 from "../assets/paint.png";
import service2 from "../assets/remodeling.png";
import service3 from "../assets/parquet.png";
import service4 from "../assets/washer-machine.png";
import service5 from "../assets/helmet.png";

export default function Body() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const clearForm = () => {
    console.log("inside clearform");
    setFormValues({
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    });
  };

  const submitForm = async () => {
    console.log(formValues);
    addContact(formValues).then((res) => {
      clearForm();
    });
  };
  return (
    <>
      <div id="body">
        <div id="section-1" className="">
          <div className="bg-blue-600/80  mx-auto py-14">
            <div className="grid justify-self-center text-white">
              <div className="block justify-self-center py-2 font-bold">
                WILSON'S REMODELLING LLC
              </div>
              <div className="block justify-self-center py-2 text-3xl md:text-4xl font-bold text-center w-2/3">
                TRANSFORM YOUR HOME WITH WILSON'S REMODELING LLC'S EXPERTISE
              </div>
              <div className="block justify-self-center py-2">
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
        <div id="section-2" className=" bg-white py-10">
          <div className="grid grid-cols-12 px-10 md:w-3/4 lg:w-full mx-auto">
            <div
              id="img-section"
              className="col-span-12 lg:col-span-8 2xl:col-span-6 flex justify-center items-center p-2"
            >
              <img
                src={kitchenRemodel}
                className="xl:h-[400px] rounded-[45px]"
              />
            </div>
            <div
              id="text-section"
              className="col-span-12 lg:col-span-4 2xl:col-span-6 text-center mt-5"
            >
              <span className="block text-5xl font-bold text-blue-400 leading-tight">
                Exceptional Remodeling In Brookland, AR
              </span>
              <span className="block text-xl font-semobold tracking-wide text-justify p-1">
                Transform your home with the remodeling experts at Wilson’s
                Remodeling LLC. We are a leading company in the industry,
                dedicated to providing high-quality remodeling services to
                clients in Brookland, AR, and the surrounding areas. Whether
                you’re looking to renovate a room, modernize your kitchen or
                bathroom, or give your entire house a new look, we’re here to
                make it a reality!
              </span>
              <div className="flex justify-center">
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

                    <span className="pl-4 font-bold text-xl">Call Us Now!</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section-3"
          className="py-10 bg-blue-600/80 md:h-44 text-white md:flex justify-center items-center "
        >
          <div id="text-section md:w-2/3">
            <div className="block font-bold text-2xl w-2/3 text-center mx-auto leading-relaxed">
              RENOVATE YOUR SPACE WITH THE REMODELING SPECIALISTS IN BROOKLAND,
              AR
            </div>
          </div>
          <div id="button-section" className="flex justify-center m-3">
            <a href="sms:(870)897-9347" className="">
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
                  SMS Us For A Free Quote!
                </span>
              </button>
            </a>
          </div>
        </div>
        <div id="section-4" className=" bg-gray py-10">
          <div className="text-center">
            <p className="text-xl font-semibold">OUR SERVICES</p>
            <p className="text-3xl font-bold text-blue-500">
              SAY HELLO TO YOUR SWEET HOME!
            </p>
          </div>
          <div className="w-2/3 lg:w-full mx-auto grid grid-cols-12 lg:flex lg:justify-center mt-8 lg:mt-16 font-semibold text-md">
            <div className="col-span-6 lg:w-1/6 flex flex-col items-center p-2 mb-2">
              <img src={service1} className="h-28 w-28" />
              <span className="block mt-2">PAINTING</span>
            </div>
            <div className="col-span-6 lg:w-1/6 flex flex-col items-center p-2 mb-2">
              <img src={service2} className="h-28 w-28" />
              <span className="block mt-2">REMODELING</span>
            </div>
            <div className="col-span-6 lg:w-1/6 flex flex-col items-center p-2 mb-2">
              <img src={service3} className="h-28 w-28" />
              <span className="block mt-2">FLOORING</span>
            </div>
            <div className="col-span-6 lg:w-1/6 flex flex-col items-center p-2 mb-2">
              <img src={service4} className="h-28 w-28" />
              <span className="block mt-2">POWER WASHING</span>
            </div>
            <div className="col-span-12 lg:w-1/6 flex flex-col items-center p-2 mb-2">
              <img src={service5} className="h-28 w-28" />
              <span className="block text-center mt-2">
                CONSTRUCTION AND FININSHING
              </span>
            </div>
          </div>
        </div>
        <div id="section-5" className="bg-white py-10">
          <div className="">
            <div className="mb-5 mx-auto">
              <p className="block text-4xl leading-relaxed  font-bold text-center ">
                WHY CHOOSE
                <br />
                WILSON'S REMODELING?
              </p>
            </div>
            <div className="flex justify-center">
              <div className="h-1 w-1 bg-[#ff1d1d] rounded-full mr-2"></div>
              <div className="h-1 w-1 bg-[#ff1d1d] rounded-full mr-2"></div>
              <div className="h-1 w-1 bg-[#ff1d1d] rounded-full mr-2"></div>
              <div className="h-1 w-[200px] bg-[#ff1d1d] rounded-full mr-2"></div>
            </div>
            <div className="">
              <div className="pt-5 grid grid-cols-12 lg:w-3/4 mx-auto gap-2">
                <div className="col-span-12 md:col-span-4 py-4 flex justify-center group">
                  <div className="transition ease-in-out delay-50 duration-200 group-hover:bg-[#ff1d1d] group-hover:scale-110 rounded-full shadow-xl w-[85px] h-[85px] flex justify-center items-center">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="h-10 group-hover:stroke-gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </div>
                  <div className="w-2/3 ml-5">
                    <p className="text-3xl font-bold pb-5 group-hover:text-[#ff1d1d]">
                      Satisfaction Guarantee
                    </p>
                    <p className="font-semibold text-lg leading-8 text-justify">
                      We guarantee that you will be delighted with the quality
                      of our work and the end result of your remodeling project.
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 py-4 flex justify-center group">
                  <div className="transition ease-in-out delay-50 duration-200 group-hover:bg-[#ff1d1d] group-hover:scale-105 rounded-full shadow-xl w-[85px] h-[85px] flex justify-center items-center">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="w-10 h-10 group-hover:stroke-gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </div>
                  <div className="w-2/3 ml-5">
                    <p className="text-3xl font-bold pb-5 group-hover:text-[#ff1d1d]">
                      Timeliness Guarantee
                    </p>
                    <p className="font-semibold text-lg leading-8 text-justify">
                      We guarantee that we will strive to complete your project
                      on schedule, ensuring that you can enjoy your transformed
                      space within the expected timeframe.
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 py-4 flex justify-center group">
                  <div className="transition ease-in-out delay-50 duration-200 group-hover:bg-[#ff1d1d] group-hover:scale-105 rounded-full shadow-xl w-[85px] h-[86px] flex justify-center items-center">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="w-10 h-10 group-hover:stroke-gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                      />
                    </svg>
                  </div>
                  <div className="w-2/3 ml-5">
                    <p className="text-3xl font-bold pb-5 group-hover:text-[#ff1d1d]">
                      Craftsmanship Guarantee
                    </p>
                    <p className="font-semibold text-lg leading-8 text-justify">
                      We guarantee that our team of skilled professionals will
                      execute your remodeling project with precision and
                      attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-6" className="">
          <div className="bg-blue-600/80 py-20 ">
            <div className="text-white  flex flex-col lg:flex-row items-center justify-center">
              <div className="text-center lg:text-left">
                <div className="font-bold pb-2">WILSON'S REMODELLING LLC</div>
                <div className="text-5xl font-semibold lg:w-2/3">
                  AND FALL IN LOVE WITH OUR SERVICES
                </div>
              </div>
              <div className="justify-self-center mt-10 lg:mt-0 py-5">
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
        <div id="section-7" className="bg-white p-4">
          <div className="text-5xl text-blue-600 font-bold my-5">
            <p className="text-center">Contact Us!</p>
          </div>
          <div className="grid grid-cols-12 gap-6 mx-auto p-3">
            <div id="form" className="col-span-12 lg:col-span-5 m-5">
              <form>
                <div className="pb-3">
                  <label
                    htmlFor="first-name"
                    className="block text-lg font-medium leading-6 text-[#9c9c98]"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      onChange={(event) => {
                        setFormValues({
                          ...formValues,
                          name: event.target.value,
                        });
                      }}
                      placeholder="John Doe"
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm bg-[#ebebeb]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-3">
                  <div className="">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium leading-6 text-[#9c9c98]"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={(event) => {
                          setFormValues({
                            ...formValues,
                            email: event.target.value,
                          });
                        }}
                        placeholder="john.doe@example.com"
                        className="block w-full bg-[#ebebeb] border-0 py-1.5"
                        required
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="phone"
                      className="block text-lg font-medium leading-6 text-[#9c9c98]"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="number"
                        autoComplete="phone"
                        onChange={(event) => {
                          setFormValues({
                            ...formValues,
                            phone: event.target.value,
                          });
                        }}
                        placeholder="8702224444"
                        className="block w-full bg-[#ebebeb] border-0 py-1.5 "
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="about"
                    className="block  text-lg font-medium leading-6 text-[#9c9c98]"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={5}
                      className="block w-full bg-[#ebebeb] border-0 py-1.5"
                      defaultValue={""}
                      onChange={(event) => {
                        setFormValues({
                          ...formValues,
                          message: event.target.value,
                        });
                      }}
                      placeholder="Your message goes here..."
                    />
                  </div>
                </div>
                <div className="pt-6">
                  <label
                    htmlFor="consent"
                    className="block text-lg font-medium leading-6 text-[#9c9c98]"
                  >
                    Consent*
                  </label>
                  <div className="mt-2 flex items-center">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      checked={formValues.consent}
                      onChange={(event) => {
                        setFormValues({
                          ...formValues,
                          consent: event.target.checked,
                        });
                      }}
                      className="block border-0 py-1.5 text-gray-900 shadow-sm bg-[#ebebeb] mr-3"
                      required
                    />
                    <span>
                      Yes, I agree with the privacy policy and terms and
                      conditions.
                    </span>
                  </div>
                </div>
              </form>
              <div>
                <button
                  type="submit"
                  onClick={() => submitForm()}
                  className="mt-5 md:mt-16 p-2 bg-button-blue text-white disabled:bg-gray"
                  disabled={
                    !formValues.consent ||
                    formValues.firstName == "" ||
                    formValues.emailAddress == "" ||
                    formValues.phone == "" ||
                    formValues.message == ""
                  }
                >
                  <span>Send Message </span>
                </button>
              </div>
            </div>
            <div
              id="googleMaps"
              className="col-span-12 lg:col-span-7 m-5 sm:ml-5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801533.160828985!2d-93.7929675372665!3d35.367588639575544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d429309b2749c5%3A0xe7712af2ac232b92!2sWilson&#39;s%20Remodeling%20LLC!5e0!3m2!1sen!2sus!4v1713502720861!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
