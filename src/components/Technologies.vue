<template>
  <div class="flex flex-col items-center gap-y-8 md:gap-y-14 mb-28 md:mb-20 mt-12 2xl:mt-20">
    <h2 class="text-label font-semibold text-2xl sm:max-2xl:text-3xl 2xl:text-4xl max-2xl:text-center"
        v-text="'Technologies We Use'"/>
    <ul class="flex gap-x-20 max-md:overflow-x-scroll example">
      <li v-for="(_, index) in useTechnologies()" :key="index" class="flex-shrink-0">
        <img src="../assets/technologies/figma.svg" alt="technology logo"/>
      </li>
    </ul>
  </div>
</template>


<script setup>
import useTechnologies from "../composables/components/useTechnologies.js";
</script>
