import {ref} from "vue";

export function useFooter() {
    const socialMediaIcons = ref([
        {classes: "fa-brands fa-square-facebook fa-xl", href: "#"},
        {classes: "fa-brands fa-instagram fa-xl", href: "#"},
        {classes: "fa-brands fa-twitter fa-xl", href: "#"},
    ]);

    const footerInfo = ref({
        description: "We help businesses generate more revenue through strategic web design and SEO services.",
        followUs: "Follow Us",
    });

    const footerNavLinks = ref({
        label: "Learn_More",
        links: [
            {to: {name: "Home"}, title: "Home"},
            {to: {name: "CustomWebsite"}, title: "Custom Website"},
            {to: {name: "SearchEngineOptimization"}, title: "Search Engine Optimization"},
            {to: {name: "OurWork"}, title: "Our Work"},
            {to: {name: "Blog"}, title: "Blog"},
            {to: {name: "Contact"}, title: "Contact"},
        ],
    });

    const webDesignCompanies = ref({
        label: "Locations",
        links: [
            {title: "Dallas Web Design", href: "#"},
            {title: "Plano Web Design", href: "#"},
            {title: "Frisco Web Design", href: "#"},
            {title: "Fort Web Design", href: "#"},
            {title: "Allen Web Design", href: "#"},
            {title: "McKinney Web Design", href: "#"},
            {title: "Grapevine Web Design", href: "#"},
        ],
    });

    const subFooterInfo = ref({
        classes: "fa-regular fa-copyright",
        text: " 2023 - Multi Dev Development, LLC"
    });

    const subFooterNavLinks = ref([
        {text: 'Privacy Policy', href: '#'},
        {text: 'Sitemap', href: '#'},
    ]);

    return {socialMediaIcons, footerInfo, footerNavLinks, webDesignCompanies, subFooterInfo, subFooterNavLinks};
}
