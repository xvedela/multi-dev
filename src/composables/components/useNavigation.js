export default (function useNavigation() {
  return [
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
  ];
});
