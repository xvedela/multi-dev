export default () => ({
  pageHeader: {
    contactLabel: "Contact Us",
    contactDescription: "Whether you're needing help with a new project or just want to pick our brain we're here for you!",
  },
  form: {
    beforeLabel: "READY TO GET STARTED?",
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
    buttonLabel: "Submit",
  }
});