import {reactive} from "vue";

export function useFooter() {
    return reactive({
        socialMediaIcons: [
            {_class: "fa-brands fa-square-facebook fa-xl", href: "#"},
            {_class: "fa-brands fa-instagram fa-xl", href: "#"},
            {_class: "fa-brands fa-twitter fa-xl", href: "#"},
        ],
        footerInfo: {
            description: "We help businesses generate more revenue through strategic web design and SEO services.",
            followUs: "Follow Us",
        },
        footerNavLinks: {
            label: "before:content-['Learn_More']",
            links: [
                {to: {name: "Home"}, title: "Home"},
                {to: {name: "CustomWebsites"}, title: "Custom Websites"},
                {to: {name: "SearchEngineOptimization"}, title: "Search Engine Optimization"},
                {to: {name: "OurWork"}, title: "Our Work"},
                {to: {name: "Blog"}, title: "Blog"},
                {to: {name: "Contact"}, title: "Contact"},
            ],
        },
        webDesignCompanies: {
            label: "before:content-['Locations']",
            links: [
                {title: "Dallas Web Design", href: "#"},
                {title: "Plano Web Design", href: "#"},
                {title: "Frisco Web Design", href: "#"},
                {title: "Fort Web Design", href: "#"},
                {title: "Allen Web Design", href: "#"},
                {title: "McKinney Web Design", href: "#"},
                {title: "Grapevine Web Design", href: "#"},
            ],
        },
        subFooterInfo: {
            _class: "fa-regular fa-copyright",
            text: " 2023 - Multi Dev Development, LLC"
        },
        subFooterNavLinks: [
            {text: 'Privacy Policy', href: '#'},
            {text: 'Sitemap', href: '#'},
        ],
    });
}