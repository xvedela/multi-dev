import jenniferHall from "../../assets/reviews/jennifer-hall.jpeg";

export default function useReviews() {
  return {
    "heading": "Hear It From Our Clients",
    "reviews": Array(5).fill({
      "authorImage": jenniferHall,
      "authorName": "Jennifer Hall",
      "companyName": "AegisLiving",
      "websiteUrl": "https://www.aegisliving.com/",
      "reviewText": `Icepick was able to help us get a very difficult web redesign
project across the finish line and continues to manage a large list
of projects to help improve user experience and SEO. The team is
knowledgeable, highly skilled and very responsive.`,
    }),
  };
};