import stickerbros from "../../assets/projects/stickerbros.webp"

export default function useProjects() {
  return {
    "heading": "Recent Project",
    "projects": Array(4).fill({
      "projectImage": stickerbros,
      "websiteUrl": "https://www.stickerbros.com/",
    }),
    "btnLabel": 'View All Projects <i class="fa-solid fa-arrow-right"/>',
  };
};