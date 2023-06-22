import Figma from "../../assets/techs/Figma.vue";
import Wordpress from "../../assets/techs/Wordpress.vue";
import Woo from "../../assets/techs/Woo.vue";
import Shopify from "../../assets/techs/Shopify.vue";
import Vue from "../../assets/techs/Vue.vue";
import Laravel from "../../assets/techs/Laravel.vue";

export default function useTechnologies() {
    return {
        heading: 'Technologies We Use',
        technologies: [Figma, Wordpress, Woo, Shopify, Vue, Laravel],
    };
};