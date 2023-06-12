<template>
  <footer class="bg-[#0B0B0B] text-white">
    <div class="pt-[max(40px,3.91vw)] mx-[max(20px,20.31vw)] flex flex-col">
      <div class="flex justify-between max-md:flex-col">
        <div class="flex flex-col">
          <logo-multi-dev class="mb-[1.67vw] max-md:mb-12" />
          <p
            class="mb-[1.35vw] text-sm w-7/12 max-md:mb-7"
            v-text="
              'We help businesses generate more revenue through strategic web\n' +
              '            design and SEO services.'
            "
          />
          <p class="mb-[1.3vw] max-md:mb-7" v-text="'Follow Us'" />
          <ul class="flex gap-x-6">
            <li v-for="icon in socialMediaIcons">
              <i :class="icon" />
            </li>
          </ul>
        </div>
        <div class="flex gap-x-[max(20px,1.56vw)] max-md:ml-0 max-md:mt-8">
          <div class="flex flex-col gap-y-[max(18px,1.04vw)]">
            <p v-text="'Learn More'" />
            <ul class="flex flex-col gap-y-4">
              <li v-for="link in footerNavLinks">
                <router-link :to="link.to" v-text="link.title" />
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-y-[max(18px,1.04vw)]">
            <p v-text="'Locations'" />
            <ul class="flex flex-col gap-y-4">
              <li v-for="company in webDesignCompanies">
                <a href="#" v-text="company" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div
          class="flex max-md:flex-col-reverse max-md:gap-y-7 max-md:py-10 my-[1.3vw] justify-between border-t-2 border-t-white border-opacity-20 pt-[1.3vw] opacity-80 text-xs mt-[max(40px,5.21vw)]"
        >
          <p v-text="'© 2023 - Icepick Development, LLC'" />
          <ul class="flex gap-x-[1.3vw] justify-between">
            <li><a href="#" v-text="'Privacy Policy'" /></li>
            <li><a href="#" v-text="'Sitemap'" /></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoMultiDev from "../logos/LogoMultiDev.vue";
import { useFooter } from "../../composables/useFooter";

const { socialMediaIcons, footerNavLinks, webDesignCompanies } = useFooter();
</script>
