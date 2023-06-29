import useNavigation from './useNavigation.js';
import {reactive} from 'vue';

export default function useFooter() {
  const links = useNavigation();
  links.splice(2, 0, ...links[1].subLinks);
  links.splice(1, 1);
  return reactive({
    text: 'We help businesses generate more revenue through strategic web design and SEO services.',
    label: 'Follow Us',
    social: [
      {icon: '<i class="fa-brands fa-square-facebook fa-xl hover:text-[#4267B2]" />', url: '#'},
      {icon: '<i class="fa-brands fa-instagram fa-xl hover:text-[#E1306C]" />', url: '#'},
      {icon: '<i class="fa-brands fa-twitter fa-xl hover:text-[#1DA1F2]" />', url: '#'},
    ],
    learnMore: "before:content-['Learn_More']",
    links,
    locations: "before:content-['Locations']",
    companies: Array(7).fill({
      name: 'Dallas Web Design',
      url: '#',
    }),
    copyright: '<i class="fa-regular fa-copyright"></i> 2023 - Multi Dev Development, LLC',
    footer: [
      {title: 'Privacy Policy', url: '#'},
      {title: 'Sitemap', url: '#'},
    ],
  });
};
