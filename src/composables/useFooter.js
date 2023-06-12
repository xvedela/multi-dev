import {ref} from "vue";

export function useFooter() {
    const socialMediaIcons = ref([
        {classes: "fa-brands fa-square-facebook fa-xl", href: "#"},
        {classes: "fa-brands fa-instagram fa-xl", href: "#"},
        {classes: "fa-brands fa-twitter fa-xl", href: "#"},
    ]);

    const footerNavLinks = ref([
        {to: {name: "Home"}, title: "Home"},
        {to: {name: "CustomWebsite"}, title: "Custom Website"},
        {to: {name: "SearchEngineOptimization"}, title: "Search Engine Optimization"},
        {to: {name: "OurWork"}, title: "Our Work"},
        {to: {name: "Blog"}, title: "Blog"},
        {to: {name: "Contact"}, title: "Contact"},
    ]);

    const webDesignCompanies = ref([
        {title: "Dallas Web Design", href: "#"},
        {title: "Plano Web Design", href: "#"},
        {title: "Frisco Web Design", href: "#"},
        {title: "Fort Web Design", href: "#"},
        {title: "Allen Web Design", href: "#"},
        {title: "McKinney Web Design", href: "#"},
        {title: "Grapevine Web Design", href: "#"},
    ]);

    return {socialMediaIcons, footerNavLinks, webDesignCompanies};
}
