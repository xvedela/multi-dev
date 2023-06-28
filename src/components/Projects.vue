<template>
  <section class="text-white bg-home">
    <div
        class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center pt-7 sm:max-2xl:pt-13 2xl:pt-20 mx-5 sm:mx-auto">
      <h2 class="font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl mb-5 sm:max-2xl:mb-8 2xl:mb-12"
          v-text="heading"/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-7">
        <project v-for="(project, index) in projects" :key="index" :project="project"/>
      </div>
      <router-link :to="{name: 'OurWork'}" v-html="btnLabel"
                   class="flex items-center gap-x-2 my-12 sm:max-2xl:my-16 2xl:my-20 px-8 py-4 border-2 border-white border-opacity-30 rounded-4xl"/>
    </div>
  </section>
</template>


<script setup>
import useProjects from "../composables/components/useProjects.js";
import Project from "./Project.vue";

const {heading, projects, btnLabel} = useProjects();
</script>