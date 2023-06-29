import useArrows from "../useArrows.js";
import cw from "../../assets/icons/custom-websites.svg";
import seo from "../../assets/icons/search-engine-optimization.svg";
import postImage from "../../assets/blogs/10-Landing-Page-Dos-and-Donts.jpg";

const {right} = useArrows();

export default (function useHome() {

  const header = {
    label: 'We Design & Develop Websites That Deliver Results',
    text: `Our goal is to develop simple and modern websites that are optimized
             for both search engines and user experience, ultimately driving more
             traffic and revenue to your business.`,
  };

  const buttons = {
    bac: `Book a Call ${right}`,
    ow: 'Our Work <i class="fa-solid fa-arrow-right"/>',
    lm: `Learn More ${right}`,
    lt: `Let's Talk ${right}`,
    rm: `Read More ${right}`,
    vapo: `View All Posts ${right}`,
  };

  const partners = {
    before:
      "before:content-[''] before:w-[15vw] before:h-0.5 before:mr-6 before:bg-white before:opacity-20 before:max-md:hidden",
    label: 'Trusted by Innovative Companies Worldwide',
    after:
      "after:content-[''] after:w-[15vw] after:h-0.5 after:ml-6 after:bg-white after:opacity-20 after:max-md:hidden",
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
      icon: cw,
      label: 'Custom Websites',
      text: `Whether you’re looking to build a custom
marketing website or the next Twitter we can
help you build it.`,
      name: 'CustomWebsites'
    },
    {
      icon: seo,
      label: 'Search Engine Optimization',
      text: `You’ve got yourself a beautiful website but now
you need your customers to find it, let us help
you.`,
      name: 'TemplatedWebsites',
    },
  ];

  const posts = {
    label: 'Recent Posts',
    _: Array(3).fill(
      {
        postImage,
        label: `10 Landing Page Do’s and Don’ts`,
      }),
  };

  const footer = {
    label: 'Want to see if Icepick is the right fit for you?',
    text: 'Give us a shout and let’s see if we’re the right match for you and your business!',
  }

  return {header, buttons, partners, icons, techsHeader, posts, footer}
});