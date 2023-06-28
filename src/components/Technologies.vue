<template>
  <div class="flex flex-col items-center mb-28 sm:max-2xl:mb-24 2xl:mb-20 mt-20 sm:max-2xl:mt-32 2xl:mt-44">
    <h2 class="text-label font-semibold text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center mb-8 sm:max-2xl:mb-10 2xl:mb-12"
        v-text="heading"/>
    <ul class="hide-scrollbar flex gap-x-20 max-sm:overflow-x-scroll example">
      <li v-for="(technology, index) in technologies" :key="index" class="flex-shrink-0">
        <img :src="technology" alt="technology logo" loading="lazy"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import useTechnologies from "../composables/components/useTechnologies.js";

const {heading, technologies} = useTechnologies();
</script>
