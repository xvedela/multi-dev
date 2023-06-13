<template>
  <i :class="classes"/>
</template>

<script setup>
const {classes} = defineProps({
  classes: {
    required: true,
    type: String,
  },
});
</script>