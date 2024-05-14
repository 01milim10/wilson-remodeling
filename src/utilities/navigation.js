const currentHref = window.location.href.split("/")[3];

const navigation = [
  {
    name: "Painting Service",
    href: "/painting-service",
    current: currentHref === "painting-service" ? true : false,
  },
  {
    name: "Remodeling Service",
    href: "/remodeling-service",
    current: currentHref === "remodeling-service" ? true : false,
  },
  {
    name: "Flooring",
    href: "/flooring-service",
    current: currentHref === "flooring-service" ? true : false,
  },
  {
    name: "Power Washing",
    href: "/washing-service",
    current: currentHref === "washing-service" ? true : false,
  },
  {
    name: "Construction & Finishing",
    href: "/construction-service",
    current: currentHref === "construction-service" ? true : false,
  },
];

export default navigation;
