import { useRef, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import companyLogo from "../assets/WilsonRemodelingllcPNG-1536x578.png";
import navigation from "../utilities/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navBarRef = useRef(null);

  useEffect(() => {
    const changeNavbarColor = () => {
      const scrollPosition = window.scrollY;

      const navBar = navBarRef.current;
      if (scrollPosition > 1) {
        navBar.classList.remove("md:bg-gray/45");
        navBar.classList.add("md:bg-gray");
      } else if (scrollPosition === 0) {
        navBar.classList.remove("md:bg-gray");
        navBar.classList.add("md:bg-gray/45");
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <div id="header" className="sticky top-0 z-20">
      <Disclosure>
        {({ open }) => (
          <div
            className="bg-gray md:bg-gray/45 shadow-xl md:z-50"
            ref={navBarRef}
          >
            <div className="mx-auto max-w-8xl px-2 sm:px-6 md:px-6">
              <div className="relative flex h-40 md:h-24 items-center justify-between">
                {/* Mobile menu button*/}
                <div className="md:hidden w-full p-2 absolute inset-y-0 left-0 flex items-center justify-between">
                  <div className="ml-2">
                    <a href="/">
                      <img
                        className="h-20 w-auto"
                        src={companyLogo}
                        alt="Your Company"
                      />
                    </a>
                  </div>
                  <Disclosure.Button
                    id="mobile-nav"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-red-600 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                      <img
                        className="md:h-10 lg:h-16 w-auto"
                        src={companyLogo}
                        alt="Your Company"
                      />
                    </a>
                  </div>
                  <div className="sm:ml-6 flex items-center">
                    <div className="md:flex md:space-x-1 lg:space-x-4 md:text-sm lg:text-lg items-center">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-red-600"
                              : "text-blue-500 hover:text-red-600",
                            "rounded-md md:px-1 lg:px-3 py-2 text-md font-bold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <a href="tel:(870)897-9347">
                    <button
                      type="button"
                      className="bg-button-blue ml-4 text-white lg:text-lg font-bold rounded-full px-5 py-3 hover:opacity-85"
                    >
                      <span className="xl:hidden">Call Us</span>
                      <span className="hidden xl:block">
                        Call Us For A Free Quote
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden absolute top-0 bg-blue-600 w-full">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-red-600"
                        : "text-white hover:text-red-600",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                {open ? (
                  <Disclosure.Button>
                    <XMarkIcon
                      className="block h-8 w-8 ring-white text-white ml-3 rounded-md hover:text-red-600"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                ) : (
                  ""
                )}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
