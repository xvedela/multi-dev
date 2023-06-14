import MultiDev from "../assets/logos/MultiDev.vue";

export function useFooter() {
  return {
    footer: {
      companyLogo: MultiDev,
      serviceDescription: "We help businesses generate more revenue through strategic web design and SEO services.",
      followLabel: "Follow Us",
      socialLinks: [
        {iconClass: "fa-square-facebook", url: "#"},
        {iconClass: "fa-instagram", url: "#"},
        {iconClass: "fa-twitter", url: "#"},
      ],
      navLinks: {
        titleBefore: "before:content-['Learn_More']",
        links: [
          {name: "Home", label: "Home"},
          {name: "CustomWebsites", label: "Custom Websites"},
          {name: "SearchEngineOptimization", label: "Search Engine Optimization"},
          {name: "OurWork", label: "Our Work"},
          {name: "Blog", label: "Blog"},
          {name: "Contact", label: "Contact"},
        ],
      },
      designCompanies: {
        titleBefore: "before:content-['Locations']",
        navLinks: [
          {name: "Dallas Web Design", websiteUrl: "#"},
          {name: "Plano Web Design", websiteUrl: "#"},
          {name: "Frisco Web Design", websiteUrl: "#"},
          {name: "Fort Web Design", websiteUrl: "#"},
          {name: "Allen Web Design", websiteUrl: "#"},
          {name: "McKinney Web Design", websiteUrl: "#"},
          {name: "Grapevine Web Design", websiteUrl: "#"},
        ],
      },
    },
    subFooter: {
      copyrightText: '<i class="fa-regular fa-copyright"></i> 2023 - Multi Dev Development, LLC',
      navLinks: [
        {label: 'Privacy Policy', url: '#'},
        {label: 'Sitemap', url: '#'},
      ],
    },
  };
}