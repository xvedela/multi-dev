import useHelpers from "../helpers/useHelpers.js";

const {createIUG} = useHelpers();
const IUG = createIUG();
IUG.setDirectory('technologies');

export default function useTechnologies() {
    const technology = IUG.generateImageUrl('figma.svg');
    return Array(6).fill(technology);
};