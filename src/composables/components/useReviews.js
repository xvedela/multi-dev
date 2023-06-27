export default function useReviews() {
  const response = {
    "reviews": Array(3).fill({
      "authorImage": "https://icepick.co/wp-content/uploads/2022/08/1661371646793-300x300.jpeg",
      "authorName": "Jennifer Hall",
      "companyName": "AegisLiving",
      "websiteUrl": "https://www.aegisliving.com/",
      "reviewText": `Icepick was able to help us get a very difficult web redesign
project across the finish line and continues to manage a large list
of projects to help improve user experience and SEO. The team is
knowledgeable, highly skilled and very responsive.`,
    }),
  };

  return response.reviews;
};