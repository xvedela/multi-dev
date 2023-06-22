export default function useContact() {
  const form = {
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
  return {form};
};
