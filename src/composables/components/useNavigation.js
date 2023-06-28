import {reactive} from 'vue';

export default function useNavigation() {
  return reactive([
    {name: 'Home', title: 'Home'},
    {
      name: 'Services',
      title: 'Services',
      subLinks: [
        {name: 'TemplatedWebsites', title: 'Templated Websites'},
        {name: 'CustomWebsites', title: 'Custom Websites'},
      ],
    },
    {name: 'OurWork', title: 'Our Work'},
    {name: 'Blog', title: 'Blog'},
  ]);
};
