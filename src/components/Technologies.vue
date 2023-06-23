<template>
  <div class="flex flex-col items-center gap-y-8 md:gap-y-14 mb-28 md:mb-20">
    <h2 class="text-label font-semibold text-2xl md:text-4xl">Technologies We Use</h2>
    <ul class="flex gap-x-20 max-md:overflow-scroll">
      <li v-for="(technology, index) in technologies" :key="index">
        <img :src="technology" alt="technology logo"/>
      </li>
    </ul>
  </div>
</template>


<script setup>
import useTechnologies from "../composables/components/useTechnologies.js";

const technologies = useTechnologies();
</script>
