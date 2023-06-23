const getImgUrl = (imgName) =>
  new URL(`../../assets/images/websites/${imgName}`, import.meta.url).href;
export default (function useOurWork() {
  const header = {
    label: "Our Work",
    text: "We take pride in the work we do and love helping businesses succeed online.",
  };
  const projects = {
    button: "Visit Site",
    websites: [
      {
        lg: "bg-gradient-to-b from-[#4B7786] to-[#2F505E]",
        img: getImgUrl("corewood-care.png"),
        company: "Corewood Care",
        desc: `Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.`,
        color: "text-[#2E4F5B]",
        bg: "bg-[#FFFFFF]",
      },
      {
        lg: "bg-gradient-to-b from-[#292929] to-black",
        img: getImgUrl("kojima-productions.png"),
        company: "Kojima Productions",
        desc: `Kojima Productions Co., Ltd. is a Japanese video game development
          studio founded in 2005 by video game designer Hideo Kojima, creator of
          the Metal Gear series.`,
        color: "text-[#222222]",
        bg: "bg-[#FFFFFF]",
      },
      {
        lg: "bg-gradient-to-b from-[#2586BC] to-[#003F72]",
        img: getImgUrl("aegisliving.png"),
        company: "Aegis Living",
        desc: `Áegis Living is a national leader in assisted living and memory care,
          offering a selection of senior residences to meet the growing needs of
          today's aging population.`,
        color: "text-[#FFFFFF]",
        bg: "bg-[#F26924]",
      },
      {
        lg: "bg-gradient-to-b from-[#91ACC6] to-[#7F97AD]",
        img: getImgUrl("custom-homes-screenshot.png"),
        company: "3rd Street Custom Homes",
        desc: `3rd Street Custom Homes is family owned home builder out of Dallas,
          Texas. Their custom homes are beautiful so their website needed to
          showcase the same attention to detail.`,
        color: "text-[#FFFFFF]",
        bg: "bg-[#D12E2D]",
      },
      {
        lg: "bg-gradient-to-b from-[#F3C57A] to-[#E94867]",
        img: getImgUrl("cloudvara-screenshot.png"),
        company: "Cloudvara",
        desc: `Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.`,
        color: "text-[#FFFFFF]",
        bg: "bg-[#3B3D9C]",
      },
      {
        lg: "bg-gradient-to-b from-[#89BC51] to-[#62AC47]",
        img: getImgUrl("infowerks-screenshot.png"),
        company: "Infowerks",
        desc: `InfoWerks has been providing pain-free data management solutions for
          healthcare since 1997. We modernized their digital presence online
          through a strategic web design and development overhaul.`,
        color: "text-[#FFFFFF]",
        bg: "bg-[#3B3D9C]",
      },],
  };
  const footer = {
    label: "Ready to work with us?",
    contact: {
      name: "Contact",
      text: "Let's build something awesome.",
    }
  };
  return {header, projects, footer};
});