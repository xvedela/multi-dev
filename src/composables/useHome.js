import UpCity from "../assets/logos/UpCity.vue";

import AegisLiving from "../assets/logos/LogoAegisLiving.vue";
import KojimaConstructionsStore from "../assets/logos/LogoKojimaConstructionsStore.vue";
import DoctorButlers from "../assets/logos/LogoDoctorButlers.vue";
import IrisTelehealth from "../assets/logos/LogoIrisTelehealth.vue";
import UnitedWay from "../assets/logos/LogoUnitedWay.vue";

import Figma from "../assets/techs/Figma.vue";
import Wordpress from "../assets/techs/Wordpress.vue";
import Woo from "../assets/techs/Woo.vue";
import Shopify from "../assets/techs/Shopify.vue";
import Vue from "../assets/techs/Vue.vue";
import Laravel from "../assets/techs/Laravel.vue";

import CW from "../assets/icons/CW.vue";
import SEO from "../assets/icons/SEO.vue";
import useArrows from "./useArrows.js";

const {right} = useArrows();


export default (function useHome() {
  const upCity = {
    logo: UpCity,
    star: '<i class="fa-solid fa-star text-[#23A6F0]" />'
  };

  const header = {
    label: 'We Design & Develop Websites That Deliver Results',
    text: `Our goal is to develop simple and modern websites that are optimized
             for both search engines and user experience, ultimately driving more
             traffic and revenue to your business.`,
  };

  const buttons = {
    bac: 'Book a Call <i class="fa-solid fa-arrow-right text-black"/>',
    ow: 'Our Work <i class="fa-solid fa-arrow-right text-white"/>',
    lm: `Learn More ${right}`,
  };


  const partners = {
    before:
      "before:content-[''] before:w-[17vw] before:h-0.5 before:mr-6 before:bg-white before:opacity-10 before:max-md:hidden",
    label: 'Trusted by Innovative Companies Worldwide',
    after:
      "after:content-[''] after:w-[17vw] after:h-0.5 after:ml-6 after:bg-white after:opacity-10 after:max-md:hidden",
    logos: [
      AegisLiving,
      KojimaConstructionsStore,
      DoctorButlers,
      IrisTelehealth,
      UnitedWay,
    ],
  };

  const techsHeader = {
    label: `Your Dedicated Web Design<br/>& Development Team`,
    text: `We are small team of experts that have been building on the
internet for over a decade. We are passionate about helping
businesses thrive online and creating user-focused websites
that drive real results.`,
  };

  const icons = [
    {
      icon: CW,
      label: 'Custom Websites',
      text: `Whether you’re looking to build a custom
marketing website or the next Twitter we can
help you build it.`,
      name: 'customWebsites'
    },
    {
      icon: SEO,
      label: 'Search Engine Optimization',
      text: `You’ve got yourself a beautiful website but now
you need your customers to find it, let us help
you.`,
      name: 'searchEngineOptimization',
    },
  ];

  const techs = {
    label: 'Technologies We Use',
    logos: [
      Figma, Wordpress, Woo, Shopify, Vue, Laravel,
    ],
  }

  return {upCity, header, buttons, partners, icons, techsHeader, techs}
});