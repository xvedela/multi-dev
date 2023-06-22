import Contact from "../../components/Contact.vue";

export default (function useContact() {
  const header = {
    label: "Contact Us",
    text:
      "Whether you're needing help with a new project or just want to pick our brain we're here for you!",
  };
  const form = {
    component: Contact,
    before: "READY TO GET STARTED?",
    label: "Let's Grow Together.",
    fields: [
      {
        type: "text",
        placeholder: "Name*",
        required: true,
      },
      {
        type: "email",
        placeholder: "Email*",
        required: true,
      },
      {
        type: "text",
        placeholder: "Company Name*",
        required: true,
      },
      {
        type: "url",
        placeholder: "Website URL",
        required: false,
      },
    ],
    button: "Submit",
  };
  return {header, form};
});
