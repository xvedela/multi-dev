import useHelpers from '../helpers/useHelpers.js';

const {createIUG} = useHelpers();
const IUG = createIUG();

IUG.setDirectory('projects');

export default function useProjects() {
    return [
        IUG.generateImageUrl('Cart-Rescue-1-1-1024x1024.png'),
        IUG.generateImageUrl('Freelanceleads-3-1024x1024.png'),
        IUG.generateImageUrl('lucidmedia-5-1024x1024.png'),
        IUG.generateImageUrl('stickerbros-2-1024x1024.png'),
    ];
};