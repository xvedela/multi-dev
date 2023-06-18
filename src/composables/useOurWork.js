const getImgUrl = (imgName) =>
  new URL(`../assets/images/websites/${imgName}`, import.meta.url).href;
const useOurWork = () => ({
  pageHeader: {
    Label: "Our Work",
    Description: "We take pride in the work we do and love helping businesses succeed online.",
  },
  projects: {
    buttonLabel: "Visit Site",
    websites: [
      {
        linearGradient: "bg-linearGradient-to-b from-[#4B7786] to-[#2F505E]",
        companyImgUrl: getImgUrl("corewood-care.png"),
        companyName: "Corewood Care",
        companyDescription: `Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.`,
        textColor: "text-[#2E4F5B]",
        buttonBackgroundColor: "bg-[#FFFFFF]",
      },
      {
        linearGradient: "bg-linearGradient-to-b from-[#292929] to-black",
        companyImgUrl: getImgUrl("kojima-productions.png"),
        companyName: "Kojima Productions",
        companyDescription: `Kojima Productions Co., Ltd. is a Japanese video game development
          studio founded in 2005 by video game designer Hideo Kojima, creator of
          the Metal Gear series.`,
        textColor: "text-[#222222]",
        buttonBackgroundColor: "bg-[#FFFFFF]",
      },
      {
        linearGradient: "bg-linearGradient-to-b from-[#2586BC] to-[#003F72]",
        companyImgUrl: getImgUrl("aegisliving.png"),
        companyName: "Aegis Living",
        companyDescription: `Áegis Living is a national leader in assisted living and memory care,
          offering a selection of senior residences to meet the growing needs of
          today's aging population.`,
        textColor: "text-[#FFFFFF]",
        buttonBackgroundColor: "bg-[#F26924]",
      },
      {
        linearGradient: "bg-linearGradient-to-b from-[#91ACC6] to-[#7F97AD]",
        companyImgUrl: getImgUrl("custom-homes-screenshot.png"),
        companyName: "3rd Street Custom Homes",
        companyDescription: `3rd Street Custom Homes is family owned home builder out of Dallas,
          Texas. Their custom homes are beautiful so their website needed to
          showcase the same attention to detail.`,
        textColor: "text-[#FFFFFF]",
        buttonBackgroundColor: "bg-[#D12E2D]",
      },
      {
        linearGradient: "bg-linearGradient-to-b from-[#F3C57A] via-[#F39369] to-[#E94867]",
        companyImgUrl: getImgUrl("cloudvara-screenshot.png"),
        companyName: "Cloudvara",
        companyDescription: `Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.`,
        textColor: "text-[#FFFFFF]",
        buttonBackgroundColor: "bg-[#3B3D9C]",
      },
      {
        linearGradient: "bg-linearGradient-to-b from-[#89BC51] to-[#62AC47]",
        companyImgUrl: getImgUrl("infowerks-screenshot.png"),
        companyName: "Infowerks",
        companyDescription: `InfoWerks has been providing pain-free data management solutions for
          healthcare since 1997. We modernized their digital presence online
          through a strategic web design and development overhaul.`,
        textColor: "text-[#FFFFFF]",
        buttonBackgroundColor: "bg-[#3B3D9C]",
      },],
  },
  pageFooter: {
    contactLabel: "Ready to work with us?",
    contact: {
      name: "Contact",
      description: "Let's build something awesome.",
    }
  },
});

export default useOurWork;
