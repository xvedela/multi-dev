import MultiDev from "../assets/logos/MultiDev.vue";
import useArrows from "./useArrows.js";

const arrows = useArrows();

const useHeader = () => ({
  companyLogo: MultiDev,
  navLinks: [
    {name: "Home", label: "Home"},
    {
      name: "Services",
      label: "Services",
      subLinks: [
        {
          name: "TemplatedWebsites",
          label: "Templated Websites",
        },
        {
          name: "CustomWebsites",
          label: "Custom Websites",
        },
      ],
    },
    {name: "OurWork", label: "Our Work"},
    {name: "Blog", label: "Blog"},
  ],
  navButton: {
    name: "Contact",
    label: `Let's Talk ${arrows.arrowRight}`,
  },
  resNavbar: {
    menuIcon: '<i class="fa-solid fa-xl fa-bars  text-white"/>',
    closeIcon: '<i class="fa-solid fa-xl fa-x"/>',
  },
});

export default useHeader;
