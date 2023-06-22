import useHelpers from '../helpers/useHelpers.js';

const {createIUG} = useHelpers();
const IUG = createIUG();

IUG.setDirectory('clients');

export default function useReviews() {
    return {
        heading: 'Hear It From Our Clients',
        reviews: [
            {
                img: IUG.generateImageUrl('1661371646793-300x300.png'),
                author: 'Jennifer Hall',
                company: 'AegisLiving',
                text: `Icepick was able to help us get a very difficult web redesign
project across the finish line and continues to manage a large list
of projects to help improve user experience and SEO. The team is
knowledgeable, highly skilled and very responsive.`,
            },
            {
                img: IUG.generateImageUrl('jeff-300x300.png'),
                author: 'Jeff Rasansky',
                company: 'JR Law Firm',
                text: `The guys at Icepick do an amazing job, and have helped us with
more than one website. Always professional, quick to respond,
great eye for design, and more than willing to help if anything
comes up!`,
            },
            {
                img: IUG.generateImageUrl('sondra-300x300.png'),
                author: 'Sondra Heffernan',
                company: 'Infowerks',
                text: `Icepick recently updated our company website. Our company is
beyond happy with our new design, the delivery, and their
professionalism in working with multiple decision makers. Looking
forward to working with Icepick on future projects.`,
            },
        ],
    };
};