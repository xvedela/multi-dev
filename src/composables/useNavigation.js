import MultiDev from "../assets/logos/MultiDev.vue";

export default (function useNavigation() {
  const logo = MultiDev;
  const links = {
    before: "before:content-['Learn_More']",
    _: [
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
  };
  return {logo, links};
});
