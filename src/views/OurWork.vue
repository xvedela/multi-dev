<template>
  <section class="bg-home text-center">
    <div class="w-fit flex flex-col items-center gap-y-7 md:gap-y-6 mx-5 sm:mx-auto py-10 md:pt-24 md:pb-28">
      <h1 class="text-white text-4xl sm:text-6xl font-bold sm:font-medium" v-text="header.label"/>
      <p class="w-11/12 text-desc text-[max(16px,1.2vw)] tracking-tighter"
         v-text="header.text"/>
    </div>
  </section>
  <div
      class="w-96 md:w-[58vw] flex flex-col gap-y-12 md:gap-y-7 -ml-5 sm:mx-auto mt-16 md:mt-9 mb-48 md:mb-16 text-white">
    <div v-for="(project, index) in projects.websites" :key="index"
         class="flex max-xl:flex-col max-lg:p-4 max-xl:p-8 xl:pt-16 xl:pr-24 gap-y-8 md:gap-x-24 rounded-3xl md:rounded-xl overflow-hidden"
         :class="project.lg"
    >
      <img :src="project.img"
           class="w-full xl:w-1/2 max-sm:rounded-xl object-cover"
           :alt="project.company + ' logo'"/>
      <div class="flex flex-col w-fit gap-y-7 max-sm:items-start max-xl:items-center max-sm:ml-10 mb-7 xl:mb-20">
        <h2 v-text="project.company"
            class="text-2xl sm:text-4xl font-medium"/>
        <p v-text="project.desc"
           class="text-lg text-[#EEF8FF]"/>
        <a href="#" v-text="projects.button" class="w-fit px-8 py-4 rounded-3xl"
           :class="project.bg + ' ' + project.color"/>
      </div>
    </div>
  </div>
  <section>
    <div
        class="bg-home flex flex-col md:items-center gap-y-2 md:gap-y-1 py-[max(40px,4.38vw)] max-md:pl-5 max-md:text-left;">
      <p class="text-white text-[max(24px,3vw)]"
         v-text="footer.label"/>
      <router-link class="w-fit text-button text-[max(24px,3.18vw)] underline"
                   :to="{ name: footer.contact.name }"
                   v-text="footer.contact.text"/>
    </div>
  </section>
</template>

<script setup>
import useOurWork from "../composables/useOurWork.js";

const {header, projects, footer} = useOurWork();
</script>
