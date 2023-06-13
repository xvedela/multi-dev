<template>
  <footer class="bg-footer text-white flex flex-col pt-[3.91vw] max-md:pt-12 px-[20.31vw] max-md:px-5">
    <div class="flex justify-between max-md:flex-col">
      <div class="flex flex-col">
        <logo-multi-dev class="mb-[1.67vw] max-md:mb-12"/>
        <p class="mb-[1.35vw] max-md:mb-7 text-sm w-7/12"
           v-text="footerInfo.description"/>
        <p class="mb-[1.3vw] max-md:mb-7" v-text="footerInfo.followUs"/>
        <ul class="flex gap-x-6">
          <li v-for="(icon, index) in socialMediaIcons" :key="index"><a :href="icon.href">
            <font-awesome :_class="icon._class"/>
          </a></li>
        </ul>
      </div>
      <div class="flex gap-x-[1.56vw] max-md:gap-x-5 max-md:ml-0 max-md:mt-8">
        <ul class="flex flex-col gap-y-4" :class="footerNavLinks.label">
          <li v-for="(link, index) in footerNavLinks.links" :key="index">
            <router-link :to="link.to" v-text="link.title"/>
          </li>
        </ul>
        <ul class="flex flex-col gap-y-4" :class="webDesignCompanies.label">
          <li v-for="(design, index) in webDesignCompanies.links"
              :key="index"><a :href="design.href" v-text="design.title"/></li>
        </ul>
      </div>
    </div>
    <div
        class="flex justify-between my-[1.3vw] border-t-2 border-t-white opacity-80 border-opacity-20 pt-[1.3vw] text-xs mt-[5.21vw] max-md:mt-10  max-md:flex-col-reverse max-md:gap-y-7 max-md:py-10">
      <p>
        <font-awesome :_class="subFooterInfo._class"/>
        {{ subFooterInfo.text }}
      </p>
      <ul class="flex gap-x-[1.3vw] justify-between">
        <li v-for="(link, index) in subFooterNavLinks" :key="index"><a :href="link.text" v-text="link.text"/></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import LogoMultiDev from "../assets/logos/LogoMultiDev.vue";
import {useFooter} from "../composables/useFooter.js";

const {
  socialMediaIcons,
  footerNavLinks,
  footerInfo,
  webDesignCompanies,
  subFooterInfo,
  subFooterNavLinks
} = useFooter();
</script>
