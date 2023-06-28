<template>
  <section class="text-white bg-home">
    <div
        class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto">
      <h2 class="font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl max-2xl:text-center" v-text="'Recent Projects'"/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
        <img v-for="(project, index) in projects" :key="index" :src="project.projectImage"
             alt="project image"/>
      </div>
      <router-link :to="{name: 'OurWork'}"
                   class="flex items-center gap-x-2 w-fit px-8 py-4 border-2 border-desc rounded-4xl">
        View All Projects <i class="fa-solid fa-arrow-right text-white"/>
      </router-link>
    </div>
  </section>
</template>


<script setup>
import useProjects from "../composables/components/useProjects.js";
import {onMounted} from "vue";

let projects;

onMounted(async () => projects = await useProjects());
</script>