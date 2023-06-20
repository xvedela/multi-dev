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
const getImgUrl = (directory, imgName) =>
  new URL(`../assets/${directory}/${imgName}`, import.meta.url).href;


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
    vap: 'View All Projects <i class="fa-solid fa-arrow-right text-white"/>',
    lt: `Let's Talk ${right}`,
    rm: `Read More ${right}`,
    vapo: `View All Posts ${right}`,
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
      _: CW,
      label: 'Custom Websites',
      text: `Whether you’re looking to build a custom
marketing website or the next Twitter we can
help you build it.`,
      name: 'CustomWebsites'
    },
    {
      _: SEO,
      label: 'Search Engine Optimization',
      text: `You’ve got yourself a beautiful website but now
you need your customers to find it, let us help
you.`,
      name: 'SearchEngineOptimization',
    },
  ];

  const techs = {
    label: 'Technologies We Use',
    logos: [
      Figma, Wordpress, Woo, Shopify, Vue, Laravel,
    ],
  };

  const clients = {
    label: 'Hear It From Our Clients',
    _: [
      {
        img: getImgUrl('clients', "1661371646793-300x300.png"),
        name: 'Jennifer Hall',
        company: 'AegisLiving',
        feedback: `Icepick was able to help us get a very difficult web redesign
project across the finish line and continues to manage a large list
of projects to help improve user experience and SEO. The team is
knowledgeable, highly skilled and very responsive.`,
      },
      {
        img: getImgUrl('clients', "jeff-300x300.png"),
        name: 'Jeff Rasansky',
        company: 'JR Law Firm',
        feedback: `The guys at Icepick do an amazing job, and have helped us with
more than one website. Always professional, quick to respond,
great eye for design, and more than willing to help if anything
comes up!`,
      },
      {
        img: getImgUrl('clients', "sondra-300x300.png"),
        name: 'Sondra Heffernan',
        company: 'Infowerks',
        feedback: `Icepick recently updated our company website. Our company is
beyond happy with our new design, the delivery, and their
professionalism in working with multiple decision makers. Looking
forward to working with Icepick on future projects.`,
      },
    ],
  };

  const projects = {
    label: 'Recent Projects',
    _: [
      getImgUrl('projects', 'Cart-Rescue-1-1-1024x1024.png'),
      getImgUrl('projects', 'Freelanceleads-3-1024x1024.png'),
      getImgUrl('projects', 'lucidmedia-5-1024x1024.png'),
      getImgUrl('projects', 'stickerbros-2-1024x1024.png'),
    ],
  };

  const posts = {
    label: 'Recent Posts',
    _: [
      {
        label: `10 Landing Page Do’s and Don’ts`,
        img: getImgUrl('posts', '10-Landing-Page-Dos-and-Donts-1024x534.jpg'),
      },
      {
        label: `10 Simple Ways to Improve Your Website Copy for Higher Conversions`,
        img: getImgUrl('posts', 'improve-your-website-copy-1.jpg'),
      },
      {
        label: `Custom WordPress Development: A Comprehensive Guide`,
        img: getImgUrl('posts', 'photo-1454165205744-3b78555e5572-845x563-1.jpg'),
      },
    ]
  }

  const footer = {
    label: 'Want to see if Icepick is the right fit for you?',
    text: 'Give us a shout and let’s see if we’re the right match for you and your business!',
  }

  return {upCity, header, buttons, partners, icons, techsHeader, techs, clients, projects, posts, footer}
});