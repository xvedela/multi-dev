<template>
  <footer class="bg-footer text-white flex flex-col pt-[3.91vw] max-md:pt-12 px-[20.31vw] max-md:px-5">
    <div class="flex justify-between max-md:flex-col">
      <div class="flex flex-col">
        <logo-multi-dev class="mb-[1.67vw] max-md:mb-12"/>
        <p class="mb-[1.35vw] max-md:mb-7 text-sm w-7/12"
           v-text="'We help businesses generate more revenue through strategic web design and SEO services.'"
        />
        <p class="mb-[1.3vw] max-md:mb-7" v-text="'Follow Us'"/>
        <ul class="flex gap-x-6">
          <li v-for="icon in socialMediaIcons">
            <i :class="icon"/>
          </li>
        </ul>
      </div>
      <div class="flex gap-x-[1.56vw] max-md:gap-x-5 max-md:ml-0 max-md:mt-8">
        <div class="flex flex-col gap-y-[1.04vw] max-md:gap-y-4">
          <p v-text="'Learn More'"/>
          <ul class="flex flex-col gap-y-4">
            <li v-for="link in footerNavLinks">
              <router-link :to="link.to" v-text="link.title"/>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-y-[1.04vw] max-md:gap-y-4">
          <p v-text="'Locations'"/>
          <ul class="flex flex-col gap-y-4">
            <li v-for="company in webDesignCompanies">
              <a href="#" v-text="company"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div
          class="flex justify-between my-[1.3vw] border-t-2 border-t-white opacity-80 border-opacity-20 pt-[1.3vw] text-xs mt-[5.21vw] max-md:mt-10  max-md:flex-col-reverse max-md:gap-y-7 max-md:py-10"
      >
        <p v-text="'© 2023 - Icepick Development, LLC'"/>
        <ul class="flex gap-x-[1.3vw] justify-between">
          <li><a href="#" v-text="'Privacy Policy'"/></li>
          <li><a href="#" v-text="'Sitemap'"/></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoMultiDev from "../assets/logos/LogoMultiDev.vue";
import {useFooter} from "../composables/useFooter.js";

const {socialMediaIcons, footerNavLinks, webDesignCompanies} = useFooter();
</script>
