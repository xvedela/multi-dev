import useHelpers from "../helpers/useHelpers.js";

const {createIUG} = useHelpers();
const IUG = createIUG();

IUG.setDirectory('posts');

export default function useBlogs() {
    return {
        img: IUG.generateImageUrl('post-featured-image.png'),
        title: `Custom WordPress Development: A
Comprehensive Guide`,
        meta: 'Nick Meagher | May 11, 2023',
        text: `Should you use a WordPress Theme or go with Custom
WordPress Development from scratch? It all depends on your
business goals.`
    }
}