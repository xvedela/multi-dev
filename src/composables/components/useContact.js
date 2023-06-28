import { reactive } from "vue";

export default function useContact() {
  return reactive({
    label: "READY TO GET STARTED?",
    heading: "Let's Grow Together.",
    fields: [
      {
        type: 'text',
        placeholder: 'Name*',
        required: true
      },
      {
        type: 'email',
        placeholder: 'Email*',
        required: true
      },
      {
        type: 'text',
        placeholder: 'Company Name*',
        required: true
      },
      {
        type: 'url',
        placeholder: 'Website URL'
      },
    ],
    buttonText: "Submit",
  });
};
