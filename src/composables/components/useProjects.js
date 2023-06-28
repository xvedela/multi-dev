export default function useProjects() {
  const projectImages = [
    "https://icepick.co/wp-content/uploads/2023/05/stickerbros-2.png",
    "https://icepick.co/wp-content/uploads/2023/05/stickerbros-2.png",
    "https://icepick.co/wp-content/uploads/2023/05/Freelanceleads-3.png",
    "https://icepick.co/wp-content/uploads/2023/05/Cart-Rescue-1-1.png",
  ];
  const websiteUrls = [
    "#",
    "#",
    "#",
    "#",
  ];
  const data = projectImages.map((projectImage, index) => ({
    projectImage,
    websiteUrl: websiteUrls[index],
  }));
  const response = {data};

  return new Promise((resolve, reject) => {
    const data = response.data;
    if (data) resolve(data); // Promise fulfilled with the data
    else reject('Error: Data not found'); // Promise rejected with an error message
  });
};