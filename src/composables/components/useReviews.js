export default function useReviews() {
  const data = Array(3).fill({
    "authorImage": "https://icepick.co/wp-content/uploads/2022/08/1661371646793-300x300.jpeg",
    "authorName": "Jennifer Hall",
    "companyName": "AegisLiving",
    "websiteUrl": "https://www.aegisliving.com/",
    "reviewText": `Icepick was able to help us get a very difficult web redesign
project across the finish line and continues to manage a large list
of projects to help improve user experience and SEO. The team is
knowledgeable, highly skilled and very responsive.`,
  });
  const response = {data};

  return new Promise((resolve, reject) => {
    const data = response.data;
    if (data) resolve(data); // Promise fulfilled with the data
    else reject('Error: Data not found'); // Promise rejected with an error message
  });
};