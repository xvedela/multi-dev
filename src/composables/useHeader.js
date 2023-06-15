import MultiDev from "../assets/logos/MultiDev.vue";
import useArrows from "./useArrows.js";

const {arrowRight} = useArrows();

export default () => ({
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
        {
          name: "SearchEngineOptimization",
          label: "Search Engine Optimization",
        },
      ],
    },
    {name: "OurWork", label: "Our Work"},
    {name: "Blog", label: "Blog"},
  ],
  navButton: {
    name: "Contact",
    label: `Let's Talk ${arrowRight}`,
  },
  resNavbar: {
    menuIcon: '<i class="fa-solid fa-xl fa-bars  text-white"/>',
    closeIcon: '<i class="fa-solid fa-xl fa-x"/>',
  },
})
