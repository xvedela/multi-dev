import useNavigation from "./useNavigation.js";

export default (function () {
  let links = useNavigation();
  links.splice(2, 0, ...links[1].subLinks);
  links.splice(1, 1);
  const text = "We help businesses generate more revenue through strategic web design and SEO services.";
  const label = "Follow Us";
  const social = [
    {icon: "fa-square-facebook", url: "#"},
    {icon: "fa-instagram", url: "#"},
    {icon: "fa-twitter", url: "#"},
  ];
  const companies = {
    before: "before:content-['Locations']",
    _: [
      {name: "Dallas", url: "#"},
      {name: "Plano", websiteUrl: "#"},
      {name: "Frisco", url: "#"},
      {name: "Fort", url: "#"},
      {name: "Allen", url: "#"},
      {name: "McKinney", url: "#"},
      {name: "Grapevine", url: "#"},
    ],
  };
  const sub = {
    text: '<i class="fa-regular fa-copyright"></i> 2023 - Multi Dev Development, LLC',
    links: [
      {label: "Privacy Policy", url: "#"},
      {label: "Sitemap", url: "#"},
    ],
  };
  return {links, text, label, social, companies, sub};
});
