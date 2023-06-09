<template>
  <footer class="bg-black text-white">
    <div class="pt-[max(40px,3.91vw)] mx-[max(20px,20.31vw)] flex flex-col">
      <div class="flex justify-between max-sm:flex-col">
        <div class="flex flex-col">
          <logo-multi-dev class="mb-[1.67vw] max-sm:mb-12"/>
          <p class="mb-[1.35vw] text-sm w-7/12 max-sm:mb-7" v-text="'We help businesses generate more revenue through strategic web\n'+
'            design and SEO services.'"/>
          <p class="mb-[1.3vw] max-sm:mb-7" v-text="'Follow Us'"/>
          <ul class="flex gap-x-6">
            <li>
              <icon-facebook/>
            </li>
            <li>
              <icon-instagram/>
            </li>
            <li>
              <icon-twitter/>
            </li>
          </ul>
        </div>
        <div class="flex gap-x-[max(20px,1.56vw)] max-sm:ml-0 max-sm:mt-8">
          <div class="flex flex-col gap-y-[max(18px,1.04vw)]">
            <p>Learn More</p>
            <ul
                class="flex flex-col gap-y-4"
            >
              <li v-for="link in links">
                <router-link :to="link.to" v-text="link.text"/>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-y-[max(18px,1.04vw)]">
            <p v-text="'Locations'"/>
            <ul
                class="flex flex-col gap-y-4"
            >
              <li v-for="design in webDesigns">
                <a href="#" v-text="design + ' Web Design'"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div
            class="flex max-sm:flex-col-reverse max-sm:gap-y-7 max-sm:py-10 my-[1.3vw] justify-between border-t-2 border-t-white border-opacity-20 pt-[1.3vw] opacity-80 text-xs mt-[max(40px,5.21vw)]"
        >
          <p v-text="'© 2023 - Icepick Development, LLC'"/>
          <ul class="flex gap-x-[1.3vw] justify-between">
            <li><a href="#" v-text="'Privacy Policy'"/></li>
            <li><a href="#" v-text="'Sitemap'"/></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoMultiDev from "../logos/LogoMultiDev.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import IconInstagram from "../icons/IconInstagram.vue";
import IconTwitter from "../icons/IconTwitter.vue";

const links = [
  {
    to: {
      name: 'Home'
    },
    text: "Home"
  },
  {
    to: {
      name: 'CustomWebsite'
    },
    text: "Custom Website"
  },
  {
    to: {
      name: "Home"
    },
    text: "Search Engine Optimization"
  },
  {
    to: {
      name: 'OurWork'
    },
    text: "Our Work"
  },
  {
    to: {
      name: 'Blog'
    },
    text: "Blog"
  },
  {
    to: {
      name: 'ContactUs'
    },
    text: "Contact"
  },
];

const webDesigns = [
  "Dallas", "Plano", "Frisco", "Fort Worth", "Allen", "McKinney", "Grapevine"
];
</script>
