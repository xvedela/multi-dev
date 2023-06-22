<template>
  <div class="flex flex-col items-center gap-y-8 md:gap-y-14">
    <h2 v-text="heading" class="text-label font-semibold text-2xl md:text-4xl"/>
    <ul class="flex gap-x-20 max-md:overflow-scroll">
      <li v-for="(technology, index) in technologies" :key="index">
        <img :src="technology" alt="technology logo"/>
      </li>
    </ul>
  </div>
</template>


<script setup>
import useTechnologies from "../composables/components/useTechnologies.js";

const {heading, technologies} = useTechnologies();
</script>
