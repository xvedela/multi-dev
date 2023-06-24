import useHelpers from "../helpers/useHelpers.js";

const {createIUG} = useHelpers();
const IUG = createIUG();

IUG.setDirectory('works');
export default (function useOurWork() {
    const work = {
        lg: "bg-gradient-to-b from-[#F3C57A] to-[#E94867]",
        img: IUG.generateImageUrl("cloudvara-screenshot.png"),
        company: "Cloudvara",
        desc: `Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.`,
        url: "https://cloudvara.com/",
        text: "text-[#FFFFFF]",
        bg: "bg-[#3B3D9C]",
    }

    const works = new Array(6);
    for (let id = 0; id < 6; id++) {
        works[id] = work;
    }

    return works;
});