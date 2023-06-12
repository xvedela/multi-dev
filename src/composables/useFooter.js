import {ref} from "vue";

export function useFooter() {
    const socialMediaIcons = ref([
        "fa-brands fa-square-facebook fa-xl",
        "fa-brands fa-instagram fa-xl",
        "fa-brands fa-twitter fa-xl",
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
        "Dallas Web Design",
        "Plano Web Design",
        "Frisco Web Design",
        "Fort Web Design",
        "Allen Web Design",
        "McKinney Web Design",
        "Grapevine Web Design",
    ]);

    return {socialMediaIcons, footerNavLinks, webDesignCompanies};
}
