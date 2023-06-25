import useHelpers from "../helpers/useHelpers.js";

const {createIUG} = useHelpers();
const IUG = createIUG();

IUG.setDirectory('blogs');

export default function useBlogs() {
    const blog = {
        img: IUG.generateImageUrl('10-Landing-Page-Dos-and-Donts-1024x534.jpg'),
        title: `Custom WordPress Development: A
Comprehensive Guide`,
        meta: 'Nick Meagher | May 11, 2023',
        text: `Should you use a WordPress Theme or go with Custom
WordPress Development from scratch? It all depends on your
business goals.`
    }

    return Array(6).fill(blog);
}