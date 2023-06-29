import {reactive} from "vue";
import projectImage from "../../assets/images/template-project.png"
import hosting from "../../assets/seo/hosting-icon.svg";
import edits from "../../assets/seo/edits-icon.svg";
import fast from "../../assets/seo/fast-icon.svg";
import seo from "../../assets/seo/seo-icon.svg";
import analytics from "../../assets/seo/analytics-icon.svg";
import profile from "../../assets/seo/profile-icon.svg";


export default function useTemplatedWebsites() {
  return reactive({
    heading: 'Templated Websites for<br/><span class="text-button">Small Businesses</span>',
    text: 'If your business doesn’t need a custom website you can utilize our templates and get it up and running in 2-3 weeks!',
    buttonText: 'Get In Touch',
    seoAndSpeed: {
      heading: 'Build for <span class="text-home">Speed and Seo</span>',
      text: 'Everything you would expect with a website comes standard with us.',
      _: [
        {
          icon: hosting,
          heading: "Hosting Included",
          text: "Hosting fees are built right into the monthly payment."
        },
        {
          icon: edits,
          heading: "Unlimited Edits",
          text: "We’ll help you update any content or photos you might want at any time!"
        },
        {
          icon: fast,
          heading: "Wicked Fast",
          text: "We know how to get your business ranking on Google and all of our websites are built with SEO in mind."
        },
        {
          icon: seo,
          heading: "SEO Friendly",
          text: "Since our websites are built from scratch, you can enjoy blazing fast page speed scores which help your users stay on your website but also rank higher with SEO."
        },
        {
          icon: analytics,
          heading: "Google Analytics",
          text: "It’s important to track how your website is being used and Google Analytics helps you understand exactly who your users are and where they’re going."
        },
        {
          icon: profile,
          heading: "Google Business Profile",
          text: "We also help you set up Google Business Profile which is a great tool for local businesses to get more leads."
        }
      ],
    },
    pricing: {
      heading: 'Simple and <span class="text-home">Affordable</span> Pricing',
      text: 'We can get your website up and running for as little as $500.',
      categories: [
        {
          bgAndText: 'bg-white text-[#515D72]',
          label: 'BASIC',
          text: '<span class="text-3xl text-[#25344F] font-medium">$199</span> per month',
          _: [
            '<li class="bg-[#EBF6FF]"><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"></i> Up to 5 Pages</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"></i> Hosting Included</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"></i> SEO Friendly</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"></i> Lifetime Updates</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"></i> 24-month Service Minimum</li>',
          ],
        },
        {
          bgAndText: 'bg-[#25344F] text-[#F0F0F0]',
          label: 'STANDARD',
          text: '<span class="text-3xl text-white font-medium">$249</span> per month',
          _: [
            '<li class="bg-[#214863]"><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"></i> Up to 10 Pages</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"></i> Hosting Included</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"></i> SEO Friendly</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"></i> Lifetime Updates</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"></i> Google Analytics Setup</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"></i> Google Business Profile Setup</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"></i> 24-month Service Minimum</li>'
          ],
        },
        {
          bgAndText: 'bg-white text-[#515D72]',
          label: 'PREMIUM',
          text: '<span class="text-3xl text-[#25344F] font-medium">299</span> per month',
          _: [
            '<li class="w-full bg-[#FFF7E6]"><i class="fa-solid fa-circle fa-2xs text-button"></i> Up to 15 Pages</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-button"></i> Hosting Included</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-button"></i> SEO Friendly</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-button"></i> Lifetime Updates</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-button"></i> Google Analytics Setup</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-button"></i> Google Business Profile Setup</li>',
            '<li><i class="fa-solid fa-circle fa-2xs text-button"></i> 24-month Service Minimum</li>'
          ],
        },
      ],
    },
    projects: {
      heading: `A Few of Our Template <span class="text-home">Projects</span>`,
      _: Array(3).fill({
        projectImage,
        companyName: 'ATM Sports',
        buttonText: 'View Website <i class="fa-solid fa-arrow-right"></i>',
      }),
    },
    faqs: {
      heading: 'FAQs',
      _: [
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
      ],
    },
  });
}