import {reactive} from "vue";

export default function useTemplatedWebsites() {
    return reactive([
        {
            title: 'What are you using to build the website?',
            answer: 'Answer one',
            isExpanded: false // Initial value
        },
        {
            title: 'How long will it take for my website to be built?',
            answer: 'Answer two',
            isExpanded: false
        },
        {
            title: 'Do I have a say in how my website looks?',
            answer: 'Answer three',
            isExpanded: false
        }
    ]);
}