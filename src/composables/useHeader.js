import {reactive} from "vue";

export function useHeader() {
    return reactive({
        headerNavLinks: [
            {to: {name: "Home"}, title: "Home"},
            {
                to: {name: "Services"},
                subLinks: [
                    {
                        to: {name: "TemplatedWebsites"},
                        title: "Templated Websites",
                    },
                    {
                        to: {name: "CustomWebsites"},
                        title: "Custom Websites",
                    },
                    {
                        to: {name: "SearchEngineOptimization"},
                        title: "Search Engine Optimization",
                    },
                ],
                subLinkClass: "bg-white px-[0.42vw] py-[0.16vw] rounded-2xl hover:bg-[#FFB902]",
                title: "Services",
            },
            {to: {name: "OurWork"}, title: "Our Work", _class: "opacity-60"},
            {to: {name: "Blog"}, title: "Blog", _class: "opacity-60"},
            {to: {name: "Contact"}, title: "Contact", _class: "opacity-60"},
        ],

        navButton: {
            to: {name: "Contact"},
            text: "Let's Talk",
            _class: "flex items-center bg-[#FFB902] px-[1.82vw] py-[0.52vw] rounded-3xl gap-x-[0.42vw]",
        },

        arrows: {
            angleDown: "fa-solid fa-angle-down",
            angleUp: "fa-solid fa-angle-up",
            arrowRight: "fa-solid fa-arrow-right text-black",
        },

        resNavbar: {
            bars: "fa-solid fa-xl fa-bars text-white",
            close: "fa-solid fa-xl fa-x",
        },
    });
}
