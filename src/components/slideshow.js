import ImageCycler from "../utilities/imageCycler";
import companyLogo from "../assets/WilsonRemodelingllcPNG-1536x578.png";

export default function SlideShow(props) {
  const images = props.images;

  return (
    <>
      <div id="slideShow">
        <img
          className="h-screen w-screen object-cover -mt-24"
          src={ImageCycler(images)}
        ></img>
        <div id="overlay">
          <div
            className="h-full w-full bg-[#58544F]/[0.2]
             absolute top-0 left-0 flex flex-col justify-center text-white p-4 font-bold"
          >
            <div className="hidden w-5/6 my-4 mx-auto md:flex justify-center">
              <img
                src={companyLogo}
                className="h-[80px] md:h-[100px] xl:h-[200px]"
              />
            </div>
            <div className="w-5/6 mx-auto text-center my-4 text-4xl lg:text-5xl xl:text-6xl">
              <p>BROOKLAND, ARKANSAS AREA'S REMODELING EXPERTS</p>
            </div>
            <div className="w-2/3 sm:w-2/6 mx-auto text-center mt-5">
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

                  <span className="pl-4 font-bold text-xl">SMS Us Now!</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
