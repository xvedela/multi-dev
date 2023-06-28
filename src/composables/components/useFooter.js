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
  const companies = Array(7).fill({
    name: "Dallas Web Design",
    websiteUrl: "https://icepick.co/dallas-web-design-development/"
  });
  const subFooterLinks = [
    {label: "Privacy Policy", url: "#"},
    {label: "Sitemap", url: "#"},
  ];
  return {links, text, label, social, companies, subFooterLinks};
});
