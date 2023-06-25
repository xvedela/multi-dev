import useHelpers from '../helpers/useHelpers.js';

const {createIUG} = useHelpers();
const IUG = createIUG();

IUG.setDirectory('clients');

export default function useReviews() {

    const review = {
        img: IUG.generateImageUrl('1661371646793-300x300.png'),
        author: 'Jennifer Hall',
        company: 'AegisLiving',
        text: `Icepick was able to help us get a very difficult web redesign
project across the finish line and continues to manage a large list
of projects to help improve user experience and SEO. The team is
knowledgeable, highly skilled and very responsive.`,
    };

    return Array(3).fill(review);
};