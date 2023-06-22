<template>
  <section
      class="text-white bg-home flex flex-col items-center gap-y-5 md:gap-y-14 py-20 max-md:pb-12 max-md:pt-7 max-xl:px-5">
    <h2 v-text="heading" class="text-2xl md:text-4xl font-medium"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
      <img v-for="(project, index) in projects" :key="index" :src="project" alt="project image"/>
    </div>
    <router-link :to="{name: 'OurWork'}"
                 class="flex items-center gap-x-2 mt-7 px-8 py-4 border-2 border-desc rounded-4xl">
      View All Projects <i class="fa-solid fa-arrow-right text-white"/>
    </router-link>
  </section>
</template>


<script setup>
import useProjects from "../composables/components/useProjects.js";

const {heading, projects} = useProjects();
</script>