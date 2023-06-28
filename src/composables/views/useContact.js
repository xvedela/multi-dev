import { reactive } from 'vue';

export default function useContact() {
  return reactive({
    heading: 'Contact Us',
    text: "Whether you're needing help with a new project or just want to pick our brain we're here for you!",
  });
};