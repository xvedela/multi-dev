<template>
  <div :class="work.linearGradient"
       class="flex max-xl:flex-col max-lg:p-4 max-xl:p-8 xl:pt-16 xl:pr-24 gap-y-8 md:gap-x-24 rounded-2xl md:rounded-xl">
    <img :src="work.companyImage" class="xl:w-1/2 max-sm:rounded-xl" :alt="work.companyName + ' logo'" loading="lazy"/>
    <div class="flex flex-col sm:max-xl:items-center sm:max-xl:text-center max-sm:ml-10 md:mt-8 mb-7 xl:mb-20">
      <h2 v-text="work.companyName" class="mb-5 text-2xl sm:max-2xl:text-3xl 2xl:text-4xl font-medium"/>
      <p v-text="work.companyDescription" class="mb-8 text-lg text-[#EEF8FF]"/>
      <a class="w-fit px-8 py-4 rounded-3xl" :class="work.backgroundColor + ' ' + work.textColor"
         :href="work.websiteUrl" target="_blank"
         v-text="'Visit Site'"/>
    </div>
  </div>
</template>

<script setup>
const {work} = defineProps({
  work: {
    required: true,
    type: Object,
  },
});
</script>