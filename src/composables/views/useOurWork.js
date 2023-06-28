import companyImage from "../../assets/works/cloudvara.webp";

export default (function useOurWork() {
  return Array(6).fill({
    linearGradient: "bg-gradient-to-b from-[#F3C57A] to-[#E94867]",
    companyImage,
    companyName: "Cloudvara",
    companyDescription: `Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.`,
    websiteUrl: "https://cloudvara.com/",
    textColor: "text-[#FFFFFF]",
    backgroundColor: "bg-[#3B3D9C]",
  });
});