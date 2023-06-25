import useHelpers from '../helpers/useHelpers.js';

const {createIUG} = useHelpers();
const IUG = createIUG();

IUG.setDirectory('projects');

export default function useProjects() {
    const project = IUG.generateImageUrl('Cart-Rescue-1-1-1024x1024.png');
    return Array(4).fill(project);
};