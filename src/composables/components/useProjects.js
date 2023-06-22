import useHelpers from '../helpers/useHelpers.js';

const {generateImageUrl} = useHelpers();

export default function useProjects() {
    return {
        heading: 'Recent Projects',
        projects: [
            generateImageUrl('projects', 'Cart-Rescue-1-1-1024x1024.png'),
            generateImageUrl('projects', 'Freelanceleads-3-1024x1024.png'),
            generateImageUrl('projects', 'lucidmedia-5-1024x1024.png'),
            generateImageUrl('projects', 'stickerbros-2-1024x1024.png'),
        ],
    };
};