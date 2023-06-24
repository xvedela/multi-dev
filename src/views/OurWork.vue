<template>
  <section
      class="bg-home flex flex-col items-center gap-y-7 lg:gap-y-6 max-sm:px-5 py-10 sm:max-2xl:py-16 2xl:py-20 text-center">
    <h1 class="text-white text-4xl sm:max-2xl:text-5xl 2xl:text-6xl font-bold lg:font-medium" v-text="'Our Work'"/>
    <p class="lg:w-3/5 text-desc sm:text-xl tracking-tighter"
       v-text="'We take pride in the work we do and love helping businesses succeed online.'"/>
  </section>
  <div
      class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col gap-y-12 sm:max-2xl:gap-y-10 2xl:gap-y-7 mx-5 sm:mx-auto mt-16 sm:max-2xl:mt-12 2xl:mt-9 mb-48 sm:max-2xl:mb-32 2xl:mb-16 text-white">
    <div v-for="(work, index) in works" :key="index"
         class="flex max-xl:flex-col max-lg:p-4 max-xl:p-8 xl:pt-16 xl:pr-24 gap-y-8 md:gap-x-24 rounded-3xl md:rounded-xl"
         :class="work.lg"
    >
      <img :src="work.img"
           class="xl:w-1/2 max-sm:rounded-xl"
           :alt="work.company + ' logo'"/>
      <div class="flex flex-col gap-y-7 sm:max-xl:items-center sm:max-xl:text-center max-sm:ml-10 mb-7 xl:mb-20">
        <h2 v-text="work.company"
            class="text-2xl sm:max-2xl:text-3xl 2xl:text-4xl font-medium"/>
        <p v-text="work.desc"
           class="text-lg text-[#EEF8FF]"/>
        <a class="w-fit px-8 py-4 rounded-3xl" :class="work.bg + ' ' + work.text" :href="work.url" target="_blank"
           v-text="'Visit Site'"/>
      </div>
    </div>
  </div>
  <section
      class="bg-home lg:text-center max-lg:px-5 py-10 sm:max-2xl:py-16 2xl:py-24 text-2xl sm:max-2xl:text-4xl 2xl:text-6xl [&>*]:leading-normal">
    <p class="text-white" v-text="'Ready to work with us?'"/>
    <router-link class="text-button underline" :to="{ name: 'Contact' }" v-text="`Let's build something awesome.`"/>
  </section>
</template>

<script setup>
import useOurWork from "../composables/views/useOurWork.js";

const works = useOurWork();
</script>