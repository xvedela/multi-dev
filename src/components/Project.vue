<template>
  <a :href="project.websiteUrl" target="_blank">
    <img :src="project.projectImage" alt="project image" loading="lazy" class="rounded-2xl transition-transform duration-300 transform-gpu hover:scale-105"/>
  </a>
</template>

<script setup>
const {project} = defineProps({
  project: {
    required: true,
    type: Object,
  },
});
</script>