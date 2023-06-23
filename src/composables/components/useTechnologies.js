import useHelpers from "../helpers/useHelpers.js";

const {createIUG} = useHelpers();
const IUG = createIUG();
IUG.setDirectory('technologies');

export default function useTechnologies() {
    return [
        IUG.generateImageUrl('figma.svg'),
        IUG.generateImageUrl('wordpress.svg'),
        IUG.generateImageUrl('woo.svg'),
        IUG.generateImageUrl('shopify.svg'),
        IUG.generateImageUrl('vue.svg'),
        IUG.generateImageUrl('laravel.svg'),
    ];
};