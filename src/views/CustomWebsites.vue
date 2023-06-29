<template>
  <section
      class="relative bg-home overflow-hidden">
    <div
        class="flex flex-col max-lg:items-center gap-y-7 lg:gap-y-5 w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] mx-5 sm:mx-auto py-10 sm:max-2xl:py-16 2xl:py-20 max-lg:text-center">
      <h1 class="text-white text-4xl sm:max-2xl:text-5xl 2xl:text-6xl font-bold lg:font-medium" v-html="heading"/>
      <p class="lg:w-3/5 text-desc sm:text-xl tracking-tighter" v-text="text"/>
      <router-link :to="{name: 'Contact'}" v-text="buttonText"
                   class="text-white w-fit px-8 py-4 border-2 border-desc rounded-4xl max-sm:hidden hover:border-white"/>
    </div>
    <img class="absolute -top-20 right-0 max-2xl:hidden" src="../assets/images/custom-websites.png"
         alt="custom websites">
  </section>
  <section class="max-sm:mx-5">
    <div class="flex max-2xl:flex-col max-2xl:items-center">
      <div class="2xl:w-1/2 flex flex-col gap-y-8 py-20 md:py-36 sm:px-12 [&_p]:text-[#52627A] [&_p]:text-lg [&>ul]:md:ml-10"
           v-html="content"/>
      <img src="../assets/images/custom-websites-bg.png" alt="background image" loading="lazy"/>
    </div>
  </section>
  <technologies/>
  <reviews/>
  <projects/>
  <contact/>
</template>
<script setup>
import useCustomWebsites from "../composables/views/useCustomWebsites.js";
import Technologies from "../components/Technologies.vue";
import Reviews from "../components/Reviews.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";

const {heading, text, buttonText, content} = useCustomWebsites();
</script>